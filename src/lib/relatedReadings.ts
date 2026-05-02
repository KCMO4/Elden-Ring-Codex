import { charactersData } from '../data/characters'
import { regionsData } from '../data/regions'
import { factionsData } from '../data/factions'
import { glossaryData } from '../data/glossary'
import { timelineData } from '../data/timeline'
import { endingsData } from '../data/endings'
import { pathFor } from '../data/lookups'
import type { EntityType } from '../data/types'

export interface RelatedReading {
  type: EntityType
  slug: string
  to: string
  label: string
  /** Score: shared tags + cross-reference proximity */
  score: number
  reason: string
}

interface AnyEntity {
  id: string
  slug?: string
  name?: string
  term?: string
  title?: string
  tags?: string[]
  relatedCharacters?: string[]
  relatedRegions?: string[]
  relatedFactions?: string[]
  relatedConcepts?: string[]
  relatedTimelineEvents?: string[]
  relatedEndings?: string[]
}

/**
 * Suggests 3-5 related entries the reader might enjoy after finishing the
 * current article. Scoring:
 *   +3 for each shared tag
 *   +2 if the candidate is in `relatedX` of the source (curated link)
 *   +1 if the source is in candidate's `relatedX` (mutual signal)
 *
 * Excludes the source itself. Returns sorted by score desc, max 5.
 */
export function findRelatedReadings(
  type: EntityType,
  slug: string,
  limit = 5,
): RelatedReading[] {
  const source = findEntity(type, slug)
  if (!source) return []

  const sourceTags = new Set((source.tags ?? []).map((t) => t.toLowerCase()))
  const sourceRelated = new Set<string>([
    ...(source.relatedCharacters ?? []),
    ...(source.relatedRegions ?? []),
    ...(source.relatedFactions ?? []),
    ...(source.relatedConcepts ?? []),
    ...(source.relatedTimelineEvents ?? []),
    ...(source.relatedEndings ?? []),
  ])

  const candidates: RelatedReading[] = []

  const consider = (
    candType: EntityType,
    candidate: AnyEntity,
    pathFn: (e: any) => string,
    labelFn: (e: any) => string,
  ) => {
    /* Skip self */
    if (candType === type && candidate.id === source.id) return

    let score = 0
    const reasons: string[] = []

    /* Shared tags */
    const candTags = (candidate.tags ?? []).map((t) => t.toLowerCase())
    const sharedTags = candTags.filter((t) => sourceTags.has(t))
    if (sharedTags.length > 0) {
      score += sharedTags.length * 3
      reasons.push(`${sharedTags.length} ${sharedTags.length === 1 ? 'etiqueta' : 'etiquetas'} en común`)
    }

    /* Curated reference from source → candidate */
    if (sourceRelated.has(candidate.id)) {
      score += 2
      reasons.push('mencionada en esta entrada')
    }

    /* Mutual reference: candidate's relatedX includes source */
    const candRelated = new Set<string>([
      ...(candidate.relatedCharacters ?? []),
      ...(candidate.relatedRegions ?? []),
      ...(candidate.relatedFactions ?? []),
      ...(candidate.relatedConcepts ?? []),
      ...(candidate.relatedTimelineEvents ?? []),
      ...(candidate.relatedEndings ?? []),
    ])
    if (candRelated.has(source.id)) {
      score += 1
      if (!reasons.includes('mencionada en esta entrada')) {
        reasons.push('vinculada cruzadamente')
      }
    }

    if (score === 0) return

    candidates.push({
      type: candType,
      slug: candidate.slug ?? candidate.id,
      to: pathFn(candidate),
      label: labelFn(candidate),
      score,
      reason: reasons[0] ?? '',
    })
  }

  for (const c of charactersData) consider('character', c as AnyEntity, pathFor.character, (e) => e.name)
  for (const r of regionsData)    consider('region',    r as AnyEntity, pathFor.region,    (e) => e.name)
  for (const f of factionsData)   consider('faction',   f as AnyEntity, pathFor.faction,   (e) => e.name)
  for (const g of glossaryData)   consider('concept',   g as AnyEntity, pathFor.concept,   (e) => e.term)
  for (const t of timelineData)   consider('timeline',  t as AnyEntity, pathFor.timeline,  (e) => e.title)
  for (const en of endingsData)   consider('ending',    en as AnyEntity, pathFor.ending,   (e) => e.name)

  candidates.sort((a, b) => b.score - a.score)
  return candidates.slice(0, limit)
}

function findEntity(type: EntityType, slug: string): AnyEntity | undefined {
  switch (type) {
    case 'character': return charactersData.find((c) => c.id === slug || c.slug === slug)
    case 'region':    return regionsData.find((r) => r.id === slug || r.slug === slug)
    case 'faction':   return factionsData.find((f) => f.id === slug || f.slug === slug)
    case 'concept':   return glossaryData.find((g) => g.id === slug || g.slug === slug)
    case 'timeline':  return timelineData.find((t) => t.id === slug || t.slug === slug)
    case 'ending':    return endingsData.find((e) => e.id === slug || e.slug === slug)
  }
}
