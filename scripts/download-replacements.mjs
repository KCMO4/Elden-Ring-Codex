// Descarga las imágenes mapeadas en reports/replacement-urls.json
// y reemplaza los archivos en public/art/{categoria}/{id}.{ext}.
//
// Antes de sobrescribir, mueve el original a .trash-art/ por si hay regresión.
//
// Uso:
//   node scripts/download-replacements.mjs reports/replacement-urls.json [--dry-run]
//
// El JSON de entrada espera:
// [
//   { id: 'malenia', category: 'characters', url: 'https://...', notes: '...' },
//   ...
// ]

import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync, statSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'
import { join, extname, basename, dirname } from 'node:path'

const inputFile = process.argv[2]
const dryRun = process.argv.includes('--dry-run')
if (!inputFile) {
  console.error('uso: node scripts/download-replacements.mjs <input.json> [--dry-run]')
  process.exit(1)
}

const items = JSON.parse(readFileSync(inputFile, 'utf8'))
mkdirSync('.trash-art', { recursive: true })
mkdirSync('reports', { recursive: true })

// Detect format from magic bytes
function detectFormat(buf) {
  if (buf.length < 12) return null
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'jpg'
  if (buf[0] === 0x89 && buf.toString('ascii', 1, 4) === 'PNG') return 'png'
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') return 'webp'
  if (buf[0] === 0x47 && buf[1] === 0x49) return 'gif'
  return null
}

function readJpegSize(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null
  let i = 2
  while (i < buf.length) {
    if (buf[i] !== 0xff) return null
    let marker = buf[i + 1]
    i += 2
    if (marker === 0xd8 || marker === 0xd9) continue
    if (marker >= 0xd0 && marker <= 0xd7) continue
    const segLen = buf.readUInt16BE(i)
    if ((marker >= 0xc0 && marker <= 0xc3) ||
        (marker >= 0xc5 && marker <= 0xc7) ||
        (marker >= 0xc9 && marker <= 0xcb) ||
        (marker >= 0xcd && marker <= 0xcf)) {
      return { width: buf.readUInt16BE(i + 5), height: buf.readUInt16BE(i + 3) }
    }
    i += segLen
  }
  return null
}
function readPngSize(buf) {
  if (buf.toString('ascii', 1, 4) !== 'PNG') return null
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}
function readGifSize(buf) {
  if (buf.toString('ascii', 0, 3) !== 'GIF') return null
  return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) }
}
function readWebpSize(buf) {
  if (buf.toString('ascii', 0, 4) !== 'RIFF') return null
  if (buf.toString('ascii', 8, 12) !== 'WEBP') return null
  const fourcc = buf.toString('ascii', 12, 16)
  if (fourcc === 'VP8 ') {
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff }
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

const results = []

async function main() {
for (let i = 0; i < items.length; i++) {
  const it = items[i]
  const { id, category, url, notes } = it
  const prefix = `[${i + 1}/${items.length}]`

  if (!url || url === null) {
    console.log(`${prefix} SKIP   ${category}/${id} — no url${notes ? ' (' + notes + ')' : ''}`)
    results.push({ id, category, status: 'skipped', reason: notes ?? 'no url' })
    continue
  }

  // Build target path. Always start with .jpg; rename after we detect actual format.
  const targetDir = join('public/art', category)
  if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true })

  // Find existing file (any extension)
  let existingPath = null
  for (const ext of ['jpg', 'jpeg', 'png', 'webp', 'gif']) {
    const candidate = join(targetDir, `${id}.${ext}`)
    if (existsSync(candidate)) { existingPath = candidate; break }
  }

  if (dryRun) {
    console.log(`${prefix} DRY    ${category}/${id} ← ${url}`)
    results.push({ id, category, status: 'dry-run', url })
    continue
  }

  // Download to temp
  const tmpPath = join(targetDir, `${id}.tmp`)
  try {
    execSync(
      `curl -sL --max-time 30 -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -e "https://eldenring.wiki.fextralife.com/" -o "${tmpPath}" "${url}"`,
      { stdio: ['ignore', 'ignore', 'pipe'] }
    )
  } catch (e) {
    console.log(`${prefix} FAIL   ${category}/${id} — curl error: ${e.message}`)
    results.push({ id, category, status: 'failed', reason: 'curl error', url })
    continue
  }

  if (!existsSync(tmpPath)) {
    console.log(`${prefix} FAIL   ${category}/${id} — no file written`)
    results.push({ id, category, status: 'failed', reason: 'no file written', url })
    continue
  }

  const buf = readFileSync(tmpPath)
  const fmt = detectFormat(buf)
  const stat = statSync(tmpPath)

  if (!fmt) {
    // probably HTML error page
    const head = buf.slice(0, 200).toString('utf8').replace(/\s+/g, ' ').trim().slice(0, 100)
    console.log(`${prefix} FAIL   ${category}/${id} — not an image (${stat.size} bytes): ${head}`)
    execSync(`rm "${tmpPath}"`)
    results.push({ id, category, status: 'failed', reason: 'not an image', size: stat.size, url })
    continue
  }

  // Read dimensions
  let dims = null
  if (fmt === 'jpg') dims = readJpegSize(buf)
  else if (fmt === 'png') dims = readPngSize(buf)
  else if (fmt === 'gif') dims = readGifSize(buf)
  else if (fmt === 'webp') dims = readWebpSize(buf)

  if (!dims || dims.width < 200) {
    console.log(`${prefix} FAIL   ${category}/${id} — too small: ${dims?.width}x${dims?.height}`)
    execSync(`rm "${tmpPath}"`)
    results.push({ id, category, status: 'failed', reason: 'too small', dims, url })
    continue
  }

  // Move existing to trash
  if (existingPath) {
    const trashDir = join('.trash-art', category)
    if (!existsSync(trashDir)) mkdirSync(trashDir, { recursive: true })
    const trashPath = join(trashDir, basename(existingPath))
    try {
      // If trash has same name, append timestamp
      if (existsSync(trashPath)) {
        const stamp = Date.now()
        renameSync(existingPath, join(trashDir, `${id}.${stamp}${extname(existingPath)}`))
      } else {
        renameSync(existingPath, trashPath)
      }
    } catch (e) {
      // ignore — original still exists, will be overwritten
    }
  }

  // Move tmp to final (always .jpg extension, since the resolver expects .jpg)
  // But if format is actually png, save as .jpg anyway — browser sniffs it. Or save with real ext?
  // The resolver hardcodes .jpg. Save as .jpg regardless.
  const finalPath = join(targetDir, `${id}.jpg`)
  if (existsSync(finalPath)) execSync(`rm "${finalPath}"`)
  renameSync(tmpPath, finalPath)

  const kb = (stat.size / 1024).toFixed(1)
  console.log(`${prefix} OK     ${category}/${id} ${dims.width}x${dims.height} ${kb}kB (${fmt})`)
  results.push({
    id, category, status: 'ok', url, fmt,
    width: dims.width, height: dims.height, kb: +kb,
  })

  // Polite pause
  if (!dryRun) {
    await sleep(400)
  }
}

writeFileSync('reports/download-results.json', JSON.stringify(results, null, 2))

const ok      = results.filter(r => r.status === 'ok').length
const failed  = results.filter(r => r.status === 'failed').length
const skipped = results.filter(r => r.status === 'skipped').length
console.log(`\n${'═'.repeat(60)}`)
console.log(`Total: ${results.length} · OK: ${ok} · Failed: ${failed} · Skipped: ${skipped}`)
console.log(`📄 reports/download-results.json`)
}

main().catch(e => { console.error(e); process.exit(1) })
