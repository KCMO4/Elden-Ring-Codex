import type { Character } from '../data/types'
import { characterFallbacks } from '../lib/fallbackMap'
import { pathFor } from '../data/lookups'
import { EntityCard } from './EntityCard'

interface Props {
  character: Character
  /** Optional position in a grid — used for subtle stagger entrance */
  index?: number
}

export function CharacterCard({ character, index = 0 }: Props) {
  return (
    <EntityCard
      to={pathFor.character(character)}
      imageCategory="characters"
      imageId={character.id}
      imageVariant="landscape"
      imageOverlayOpacity={0.35}
      fallbackType={character.fallbackType ?? characterFallbacks[character.id] ?? 'character'}
      ornamentCorners="all"
      eyebrow={character.faction}
      readType="character"
      readSlug={character.id}
      eraEntity={character}
      title={character.name}
      certainty={character.certainty}
      body={character.role}
      poetic={character.poeticDesc}
      index={index}
    />
  )
}
