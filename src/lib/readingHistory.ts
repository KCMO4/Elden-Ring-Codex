import { useEffect, useState, useCallback } from 'react'
import type { EntityType } from '../data/types'

const STORAGE_KEY = 'codex-reading-history-v1'
const MAX_ENTRIES = 24

export interface HistoryItem {
  type: EntityType
  slug: string
  label: string
  sublabel?: string
  visitedAt: number
}

function read(): HistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function write(items: HistoryItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  window.dispatchEvent(new CustomEvent('codex-history-change'))
}

const itemKey = (type: EntityType, slug: string) => `${type}:${slug}`

/**
 * Append (or move-to-top) an entry to the recently-viewed list. Capped at
 * MAX_ENTRIES; oldest entries fall off when capacity is reached.
 */
export function recordVisit(item: Omit<HistoryItem, 'visitedAt'>) {
  if (typeof window === 'undefined') return
  const k = itemKey(item.type, item.slug)
  const current = read().filter((h) => itemKey(h.type, h.slug) !== k)
  const next: HistoryItem[] = [
    { ...item, visitedAt: Date.now() },
    ...current,
  ].slice(0, MAX_ENTRIES)
  write(next)
}

export function useReadingHistory() {
  const [items, setItems] = useState<HistoryItem[]>(() =>
    typeof window === 'undefined' ? [] : read(),
  )

  useEffect(() => {
    const handler = () => setItems(read())
    window.addEventListener('codex-history-change', handler)
    window.addEventListener('storage', handler)
    return () => {
      window.removeEventListener('codex-history-change', handler)
      window.removeEventListener('storage', handler)
    }
  }, [])

  const clear = useCallback(() => {
    write([])
  }, [])

  return { items, clear }
}

/**
 * Per-type counts for landing-page progress meters
 * ("12 de 53 capítulos leídos").
 */
export function progressByType(items: HistoryItem[]): Record<EntityType, number> {
  const acc: Record<EntityType, number> = {
    character: 0, region: 0, faction: 0, concept: 0, ending: 0, timeline: 0,
  }
  for (const i of items) acc[i.type] = (acc[i.type] ?? 0) + 1
  return acc
}
