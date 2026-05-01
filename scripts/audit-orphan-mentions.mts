/**
 * Audita "menciones huérfanas": nombres propios capitalizados en el deep lore
 * que NO tienen entrada propia en el codex.
 *
 * No es un auditor canónico — no entiende español ni distingue inicio de
 * oración de nombre propio. Aplica heurística: extrae palabras capitalizadas
 * que aparecen ≥2 veces, filtra las que ya tienen entrada (por nombre o tag),
 * filtra palabras de inicio común, y reporta el resto ordenado por frecuencia.
 *
 * Uso: npx tsx scripts/audit-orphan-mentions.mts
 * Salida: reports/orphan-mentions.json + tabla en stdout
 */

import { writeFileSync, mkdirSync } from 'node:fs'
import { charactersData } from '../src/data/characters'
import { factionsData } from '../src/data/factions'
import { regionsData } from '../src/data/regions'
import { glossaryData } from '../src/data/glossary'
import { timelineData } from '../src/data/timeline'
import { endingsData } from '../src/data/endings'
import type { DeepEntity, RichBlock, RichInline } from '../src/data/types'

/* ───────────────────────────── Index of known names ──────────────────────── */

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim()
}

const knownNames = new Set<string>()
function register(...names: (string | undefined)[]) {
  for (const n of names) {
    if (!n) continue
    knownNames.add(normalize(n))
    /* Register first word of multi-word names too — "Black Knife Tiche"
       indexes "Tiche", and "Queen Marika the Eternal" indexes "Marika". */
    const parts = n.split(/[\s,()]+/).filter((p) => p.length > 2)
    for (const p of parts) knownNames.add(normalize(p))
  }
}

for (const c of charactersData) {
  register(c.id, c.slug, c.name)
  for (const t of c.tags) register(t)
}
for (const f of factionsData) {
  register(f.id, f.slug, f.name)
  for (const m of f.keyMembers ?? []) register(m)
}
for (const r of regionsData) register(r.id, r.slug, r.name, r.mainFaction)
for (const g of glossaryData) {
  register(g.id, g.slug, g.term)
  for (const t of g.related) register(t)
}
for (const t of timelineData) register(t.id, t.slug, t.title)
for (const e of endingsData) register(e.id, e.slug, e.name, e.whoLeads)

/* Words that get capitalized as sentence/paragraph starters or section labels
   in our prose, but are not proper-noun candidates. */
const noiseWords = new Set([
  // Section headers / labels
  'resumen','origen','funcion','funciones','estado','crisis','geografia','geografía',
  'historia','consecuencia','consecuencias','manifestaciones','mecanica','mecánica',
  'naturaleza','simbolismo','significado','interpretacion','interpretación',
  'doctrina','tragedia','memoria','liturgia','infraestructura','operación','operacion',
  'estructura','cosmología','cosmologia','teología','teologia','política','politica',
  'filosofía','filosofia','identidad','dinastía','dinastia','linaje','herencia',
  'lectura','analisis','análisis','sintesis','síntesis','epílogo','epilogo','prólogo','prologo',
  // Sentence-starting common words
  'aquellos','aquellas','aquel','aquella','aquello','quienes','cuanto','cuantos',
  'cuanta','cuantas','cuánto','cuántos','cuánta','cuántas','algun','algunos','algunas',
  'algo','alguien','nadie','nada','algunos','algunas','muchos','muchas','varios','varias',
  'cierto','ciertos','ciertas','dicho','dicha','dichos','dichas','tan','tanto','tanta',
  'esto','esta','este','estas','estos','eso','esa','ese','esas','esos','solo','solas',
  // Verbs at sentence start
  'existen','existe','existió','existieron','vive','vivió','vivieron','viven',
  'tuvo','tuvieron','tiene','tienen','sabe','saben','supo','supieron',
  'conoce','conocen','conocía','conocían','llega','llegan','llegó','llegaron',
  'hizo','hicieron','hace','hacen','haga','hagan','sufrió','sufrieron',
  'mata','matan','mató','mataron','muere','mueren','murió','murieron',
  'es','son','era','eran','fue','fueron','sera','será','serán','seran',
  'esta','están','estan','estaba','estaban','estuvo','estuvieron','estuvo',
  'puede','pueden','podía','podían','pudo','pudieron','podra','podrá','podrán',
  'debe','deben','debía','debían','debió','debieron','debera','deberá','deberán',
  'queda','quedan','quedó','quedaron','sigue','siguen','siguió','siguieron',
  'parece','parecen','parecía','parecían','parecio','pareció','parecieron',
  'aparece','aparecen','aparecía','aparecían','apareció','aparecieron',
  'sigue','siguen','siguió','siguieron','perdura','perduran','perduró','perduraron',
  // Connectors at sentence start
  'aunque','mientras','cuando','desde','hasta','antes','despues','después','luego',
  'entonces','finalmente','primero','segundo','tercero','después','antes','también',
  'tampoco','asimismo','ademas','además','sin embargo','quiza','quizá','quizás',
  // Common phrase parts that get capitalized
  'bajo','dentro','fuera','sobre','encima','debajo','frente','detras','detrás',
  'segun','según','contra','entre','tras','durante','mediante','hacia',
  // Generic descriptive words capitalized in titles
  'gran','grandes','pequeno','pequeña','pequeñas','pequeños','mayor','menor','mayores','menores',
  'primer','primera','primeros','primeras','ultimo','último','última','últimos','últimas',
  'nuevo','nueva','viejo','vieja','antiguo','antigua','antiguos','antiguas',
  'verdadero','verdadera','falso','falsa','santo','santa','sagrado','sagrada','divino','divina',
  'oscuro','oscura','dorado','dorada','dorados','doradas','negro','negra','blanco','blanca',
  'roto','rota','quebrado','quebrada','infinito','infinita','eterno','eterna','eternal',
  'todopoderoso','poderoso','poderosa','infame','supremo','suprema',
  // Common in-game vocab
  'tarnished','lord','lady','sir','dios','diosa','dioses','diosas','deidad','deidades',
  'cosmos','mundo','poder','muerte','vida','amor','fe','odio','tiempo','espacio',
  'caos','luz','oscuridad','llama','sangre','luna','sol','estrella','río','rio',
  'ano','era','epoca','época','siglo','dia','día','noche','manana','mañana','tarde',
  'semana','minuto','hora','momento','instante','razón','razon','lógica','logica',
  'norte','sur','este','oeste','arriba','abajo','dentro','fuera','antes','despues',
  'guerra','batalla','combate','asedio','victoria','derrota','venganza','gloria','vergüenza','verguenza',
  'paz','guerra','tregua','alianza','rebelion','rebelión','traición','traicion','lealtad',
  'rito','ritual','ritos','rituales','ceremonia','sacramento','sacramentos','liturgia','liturgias',
  'palabra','silencio','grito','susurro','sonido','voz','canto','plegaria','oracion','oración','rezo',
  'rey','reina','principe','príncipe','princesa','noble','plebeyo','siervo','esclavo','esclava',
  'caballero','caballera','soldado','guerrero','guerrera','paladin','paladín','sacerdote','sacerdotisa',
  'mago','maga','hechicero','hechicera','brujo','bruja','adivino','adivina','vidente',
  'lectora','lector','escritor','escritora','poeta','poetisa','filósofo','filosofo','filósofa','filosofa',
  'mapa','mapas','sitio','sitios','torre','torres','templo','templos','altar','altares','santuario','santuarios',
  'castillo','castillos','fortaleza','fortalezas','muralla','murallas','murada','murado',
  'palacio','palacios','catedral','catedrales','iglesia','iglesias','basilica','basílica','monasterio','convento',
  'forja','forjas','herrero','herrera','maestra','maestro','aprendiz','aprendiza','discipulo','discípulo','discipula','discípula',
  'mausoleo','mausoleos','cripta','criptas','sarcófago','sarcofago','tumba','tumbas','catacumba','catacumbas',
  'arma','armas','espada','espadas','hacha','hachas','lanza','lanzas','arco','arcos','flecha','flechas','daga','dagas',
  'escudo','escudos','armadura','armaduras','casco','cascos','yelmo','yelmos','guantelete','guanteletes',
  'consagrado','consagrada','consagrados','consagradas','consagración','consagracion',
  'recusante','recusantes','recusación','recusacion','traidor','traidora','traidores','traidoras',
  'tras','dentro','fuera','encima','debajo','frente','aparte','despues',
  'durante','mediante','contra','entre','hasta','desde','según','segun','según','segun',
  'subterranean','shunning','grounds','deeproot','depths','storm','hawk','jar','bairn','roundtable','hold','divina','divino',
  'maestra','dinastía','dinastia','torre','divina','recusante','espectral','consagrado',
  // Specific "Skill", "Resumen", section markers from RichBlock headings
  'skill','resumen','origen','aquellos','cuántos','cuántas','cuánta','cuanto','cuanta','cuantas','cuantos',
  // Pronouns / determiners often appearing mid-sentence after lowercase
  'sus','cada','que','cual','cuál','quién','quien','quienes','quiénes','otros','otras','algunos','algunas',
  'pero','aunque','tampoco','tambien','también','asimismo','ademas','además','sin','con','por','para',
  'hombre','mujer','niño','niña','niños','niñas','joven','jovenes','jóvenes',
  'hoy','ayer','mañana','manana','siempre','nunca','jamás','jamas','quizás','quizas',
  // Verbs that escaped (3rd person sg/pl conjugations starting with capital)
  'conserva','conocía','conocia','conoció','conocio','conocieron','sufre','sufrió','sufren','sufrieron',
  'logra','logran','logró','logro','lograron','crea','crean','creó','creo','crearon',
  'asimismo','aparte','enfrente','detras','detrás','adelante','atras','atrás',
  // Generic objects of in-game vocab (multi-word but generic)
  'cristal','estacas','crematorios','catacumbas','mausoleos','glintstones','torrent',
])

/* ───────────────────────────── Walk the deep lore ────────────────────────── */

const allEntities: DeepEntity[] = [
  ...charactersData,
  ...factionsData,
  ...regionsData,
  ...glossaryData,
  ...timelineData,
  ...endingsData,
] as DeepEntity[]

/** Extract plain text from a RichInline node. */
function inlineText(n: RichInline): string {
  if (typeof n === 'string') return n
  if (n.type === 'em' || n.type === 'strong') return n.text
  if (n.type === 'link') return n.label
  return ''
}

function blockText(b: RichBlock): string {
  if (b.type === 'paragraph') return b.children.map(inlineText).join(' ')
  if (b.type === 'heading') return b.text
  if (b.type === 'quote') return b.text + ' ' + (b.attribution ?? '')
  if (b.type === 'list') return b.items.flat().map(inlineText).join(' ')
  return ''
}

/** All deep-lore prose for a single entity, concatenated. */
function entityProse(e: any): string {
  const parts: string[] = []
  /* deepLore is a RichBlock[] */
  if (Array.isArray(e.deepLore)) for (const b of e.deepLore) parts.push(blockText(b))
  /* Buckets are string[] */
  for (const k of ['confirmed','inferred','theories','ambiguous']) {
    if (Array.isArray(e[k])) parts.push((e[k] as string[]).join(' '))
  }
  /* Plain string fields */
  for (const k of ['summary','description','what','belief','whyMatters','tragedy','theme','historical','hiddenTragedy','timelineRelation','consequence','meaning','definition','deepDive','poeticIntro']) {
    if (typeof e[k] === 'string') parts.push(e[k])
  }
  /* Lore arrays in timeline */
  if (Array.isArray(e.lore)) parts.push((e.lore as string[]).join(' '))
  return parts.join(' ')
}

/** Extract candidate proper-noun mentions: capitalized words ≥3 chars,
   ONLY when preceded by a lowercase word (mid-sentence) — this avoids
   sentence-starts and section labels which are common false positives. */
function extractMentions(text: string): Map<string, number> {
  const out = new Map<string, number>()
  /* Positive lookbehind: requires the word before to be a lowercase word.
     "X dice que Margit huye" → captures "Margit".
     "Margit huye." (sentence start) → not captured. */
  const re = /(?<=[a-záéíóúñü] )([A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,}(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,}){0,3})/g
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    const phrase = m[1]
    out.set(phrase, (out.get(phrase) ?? 0) + 1)
  }
  return out
}

const mentionCount = new Map<string, number>()
const mentionEntities = new Map<string, Set<string>>() // mention → which entities mention it

for (const e of allEntities) {
  const text = entityProse(e)
  const local = extractMentions(text)
  for (const [phrase, count] of local) {
    mentionCount.set(phrase, (mentionCount.get(phrase) ?? 0) + count)
    if (!mentionEntities.has(phrase)) mentionEntities.set(phrase, new Set())
    mentionEntities.get(phrase)!.add((e as any).id ?? (e as any).slug ?? '')
  }
}

/* ───────────────────────────── Filter and report ─────────────────────────── */

interface Orphan {
  mention: string
  count: number
  mentionedIn: string[]
}

const orphans: Orphan[] = []
for (const [mention, count] of mentionCount) {
  if (count < 2) continue
  const norm = normalize(mention)
  if (noiseWords.has(norm)) continue
  if (knownNames.has(norm)) continue
  /* Skip if every word of the phrase is either known or noise — that means
     the phrase is "[known word] [known word]" with no novel proper noun. */
  const parts = mention.split(/\s+/)
  const allKnownOrNoise = parts.every((p) => {
    const np = normalize(p)
    return knownNames.has(np) || noiseWords.has(np)
  })
  if (allKnownOrNoise) continue
  orphans.push({
    mention,
    count,
    mentionedIn: [...(mentionEntities.get(mention) ?? [])].slice(0, 5),
  })
}

orphans.sort((a, b) => b.count - a.count)

/* Categorize: high-priority (≥5 mentions) vs medium (3-4) vs low (2). */
const high = orphans.filter((o) => o.count >= 5)
const medium = orphans.filter((o) => o.count >= 3 && o.count < 5)
const low = orphans.filter((o) => o.count === 2)

/* Output */
mkdirSync('reports', { recursive: true })
writeFileSync('reports/orphan-mentions.json', JSON.stringify({
  generatedAt: new Date().toISOString(),
  totalKnownNames: knownNames.size,
  totalOrphans: orphans.length,
  byPriority: { high: high.length, medium: medium.length, low: low.length },
  orphans,
}, null, 2))

console.log(`\n${'═'.repeat(78)}`)
console.log(`AUDITOR DE MENCIONES HUÉRFANAS`)
console.log('═'.repeat(78))
console.log(`Nombres conocidos en el codex: ${knownNames.size}`)
console.log(`Menciones candidatas: ${orphans.length}`)
console.log(`  · Alta prioridad (≥5 menciones):    ${high.length}`)
console.log(`  · Media prioridad (3-4 menciones):  ${medium.length}`)
console.log(`  · Baja prioridad (2 menciones):     ${low.length}\n`)

if (high.length > 0) {
  console.log(`Alta prioridad — candidatos fuertes para entradas nuevas:`)
  console.log('─'.repeat(78))
  for (const o of high) {
    const where = o.mentionedIn.slice(0, 3).join(', ')
    console.log(`  ${String(o.count).padStart(3)} · ${o.mention.padEnd(38)} · ${where}`)
  }
}

if (medium.length > 0) {
  console.log(`\nMedia prioridad — vale la pena evaluar:`)
  console.log('─'.repeat(78))
  for (const o of medium.slice(0, 30)) {
    const where = o.mentionedIn.slice(0, 3).join(', ')
    console.log(`  ${String(o.count).padStart(3)} · ${o.mention.padEnd(38)} · ${where}`)
  }
  if (medium.length > 30) console.log(`  ... y ${medium.length - 30} más en el JSON`)
}

console.log(`\n📄 Reporte completo: reports/orphan-mentions.json`)
