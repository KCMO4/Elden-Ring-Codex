/**
 * Auto-link pass: scans lore files for unlinked mentions of entities and
 * replaces them with link() calls inline. Only touches string literals
 * that appear inside p() calls — never inside h(), q(), em(), strong(),
 * link(), ol(), ul(), bucket arrays, or summary/definition fields.
 *
 * Usage:
 *   npx tsx scripts/auto-link-pass.mts <file>           — apply to one file
 *   npx tsx scripts/auto-link-pass.mts --all            — apply to all 8 lore files
 *   npx tsx scripts/auto-link-pass.mts --dry <file>     — show modCount without writing
 */

import { readFileSync, writeFileSync } from 'node:fs'

import { charactersData } from '../src/data/characters'
import { factionsData } from '../src/data/factions'
import { regionsData } from '../src/data/regions'
import { glossaryData } from '../src/data/glossary'
import { timelineData } from '../src/data/timeline'
import { endingsData } from '../src/data/endings'

type EType = 'character' | 'region' | 'faction' | 'concept' | 'timeline' | 'ending'
interface Target {
  name: string
  type: EType
  slug: string
}

/* ───── Build target table ───── */

const targets: Target[] = [
  ...charactersData.map((c) => ({ name: c.name, type: 'character' as EType, slug: c.id })),
  ...regionsData.map((r) => ({ name: r.name, type: 'region' as EType, slug: r.id })),
  ...factionsData.map((f) => ({ name: f.name, type: 'faction' as EType, slug: f.id })),
  ...glossaryData.map((g) => ({ name: g.term, type: 'concept' as EType, slug: g.id })),
  ...timelineData.map((t) => ({ name: t.title, type: 'timeline' as EType, slug: t.id })),
  ...endingsData.map((e) => ({ name: e.name, type: 'ending' as EType, slug: e.id })),
]

/* Names too short or too generic to safely auto-link without false positives. */
const BANNED_NAMES = new Set<string>([
  'Crepúsculo', 'Crepusculo',  // bare word, not the ending name
])

/* Words that should not become aliases even if they're the first word of an
   entity name. Generic titles, articles, common nouns. */
const ALIAS_STOPWORDS = new Set<string>([
  'reina', 'rey', 'lord', 'lady', 'caballero', 'caballeros', 'caballera',
  'orden', 'dios', 'diosa', 'la', 'el', 'los', 'las', 'una', 'uno',
  'gran', 'gran', 'primer', 'primera', 'antiguo', 'antigua',
  'era', 'edad', 'siglo', 'epoca', 'tiempo',
  'aquellos', 'aquellas', 'señor', 'señora',
])

/* Manual aliases curated by hand: prose forms that don't match canonical
   names (e.g. "Crisol" instead of "El Crisol", "Hoja Negra" instead of
   "Hoja Negra de Maliketh", "Anillo" instead of "Anillo Elden").
   Verified to resolve to existing slugs. */
const MANUAL_ALIASES: { name: string; type: EType; slug: string }[] = [
  /* Concepts with article in canonical term */
  { name: 'Crisol',                          type: 'concept', slug: 'crucible' },
  { name: 'Árbol Áureo',                     type: 'concept', slug: 'erdtree' },
  { name: 'Haligtree',                       type: 'region',  slug: 'haligtree' },  // prefer region over concept
  { name: 'Tarnished',                       type: 'concept', slug: 'tarnished' },
  { name: 'Quienes Viven en la Muerte',      type: 'concept', slug: 'those-who-live-in-death' },
  { name: 'Aquellos que Viven en la Muerte', type: 'concept', slug: 'those-who-live-in-death' },
  /* Concepts whose term has the long form */
  { name: 'Anillo Elden',                    type: 'concept', slug: 'elden-ring' },
  { name: 'Hoja Negra',                      type: 'concept', slug: 'maliketh-black-blade' },
  { name: 'Bestia Sombra',                   type: 'concept', slug: 'shadow-bound-beast' },
  { name: 'Empíreo',                         type: 'concept', slug: 'empyrean' },
  { name: 'Empyrean',                        type: 'concept', slug: 'empyrean' },
  { name: 'Crisol Primigenio',               type: 'concept', slug: 'crucible' },
  /* Glossary plural / case forms */
  { name: 'Cuchillos Negros',                type: 'faction', slug: 'cuchillos-negros' },
  { name: 'Cuchillo Negro',                  type: 'faction', slug: 'cuchillos-negros' },
  { name: 'Pieles de Dios',                  type: 'faction', slug: 'pieles-de-dios' },
  { name: 'Dos Dedos',                       type: 'faction', slug: 'dos-dedos' },
  { name: 'Tres Dedos',                      type: 'faction', slug: 'tres-dedos' },
  { name: 'Hombres-Bestia',                  type: 'faction', slug: 'hombres-bestia' },
  { name: 'Hombre-Bestia',                   type: 'faction', slug: 'hombres-bestia' },
]

/* Auto-generate first-word aliases for characters (so "Marika" in prose links
   to "Marika la Eterna"). Only characters — not factions/regions/etc — to keep
   the false-positive risk low. */
const proposedAliases: Target[] = []
for (const c of charactersData) {
  const words = c.name.split(/[\s,]+/).filter((w) => w.length > 0)
  if (words.length < 2) continue
  const first = words[0]
  if (first.length < 4) continue
  if (ALIAS_STOPWORDS.has(first.toLowerCase())) continue
  proposedAliases.push({ name: first, type: 'character', slug: c.id })
}

/* De-duplicate aliases against each other AND against canonical names of any
   entity. If "Marika" ends up as alias for two characters, drop both — too risky. */
const aliasFreq = new Map<string, number>()
for (const a of proposedAliases) {
  aliasFreq.set(a.name, (aliasFreq.get(a.name) ?? 0) + 1)
}
const canonicalNames = new Set(targets.map((t) => t.name.toLowerCase()))
const goodAliases = proposedAliases.filter(
  (a) => aliasFreq.get(a.name)! === 1 && !canonicalNames.has(a.name.toLowerCase())
)

/* Validate manual aliases against the existing entity slugs. */
const validSlugs: Record<EType, Set<string>> = {
  character: new Set(charactersData.map((c) => c.id)),
  region:    new Set(regionsData.map((r) => r.id)),
  faction:   new Set(factionsData.map((f) => f.id)),
  concept:   new Set(glossaryData.map((g) => g.id)),
  timeline:  new Set(timelineData.map((t) => t.id)),
  ending:    new Set(endingsData.map((e) => e.id)),
}
const validatedManual = MANUAL_ALIASES.filter((a) => {
  if (!validSlugs[a.type].has(a.slug)) {
    console.warn(`[auto-link] manual alias "${a.name}" → ${a.type}:${a.slug} does NOT resolve, skipping`)
    return false
  }
  return true
})

const filteredTargets = [...targets, ...goodAliases, ...validatedManual].filter((t) => {
  if (t.name.length < 4) return false
  if (BANNED_NAMES.has(t.name)) return false
  return true
})

filteredTargets.sort((a, b) => b.name.length - a.name.length)
console.log(`[auto-link] aliases auto-generated: ${goodAliases.length}, manual: ${validatedManual.length}`)

console.log(`[auto-link] target names: ${filteredTargets.length}`)

/* ───── Helpers ───── */

const LETTER_CLASS = 'A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9'

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function boundaryRegex(name: string): RegExp {
  /* Case-insensitive: prose may use "Oro sin Aleación" while the entity name
     is "Oro Sin Aleación" (with caps on the preposition). The link label
     preserves whatever case the prose used (not the canonical name). */
  return new RegExp(
    `(?:^|[^${LETTER_CLASS}])(${escapeRegex(name)})(?=[^${LETTER_CLASS}]|$)`,
    'gi'
  )
}

function tsString(s: string): string {
  return "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"
}

/* Replace string content with a comma-separated list of TS expressions
   (string literals + link() calls) — returned as an array of part strings. */
function buildParts(s: string, selfSlug: string | null): string[] | null {
  if (s.length < 5) return null
  type Range = { start: number; end: number; target: Target }
  const ranges: Range[] = []
  for (const target of filteredTargets) {
    if (target.slug === selfSlug) continue
    const re = boundaryRegex(target.name)
    let m: RegExpExecArray | null
    while ((m = re.exec(s)) !== null) {
      const matchStart = m.index + (m[0].length - m[1].length)
      const matchEnd = matchStart + m[1].length
      const overlap = ranges.some((r) => !(matchEnd <= r.start || matchStart >= r.end))
      if (!overlap) ranges.push({ start: matchStart, end: matchEnd, target })
    }
  }
  if (ranges.length === 0) return null
  ranges.sort((a, b) => a.start - b.start)
  const parts: string[] = []
  let cursor = 0
  /* Spanish articles to keep OUT of the link label (Wikipedia convention:
     only the proper noun is the link, the article remains plain text). */
  const ARTICLES = ['El ', 'La ', 'Los ', 'Las ', 'el ', 'la ', 'los ', 'las ']
  for (const r of ranges) {
    /* If the canonical entity name itself starts with an article ("El Crisol"),
       strip it from the linked label so prose reads "el Crisol" with only
       "Crisol" highlighted. */
    let labelStart = r.start
    for (const a of ARTICLES) {
      if (s.slice(labelStart, labelStart + a.length) === a) {
        labelStart += a.length
        break
      }
    }
    if (labelStart > cursor) parts.push(tsString(s.slice(cursor, labelStart)))
    const label = s.slice(labelStart, r.end)
    parts.push(`link(${tsString(label)}, ${tsString(r.target.type)}, ${tsString(r.target.slug)})`)
    cursor = r.end
  }
  if (cursor < s.length) parts.push(tsString(s.slice(cursor)))
  return parts.length > 1 ? parts : null
}

/* ───── Strip strings/comments from a line for paren analysis ───── */

function stripStringsAndComments(line: string): string {
  let out = ''
  let i = 0
  while (i < line.length) {
    const ch = line[i]
    if (ch === "'") {
      out += '_S_'
      i++
      while (i < line.length && line[i] !== "'") {
        if (line[i] === '\\' && i + 1 < line.length) i += 2
        else i++
      }
      i++ // closing quote
    } else if (ch === '`') {
      out += '_T_'
      i++
      while (i < line.length && line[i] !== '`') i++
      i++
    } else if (ch === '/' && line[i + 1] === '/') {
      break
    } else {
      out += ch
      i++
    }
  }
  return out
}

/* ───── Stack-based context tracking ───── */

type Context = 'p' | 'h' | 'q' | 'ol' | 'ul' | 'link' | 'em' | 'strong' | 'paren'

const FN_NAMES: Context[] = ['p', 'h', 'q', 'ol', 'ul', 'link', 'em', 'strong']

function walkLine(stripped: string, stack: Context[]): void {
  let i = 0
  while (i < stripped.length) {
    /* Try to match a function-name + ( */
    let matchedFn: Context | null = null
    for (const fn of FN_NAMES) {
      if (stripped.startsWith(fn + '(', i)) {
        const before = i === 0 ? '' : stripped[i - 1]
        if (!/[A-Za-z0-9_]/.test(before)) {
          matchedFn = fn
          break
        }
      }
    }
    if (matchedFn) {
      stack.push(matchedFn)
      i += matchedFn.length + 1
      continue
    }
    if (stripped[i] === '(') {
      stack.push('paren')
      i++
    } else if (stripped[i] === ')') {
      stack.pop()
      i++
    } else {
      i++
    }
  }
}

type LinkableKind = 'paragraph' | 'list' | null

function linkableKind(stack: Context[]): LinkableKind {
  /* Innermost real (non-paren) function determines linkability and emit mode.
     - `p()`        → paragraph (emit as comma-separated args, current behavior)
     - `ol()`/`ul()` → list (emit as array literal, since each item must remain
                       a single arg to the helper)
   */
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === 'paren') continue
    if (stack[i] === 'p') return 'paragraph'
    if (stack[i] === 'ol' || stack[i] === 'ul') return 'list'
    return null
  }
  return null
}

/* ───── Process a file ───── */

interface ProcessResult {
  output: string
  modCount: number
  entityCount: number
}

const ENTITY_OPEN = /^( {2})'?([\w-]+)'?:\s*\{\s*$/
const STRING_LINE = /^(\s+)('(?:[^'\\]|\\.)*')(,?)\s*$/
const BUCKET_OPEN = /^(\s+)(confirmed|inferred|theories|ambiguous):\s*\[\s*$/
const PROSE_FIELD_OPEN = /^(\s+)(beneficiaries|victims):\s*$/
/* Inline prose-field: `beneficiaries: 'string here',` — single line. */
const PROSE_FIELD_INLINE = /^(\s+)(beneficiaries|victims):\s*'((?:[^'\\]|\\.)*)'(,?)\s*$/

function processFile(filepath: string): ProcessResult {
  const text = readFileSync(filepath, 'utf-8')
  const lines = text.split('\n')

  const stack: Context[] = []
  let currentEntity: string | null = null
  let entityCount = 0
  const out: string[] = []
  let modCount = 0

  /* Bucket / prose-field state machine */
  let inBucket = false
  let bucketDepth = 0  // tracks `[` `]` while in bucket
  let proseFieldPending = false  // next string-line is a prose-field value

  /* Helper: build a single-line array literal `[part1, part2, ...]` from parts. */
  function arrayLiteral(parts: string[]): string {
    return '[' + parts.join(', ') + ']'
  }

  for (const line of lines) {
    /* Entity-open detection (always at depth 0) */
    if (stack.length === 0 && !inBucket) {
      const em = ENTITY_OPEN.exec(line)
      if (em) {
        currentEntity = em[2]
        entityCount++
        proseFieldPending = false
        out.push(line)
        continue
      }
    }

    /* Bucket close: `]` or `],` while inBucket */
    if (inBucket && /^\s*\],?\s*$/.test(line)) {
      bucketDepth--
      if (bucketDepth <= 0) {
        inBucket = false
        bucketDepth = 0
      }
      out.push(line)
      continue
    }

    /* Bucket open: `confirmed: [` etc. */
    const bm = BUCKET_OPEN.exec(line)
    if (bm && stack.length === 0 && currentEntity !== null) {
      inBucket = true
      bucketDepth = 1
      out.push(line)
      continue
    }

    /* Inline prose-field: `beneficiaries: 'string',` on one line */
    const pfi = PROSE_FIELD_INLINE.exec(line)
    if (pfi && stack.length === 0 && !inBucket && currentEntity !== null) {
      const [, indent, field, content, trailingComma] = pfi
      if (!content.includes('\\')) {
        const parts = buildParts(content, currentEntity)
        if (parts) {
          modCount += parts.filter((p) => p.startsWith('link(')).length
          out.push(`${indent}${field}: ${arrayLiteral(parts)}${trailingComma}`)
          continue
        }
      }
      out.push(line)
      continue
    }

    /* Multiline prose-field opener: `beneficiaries:` (no value yet) */
    const pfo = PROSE_FIELD_OPEN.exec(line)
    if (pfo && stack.length === 0 && !inBucket && currentEntity !== null) {
      proseFieldPending = true
      out.push(line)
      continue
    }

    /* Try string-literal line */
    const sm = STRING_LINE.exec(line)
    if (sm && currentEntity !== null) {
      const indent = sm[1]
      const rawStr = sm[2]
      const trailingComma = sm[3]
      const contentEsc = rawStr.slice(1, -1)

      if (!contentEsc.includes('\\')) {
        const parts = buildParts(contentEsc, currentEntity)

        if (parts) {
          /* Decide emit mode based on context */
          if (proseFieldPending) {
            /* Multiline prose-field value — replace string with array literal */
            modCount += parts.filter((p) => p.startsWith('link(')).length
            out.push(`${indent}${arrayLiteral(parts)}${trailingComma}`)
            proseFieldPending = false
            continue
          }
          if (inBucket) {
            /* Bucket item — wrap in single-line array literal */
            modCount += parts.filter((p) => p.startsWith('link(')).length
            out.push(`${indent}${arrayLiteral(parts)}${trailingComma}`)
            continue
          }
          const kind = linkableKind(stack)
          if (kind === 'paragraph') {
            /* Paragraph child — emit as comma-separated args (multi-line) */
            modCount += parts.filter((p) => p.startsWith('link(')).length
            const newLines = parts.map((p, i) => {
              const isLast = i === parts.length - 1
              const tail = isLast ? trailingComma : ','
              return indent + p + tail
            })
            out.push(...newLines)
            continue
          }
          if (kind === 'list') {
            /* List item (ol/ul) — wrap in array literal */
            modCount += parts.filter((p) => p.startsWith('link(')).length
            out.push(`${indent}${arrayLiteral(parts)}${trailingComma}`)
            continue
          }
        }
      }
      /* String didn't trigger replacement OR escapes are present — but
         if proseFieldPending was set, consume it (the string is the value). */
      if (proseFieldPending) proseFieldPending = false
    }

    /* Default: push line and update stack from any opens/closes on it. */
    out.push(line)
    const stripped = stripStringsAndComments(line)
    walkLine(stripped, stack)
  }

  return { output: out.join('\n'), modCount, entityCount }
}

/* ───── CLI ───── */

const args = process.argv.slice(2)
const dryRun = args.includes('--dry')
const all = args.includes('--all')

const LORE_FILES = [
  'src/data/lore/charactersLore.ts',
  'src/data/lore/charactersDeepLore.ts',
  'src/data/lore/factionsLore.ts',
  'src/data/lore/glossaryLore.ts',
  'src/data/lore/regionsLore.ts',
  'src/data/lore/regionsDeepLore.ts',
  'src/data/lore/timelineLore.ts',
  'src/data/lore/timelineDeepLore.ts',
]

const filesToProcess: string[] = all
  ? LORE_FILES
  : args.filter((a) => !a.startsWith('--'))

if (filesToProcess.length === 0) {
  console.log('Usage: npx tsx scripts/auto-link-pass.mts <file>... | --all  [--dry]')
  process.exit(1)
}

let totalMods = 0
for (const f of filesToProcess) {
  const result = processFile(f)
  console.log(`[auto-link] ${f}: ${result.entityCount} entities, ${result.modCount} link insertions`)
  totalMods += result.modCount
  if (!dryRun && result.modCount > 0) {
    writeFileSync(f, result.output, 'utf-8')
  }
}
console.log(`[auto-link] total: ${totalMods} link insertions${dryRun ? ' (dry run)' : ''}`)
