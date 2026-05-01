#!/usr/bin/env node
// Audita las imágenes en public/art/ midiendo dimensiones reales y comparándolas
// contra el ratio recomendado para cada categoría. Reporta:
//  - Mismatches de ratio (imagen no encaja bien en el spot donde se usa)
//  - Archivos pequeños / probablemente baja resolución
//  - Archivos de bajo peso (probablemente baja calidad)
//
// Uso: node scripts/audit-assets.mjs
// Salida: reports/asset-audit.json + tabla en stdout

import { readFileSync, readdirSync, writeFileSync, statSync, mkdirSync, existsSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

// ─── Config ──────────────────────────────────────────────────────────────────

const ART_ROOT = 'public/art'

// Para cada categoría: variantes en las que se renderiza la imagen.
// Cada variante con su ratio target. La imagen ideal cubre todas las variantes.
// Variantes nuevas tras layout refactor: banner/landscape ahora 16:9
const CATEGORY_VARIANTS = {
  characters:     [{ name: 'landscape', ratio: 16 / 9, pixels: [400, 225] },
                   { name: 'banner',    ratio: 16 / 9, pixels: [800, 450] }],
  regions:        [{ name: 'banner',    ratio: 16 / 9, pixels: [800, 450] }],
  factions:       [{ name: 'card',      ratio: 3 / 2,  pixels: [600, 400] },
                   { name: 'banner',    ratio: 16 / 9, pixels: [800, 450] }],
  concepts:       [{ name: 'banner',    ratio: 16 / 9, pixels: [800, 450] }],
  endings:        [{ name: 'card',      ratio: 3 / 2,  pixels: [600, 400] },
                   { name: 'banner',    ratio: 16 / 9, pixels: [800, 450] }],
  timeline:       [{ name: 'banner',    ratio: 16 / 9, pixels: [800, 450] }],
}

const MIN_WIDTH_BY_CATEGORY = {
  characters: 400,
  regions:    800,
  factions:   600,
  concepts:   800,
  endings:    600,
  timeline:   800,
}

const LOW_QUALITY_KB = 30   // < 30 kB → sospechoso
const SEVERE_RATIO_DRIFT = 0.25 // diferencia relativa con el ratio target

// ─── Lectores de dimensiones (sin dependencias) ──────────────────────────────

function readJpegSize(buf) {
  // Salta SOI 0xFFD8
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null
  let i = 2
  while (i < buf.length) {
    if (buf[i] !== 0xff) return null
    let marker = buf[i + 1]
    i += 2
    // Markers sin payload
    if (marker === 0xd8 || marker === 0xd9) continue
    if (marker >= 0xd0 && marker <= 0xd7) continue
    const segLen = buf.readUInt16BE(i)
    // SOF markers (excluye DHT/DAC)
    if (
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf)
    ) {
      const height = buf.readUInt16BE(i + 3)
      const width  = buf.readUInt16BE(i + 5)
      return { width, height }
    }
    i += segLen
  }
  return null
}

function readPngSize(buf) {
  if (buf.toString('ascii', 1, 4) !== 'PNG') return null
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}

function readWebpSize(buf) {
  if (buf.toString('ascii', 0, 4) !== 'RIFF') return null
  if (buf.toString('ascii', 8, 12) !== 'WEBP') return null
  const fourcc = buf.toString('ascii', 12, 16)
  if (fourcc === 'VP8 ') {
    const width  = buf.readUInt16LE(26) & 0x3fff
    const height = buf.readUInt16LE(28) & 0x3fff
    return { width, height }
  }
  if (fourcc === 'VP8L') {
    const b = buf.readUInt32LE(21)
    return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 }
  }
  if (fourcc === 'VP8X') {
    const w = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16))
    const h = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16))
    return { width: w, height: h }
  }
  return null
}

function detectFormat(buf) {
  if (buf.length < 12) return null
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'jpeg'
  if (buf[0] === 0x89 && buf.toString('ascii', 1, 4) === 'PNG') return 'png'
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') return 'webp'
  if (buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46) return 'gif'
  return null
}

function readGifSize(buf) {
  if (buf.toString('ascii', 0, 3) !== 'GIF') return null
  return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) }
}

function readImageSize(path) {
  const buf = readFileSync(path)
  const fmt = detectFormat(buf)
  let info = null
  if (fmt === 'jpeg') info = readJpegSize(buf)
  else if (fmt === 'png') info = readPngSize(buf)
  else if (fmt === 'webp') info = readWebpSize(buf)
  else if (fmt === 'gif') info = readGifSize(buf)
  if (!info) return null
  const ext = extname(path).toLowerCase().replace('.', '')
  const extMatchesFormat = (fmt === 'jpeg' && (ext === 'jpg' || ext === 'jpeg')) || fmt === ext
  return { ...info, format: fmt, extMismatch: !extMatchesFormat }
}

// ─── Análisis ────────────────────────────────────────────────────────────────

function evaluate(file, info, variants, minWidth) {
  const issues = []
  const ratio = info.width / info.height

  // Calcula drift contra cada variante
  const drifts = variants.map(v => {
    const drift = Math.abs(ratio - v.ratio) / v.ratio
    return { variant: v.name, target: v.ratio, drift }
  })
  const worst = drifts.reduce((a, b) => (a.drift > b.drift ? a : b))
  const best  = drifts.reduce((a, b) => (a.drift < b.drift ? a : b))

  if (worst.drift > SEVERE_RATIO_DRIFT) {
    issues.push({
      kind: 'ratio_mismatch',
      severity: worst.drift > 0.5 ? 'high' : 'medium',
      detail: `ratio actual ${ratio.toFixed(2)} vs ${worst.variant} ${worst.target.toFixed(2)} (drift ${(worst.drift * 100).toFixed(0)}%)`,
    })
  }

  if (info.width < minWidth) {
    issues.push({
      kind: 'low_resolution',
      severity: info.width < minWidth * 0.6 ? 'high' : 'medium',
      detail: `width ${info.width}px < min ${minWidth}px`,
    })
  }

  const sizeKb = file.bytes / 1024
  if (sizeKb < LOW_QUALITY_KB) {
    issues.push({
      kind: 'low_filesize',
      severity: sizeKb < 15 ? 'high' : 'medium',
      detail: `${sizeKb.toFixed(1)} kB (probable baja calidad)`,
    })
  }

  return { ratio, drifts: { worst, best }, issues }
}

// ─── Main ────────────────────────────────────────────────────────────────────

const results = []

for (const [category, variants] of Object.entries(CATEGORY_VARIANTS)) {
  const dir = join(ART_ROOT, category)
  if (!existsSync(dir)) continue

  for (const filename of readdirSync(dir).sort()) {
    if (filename.startsWith('.')) continue
    const path = join(dir, filename)
    const stat = statSync(path)
    if (!stat.isFile()) continue

    const id = basename(filename, extname(filename))
    let info = null
    try {
      info = readImageSize(path)
    } catch (e) {
      results.push({
        category, id, filename, path, bytes: stat.size,
        error: `read failed: ${e.message}`,
      })
      continue
    }

    if (!info) {
      results.push({
        category, id, filename, path, bytes: stat.size,
        error: 'no se pudo leer dimensiones (formato no soportado)',
      })
      continue
    }

    const file = { bytes: stat.size }
    const evalResult = evaluate(file, info, variants, MIN_WIDTH_BY_CATEGORY[category])

    if (info.extMismatch) {
      evalResult.issues.push({
        kind: 'extension_mismatch',
        severity: 'medium',
        detail: `archivo es ${info.format} pero extensión es ${extname(filename)}`,
      })
    }
    results.push({
      category, id, filename, path,
      width: info.width, height: info.height,
      format: info.format,
      ratio: +evalResult.ratio.toFixed(3),
      bytes: stat.size,
      kb: +(stat.size / 1024).toFixed(1),
      issues: evalResult.issues,
      worstDrift: +evalResult.drifts.worst.drift.toFixed(3),
    })
  }
}

// Severidad: high > medium > none
const sevRank = { high: 2, medium: 1 }
function maxSeverity(r) {
  if (!r.issues || r.issues.length === 0) return 0
  return Math.max(...r.issues.map(i => sevRank[i.severity] ?? 0))
}

results.sort((a, b) => {
  const sevDiff = maxSeverity(b) - maxSeverity(a)
  if (sevDiff !== 0) return sevDiff
  return (b.worstDrift ?? 0) - (a.worstDrift ?? 0)
})

const flagged = results.filter(r => r.issues && r.issues.length > 0)
const clean   = results.filter(r => !r.issues || r.issues.length === 0)
const errored = results.filter(r => r.error)

// ─── Reporte ─────────────────────────────────────────────────────────────────

console.log(`\n${'═'.repeat(78)}`)
console.log(`AUDITORÍA DE ASSETS — ${results.length} archivos`)
console.log('═'.repeat(78))
console.log(`✅ Sin issues:       ${clean.length}`)
console.log(`⚠️  Con issues:       ${flagged.length}`)
console.log(`❌ Errores lectura:  ${errored.length}\n`)

// Resumen por categoría
const byCategory = {}
for (const r of results) {
  byCategory[r.category] ??= { total: 0, flagged: 0, high: 0 }
  byCategory[r.category].total++
  if (r.issues?.length) {
    byCategory[r.category].flagged++
    if (maxSeverity(r) === 2) byCategory[r.category].high++
  }
}
console.log('Por categoría:')
for (const [cat, s] of Object.entries(byCategory)) {
  console.log(`  ${cat.padEnd(12)} ${s.total} total · ${s.flagged} con issue · ${s.high} graves`)
}

// Top 30 problemas
console.log(`\n${'─'.repeat(78)}\nTOP problemas (orden: severidad, después drift):\n${'─'.repeat(78)}`)
for (const r of flagged.slice(0, 30)) {
  const tags = r.issues.map(i => `[${i.severity[0].toUpperCase()}] ${i.kind}`).join(', ')
  console.log(`${r.category}/${r.id.padEnd(34)} ${String(r.width)}×${String(r.height)} (${r.ratio})  ${r.kb}kB  ${tags}`)
  for (const i of r.issues) console.log(`    └ ${i.detail}`)
}

// Errores
if (errored.length) {
  console.log(`\n❌ Errores de lectura:`)
  for (const e of errored) console.log(`  ${e.path}: ${e.error}`)
}

// Dump JSON
mkdirSync('reports', { recursive: true })
writeFileSync('reports/asset-audit.json', JSON.stringify({
  generatedAt: new Date().toISOString(),
  total: results.length,
  flagged: flagged.length,
  byCategory,
  results,
}, null, 2))
console.log(`\n📄 Reporte completo: reports/asset-audit.json\n`)
