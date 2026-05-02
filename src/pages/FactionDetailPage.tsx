import { useParams, Navigate } from 'react-router-dom'
import { DetailLayout } from '../components/detail/DetailLayout'
import {
  findFaction, neighbors, pathFor,
  resolveCharacterIds, resolveRegionIds, resolveFactionIds, resolveConceptIds, resolveTimelineIds,
} from '../data/lookups'
import { factionsData } from '../data/factions'
import { factionFallbacks } from '../lib/fallbackMap'
import { EnrichedText } from '../components/RichLoreText'
import type { Faction } from '../data/types'

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
      subtitle={faction.subtitle}
      certainty={faction.certainty}
      tags={faction.tags}
      summary={faction.summary ?? buildFactionSummary(faction)}
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
      structuralFacts={<FactionStructuralFacts faction={faction} />}
      confirmed={faction.confirmed}
      inferred={faction.inferred}
      theories={faction.theories}
      ambiguous={faction.ambiguous}
      beneficiaries={faction.beneficiaries}
      victims={faction.victims}
      relatedGroups={[
        { label: 'Personajes', type: 'character', items: resolveCharacterIds(faction.relatedCharacters) },
        { label: 'Regiones', type: 'region', items: resolveRegionIds(faction.relatedRegions) },
        { label: 'Facciones rivales / aliadas', type: 'faction', items: resolveFactionIds(faction.relatedFactions) },
        { label: 'Conceptos', type: 'concept', items: resolveConceptIds(faction.relatedConcepts) },
        { label: 'Timeline', type: 'timeline', items: resolveTimelineIds(faction.relatedTimelineEvents) },
      ]}
      prev={prev}
      next={next}
      bookmark={{ type: 'faction', slug: faction.slug ?? faction.id }}
    />
  )
}

/** Hero summary fallback from structural fields. Combines `what` (1-line
   description of the faction) with `belief` (their central tenet) so the
   hero stays uniform across entries even without a curated summary. */
function buildFactionSummary(f: Faction): string {
  const what = f.what?.trim() ?? ''
  const belief = f.belief?.trim() ?? ''
  const parts: string[] = []
  if (what) parts.push(what.endsWith('.') ? what : what + '.')
  if (belief && belief.length > 12 && parts.join(' ').length < 200) {
    parts.push(belief.endsWith('.') ? belief : belief + '.')
  }
  return parts.join(' ').trim() || (f.whyMatters ?? '')
}

/* Structural facts about the faction — what they are, what they believe,
   why they matter, relation to the Golden Order. Always rendered after
   the deepLore. */
function FactionStructuralFacts({ faction }: { faction: Faction }) {
  return (
    <section aria-label="Ficha de la facción" className="space-y-4">
      {faction.what && (
        <div className="parchment-panel p-4">
          <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-1.5">
            Qué son
          </p>
          <p className="font-body text-sm text-codex-parchment-dim leading-relaxed">
            <EnrichedText text={faction.what} selfId={faction.id} />
          </p>
        </div>
      )}

      {faction.belief && (
        <div className="parchment-panel p-4 border-codex-gold-dim/25 bg-codex-green/5">
          <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-1.5">
            Creen / representan
          </p>
          <p className="font-subheading italic text-base text-codex-parchment-dim leading-relaxed">
            {faction.belief}
          </p>
        </div>
      )}

      {faction.whyMatters && (
        <div className="parchment-panel p-4">
          <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-1.5">
            Por qué importan
          </p>
          <p className="font-body text-sm text-codex-parchment-dim leading-relaxed">
            <EnrichedText text={faction.whyMatters} selfId={faction.id} />
          </p>
        </div>
      )}

      {faction.relationToOrder && (
        <div className="parchment-panel p-4 border-codex-gold-dim/30 bg-codex-brown/30">
          <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-1.5">
            Relación con el Orden Dorado
          </p>
          <p className="font-body text-sm text-codex-parchment-dim leading-relaxed">
            <EnrichedText text={faction.relationToOrder} selfId={faction.id} />
          </p>
        </div>
      )}
    </section>
  )
}
