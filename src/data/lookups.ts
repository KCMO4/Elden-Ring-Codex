import { charactersData } from './characters'
import { factionsData } from './factions'
import { regionsData } from './regions'
import { glossaryData } from './glossary'
import { timelineData } from './timeline'
import { endingsData } from './endings'
import type { Character, Faction, Region, GlossaryEntry, TimelineEntry, Ending, EntityType } from './types'

/* ────────────────────────────── */
/* Generic helpers               */
/* ────────────────────────────── */

interface SluggedEntity { id: string; slug?: string }

/** Find an entity in `data` whose slug or id matches `slug`. */
function findBySlug<T extends SluggedEntity>(data: T[], slug: string): T | undefined {
  return data.find((x) => (x.slug ?? x.id) === slug)
}

/**
 * Map a list of related ids into ResolvedRelatedItem[], dropping
 * unresolved references (entities that don't exist anymore).
 */
function resolveByIds<T extends SluggedEntity>(
  data: T[],
  ids: string[] | undefined,
  toItem: (entity: T) => ResolvedRelatedItem,
): ResolvedRelatedItem[] {
  if (!ids) return []
  return ids
    .map((id) => data.find((x) => x.id === id || x.slug === id))
    .filter((x): x is T => Boolean(x))
    .map(toItem)
}

/* ────────────────────────────── */
/* Random entry                  */
/* ────────────────────────────── */

/**
 * Pick a random entry from any of the 6 entity buckets and return its
 * detail-page path. Used by the "random entry" button in the sidebar to
 * encourage serendipitous discovery.
 */
export function randomEntryPath(): string {
  const all: string[] = [
    ...charactersData.map((c) => pathFor.character(c)),
    ...regionsData.map((r) => pathFor.region(r)),
    ...factionsData.map((f) => pathFor.faction(f)),
    ...glossaryData.map((g) => pathFor.concept(g)),
    ...timelineData.map((t) => pathFor.timeline(t)),
    ...endingsData.map((e) => pathFor.ending(e)),
  ]
  return all[Math.floor(Math.random() * all.length)] ?? '/'
}

/* ────────────────────────────── */
/* Slug + path                   */
/* ────────────────────────────── */

/** EntityType → URL prefix. Single source of truth for routing. */
const ROUTE_PREFIX: Record<EntityType, string> = {
  character: '/personajes',
  faction:   '/facciones',
  region:    '/regiones',
  concept:   '/conceptos',
  timeline:  '/timeline',
  ending:    '/finales',
}

const slug = (e: SluggedEntity) => e.slug ?? e.id

export const slugFor = {
  character: slug as (c: Pick<Character, 'id' | 'slug'>) => string,
  faction:   slug as (f: Pick<Faction, 'id' | 'slug'>) => string,
  region:    slug as (r: Pick<Region, 'id' | 'slug'>) => string,
  concept:   slug as (g: Pick<GlossaryEntry, 'id' | 'slug'>) => string,
  timeline:  slug as (t: Pick<TimelineEntry, 'id' | 'slug'>) => string,
  ending:    slug as (e: Pick<Ending, 'id' | 'slug'>) => string,
}

export const pathFor = {
  character: (c: Pick<Character, 'id' | 'slug'>) => `${ROUTE_PREFIX.character}/${slug(c)}`,
  faction:   (f: Pick<Faction, 'id' | 'slug'>) => `${ROUTE_PREFIX.faction}/${slug(f)}`,
  region:    (r: Pick<Region, 'id' | 'slug'>) => `${ROUTE_PREFIX.region}/${slug(r)}`,
  concept:   (g: Pick<GlossaryEntry, 'id' | 'slug'>) => `${ROUTE_PREFIX.concept}/${slug(g)}`,
  timeline:  (t: Pick<TimelineEntry, 'id' | 'slug'>) => `${ROUTE_PREFIX.timeline}/${slug(t)}`,
  ending:    (e: Pick<Ending, 'id' | 'slug'>) => `${ROUTE_PREFIX.ending}/${slug(e)}`,
}

export function entityTypePath(type: EntityType, slug: string): string {
  return `${ROUTE_PREFIX[type]}/${slug}`
}

/* ────────────────────────────── */
/* Find by slug or id            */
/* ────────────────────────────── */

export const findCharacter      = (s: string) => findBySlug(charactersData, s)
export const findFaction        = (s: string) => findBySlug(factionsData, s)
export const findRegion         = (s: string) => findBySlug(regionsData, s)
export const findConcept        = (s: string) => findBySlug(glossaryData, s)
export const findTimelineEntry  = (s: string) => findBySlug(timelineData, s)
export const findEnding         = (s: string) => findBySlug(endingsData, s)

/* ────────────────────────────── */
/* Related → RelatedItem groups  */
/* ────────────────────────────── */

export interface ResolvedRelatedItem {
  to: string
  label: string
  sublabel?: string
}

export const resolveCharacterIds = (ids: string[] | undefined) =>
  resolveByIds(charactersData, ids, (c) => ({
    to: pathFor.character(c), label: c.name, sublabel: c.faction,
  }))

export const resolveRegionIds = (ids: string[] | undefined) =>
  resolveByIds(regionsData, ids, (r) => ({
    to: pathFor.region(r), label: r.name, sublabel: r.mainFaction,
  }))

export const resolveFactionIds = (ids: string[] | undefined) =>
  resolveByIds(factionsData, ids, (f) => ({
    to: pathFor.faction(f), label: f.name,
  }))

export const resolveConceptIds = (ids: string[] | undefined) =>
  resolveByIds(glossaryData, ids, (g) => ({
    to: pathFor.concept(g), label: g.term,
  }))

export const resolveTimelineIds = (ids: string[] | undefined) =>
  resolveByIds(timelineData, ids, (t) => ({
    to: pathFor.timeline(t), label: t.title, sublabel: t.chapter,
  }))

export const resolveEndingIds = (ids: string[] | undefined) =>
  resolveByIds(endingsData, ids, (e) => ({
    to: pathFor.ending(e), label: e.name,
  }))

/* ────────────────────────────── */
/* Prev/Next helpers             */
/* ────────────────────────────── */

/* ────────────────────────────── */
/* Hover preview                 */
/* ────────────────────────────── */

import type { ImageCategory } from '../lib/imageSources'

function truncate(s: string | undefined, n: number): string {
  if (!s) return ''
  if (s.length <= n) return s
  /* Cut on a word boundary just before n, append ellipsis */
  return s.slice(0, n).replace(/\s+\S*$/, '') + '…'
}

export interface EntityPreview {
  type: EntityType
  name: string
  /** Short 1-line role/summary for the popover */
  summary: string
  /** Optional faction string (chars/regions) */
  faction?: string
  /** Tags used to derive era */
  tags?: string[]
  /** Image lookup */
  imageCategory: ImageCategory
  imageId: string
  /** Underlying entity id for the era badge / link rendering */
  id: string
}

/** Resolve an EntityType + slug to a normalized hover-preview shape. */
export function getEntityPreview(type: EntityType, slug: string): EntityPreview | null {
  switch (type) {
    case 'character': {
      const c = findCharacter(slug)
      if (!c) return null
      return {
        type, id: c.id, name: c.name,
        summary: c.role, faction: c.faction,
        tags: c.tags, imageCategory: 'characters', imageId: c.id,
      }
    }
    case 'region': {
      const r = findRegion(slug)
      if (!r) return null
      return {
        type, id: r.id, name: r.name,
        summary: truncate(r.historical, 110),
        faction: r.mainFaction,
        tags: r.tags, imageCategory: 'regions', imageId: r.id,
      }
    }
    case 'faction': {
      const f = findFaction(slug)
      if (!f) return null
      return {
        type, id: f.id, name: f.name,
        summary: f.what,
        tags: f.tags, imageCategory: 'factions', imageId: f.id,
      }
    }
    case 'concept': {
      const g = findConcept(slug)
      if (!g) return null
      /* Concepts get a longer preview so the hover-card works as an inline
         glossary — the reader can grasp a term without leaving their place. */
      return {
        type, id: g.id, name: g.term,
        summary: truncate(g.definition, 220),
        tags: g.related, imageCategory: 'concepts', imageId: g.id,
      }
    }
    case 'timeline': {
      const t = findTimelineEntry(slug)
      if (!t) return null
      return {
        type, id: t.id, name: t.title,
        summary: t.poeticIntro ?? t.chapter,
        tags: t.tags, imageCategory: 'timelineEvents', imageId: t.id,
      }
    }
    case 'ending': {
      const e = findEnding(slug)
      if (!e) return null
      return {
        type, id: e.id, name: e.name,
        summary: truncate(e.description, 110),
        imageCategory: 'endings', imageId: e.id,
      }
    }
  }
}

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
