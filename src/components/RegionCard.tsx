import type { Region } from '../data/types'
import { regionFallbacks } from '../lib/fallbackMap'
import { pathFor } from '../data/lookups'
import { EntityCard } from './EntityCard'

interface Props {
  region: Region
  /** Optional position in a grid — used for subtle stagger entrance */
  index?: number
}

export function RegionCard({ region, index = 0 }: Props) {
  return (
    <EntityCard
      to={pathFor.region(region)}
      imageCategory="regions"
      imageId={region.id}
      imageVariant="banner"
      imageOverlayOpacity={0.4}
      fallbackType={region.fallbackType ?? regionFallbacks[region.id] ?? 'region'}
      ornamentCorners="top"
      eyebrow={region.mainFaction}
      readType="region"
      readSlug={region.id}
      eraEntity={region}
      title={region.name}
      certainty={region.certainty}
      body={region.historical}
      index={index}
    />
  )
}
