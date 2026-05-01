import type { ImageCategory, ImageKind } from './imageSources'

const CATEGORY_TO_FOLDER: Record<ImageCategory, string> = {
  characters:     'characters',
  regions:        'regions',
  factions:       'factions',
  concepts:       'concepts',
  endings:        'endings',
  timelineEvents: 'timeline',
}

/** Resuelve un path on-disk en /art/<folder>/<id>.jpg para una entidad. */
export function categoryToArtPath(category: ImageCategory, id: string): string {
  return `/art/${CATEGORY_TO_FOLDER[category]}/${id}.jpg`
}

export type { ImageCategory, ImageKind }
