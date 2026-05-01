import type { Character, Faction, Region, TimelineEntry } from '../data/types'
import { charactersData } from '../data/characters'
import { factionsData } from '../data/factions'
import { regionsData } from '../data/regions'
import { timelineData } from '../data/timeline'

/**
 * Normalize a tag into a URL-safe slug. Stable across reloads so pages
 * deep-linked with `/etiqueta/<slug>` keep working.
 */
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/* All unique tag labels with the count of entries that use them. Computed
   once per module load — the data layer is static. */
function buildTagIndex() {
  const counts = new Map<string, number>()
  const sources: { tags: string[] }[] = [
    ...charactersData,
    ...factionsData,
    ...regionsData,
    ...timelineData,
  ]
  for (const item of sources) {
    for (const t of item.tags ?? []) {
      counts.set(t, (counts.get(t) ?? 0) + 1)
    }
  }
  return counts
}

const TAG_COUNTS = buildTagIndex()

/* Per-category counts indexed by slug — used by TagPill hover preview. */
export interface TagCategoryCounts {
  characters: number
  factions:   number
  regions:    number
  timeline:   number
  total:      number
}

function buildTagCategoryCounts(): Map<string, TagCategoryCounts> {
  const out = new Map<string, TagCategoryCounts>()
  const bump = (slug: string, key: keyof Omit<TagCategoryCounts, 'total'>) => {
    const cur = out.get(slug) ?? { characters: 0, factions: 0, regions: 0, timeline: 0, total: 0 }
    cur[key] += 1
    cur.total  += 1
    out.set(slug, cur)
  }
  const visit = (items: { tags?: string[] }[], key: keyof Omit<TagCategoryCounts, 'total'>) => {
    for (const it of items) for (const t of it.tags ?? []) bump(slugifyTag(t), key)
  }
  visit(charactersData, 'characters')
  visit(factionsData,   'factions')
  visit(regionsData,    'regions')
  visit(timelineData,   'timeline')
  return out
}
const TAG_CATEGORY_COUNTS = buildTagCategoryCounts()

/** O(1) per-category counts for a tag slug. */
export function getTagCategoryCounts(slug: string): TagCategoryCounts {
  return TAG_CATEGORY_COUNTS.get(slug) ?? { characters: 0, factions: 0, regions: 0, timeline: 0, total: 0 }
}

export interface TagOption {
  label: string
  slug: string
  count: number
}

/** All tags across all categories, sorted by count desc then alphabetically. */
export function getAllTags(): TagOption[] {
  return Array.from(TAG_COUNTS.entries())
    .map(([label, count]) => ({ label, slug: slugifyTag(label), count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
}

/** Reverse lookup: from a slug, find the original tag label (first match). */
export function tagLabelFromSlug(slug: string): string | undefined {
  for (const label of TAG_COUNTS.keys()) {
    if (slugifyTag(label) === slug) return label
  }
  return undefined
}

export interface TagMatches {
  characters: Character[]
  factions: Faction[]
  regions: Region[]
  timeline: TimelineEntry[]
  total: number
}

/**
 * Aggregate every entry whose `tags` array contains a tag matching `slug`
 * (case- and diacritic-insensitive via `slugifyTag`).
 */
export function findEntriesByTag(slug: string): TagMatches {
  const matches = (tags?: string[]) => Boolean(tags?.some((t) => slugifyTag(t) === slug))
  const characters = charactersData.filter((c) => matches(c.tags))
  const factions   = factionsData.filter((f) => matches(f.tags))
  const regions    = regionsData.filter((r) => matches(r.tags))
  const timeline   = timelineData.filter((t) => matches(t.tags))
  return {
    characters,
    factions,
    regions,
    timeline,
    total: characters.length + factions.length + regions.length + timeline.length,
  }
}

/** Path builder for `<Link to>` in TagPills. */
export const tagPath = (tag: string) => `/etiqueta/${slugifyTag(tag)}`
