// Upscale all images currently below 1080p in either dimension to ≥1080p
// using Real-ESRGAN (binary in tools/). Determines the proper scale factor
// per image (2x or 4x) and writes back the original path as .jpg.
//
// Uso: node scripts/upscale-batch.mjs

import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync, unlinkSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { join } from 'node:path'

const BIN = 'tools\\realesrgan-ncnn-vulkan.exe'
const MODEL = 'realesrgan-x4plus'

function dims(p) {
  if (!existsSync(p)) return null
  const buf = readFileSync(p)
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2
    while (i < buf.length) {
      if (buf[i] !== 0xff) return null
      let m = buf[i+1]; i += 2
      if (m === 0xd8 || m === 0xd9) continue
      if (m >= 0xd0 && m <= 0xd7) continue
      const sl = buf.readUInt16BE(i)
      if ((m>=0xc0&&m<=0xc3)||(m>=0xc5&&m<=0xc7)||(m>=0xc9&&m<=0xcb)||(m>=0xcd&&m<=0xcf)) {
        return [buf.readUInt16BE(i+5), buf.readUInt16BE(i+3)]
      }
      i += sl
    }
  }
  if (buf[0] === 0x89) return [buf.readUInt32BE(16), buf.readUInt32BE(20)]
  if (buf.toString('ascii',0,4) === 'RIFF') {
    const fc = buf.toString('ascii',12,16)
    if (fc==='VP8 ') return [buf.readUInt16LE(26)&0x3fff, buf.readUInt16LE(28)&0x3fff]
    if (fc==='VP8L') { const b = buf.readUInt32LE(21); return [(b&0x3fff)+1, ((b>>14)&0x3fff)+1] }
    if (fc==='VP8X') return [1+(buf[24]|(buf[25]<<8)|(buf[26]<<16)), 1+(buf[27]|(buf[28]<<8)|(buf[29]<<16))]
  }
  return null
}

function pickScale(w, h) {
  const max = Math.max(w, h)
  if (max >= 540) return 2  // 540 * 2 = 1080
  return 4  // 500 * 4 = 2000
}

const audit = JSON.parse(readFileSync('reports/asset-audit.json', 'utf8'))
const targets = audit.results.filter(r => !r.error && r.width < 1080 && r.height < 1080)

console.log(`Upscaling ${targets.length} images...`)
mkdirSync('tools/up-tmp', { recursive: true })

const results = []
for (let i = 0; i < targets.length; i++) {
  const t = targets[i]
  const inputPath = `public/art/${t.category}/${t.id}.jpg`
  const tmpOut = `tools/up-tmp/${t.id}.png`
  const scale = pickScale(t.width, t.height)
  const prefix = `[${i+1}/${targets.length}]`

  if (!existsSync(inputPath)) {
    console.log(`${prefix} SKIP ${t.category}/${t.id} (file missing)`)
    continue
  }

  /* Use forward-slashed paths but Windows backslash for the binary so that
     cmd.exe (which execSync uses by default on Win32) can invoke it. */
  const winInput = inputPath.replace(/\//g, '\\')
  const winOut = tmpOut.replace(/\//g, '\\')
  try {
    execSync(`${BIN} -i "${winInput}" -o "${winOut}" -s ${scale} -n ${MODEL}`, {
      stdio: ['ignore', 'ignore', 'pipe'],
    })
  } catch (e) {
    /* realesrgan writes progress to stderr; if no output file was produced,
       treat as a real failure. Otherwise the stderr noise is harmless. */
    if (!existsSync(tmpOut)) {
      console.log(`${prefix} FAIL ${t.category}/${t.id}: ${((e.stderr ?? e.message) ?? '').toString().slice(0,150)}`)
      continue
    }
  }

  const newDims = dims(tmpOut)
  if (!newDims || newDims[0] < 1080 && newDims[1] < 1080) {
    console.log(`${prefix} SMALL ${t.category}/${t.id} → ${newDims?.[0]}x${newDims?.[1]} (still <1080)`)
    try { unlinkSync(tmpOut) } catch {}
    continue
  }

  // Replace original with new upscaled (saved as .jpg per resolver convention)
  renameSync(tmpOut, inputPath)
  console.log(`${prefix} ✓ ${t.category}/${t.id} ${t.width}x${t.height} → ${newDims[0]}x${newDims[1]} (${scale}x)`)
  results.push({ id: t.id, category: t.category, before: [t.width, t.height], after: newDims, scale })
}

writeFileSync('reports/upscale-results.json', JSON.stringify(results, null, 2))
console.log(`\n📄 ${results.length}/${targets.length} upscaled → reports/upscale-results.json`)
