// Rename "Árbol del Inmenso" / "Erdtree" (visible text) → "Árbol Áureo"
// (the official Spanish translation by FromSoft).
//
// Preserves lowercase IDs/slugs ('erdtree', 'minor-erdtrees') because the
// regex only matches the capitalized form in visible strings.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const s = statSync(p)
    if (s.isDirectory()) walk(p, out)
    else if (/\.(ts|tsx|js|jsx)$/.test(name)) out.push(p)
  }
  return out
}

const files = walk('src')

let totalChanges = 0
let touchedFiles = 0

for (const file of files) {
  const orig = readFileSync(file, 'utf8')
  let next = orig

  // Plurals first to avoid double-replace
  next = next.replace(/Erdtrees/g, 'Árboles Áureos')
  // Singular capitalized "Erdtree" (preserves lowercase IDs)
  next = next.replace(/Erdtree/g, 'Árbol Áureo')
  // Existing in-house translation → official one
  next = next.replace(/Árbol del [Ii]nmenso/g, 'Árbol Áureo')
  next = next.replace(/Arbol del [Ii]nmenso/g, 'Árbol Áureo')

  if (next !== orig) {
    const changes = (orig.match(/Erdtrees|Erdtree|Árbol del [Ii]nmenso|Arbol del [Ii]nmenso/g) || []).length
    writeFileSync(file, next)
    touchedFiles++
    totalChanges += changes
    console.log(`  ${file}: ${changes} replacements`)
  }
}

console.log(`\nTotal: ${totalChanges} replacements across ${touchedFiles} files`)
