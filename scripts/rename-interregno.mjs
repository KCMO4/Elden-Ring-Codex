// Renombra todas las ocurrencias de "Interregno" → "Tierras Intermedias"
// en src/, manejando los artículos castellanos para preservar concordancia.
//
// Ejecutar: node scripts/rename-interregno.mjs

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

// Orden importa: patrones más específicos primero.
// "Interregno" es masculino singular → "Tierras Intermedias" es femenino plural,
// por eso cambiamos también los artículos y demostrativos que lo preceden.
const replacements = [
  // Contracciones del + Interregno
  [/\bdel Interregno\b/g, 'de las Tierras Intermedias'],
  [/\bdel interregno\b/g, 'de las tierras intermedias'],
  // Contracciones al + Interregno
  [/\bal Interregno\b/g, 'a las Tierras Intermedias'],
  [/\bal interregno\b/g, 'a las tierras intermedias'],
  // Artículos definidos
  [/\bel Interregno\b/g, 'las Tierras Intermedias'],
  [/\bel interregno\b/g, 'las tierras intermedias'],
  // Indefinido
  [/\bun Interregno\b/g, 'unas Tierras Intermedias'],
  [/\bun interregno\b/g, 'unas tierras intermedias'],
  // Demostrativos
  [/\beste Interregno\b/g, 'estas Tierras Intermedias'],
  [/\beste interregno\b/g, 'estas tierras intermedias'],
  [/\bese Interregno\b/g, 'esas Tierras Intermedias'],
  [/\bese interregno\b/g, 'esas tierras intermedias'],
  [/\baquel Interregno\b/g, 'aquellas Tierras Intermedias'],
  [/\baquel interregno\b/g, 'aquellas tierras intermedias'],
  // Cuantificadores
  [/\btodo el Interregno\b/g, 'todas las Tierras Intermedias'],
  [/\btodo el interregno\b/g, 'todas las tierras intermedias'],
  // Posesivos comunes
  [/\bnuestro Interregno\b/g, 'nuestras Tierras Intermedias'],
  [/\bnuestro interregno\b/g, 'nuestras tierras intermedias'],
  [/\bsu Interregno\b/g, 'sus Tierras Intermedias'],
  // Catch-all: el sustantivo solo (después de los específicos para no romper)
  [/\bInterregno\b/g, 'Tierras Intermedias'],
  [/\binterregno\b/g, 'tierras intermedias'],
  // Mayúsculas (UPPERCASE en titles/headers)
  [/\bINTERREGNO\b/g, 'TIERRAS INTERMEDIAS'],
]

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || name === 'node_modules') continue
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) out.push(...walk(full))
    else if (['.ts', '.tsx', '.js', '.mjs'].includes(extname(name))) out.push(full)
  }
  return out
}

const files = walk('src')
let totalChanges = 0
let filesChanged = 0
const samples = []

for (const f of files) {
  const before = readFileSync(f, 'utf8')
  let after = before
  let fileChanges = 0
  for (const [re, repl] of replacements) {
    after = after.replace(re, (match) => {
      fileChanges++
      if (samples.length < 30) samples.push(`${f}: "${match}" → "${repl}"`)
      return repl
    })
  }
  if (fileChanges > 0) {
    writeFileSync(f, after)
    filesChanged++
    totalChanges += fileChanges
    console.log(`  ${f}: ${fileChanges} reemplazos`)
  }
}

console.log(`\n✓ ${totalChanges} reemplazos en ${filesChanged} archivos`)
console.log('\nPrimeras muestras:')
for (const s of samples.slice(0, 8)) console.log('  ' + s)
