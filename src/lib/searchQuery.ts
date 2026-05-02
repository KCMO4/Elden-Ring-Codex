/**
 * Parses a search query string into free text + faceted filters.
 *
 *   "marika tag:muerte cert:teoria type:character"
 *     → { text: "marika", tag: "muerte", certainty: "teoria", type: "character" }
 *
 * Supported facets (case-insensitive keys):
 *   - tag:<value>       (matches against entity tags, partial)
 *   - certainty:<value> (confirmado | inferencia | teoria)
 *   - cert:<value>      (alias)
 *   - type:<value>      (character | region | faction | concept | timeline | ending)
 *
 * Multiple values for the same facet → last one wins. Use space-separated
 * key:value tokens; the rest is free text.
 */

export interface ParsedQuery {
  text: string
  tag?: string
  certainty?: 'confirmado' | 'inferencia' | 'teoria'
  type?: 'character' | 'region' | 'faction' | 'concept' | 'timeline' | 'ending'
}

const TYPE_ALIASES: Record<string, ParsedQuery['type']> = {
  personaje: 'character',
  personajes: 'character',
  character: 'character',
  region: 'region',
  regiones: 'region',
  faccion: 'faction',
  facciones: 'faction',
  faction: 'faction',
  concepto: 'concept',
  conceptos: 'concept',
  concept: 'concept',
  evento: 'timeline',
  eventos: 'timeline',
  timeline: 'timeline',
  final: 'ending',
  finales: 'ending',
  ending: 'ending',
}

const CERT_ALIASES: Record<string, ParsedQuery['certainty']> = {
  confirmado: 'confirmado',
  confirmed: 'confirmado',
  inferencia: 'inferencia',
  inferred: 'inferencia',
  teoria: 'teoria',
  teoría: 'teoria',
  theory: 'teoria',
}

export function parseSearchQuery(raw: string): ParsedQuery {
  const out: ParsedQuery = { text: '' }
  const remaining: string[] = []

  /* Match `key:value` pairs. Value may be quoted ("rot scarlet") or a single
     token (no spaces). Keys are case-insensitive. */
  const re = /(\w+):(?:"([^"]+)"|(\S+))/g
  let lastIndex = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(raw)) !== null) {
    /* Capture text BEFORE the facet token (preserves order in `remaining`) */
    if (m.index > lastIndex) remaining.push(raw.slice(lastIndex, m.index))
    const key = m[1].toLowerCase()
    const value = (m[2] ?? m[3] ?? '').toLowerCase()
    if (key === 'tag') out.tag = value
    else if (key === 'cert' || key === 'certainty') {
      out.certainty = CERT_ALIASES[value]
    } else if (key === 'type') {
      out.type = TYPE_ALIASES[value]
    } else {
      /* Unknown facet — keep the raw token in free text */
      remaining.push(m[0])
    }
    lastIndex = m.index + m[0].length
  }
  if (lastIndex < raw.length) remaining.push(raw.slice(lastIndex))
  out.text = remaining.join(' ').replace(/\s+/g, ' ').trim()
  return out
}
