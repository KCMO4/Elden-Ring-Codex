import { charactersData } from '../data/characters'
import { regionsData } from '../data/regions'
import { factionsData } from '../data/factions'
import { glossaryData } from '../data/glossary'
import { timelineData } from '../data/timeline'
import { endingsData } from '../data/endings'
import type { EntityType, RichInline } from '../data/types'

/* ────────────────────────────────────────────────────────────
   Runtime cross-link enrichment for plain-string fields.

   The auto-link build script handles `deepLore` paragraphs, buckets, lists,
   and prose-fields (beneficiaries/victims). But many fields in `data/*.ts`
   are plain strings rendered directly in cards and heroes (summary,
   definition, historical, theme, tragedy, hiddenTragedy, belief, etc.).

   Touching every component to pre-compute RichInline at build time would
   require changing types across the codebase. Instead, we enrich at render
   time: scan the string, return RichInline[] with link() nodes inserted
   wherever a known entity name appears.

   The target table is computed once per session (module-level constants).
   Per-render cost is one regex scan over the input string — trivial for
   the short strings these fields hold.
   ──────────────────────────────────────────────────────────── */

interface Target {
  name: string
  type: EntityType
  slug: string
}

const BANNED_NAMES = new Set<string>([
  'Crepúsculo', 'Crepusculo',
])

const ALIAS_STOPWORDS = new Set<string>([
  'reina', 'rey', 'lord', 'lady', 'caballero', 'caballeros', 'caballera',
  'orden', 'dios', 'diosa', 'la', 'el', 'los', 'las', 'una', 'uno',
  'gran', 'primer', 'primera', 'antiguo', 'antigua',
  'era', 'edad', 'siglo', 'epoca', 'tiempo',
  'aquellos', 'aquellas', 'señor', 'señora',
])

/* Manual aliases (mirrors auto-link-pass.mts; kept in sync by hand). */
const MANUAL_ALIASES: Target[] = [
  { name: 'Crisol',                          type: 'concept', slug: 'crucible' },
  { name: 'Árbol Áureo',                     type: 'concept', slug: 'erdtree' },
  { name: 'Haligtree',                       type: 'region',  slug: 'haligtree' },
  { name: 'Tarnished',                       type: 'concept', slug: 'tarnished' },
  { name: 'Quienes Viven en la Muerte',      type: 'concept', slug: 'those-who-live-in-death' },
  { name: 'Aquellos que Viven en la Muerte', type: 'concept', slug: 'those-who-live-in-death' },
  { name: 'Anillo Elden',                    type: 'concept', slug: 'elden-ring' },
  { name: 'Hoja Negra',                      type: 'concept', slug: 'maliketh-black-blade' },
  { name: 'Bestia Sombra',                   type: 'concept', slug: 'shadow-bound-beast' },
  { name: 'Empíreo',                         type: 'concept', slug: 'empyrean' },
  { name: 'Empyrean',                        type: 'concept', slug: 'empyrean' },
  { name: 'Crisol Primigenio',               type: 'concept', slug: 'crucible' },
  { name: 'Cuchillos Negros',                type: 'faction', slug: 'cuchillos-negros' },
  { name: 'Cuchillo Negro',                  type: 'faction', slug: 'cuchillos-negros' },
  { name: 'Pieles de Dios',                  type: 'faction', slug: 'pieles-de-dios' },
  { name: 'Dos Dedos',                       type: 'faction', slug: 'dos-dedos' },
  { name: 'Tres Dedos',                      type: 'faction', slug: 'tres-dedos' },
  { name: 'Hombres-Bestia',                  type: 'faction', slug: 'hombres-bestia' },
  { name: 'Hombre-Bestia',                   type: 'faction', slug: 'hombres-bestia' },
]

const targets: Target[] = (() => {
  const base: Target[] = [
    ...charactersData.map((c) => ({ name: c.name, type: 'character' as EntityType, slug: c.id })),
    ...regionsData.map((r) => ({ name: r.name, type: 'region' as EntityType, slug: r.id })),
    ...factionsData.map((f) => ({ name: f.name, type: 'faction' as EntityType, slug: f.id })),
    ...glossaryData.map((g) => ({ name: g.term, type: 'concept' as EntityType, slug: g.id })),
    ...timelineData.map((t) => ({ name: t.title, type: 'timeline' as EntityType, slug: t.id })),
    ...endingsData.map((e) => ({ name: e.name, type: 'ending' as EntityType, slug: e.id })),
  ]

  /* Auto-aliases: first word of multi-word character names. */
  const aliases: Target[] = []
  for (const c of charactersData) {
    const words = c.name.split(/[\s,]+/).filter((w) => w.length > 0)
    if (words.length < 2) continue
    const first = words[0]
    if (first.length < 4) continue
    if (ALIAS_STOPWORDS.has(first.toLowerCase())) continue
    aliases.push({ name: first, type: 'character', slug: c.id })
  }
  /* Filter aliases unique (no two characters share first name) and not
     colliding with canonical names. */
  const aliasFreq = new Map<string, number>()
  for (const a of aliases) aliasFreq.set(a.name, (aliasFreq.get(a.name) ?? 0) + 1)
  const canon = new Set(base.map((t) => t.name.toLowerCase()))
  const goodAliases = aliases.filter(
    (a) => aliasFreq.get(a.name)! === 1 && !canon.has(a.name.toLowerCase())
  )

  /* Validate manual aliases against existing slugs. */
  const validSlugs: Record<EntityType, Set<string>> = {
    character: new Set(charactersData.map((c) => c.id)),
    region:    new Set(regionsData.map((r) => r.id)),
    faction:   new Set(factionsData.map((f) => f.id)),
    concept:   new Set(glossaryData.map((g) => g.id)),
    timeline:  new Set(timelineData.map((t) => t.id)),
    ending:    new Set(endingsData.map((e) => e.id)),
  }
  const validatedManual = MANUAL_ALIASES.filter((a) => validSlugs[a.type].has(a.slug))

  const all = [...base, ...goodAliases, ...validatedManual].filter((t) => {
    if (t.name.length < 4) return false
    if (BANNED_NAMES.has(t.name)) return false
    return true
  })
  /* Longest-first: multi-word names match before subwords. */
  all.sort((a, b) => b.name.length - a.name.length)
  return all
})()

/* Precompile boundary regexes per target — case-insensitive, accent-aware. */
const LETTER_CLASS = 'A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9'
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
const targetRegexes: { target: Target; re: RegExp }[] = targets.map((t) => ({
  target: t,
  re: new RegExp(`(?:^|[^${LETTER_CLASS}])(${escapeRegex(t.name)})(?=[^${LETTER_CLASS}]|$)`, 'gi'),
}))

const ARTICLES = ['El ', 'La ', 'Los ', 'Las ', 'el ', 'la ', 'los ', 'las ']

interface MatchRange {
  start: number
  end: number
  target: Target
}

/**
 * Scan a plain string and return a RichInline[] with link() nodes inserted
 * wherever a known entity name appears. Self-references (matching the given
 * `selfId` of any type) are skipped — a page should never link to itself.
 *
 * If no matches are found, returns the input as a single-element array
 * `[text]` (still a valid RichInline[]).
 */
export function enrichText(text: string, selfId?: string): RichInline[] {
  if (!text || text.length < 5) return [text]

  const ranges: MatchRange[] = []
  for (const { target, re } of targetRegexes) {
    if (selfId && target.slug === selfId) continue
    re.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = re.exec(text)) !== null) {
      const matchStart = m.index + (m[0].length - m[1].length)
      const matchEnd = matchStart + m[1].length
      const overlap = ranges.some((r) => !(matchEnd <= r.start || matchStart >= r.end))
      if (!overlap) ranges.push({ start: matchStart, end: matchEnd, target })
    }
  }

  if (ranges.length === 0) return [text]

  ranges.sort((a, b) => a.start - b.start)

  const out: RichInline[] = []
  let cursor = 0
  for (const r of ranges) {
    /* Strip leading article from the link label */
    let labelStart = r.start
    for (const a of ARTICLES) {
      if (text.slice(labelStart, labelStart + a.length) === a) {
        labelStart += a.length
        break
      }
    }
    if (labelStart > cursor) out.push(text.slice(cursor, labelStart))
    out.push({
      type: 'link',
      label: text.slice(labelStart, r.end),
      targetType: r.target.type,
      slug: r.target.slug,
    })
    cursor = r.end
  }
  if (cursor < text.length) out.push(text.slice(cursor))
  return out
}
