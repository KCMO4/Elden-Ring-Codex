// Después del rename Interregno → Tierras Intermedias, arregla discordancias
// de género/número en adjetivos y verbos adyacentes.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

// Adjetivos singulares masculinos comunes que pueden modificar "Tierras Intermedias"
// y necesitan plural femenino.
// Patrón: "Tierras Intermedias <adj_sg_masc>"  →  "Tierras Intermedias <adj_pl_fem>"
const adjFixes = [
  ['entero',     'enteras'],
  ['fracturado', 'fracturadas'],
  ['dorado',     'doradas'],
  ['actual',     'actuales'],
  ['serio',      'serias'],
  ['oscuro',     'oscuras'],
  ['completo',   'completas'],
  ['mismo',      'mismas'],
  ['propio',     'propias'],
  ['anterior',   'anteriores'],
  ['posterior',  'posteriores'],
  ['caído',      'caídas'],
  ['quebrado',   'quebradas'],
  ['fragmentado','fragmentadas'],
  ['restaurado', 'restauradas'],
  ['profundo',   'profundas'],
  ['cosmológico','cosmológicas'],
  ['mítico',     'míticas'],
  ['eterno',     'eternas'],
  ['original',   'originales'],
  ['vivo',       'vivas'],
  ['muerto',     'muertas'],
]

// Verbos comunes en singular que con "las Tierras Intermedias" como sujeto
// deben ir en plural. Patrón: "Tierras Intermedias [no ]<verbo_sg>"
// Solo capturamos verbos transitivos comunes para evitar falsos positivos
// donde "Tierras Intermedias" es objeto de un verbo cuyo sujeto está antes.
const verbFixes = [
  // entiende → entienden (las Tierras Intermedias no entiende)
  [/(las Tierras Intermedias)( no)? entiende\b/g, '$1$2 entienden'],
  [/(las Tierras Intermedias)( no)? sabe\b/g, '$1$2 saben'],
  [/(las Tierras Intermedias)( no)? puede\b/g, '$1$2 pueden'],
  [/(las Tierras Intermedias)( no)? tiene\b/g, '$1$2 tienen'],
  // ser/estar (cuidado: solo "es" / "está" después de "Tierras Intermedias")
  [/(las Tierras Intermedias) es\b/g, '$1 son'],
  [/(las Tierras Intermedias) está\b/g, '$1 están'],
  [/(las Tierras Intermedias) era\b/g, '$1 eran'],
  [/(las Tierras Intermedias) fue\b/g, '$1 fueron'],
  [/(las Tierras Intermedias) ha sido\b/g, '$1 han sido'],
  [/(las Tierras Intermedias) será\b/g, '$1 serán'],
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

let totalChanges = 0
const files = walk('src')
for (const f of files) {
  const before = readFileSync(f, 'utf8')
  let after = before
  let fc = 0

  // Adj fixes — solo si está pegado a "Tierras Intermedias " seguido del adj
  for (const [sg, pl] of adjFixes) {
    const re = new RegExp(`\\bTierras Intermedias ${sg}\\b`, 'g')
    after = after.replace(re, (m) => { fc++; return `Tierras Intermedias ${pl}` })
  }

  // Verb fixes
  for (const [re, repl] of verbFixes) {
    const before2 = after
    after = after.replace(re, repl)
    if (after !== before2) {
      // Count occurrences
      const matches = before2.match(re)
      if (matches) fc += matches.length
    }
  }

  if (fc > 0) {
    writeFileSync(f, after)
    totalChanges += fc
    console.log(`  ${f}: ${fc} concordancias corregidas`)
  }
}

console.log(`\n✓ ${totalChanges} concordancias corregidas`)
