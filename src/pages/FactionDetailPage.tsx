import { useParams, Navigate } from 'react-router-dom'
import { DetailLayout } from '../components/detail/DetailLayout'
import {
  findFaction, neighbors, pathFor,
  resolveCharacterIds, resolveRegionIds, resolveFactionIds, resolveConceptIds, resolveTimelineIds,
} from '../data/lookups'
import { factionsData } from '../data/factions'
import { factionFallbacks } from '../lib/fallbackMap'

export function FactionDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const faction = slug ? findFaction(slug) : undefined
  if (!faction) return <Navigate to="/facciones" replace />

  const fallback = faction.fallbackType ?? factionFallbacks[faction.id] ?? 'faction'
  const { prev, next } = neighbors(factionsData, faction, pathFor.faction, (f) => f.name)

  return (
    <DetailLayout
      breadcrumbs={[
        { label: 'Códice', to: '/' },
        { label: 'Facciones', to: '/facciones' },
        { label: faction.name },
      ]}
      title={faction.name}
      subtitle={faction.subtitle ?? faction.what}
      certainty={faction.certainty}
      tags={faction.tags}
      summary={faction.summary ?? faction.belief}
      heroEntity={{ category: 'factions', id: faction.id }}
      heroFallback={fallback}
      heroVariant="banner"
      metaCard={
        faction.keyMembers && faction.keyMembers.length > 0 ? (
          <div>
            <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-1">Miembros clave</p>
            <ul className="space-y-1">
              {faction.keyMembers.map((m) => (
                <li key={m} className="font-subheading text-sm text-codex-parchment">{m}</li>
              ))}
            </ul>
          </div>
        ) : null
      }
      deepLore={faction.deepLore ?? []}
      confirmed={faction.confirmed}
      inferred={faction.inferred}
      ambiguous={faction.ambiguous}
      beneficiaries={faction.beneficiaries}
      victims={faction.victims}
      relatedGroups={[
        { label: 'Personajes', items: resolveCharacterIds(faction.relatedCharacters) },
        { label: 'Regiones', items: resolveRegionIds(faction.relatedRegions) },
        { label: 'Facciones rivales / aliadas', items: resolveFactionIds(faction.relatedFactions) },
        { label: 'Conceptos', items: resolveConceptIds(faction.relatedConcepts) },
        { label: 'Timeline', items: resolveTimelineIds(faction.relatedTimelineEvents) },
      ]}
      legacyContent={
        (!faction.deepLore || faction.deepLore.length === 0) && (
          <div className="space-y-6 mb-10">
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Qué son
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose">{faction.what}</p>
            </section>
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Su creencia central
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose italic">{faction.belief}</p>
            </section>
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Por qué importa
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose">{faction.whyMatters}</p>
            </section>
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Relación con el Orden
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose">{faction.relationToOrder}</p>
            </section>
          </div>
        )
      }
      prev={prev}
      next={next}
    />
  )
}
