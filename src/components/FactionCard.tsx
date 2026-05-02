import type { Faction } from '../data/types'
import { factionFallbacks } from '../lib/fallbackMap'
import { pathFor } from '../data/lookups'
import { EntityCard } from './EntityCard'

interface Props {
  faction: Faction
  /** Optional position in a grid — used for subtle stagger entrance */
  index?: number
}

export function FactionCard({ faction, index = 0 }: Props) {
  return (
    <EntityCard
      to={pathFor.faction(faction)}
      imageCategory="factions"
      imageId={faction.id}
      imageVariant="card"
      imageOverlayOpacity={0.45}
      fallbackType={faction.fallbackType ?? factionFallbacks[faction.id] ?? 'faction'}
      ornamentCorners="all"
      ornamentSize="sm"
      readType="faction"
      readSlug={faction.id}
      eraEntity={faction}
      title={faction.name}
      certainty={faction.certainty}
      body={faction.what}
      index={index}
    />
  )
}
