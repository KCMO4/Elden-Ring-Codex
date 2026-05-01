import type { Certainty } from '../data/types'
import type { TagOption } from '../components/TagPicker'
import { CERTAINTY_RANK } from './certaintyRank'

/**
 * Build a list of TagOption[] from any items, given a getter that returns
 * a tag (or array of tags). Counts occurrences across the items.
 */
export function buildTagOptions<T>(
  items: T[],
  getTags: (item: T) => string | string[],
): TagOption[] {
  const counts = new Map<string, number>()
  for (const item of items) {
    const tags = getTags(item)
    if (Array.isArray(tags)) {
      for (const t of tags) counts.set(t, (counts.get(t) ?? 0) + 1)
    } else {
      counts.set(tags, (counts.get(tags) ?? 0) + 1)
    }
  }
  return Array.from(counts.entries()).map(([value, count]) => ({ value, count }))
}

/**
 * Comparator for sorting by certainty (confirmado < inferencia < teoría),
 * with a tie-breaker by a string key.
 */
export function compareByCertainty<T extends { certainty: Certainty }>(
  getName: (item: T) => string,
) {
  return (a: T, b: T) =>
    CERTAINTY_RANK[a.certainty] - CERTAINTY_RANK[b.certainty] ||
    getName(a).localeCompare(getName(b))
}
