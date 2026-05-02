import { useEffect, useState } from 'react'
import type { EntityType } from '../data/types'

const STORAGE_KEY = 'codex-notes-v1'
const EVENT_KEY = 'codex-notes-change'

type NoteMap = Record<string, string>  // key = `${type}:${slug}`

function noteKey(type: EntityType, slug: string): string {
  return `${type}:${slug}`
}

function read(): NoteMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return typeof parsed === 'object' && parsed !== null ? parsed : {}
  } catch {
    return {}
  }
}

function write(map: NoteMap): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map))
    /* Custom event so other tabs/components in the same window stay in sync */
    window.dispatchEvent(new CustomEvent(EVENT_KEY))
  } catch {
    /* Quota exceeded or storage disabled — silent fail */
  }
}

export function getNote(type: EntityType, slug: string): string {
  return read()[noteKey(type, slug)] ?? ''
}

export function setNote(type: EntityType, slug: string, content: string): void {
  const map = read()
  const k = noteKey(type, slug)
  if (content.trim().length === 0) {
    delete map[k]
  } else {
    map[k] = content
  }
  write(map)
}

/** Reactive hook — returns the note for a given entity and a setter that
   updates localStorage + broadcasts change events. */
export function useNote(type: EntityType, slug: string): [string, (next: string) => void] {
  const [note, setLocal] = useState<string>(() => getNote(type, slug))

  useEffect(() => {
    setLocal(getNote(type, slug))
    const onChange = () => setLocal(getNote(type, slug))
    window.addEventListener(EVENT_KEY, onChange)
    window.addEventListener('storage', onChange)
    return () => {
      window.removeEventListener(EVENT_KEY, onChange)
      window.removeEventListener('storage', onChange)
    }
  }, [type, slug])

  const update = (next: string) => {
    setNote(type, slug, next)
    setLocal(next)
  }

  return [note, update]
}
