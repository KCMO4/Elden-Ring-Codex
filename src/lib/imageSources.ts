import { createContext, useContext, useEffect, useState, type ReactNode, createElement } from 'react'

export type ImageCategory =
  | 'characters'
  | 'regions'
  | 'factions'
  | 'concepts'
  | 'endings'
  | 'timelineEvents'

export type ImageKind = 'image' | 'banner'

export interface ImageEntry {
  image?: string
  banner?: string
  source?: string
  credit?: string
  localOnly?: boolean
  note?: string
}

export type ImageSources = Partial<Record<ImageCategory, Record<string, ImageEntry>>> & {
  _meta?: unknown
}

const ImageSourcesContext = createContext<ImageSources>({})

export function ImageSourcesProvider({ children }: { children: ReactNode }) {
  const [sources, setSources] = useState<ImageSources>({})

  useEffect(() => {
    let alive = true
    fetch('/image-sources.local.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (alive && data && typeof data === 'object') setSources(data as ImageSources)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])

  return createElement(ImageSourcesContext.Provider, { value: sources }, children)
}

export function useImageSources(): ImageSources {
  return useContext(ImageSourcesContext)
}

export function useEntityImage(
  category: ImageCategory,
  id: string | undefined | null,
  kind: ImageKind = 'image'
): string | null {
  const sources = useImageSources()
  if (!id) return null
  const entry = sources[category]?.[id]
  if (!entry) return null
  return entry[kind] || entry.image || null
}

export function useEntityImageMeta(
  category: ImageCategory,
  id: string | undefined | null
): ImageEntry | null {
  const sources = useImageSources()
  if (!id) return null
  return sources[category]?.[id] ?? null
}
