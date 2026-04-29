import { charactersData } from './characters'
import { factionsData } from './factions'
import { regionsData } from './regions'
import { glossaryData } from './glossary'
import { timelineData } from './timeline'
import { endingsData } from './endings'
import type { Character, Faction, Region, GlossaryEntry, TimelineEntry, Ending, EntityType } from './types'

/* ────────────────────────────── */
/* Slug helpers                  */
/* ────────────────────────────── */

export const slugFor = {
  character: (c: Pick<Character, 'id' | 'slug'>) => c.slug ?? c.id,
  faction:   (f: Pick<Faction, 'id' | 'slug'>) => f.slug ?? f.id,
  region:    (r: Pick<Region, 'id' | 'slug'>) => r.slug ?? r.id,
  concept:   (g: Pick<GlossaryEntry, 'id' | 'slug'>) => g.slug ?? g.id,
  timeline:  (t: Pick<TimelineEntry, 'id' | 'slug'>) => t.slug ?? t.id,
  ending:    (e: Pick<Ending, 'id' | 'slug'>) => e.slug ?? e.id,
}

/* ────────────────────────────── */
/* Path builders                 */
/* ────────────────────────────── */

export const pathFor = {
  character: (c: Pick<Character, 'id' | 'slug'>) => `/personajes/${slugFor.character(c)}`,
  faction:   (f: Pick<Faction, 'id' | 'slug'>) => `/facciones/${slugFor.faction(f)}`,
  region:    (r: Pick<Region, 'id' | 'slug'>) => `/regiones/${slugFor.region(r)}`,
  concept:   (g: Pick<GlossaryEntry, 'id' | 'slug'>) => `/conceptos/${slugFor.concept(g)}`,
  timeline:  (t: Pick<TimelineEntry, 'id' | 'slug'>) => `/timeline/${slugFor.timeline(t)}`,
  ending:    (e: Pick<Ending, 'id' | 'slug'>) => `/finales/${slugFor.ending(e)}`,
}

export function entityTypePath(type: EntityType, slug: string): string {
  switch (type) {
    case 'character': return `/personajes/${slug}`
    case 'faction':   return `/facciones/${slug}`
    case 'region':    return `/regiones/${slug}`
    case 'concept':   return `/conceptos/${slug}`
    case 'timeline':  return `/timeline/${slug}`
    case 'ending':    return `/finales/${slug}`
  }
}

/* ────────────────────────────── */
/* Find by slug or id            */
/* ────────────────────────────── */

export function findCharacter(slug: string): Character | undefined {
  return charactersData.find((c) => (c.slug ?? c.id) === slug)
}
export function findFaction(slug: string): Faction | undefined {
  return factionsData.find((f) => (f.slug ?? f.id) === slug)
}
export function findRegion(slug: string): Region | undefined {
  return regionsData.find((r) => (r.slug ?? r.id) === slug)
}
export function findConcept(slug: string): GlossaryEntry | undefined {
  return glossaryData.find((g) => (g.slug ?? g.id) === slug)
}
export function findTimelineEntry(slug: string): TimelineEntry | undefined {
  return timelineData.find((t) => (t.slug ?? t.id) === slug)
}
export function findEnding(slug: string): Ending | undefined {
  return endingsData.find((e) => (e.slug ?? e.id) === slug)
}

/* ────────────────────────────── */
/* Related → RelatedItem groups  */
/* ────────────────────────────── */

export interface ResolvedRelatedItem {
  to: string
  label: string
  sublabel?: string
}

export function resolveCharacterIds(ids: string[] | undefined): ResolvedRelatedItem[] {
  if (!ids) return []
  return ids
    .map((id) => charactersData.find((c) => c.id === id || c.slug === id))
    .filter((c): c is Character => Boolean(c))
    .map((c) => ({ to: pathFor.character(c), label: c.name, sublabel: c.faction }))
}

export function resolveRegionIds(ids: string[] | undefined): ResolvedRelatedItem[] {
  if (!ids) return []
  return ids
    .map((id) => regionsData.find((r) => r.id === id || r.slug === id))
    .filter((r): r is Region => Boolean(r))
    .map((r) => ({ to: pathFor.region(r), label: r.name, sublabel: r.mainFaction }))
}

export function resolveFactionIds(ids: string[] | undefined): ResolvedRelatedItem[] {
  if (!ids) return []
  return ids
    .map((id) => factionsData.find((f) => f.id === id || f.slug === id))
    .filter((f): f is Faction => Boolean(f))
    .map((f) => ({ to: pathFor.faction(f), label: f.name }))
}

export function resolveConceptIds(ids: string[] | undefined): ResolvedRelatedItem[] {
  if (!ids) return []
  return ids
    .map((id) => glossaryData.find((g) => g.id === id || g.slug === id))
    .filter((g): g is GlossaryEntry => Boolean(g))
    .map((g) => ({ to: pathFor.concept(g), label: g.term }))
}

export function resolveTimelineIds(ids: string[] | undefined): ResolvedRelatedItem[] {
  if (!ids) return []
  return ids
    .map((id) => timelineData.find((t) => t.id === id || t.slug === id))
    .filter((t): t is TimelineEntry => Boolean(t))
    .map((t) => ({ to: pathFor.timeline(t), label: t.title, sublabel: t.chapter }))
}

export function resolveEndingIds(ids: string[] | undefined): ResolvedRelatedItem[] {
  if (!ids) return []
  return ids
    .map((id) => endingsData.find((e) => e.id === id || e.slug === id))
    .filter((e): e is Ending => Boolean(e))
    .map((e) => ({ to: pathFor.ending(e), label: e.name }))
}

/* ────────────────────────────── */
/* Prev/Next helpers             */
/* ────────────────────────────── */

export function neighbors<T extends { id: string; slug?: string }>(
  list: T[],
  current: T,
  pathBuilder: (item: T) => string,
  labelBuilder: (item: T) => string
) {
  const idx = list.indexOf(current)
  if (idx === -1) return { prev: null, next: null }
  const prev = idx > 0 ? list[idx - 1] : null
  const next = idx < list.length - 1 ? list[idx + 1] : null
  return {
    prev: prev ? { to: pathBuilder(prev), label: labelBuilder(prev) } : null,
    next: next ? { to: pathBuilder(next), label: labelBuilder(next) } : null,
  }
}
