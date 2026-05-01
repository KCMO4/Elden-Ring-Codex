import { useParams, Navigate } from 'react-router-dom'
import { DetailLayout } from '../components/detail/DetailLayout'
import {
  findEnding, neighbors, pathFor,
  resolveCharacterIds, resolveRegionIds, resolveFactionIds, resolveConceptIds, resolveTimelineIds,
} from '../data/lookups'
import { endingsData } from '../data/endings'

export function EndingDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const ending = slug ? findEnding(slug) : undefined
  if (!ending) return <Navigate to="/finales" replace />

  const { prev, next } = neighbors(endingsData, ending, pathFor.ending, (e) => e.name)

  return (
    <DetailLayout
      breadcrumbs={[
        { label: 'Códice', to: '/' },
        { label: 'Finales', to: '/finales' },
        { label: ending.name },
      ]}
      title={ending.name}
      subtitle={ending.subtitle ?? ending.whoLeads}
      summary={ending.summary ?? ending.description}
      heroEntity={{ category: 'endings', id: ending.id }}
      heroFallback={ending.fallbackType ?? 'ending-fracture'}
      heroVariant="banner"
      metaCard={
        <>
          <MetaRow label="Quien lo desencadena" value={ending.whoLeads} />
        </>
      }
      deepLore={ending.deepLore ?? []}
      confirmed={ending.confirmed}
      inferred={ending.inferred}
      theories={ending.theories}
      ambiguous={ending.ambiguous}
      relatedGroups={[
        { label: 'Personajes', type: 'character', items: resolveCharacterIds(ending.relatedCharacters) },
        { label: 'Regiones', type: 'region', items: resolveRegionIds(ending.relatedRegions) },
        { label: 'Facciones', type: 'faction', items: resolveFactionIds(ending.relatedFactions) },
        { label: 'Conceptos', type: 'concept', items: resolveConceptIds(ending.relatedConcepts) },
        { label: 'Timeline', type: 'timeline', items: resolveTimelineIds(ending.relatedTimelineEvents) },
      ]}
      legacyContent={
        (!ending.deepLore || ending.deepLore.length === 0) && (
          <div className="space-y-6 mb-10">
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Significado filosófico
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose italic">{ending.meaning}</p>
            </section>
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Consecuencia
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose">{ending.consequence}</p>
            </section>
          </div>
        )
      }
      prev={prev}
      next={next}
      bookmark={{ type: 'ending', slug: ending.slug ?? ending.id }}
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
