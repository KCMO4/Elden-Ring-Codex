// Para cada entidad pixelada, prueba fetchear su pagina Fandom y extraer la
// primera imagen principal (no logo). Si la imagen es >= 600px ancho la
// considera buena, descarga y guarda en public/art/<cat>/<id>.jpg.
//
// Uso: node scripts/fandom-fetch.mjs reports/pixelated-targets.json

import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync, statSync, unlinkSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'
import { join, basename } from 'node:path'

const inputFile = process.argv[2] ?? 'reports/pixelated-targets.json'
const items = JSON.parse(readFileSync(inputFile, 'utf8'))

const UA = '"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"'

function detectFormat(buf) {
  if (buf.length < 12) return null
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'jpg'
  if (buf[0] === 0x89 && buf.toString('ascii', 1, 4) === 'PNG') return 'png'
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') return 'webp'
  return null
}
function readPngSize(buf) { return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) } }
function readJpegSize(buf) {
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
function readWebpSize(buf) {
  const fourcc = buf.toString('ascii', 12, 16)
  if (fourcc === 'VP8 ') return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff }
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
function getDims(buf, fmt) {
  if (fmt === 'jpg') return readJpegSize(buf)
  if (fmt === 'png') return readPngSize(buf)
  if (fmt === 'webp') return readWebpSize(buf)
  return null
}

function shellEscape(s) { return s.replace(/"/g, '\\"') }

async function fetchPage(url) {
  const out = `/tmp/fp-${Date.now()}-${Math.random().toString(36).slice(2,8)}.html`
  const headers = `-H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" -H "Accept-Language: en-US,en;q=0.5" -H "Accept-Encoding: identity" -H "Cache-Control: no-cache"`
  try {
    execSync(`curl -sL --max-time 15 -A ${UA} ${headers} -o "${out}" "${shellEscape(url)}"`, { stdio: ['ignore', 'pipe', 'ignore'] })
    const html = readFileSync(out, 'utf8')
    unlinkSync(out)
    if (html.length < 50000) return null  // likely cloudflare challenge or 404
    return html
  } catch (e) {
    try { unlinkSync(out) } catch {}
    return null
  }
}

async function fetchImage(url) {
  const out = `/tmp/img-${Date.now()}-${Math.random().toString(36).slice(2,8)}.bin`
  try {
    execSync(`curl -sL --max-time 15 -A ${UA} -o "${out}" "${shellEscape(url)}"`, { stdio: ['ignore', 'pipe', 'ignore'] })
    const buf = readFileSync(out)
    return { path: out, buf }
  } catch (e) {
    try { unlinkSync(out) } catch {}
    return null
  }
}

function extractFandomImages(html) {
  // Find all wikia.nocookie.net image URLs (handle URL-encoded chars like %28 %29)
  const re = /https?:\/\/static\.wikia\.nocookie\.net\/eldenring\/images\/[a-zA-Z0-9/_%().,~+!*'-]+\.(?:jpg|jpeg|png|webp)/gi
  const matches = [...new Set(html.match(re) ?? [])]
  // Skip site-logo, icon-related, smaller transformed versions, scale-to URLs
  return matches
    .filter(u => !/site-logo|favicon|sidebar|background|HUD_Icon|Map_Icon|Stat_Icon|ER_Icon/i.test(u))
    .filter(u => !/scale-to-/i.test(u))  // these are thumbnails
    .filter(u => !/_(?:18|25|30|40|50|55|60|80|100|120|150|200|300)px/i.test(u))
}

async function tryEntity(it, debug = false) {
  const { id, category, fandomNames } = it
  for (const name of fandomNames) {
    const pageUrl = `https://eldenring.fandom.com/wiki/${name}`
    const html = await fetchPage(pageUrl)
    if (debug) console.log(`  fetchPage(${name}) → html.length=${html?.length ?? 'null'}`)
    if (!html) continue
    if (html.includes('noarticletext') || html.includes('There is currently no text in this page')) continue
    const imgs = extractFandomImages(html)
    if (debug) console.log(`  extracted ${imgs.length} images`)
    if (imgs.length === 0) continue
    // Try up to 8 images, prefer the LARGEST one (avoid 500x500 closeups when HQ key art exists)
    const candidates = []
    for (const imgUrl of imgs.slice(0, 8)) {
      const img = await fetchImage(imgUrl)
      if (debug) console.log(`  fetchImage → ${img ? img.buf.length + ' bytes' : 'null'} for ${imgUrl}`)
      if (!img) continue
      const fmt = detectFormat(img.buf)
      if (!fmt) { try { unlinkSync(img.path) } catch {}; continue }
      const dims = getDims(img.buf, fmt)
      if (debug) console.log(`  fmt=${fmt} dims=${dims?.width}x${dims?.height}`)
      if (!dims || (dims.width < 500 && dims.height < 500)) { try { unlinkSync(img.path) } catch {}; continue }
      candidates.push({ url: imgUrl, fmt, ...dims, tmpPath: img.path })
    }
    if (candidates.length === 0) {
      await sleep(500)
      continue
    }
    // Pick the candidate with the largest pixel area
    candidates.sort((a, b) => (b.width * b.height) - (a.width * a.height))
    const best = candidates[0]
    // Cleanup non-best tmp files
    for (let i = 1; i < candidates.length; i++) {
      try { unlinkSync(candidates[i].tmpPath) } catch {}
    }
    return { ...best, fandomPage: pageUrl }
  }
  return null
}

async function main() {
  const results = []
  console.log(`Fandom-fetch on ${items.length} items...`)
  for (let i = 0; i < items.length; i++) {
    const it = items[i]
    const result = await tryEntity(it, process.env.DEBUG === '1')
    const prefix = `[${i+1}/${items.length}]`
    if (result) {
      // Move to public/art/<category>/<id>.jpg
      const targetDir = `public/art/${it.category}`
      if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true })
      const oldPath = `${targetDir}/${it.id}.jpg`
      // Move old to trash
      if (existsSync(oldPath)) {
        const trashDir = `.trash-art/${it.category}`
        if (!existsSync(trashDir)) mkdirSync(trashDir, { recursive: true })
        let trashPath = `${trashDir}/${it.id}.jpg`
        if (existsSync(trashPath)) trashPath = `${trashDir}/${it.id}.${Date.now()}.jpg`
        try { renameSync(oldPath, trashPath) } catch {}
      }
      const finalPath = oldPath
      renameSync(result.tmpPath, finalPath)
      console.log(`${prefix} ✓ ${it.category}/${it.id} ← ${result.width}x${result.height} (${result.fmt})`)
      results.push({ id: it.id, category: it.category, ...result, tmpPath: undefined })
    } else {
      console.log(`${prefix} · ${it.category}/${it.id} — Fandom no HQ match`)
      results.push({ id: it.id, category: it.category, found: false })
    }
    await sleep(300)
  }

  writeFileSync('reports/fandom-fetch-results.json', JSON.stringify(results, null, 2))
  const ok = results.filter(r => r.url).length
  console.log(`\n📄 ${ok}/${results.length} fixed via Fandom\n`)
}

main().catch(e => { console.error(e); process.exit(1) })
