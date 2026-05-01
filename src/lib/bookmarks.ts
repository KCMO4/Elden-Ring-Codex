import { useEffect, useState, useCallback } from 'react'
import type { EntityType } from '../data/types'

const STORAGE_KEY = 'codex-bookmarks-v1'

export interface Bookmark {
  type: EntityType
  slug: string
  addedAt: number
}

function read(): Bookmark[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function write(items: Bookmark[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  window.dispatchEvent(new CustomEvent('codex-bookmarks-change'))
}

const key = (type: EntityType, slug: string) => `${type}:${slug}`

export function useBookmarks() {
  const [items, setItems] = useState<Bookmark[]>(() => (typeof window === 'undefined' ? [] : read()))

  useEffect(() => {
    const handler = () => setItems(read())
    window.addEventListener('codex-bookmarks-change', handler)
    window.addEventListener('storage', handler)
    return () => {
      window.removeEventListener('codex-bookmarks-change', handler)
      window.removeEventListener('storage', handler)
    }
  }, [])

  const add = useCallback((type: EntityType, slug: string) => {
    const current = read()
    if (current.some((b) => key(b.type, b.slug) === key(type, slug))) return
    write([{ type, slug, addedAt: Date.now() }, ...current])
  }, [])

  const remove = useCallback((type: EntityType, slug: string) => {
    const current = read()
    write(current.filter((b) => key(b.type, b.slug) !== key(type, slug)))
  }, [])

  const toggle = useCallback((type: EntityType, slug: string) => {
    const current = read()
    if (current.some((b) => key(b.type, b.slug) === key(type, slug))) {
      write(current.filter((b) => key(b.type, b.slug) !== key(type, slug)))
    } else {
      write([{ type, slug, addedAt: Date.now() }, ...current])
    }
  }, [])

  const has = useCallback(
    (type: EntityType, slug: string) =>
      items.some((b) => key(b.type, b.slug) === key(type, slug)),
    [items],
  )

  return { items, add, remove, toggle, has }
}
