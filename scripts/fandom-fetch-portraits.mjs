// Variant of fandom-fetch.mjs optimized for character PORTRAITS / closeups
// rather than wide cinematic shots. Scores candidates by URL pattern + aspect
// ratio, so we end up with face-visible images for character cards.
//
// Usage: node scripts/fandom-fetch-portraits.mjs reports/<input>.json

import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync, unlinkSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'

const inputFile = process.argv[2] ?? 'reports/portraits-input.json'
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
    let marker = buf[i + 1]; i += 2
    if (marker === 0xd8 || marker === 0xd9) continue
    if (marker >= 0xd0 && marker <= 0xd7) continue
    const segLen = buf.readUInt16BE(i)
    if ((marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) ||
        (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf)) {
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
  const out = `reports/.tmp-page-${Date.now()}-${Math.random().toString(36).slice(2,8)}.html`
  const headers = `-H "Accept: text/html" -H "Accept-Language: en-US" -H "Accept-Encoding: identity" -H "Cache-Control: no-cache"`
  try {
    execSync(`curl -sL --max-time 15 -A ${UA} ${headers} -o "${out}" "${shellEscape(url)}"`, { stdio: ['ignore', 'pipe', 'ignore'] })
    const html = readFileSync(out, 'utf8')
    unlinkSync(out)
    if (html.length < 50000) return null
    return html
  } catch (e) {
    try { unlinkSync(out) } catch {}
    return null
  }
}

async function fetchImage(url) {
  const out = `reports/.tmp-img-${Date.now()}-${Math.random().toString(36).slice(2,8)}.bin`
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
  const re = /https?:\/\/static\.wikia\.nocookie\.net\/eldenring\/images\/[a-zA-Z0-9/_%().,~+!*'-]+\.(?:jpg|jpeg|png|webp)/gi
  const matches = [...new Set(html.match(re) ?? [])]
  return matches
    .filter(u => !/site-logo|favicon|sidebar|background|HUD_Icon|Map_Icon|Stat_Icon|ER_Icon|achievement/i.test(u))
    .filter(u => !/scale-to-/i.test(u))
    .filter(u => !/_(?:18|25|30|40|50|55|60|80|100|120|150|200|300)px/i.test(u))
}

/* Score an image candidate. Higher = better. Favors in-game NPC full-body
   screenshots (showing costume + character features) over flat face renders
   from the character creator. Also demotes scenes that obscure the character. */
function scoreCandidate(url, width, height) {
  let score = Math.sqrt(width * height)  // diagonal as base
  const u = url.toLowerCase()

  // BIG DEMOTE: flat face renders from char creator — show no costume / setting
  if (/character_face|character%20face/.test(u))  score *= 0.15
  if (/character_render|character%20render/.test(u))  score *= 0.30

  // BOOSTS: NPC in-game gameplay screenshots (show full costume + pose)
  if (/_npc_(?!closeup)/.test(u))               score *= 3.0
  // Closeups still useful but second-tier (face-only, costume implied)
  if (/closeup/.test(u))                        score *= 1.5
  if (/portrait/.test(u))                       score *= 2.0
  if (/full[_-]?body|fullbody|render_/.test(u)) score *= 2.5

  // DEMOTES: scenes that don't focus on the character
  if (/mourning|dying|dead|corpse/.test(u))    score *= 0.15
  if (/captured|cocoon|trapped/.test(u))       score *= 0.25
  if (/battle|combat|attack|fight/.test(u))    score *= 0.55
  if (/cinematic|cutscene|cs_/.test(u))        score *= 0.65
  if (/scene_|panorama|location/.test(u))      score *= 0.40
  if (/map[_./]/.test(u))                       score *= 0.10
  if (/leaf|grass|item_|spell_/.test(u))       score *= 0.20

  // Aspect ratio: STRONGLY prefer portrait (= full-body NPC shots) over
  // square (= face-only renders) and over landscape (= scenes)
  const ratio = width / height
  let aspectFactor
  if (ratio < 0.85)        aspectFactor = 1.4   // portrait — full body, ideal
  else if (ratio < 1.15)   aspectFactor = 0.7   // square — face render or icon
  else if (ratio < 1.5)    aspectFactor = 0.9   // 4:3 / 3:2 — okay
  else                     aspectFactor = 0.55  // landscape — wide scene
  score *= aspectFactor

  // Don't reward ridiculous mini icons (already filtered, but extra safety)
  if (width < 350 && height < 350) score *= 0.5

  return score
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
    if (imgs.length === 0) continue

    const candidates = []
    for (const imgUrl of imgs.slice(0, 12)) {
      const img = await fetchImage(imgUrl)
      if (!img) continue
      const fmt = detectFormat(img.buf)
      if (!fmt) { try { unlinkSync(img.path) } catch {}; continue }
      const dims = getDims(img.buf, fmt)
      if (!dims || (dims.width < 350 && dims.height < 350)) {
        try { unlinkSync(img.path) } catch {}; continue
      }
      const score = scoreCandidate(imgUrl, dims.width, dims.height)
      candidates.push({ url: imgUrl, fmt, score, ...dims, tmpPath: img.path })
    }
    if (candidates.length === 0) { await sleep(500); continue }
    candidates.sort((a, b) => b.score - a.score)
    if (debug) {
      console.log('  top candidates:')
      candidates.slice(0, 3).forEach((c) => {
        console.log(`    ${c.score.toFixed(0)}  ${c.width}x${c.height}  ${c.url.split('/').pop()}`)
      })
    }
    const best = candidates[0]
    for (let i = 1; i < candidates.length; i++) {
      try { unlinkSync(candidates[i].tmpPath) } catch {}
    }
    return { ...best, fandomPage: pageUrl }
  }
  return null
}

async function main() {
  const results = []
  console.log(`Portrait fetch on ${items.length} items...`)
  for (let i = 0; i < items.length; i++) {
    const it = items[i]
    const result = await tryEntity(it, process.env.DEBUG === '1')
    const prefix = `[${i+1}/${items.length}]`
    if (result) {
      const targetDir = `public/art/${it.category}`
      if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true })
      const finalPath = `${targetDir}/${it.id}.jpg`
      try { renameSync(result.tmpPath, finalPath) } catch (e) {
        console.log(`${prefix} ✗ rename failed: ${e.message}`)
        continue
      }
      console.log(`${prefix} ✓ ${it.category}/${it.id} ← ${result.width}x${result.height} (${result.fmt}, score ${result.score.toFixed(0)})`)
      results.push({ id: it.id, category: it.category, ...result, tmpPath: undefined })
    } else {
      console.log(`${prefix} · ${it.category}/${it.id} — no portrait match`)
      results.push({ id: it.id, category: it.category, found: false })
    }
    await sleep(300)
  }

  writeFileSync('reports/portraits-fetch-results.json', JSON.stringify(results, null, 2))
  const ok = results.filter(r => r.url).length
  console.log(`\n📄 ${ok}/${results.length} fetched\n`)
}

main().catch(e => { console.error(e); process.exit(1) })
