import { useParams, Navigate } from 'react-router-dom'
import { DetailLayout } from '../components/detail/DetailLayout'
import {
  findConcept, neighbors, pathFor,
  resolveCharacterIds, resolveRegionIds, resolveFactionIds, resolveConceptIds, resolveTimelineIds,
} from '../data/lookups'
import { glossaryData } from '../data/glossary'
import { glossaryFallbacks } from '../lib/fallbackMap'
import { EnrichedText } from '../components/RichLoreText'

export function ConceptDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const concept = slug ? findConcept(slug) : undefined
  if (!concept) return <Navigate to="/conceptos" replace />

  const fallback = concept.fallbackType ?? glossaryFallbacks[concept.id] ?? 'concept'
  const { prev, next } = neighbors(glossaryData, concept, pathFor.concept, (c) => c.term)

  return (
    <DetailLayout
      breadcrumbs={[
        { label: 'Códice', to: '/' },
        { label: 'Conceptos', to: '/conceptos' },
        { label: concept.term },
      ]}
      title={concept.term}
      subtitle={concept.subtitle}
      certainty={concept.certainty}
      summary={concept.summary ?? concept.definition}
      heroEntity={{ category: 'concepts', id: concept.id }}
      heroFallback={fallback}
      heroVariant="banner"
      deepLore={concept.deepLore ?? []}
      confirmed={concept.confirmed}
      inferred={concept.inferred}
      theories={concept.theories}
      ambiguous={concept.ambiguous}
      relatedGroups={[
        { label: 'Personajes vinculados', type: 'character', items: resolveCharacterIds(concept.relatedCharacters) },
        { label: 'Regiones', type: 'region', items: resolveRegionIds(concept.relatedRegions) },
        { label: 'Facciones', type: 'faction', items: resolveFactionIds(concept.relatedFactions) },
        { label: 'Conceptos relacionados', type: 'concept', items: resolveConceptIds(concept.relatedConcepts) },
        { label: 'Timeline', type: 'timeline', items: resolveTimelineIds(concept.relatedTimelineEvents) },
      ]}
      legacyContent={
        (!concept.deepLore || concept.deepLore.length === 0) && (
          <div className="space-y-6 mb-10">
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Definición
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose"><EnrichedText text={concept.definition} selfId={concept.id} /></p>
            </section>
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Análisis profundo
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose"><EnrichedText text={concept.deepDive} selfId={concept.id} /></p>
            </section>
          </div>
        )
      }
      prev={prev}
      next={next}
      bookmark={{ type: 'concept', slug: concept.slug ?? concept.id }}
    />
  )
}
