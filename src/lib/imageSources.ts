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
    const controller = new AbortController()
    ;(async () => {
      try {
        const r = await fetch('/image-sources.local.json', {
          cache: 'no-store',
          signal: controller.signal,
        })
        if (!r.ok) return
        const data = await r.json()
        if (data && typeof data === 'object') {
          setSources(data as ImageSources)
        }
      } catch {
        /* override file is optional — silently ignore network/parse errors */
      }
    })()
    return () => controller.abort()
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

