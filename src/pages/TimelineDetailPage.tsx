import { useParams, Navigate } from 'react-router-dom'
import { DetailLayout } from '../components/detail/DetailLayout'
import {
  findTimelineEntry, neighbors, pathFor,
  resolveCharacterIds, resolveRegionIds, resolveFactionIds, resolveConceptIds, resolveTimelineIds,
} from '../data/lookups'
import { timelineData } from '../data/timeline'

export function TimelineDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? findTimelineEntry(slug) : undefined
  if (!entry) return <Navigate to="/timeline" replace />

  const { prev, next } = neighbors(timelineData, entry, pathFor.timeline, (t) => t.title)

  return (
    <DetailLayout
      breadcrumbs={[
        { label: 'Códice', to: '/' },
        { label: 'Timeline', to: '/timeline' },
        { label: entry.title },
      ]}
      title={entry.title}
      subtitle={entry.subtitle ?? entry.chapter}
      certainty={entry.certainty}
      tags={entry.tags}
      summary={entry.summary ?? entry.poeticIntro}
      heroEntity={{ category: 'timelineEvents', id: entry.id }}
      heroFallback={entry.fallbackType ?? 'concept'}
      heroVariant="banner"
      metaCard={
        <>
          <MetaRow label="Capítulo" value={`${entry.chapterNumber} · ${entry.chapter}`} />
        </>
      }
      deepLore={entry.deepLore ?? []}
      confirmed={entry.confirmed}
      inferred={entry.inferred}
      theories={entry.theories}
      ambiguous={entry.ambiguous}
      beneficiaries={entry.beneficiaries}
      victims={entry.victims}
      relatedGroups={[
        { label: 'Personajes', items: resolveCharacterIds(entry.relatedCharacters) },
        { label: 'Regiones', items: resolveRegionIds(entry.relatedRegions) },
        { label: 'Facciones', items: resolveFactionIds(entry.relatedFactions) },
        { label: 'Conceptos', items: resolveConceptIds(entry.relatedConcepts) },
        { label: 'Eventos relacionados', items: resolveTimelineIds(entry.relatedTimelineEvents) },
      ]}
      legacyContent={
        (!entry.deepLore || entry.deepLore.length === 0) && (
          <div className="space-y-6 mb-10">
            {entry.lore.map((p, i) => (
              <p key={i} className="font-body text-base text-codex-parchment leading-loose">{p}</p>
            ))}
            <section>
              <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                Por qué importa
              </h2>
              <p className="font-body text-base text-codex-parchment leading-loose">{entry.whyItMatters}</p>
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
