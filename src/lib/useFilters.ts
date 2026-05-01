import { useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useRef } from 'react'
import type { Certainty } from '../data/types'

const VALID_CERTAINTY: ReadonlyArray<Certainty | 'all'> = ['all', 'confirmado', 'inferencia', 'teoria']

function isCertainty(s: string): s is Certainty | 'all' {
  return (VALID_CERTAINTY as readonly string[]).includes(s)
}

interface FilterOptions<TSort extends string> {
  defaultSort: TSort
  validSorts: ReadonlyArray<TSort>
  /** When true, exposes a secondary tags axis (used in CharacterSection where
   *  primary = factions and secondary = named tags). */
  withSecondaryTags?: boolean
  /** When provided, the current filter state is mirrored to
   *  localStorage[`codex-filters-v1:${storageKey}`]. When the user navigates
   *  back to the section without filter params, the saved state is restored
   *  to the URL so they pick up where they left off. URL always wins on
   *  initial load (preserves share-link behaviour). */
  storageKey?: string
}

const STORAGE_PREFIX = 'codex-filters-v1:'
const FILTER_KEYS = ['q', 'cert', 'tags', 'factions', 'sort'] as const

interface FilterState<TSort extends string> {
  search: string
  setSearch: (v: string) => void
  certainty: Certainty | 'all'
  setCertainty: (v: Certainty | 'all') => void
  tags: string[]
  setTags: (v: string[]) => void
  secondaryTags: string[]
  setSecondaryTags: (v: string[]) => void
  sort: TSort
  setSort: (v: TSort) => void
  clearAll: () => void
}

/**
 * Centralized filter state that syncs with URL search params, so reloading
 * or sharing a filtered view is preserved. All sections use this hook —
 * search, certainty, tags, optional secondary tags, sort.
 *
 * URL keys: ?q=...&cert=...&tags=A,B&factions=X,Y&sort=name-asc
 *
 * The hook intentionally omits empty values from the URL to keep clean URLs.
 */
export function useFilters<TSort extends string>(opts: FilterOptions<TSort>): FilterState<TSort> {
  const [params, setParams] = useSearchParams()
  const storageKey = opts.storageKey ? STORAGE_PREFIX + opts.storageKey : null
  const hydratedRef = useRef(false)

  /* Hydrate from localStorage on first mount when the URL has no filter
     params yet. URL takes precedence — shared links keep working unchanged. */
  useEffect(() => {
    if (!storageKey || hydratedRef.current) return
    hydratedRef.current = true
    const hasUrl = FILTER_KEYS.some((k) => params.get(k))
    if (hasUrl) return
    try {
      const raw = localStorage.getItem(storageKey)
      if (!raw) return
      const saved = JSON.parse(raw) as Record<string, string>
      const next = new URLSearchParams()
      for (const k of FILTER_KEYS) {
        const v = saved[k]
        if (typeof v === 'string' && v) next.set(k, v)
      }
      if ([...next.keys()].length > 0) setParams(next, { replace: true })
    } catch { /* malformed JSON or storage disabled — ignore */ }
  }, [storageKey, params, setParams])

  /* Mirror current URL filter state to localStorage. Removed when empty so
     hydration on next visit knows there's nothing to restore. */
  useEffect(() => {
    if (!storageKey) return
    const obj: Record<string, string> = {}
    for (const k of FILTER_KEYS) {
      const v = params.get(k)
      if (v) obj[k] = v
    }
    try {
      if (Object.keys(obj).length === 0) localStorage.removeItem(storageKey)
      else localStorage.setItem(storageKey, JSON.stringify(obj))
    } catch { /* quota / disabled — ignore */ }
  }, [params, storageKey])

  /* ─── Reads ───────────────────────────────────────────── */
  const search = params.get('q') ?? ''
  const certaintyRaw = params.get('cert')
  const certainty: Certainty | 'all' =
    certaintyRaw && isCertainty(certaintyRaw) ? certaintyRaw : 'all'
  const tags = parseList(params.get('tags'))
  const secondaryTags = parseList(params.get('factions'))
  const sortRaw = params.get('sort')
  const sort: TSort = sortRaw && (opts.validSorts as readonly string[]).includes(sortRaw)
    ? (sortRaw as TSort)
    : opts.defaultSort

  /* ─── Writes ─────────────────────────────────────────── */
  const update = useCallback((mut: (next: URLSearchParams) => void) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev)
      mut(next)
      return next
    }, { replace: true })
  }, [setParams])

  const setSearch = useCallback((v: string) => {
    update((p) => { v ? p.set('q', v) : p.delete('q') })
  }, [update])

  const setCertainty = useCallback((v: Certainty | 'all') => {
    update((p) => { v === 'all' ? p.delete('cert') : p.set('cert', v) })
  }, [update])

  const setTags = useCallback((v: string[]) => {
    update((p) => { v.length === 0 ? p.delete('tags') : p.set('tags', v.join(',')) })
  }, [update])

  const setSecondaryTags = useCallback((v: string[]) => {
    update((p) => { v.length === 0 ? p.delete('factions') : p.set('factions', v.join(',')) })
  }, [update])

  const setSort = useCallback((v: TSort) => {
    update((p) => { v === opts.defaultSort ? p.delete('sort') : p.set('sort', v) })
  }, [update, opts.defaultSort])

  const clearAll = useCallback(() => {
    update((p) => {
      p.delete('q')
      p.delete('cert')
      p.delete('tags')
      p.delete('factions')
      p.delete('sort')
    })
  }, [update])

  return {
    search, setSearch,
    certainty, setCertainty,
    tags, setTags,
    secondaryTags, setSecondaryTags,
    sort, setSort,
    clearAll,
  }
}

function parseList(raw: string | null): string[] {
  if (!raw) return []
  return raw.split(',').map((s) => s.trim()).filter(Boolean)
}
