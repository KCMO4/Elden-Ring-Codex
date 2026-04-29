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
