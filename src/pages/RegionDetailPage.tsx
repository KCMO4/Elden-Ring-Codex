import { useParams, Navigate } from 'react-router-dom'
import { DetailLayout } from '../components/detail/DetailLayout'
import {
  findRegion, neighbors, pathFor,
  resolveCharacterIds, resolveRegionIds, resolveFactionIds, resolveConceptIds, resolveTimelineIds,
} from '../data/lookups'
import { regionsData } from '../data/regions'
import { regionFallbacks } from '../lib/fallbackMap'

export function RegionDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const region = slug ? findRegion(slug) : undefined
  if (!region) return <Navigate to="/regiones" replace />

  const fallback = region.fallbackType ?? regionFallbacks[region.id] ?? 'region'
  const { prev, next } = neighbors(regionsData, region, pathFor.region, (r) => r.name)

  return (
    <DetailLayout
      breadcrumbs={[
        { label: 'Códice', to: '/' },
        { label: 'Regiones', to: '/regiones' },
        { label: region.name },
      ]}
      title={region.name}
      subtitle={region.subtitle ?? region.mainFaction}
      certainty={region.certainty}
      tags={region.tags}
      summary={region.summary ?? region.historical.split('.')[0] + '.'}
      heroEntity={{ category: 'regions', id: region.id }}
      heroFallback={fallback}
      heroVariant="banner"
      metaCard={
        <>
          <MetaRow label="Facción dominante" value={region.mainFaction} />
          <MetaRow label="Bosses" value={region.bosses.join(' · ') || '—'} />
        </>
      }
      deepLore={region.deepLore ?? []}
      confirmed={region.confirmed}
      inferred={region.inferred}
      ambiguous={region.ambiguous}
      beneficiaries={region.beneficiaries}
      victims={region.victims}
      relatedGroups={[
        { label: 'Personajes', items: resolveCharacterIds(region.relatedCharacters) },
        { label: 'Facciones', items: resolveFactionIds(region.relatedFactions) },
        { label: 'Regiones vinculadas', items: resolveRegionIds(region.relatedRegions) },
        { label: 'Conceptos', items: resolveConceptIds(region.relatedConcepts) },
        { label: 'Timeline', items: resolveTimelineIds(region.relatedTimelineEvents) },
      ]}
      legacyContent={
        (!region.deepLore || region.deepLore.length === 0) && (
          <div className="space-y-6 mb-10">
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Historia documentada
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose">{region.historical}</p>
            </section>
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                La tragedia oculta
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose">{region.hiddenTragedy}</p>
            </section>
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Relación con el Timeline
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose">{region.timelineRelation}</p>
            </section>
          </div>
        )
      }
      prev={prev}
      next={next}
    />
  )
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-0.5">{label}</p>
      <p className="font-subheading text-sm text-codex-parchment leading-snug">{value}</p>
    </div>
  )
}
