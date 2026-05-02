import { useEffect, useMemo, useState } from 'react'
import type { Expansion } from '../data/types'

/* ─────────────────────────────────────────────────────────────
   Expansion filter — base / sote / all
   Lets the reader hide DLC content from a base-only playthrough,
   without segregating entities. The marker lives at block / item
   level (see RichBlock and BucketItem types), so a single entity
   like Marika can have base + SOTE sections and the reader picks
   what to see.
   ───────────────────────────────────────────────────────────── */

const STORAGE_KEY = 'codex-expansion-v1'
const EVENT_KEY = 'codex-expansion-change'

/** What the reader wants to see:
 *   - 'all'  → both base and sote (default)
 *   - 'base' → hide every block / item marked `expansion: 'sote'`
 */
export type ExpansionFilter = 'all' | 'base'

function readStored(): ExpansionFilter {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'all' || v === 'base') return v
  } catch {/* noop */}
  return 'all'
}

function write(value: ExpansionFilter): void {
  try {
    localStorage.setItem(STORAGE_KEY, value)
    window.dispatchEvent(new CustomEvent(EVENT_KEY))
  } catch {/* noop */}
}

/** Reactive hook — current filter + setter. */
export function useExpansion(): {
  filter: ExpansionFilter
  setFilter: (next: ExpansionFilter) => void
  hideSote: boolean
} {
  const [filter, setLocal] = useState<ExpansionFilter>(() => readStored())

  useEffect(() => {
    const onChange = () => setLocal(readStored())
    window.addEventListener(EVENT_KEY, onChange)
    window.addEventListener('storage', onChange)
    return () => {
      window.removeEventListener(EVENT_KEY, onChange)
      window.removeEventListener('storage', onChange)
    }
  }, [])

  const setFilter = (next: ExpansionFilter) => {
    write(next)
    setLocal(next)
  }

  return { filter, setFilter, hideSote: filter === 'base' }
}

/** Reactive helper to filter a list of entities (Character, Region, etc.)
   by their root-level `expansion` field. Returns the original list when
   filter='all', or only base entries when filter='base'.
   The returned helpers are memoized on `hideSote` so that consumers using
   `byExpansion` in `useMemo` deps don't recompute on every render. */
export function useEntityFilter(): {
  hideSote: boolean
  visible: <T extends { expansion?: Expansion }>(items: T[]) => T[]
  isVisible: (entity: { expansion?: Expansion }) => boolean
  hiddenCount: <T extends { expansion?: Expansion }>(items: T[]) => number
} {
  const { hideSote } = useExpansion()
  return useMemo(() => ({
    hideSote,
    visible: <T extends { expansion?: Expansion }>(items: T[]) =>
      hideSote ? items.filter((i) => i.expansion !== 'sote') : items,
    isVisible: (entity: { expansion?: Expansion }) =>
      !hideSote || entity.expansion !== 'sote',
    hiddenCount: <T extends { expansion?: Expansion }>(items: T[]) =>
      hideSote ? items.filter((i) => i.expansion === 'sote').length : 0,
  }), [hideSote])
}
