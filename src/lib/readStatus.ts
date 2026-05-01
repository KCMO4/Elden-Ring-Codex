import { useEffect, useState } from 'react'
import type { EntityType } from '../data/types'

/* Tracks which entries the user has scrolled-through. An entry is marked as
   read once the user reaches >70% of its scroll depth on a detail page.
   Stored in localStorage as a Set per entity type. The synced state lets
   list cards show a subtle ✓ for already-read entries. */

const STORAGE_KEY = 'codex-read-v1'
const EVENT = 'codex-read-change'

interface ReadIndex {
  [type: string]: string[]   // EntityType → list of slugs
}

function load(): ReadIndex {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function save(idx: ReadIndex) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(idx))
    window.dispatchEvent(new CustomEvent(EVENT))
  } catch {
    /* quota exceeded or storage disabled — silently ignore */
  }
}

export function markRead(type: EntityType, slug: string) {
  const idx = load()
  const list = idx[type] ?? []
  if (list.includes(slug)) return
  idx[type] = [...list, slug]
  save(idx)
}

export function unmarkRead(type: EntityType, slug: string) {
  const idx = load()
  const list = idx[type] ?? []
  if (!list.includes(slug)) return
  idx[type] = list.filter((s) => s !== slug)
  save(idx)
}

export function isRead(type: EntityType, slug: string): boolean {
  const idx = load()
  return Boolean(idx[type]?.includes(slug))
}

/** Hook: returns a snapshot Set<slug> for the given type, synced via storage events. */
export function useReadSet(type: EntityType): Set<string> {
  const [set, setSet] = useState<Set<string>>(() => new Set(load()[type] ?? []))
  useEffect(() => {
    const onChange = () => setSet(new Set(load()[type] ?? []))
    window.addEventListener(EVENT, onChange)
    window.addEventListener('storage', onChange)
    return () => {
      window.removeEventListener(EVENT, onChange)
      window.removeEventListener('storage', onChange)
    }
  }, [type])
  return set
}
