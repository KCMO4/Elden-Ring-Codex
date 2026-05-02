import { useParams, Navigate } from 'react-router-dom'
import { DetailLayout } from '../components/detail/DetailLayout'
import {
  findRegion, neighbors, pathFor,
  resolveCharacterIds, resolveRegionIds, resolveFactionIds, resolveConceptIds, resolveTimelineIds,
} from '../data/lookups'
import { regionsData } from '../data/regions'
import { regionFallbacks } from '../lib/fallbackMap'
import { EnrichedText } from '../components/RichLoreText'
import type { Region } from '../data/types'

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
      summary={region.summary ?? buildRegionSummary(region)}
      heroEntity={{ category: 'regions', id: region.id }}
      heroFallback={fallback}
      heroVariant="banner"
      metaCard={
        <>
          <MetaRow label="Facción dominante" value={region.mainFaction} />
        </>
      }
      deepLore={region.deepLore ?? []}
      structuralFacts={<RegionStructuralFacts region={region} />}
      confirmed={region.confirmed}
      inferred={region.inferred}
      theories={region.theories}
      ambiguous={region.ambiguous}
      beneficiaries={region.beneficiaries}
      victims={region.victims}
      relatedGroups={[
        { label: 'Personajes', type: 'character', items: resolveCharacterIds(region.relatedCharacters) },
        { label: 'Facciones', type: 'faction', items: resolveFactionIds(region.relatedFactions) },
        { label: 'Regiones vinculadas', type: 'region', items: resolveRegionIds(region.relatedRegions) },
        { label: 'Conceptos', type: 'concept', items: resolveConceptIds(region.relatedConcepts) },
        { label: 'Timeline', type: 'timeline', items: resolveTimelineIds(region.relatedTimelineEvents) },
      ]}
      prev={prev}
      next={next}
      bookmark={{ type: 'region', slug: region.slug ?? region.id }}
    />
  )
}

/** Build a hero summary from structural fields when there's no curated one.
   Takes the first 1-2 sentences of `historical` plus `hiddenTragedy` as
   a closing hook. */
function buildRegionSummary(r: Region): string {
  const historical = r.historical?.trim() ?? ''
  const tragedy = r.hiddenTragedy?.trim() ?? ''
  const firstTwo = historical.split('.').slice(0, 2).join('.').trim()
  const lead = firstTwo ? (firstTwo.endsWith('.') ? firstTwo : firstTwo + '.') : ''
  if (tragedy && lead.length < 200) {
    return `${lead} ${tragedy.endsWith('.') ? tragedy : tragedy + '.'}`.trim()
  }
  return lead || historical
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-0.5">{label}</p>
      <p className="font-subheading text-sm text-codex-parchment leading-snug"><EnrichedText text={value} /></p>
    </div>
  )
}

/* Structural facts about the region — historical relevance, bosses,
   hidden tragedy, timeline relation. Always rendered after the deepLore. */
function RegionStructuralFacts({ region }: { region: Region }) {
  const hasBosses = region.bosses && region.bosses.length > 0
  return (
    <section aria-label="Ficha de la región" className="space-y-4">
      {region.historical && (
        <div className="parchment-panel p-4">
          <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-1.5">
            Relevancia histórica
          </p>
          <p className="font-body text-sm text-codex-parchment-dim leading-relaxed">
            <EnrichedText text={region.historical} selfId={region.id} />
          </p>
        </div>
      )}

      {hasBosses && (
        <div className="parchment-panel p-4">
          <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-2.5">
            Jefes y encuentros
          </p>
          <ul className="space-y-1.5">
            {region.bosses.map((b, i) => (
              <li key={i} className="font-body text-sm text-codex-parchment-dim leading-relaxed flex gap-2">
                <span className="text-codex-crimson mt-0.5 shrink-0">⚔</span>
                <span><EnrichedText text={b} selfId={region.id} /></span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {region.hiddenTragedy && (
        <div className="parchment-panel p-4 border-codex-rot/35 bg-codex-rot/5">
          <p className="font-heading text-[10px] text-codex-rot/85 tracking-widest uppercase mb-1.5">
            Tragedia oculta
          </p>
          <p className="font-subheading italic text-base text-codex-parchment-dim leading-relaxed">
            {region.hiddenTragedy}
          </p>
        </div>
      )}

      {region.timelineRelation && (
        <div className="parchment-panel p-4 border-codex-gold-dim/25 bg-codex-green/5">
          <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-1.5">
            Relación con el timeline
          </p>
          <p className="font-body text-sm text-codex-parchment-dim leading-relaxed">
            <EnrichedText text={region.timelineRelation} selfId={region.id} />
          </p>
        </div>
      )}
    </section>
  )
}
