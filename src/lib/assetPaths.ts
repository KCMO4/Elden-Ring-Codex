import type { ImageCategory, ImageKind } from './imageSources'

export type ArtCategory = 'characters' | 'regions' | 'factions' | 'endings' | 'concepts'

export function getAssetPath(category: ArtCategory, slug: string, ext = 'jpg'): string {
  return `/art/${category}/${slug}.${ext}`
}

export function getCharacterArt(id: string) {
  return getAssetPath('characters', id)
}

export function getRegionArt(id: string) {
  return getAssetPath('regions', id)
}

export function getFactionArt(id: string) {
  return getAssetPath('factions', id)
}

export function getEndingArt(id: string) {
  return getAssetPath('endings', id)
}

export function getConceptArt(id: string) {
  return getAssetPath('concepts', id)
}

export function getTimelineArt(id: string) {
  return `/art/timeline/${id}.jpg`
}

/**
 * Maps an ImageCategory (used by image-sources.local.json) to the on-disk
 * art folder. timelineEvents has no on-disk folder by default — falls back to
 * `concepts` for fallback SVGs and a `/art/timeline/{id}.jpg` path for local.
 */
export function categoryToArtPath(category: ImageCategory, id: string): string {
  switch (category) {
    case 'characters': return getCharacterArt(id)
    case 'regions':    return getRegionArt(id)
    case 'factions':   return getFactionArt(id)
    case 'concepts':   return getConceptArt(id)
    case 'endings':    return getEndingArt(id)
    case 'timelineEvents': return getTimelineArt(id)
  }
}

export type { ImageCategory, ImageKind }
