import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { DetailLayout } from '../components/detail/DetailLayout'
import {
  findTimelineEntry, neighbors, pathFor,
  resolveCharacterIds, resolveRegionIds, resolveFactionIds, resolveConceptIds, resolveTimelineIds,
} from '../data/lookups'
import { timelineData } from '../data/timeline'
import { EnrichedText } from '../components/RichLoreText'

export function TimelineDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? findTimelineEntry(slug) : undefined
  if (!entry) return <Navigate to="/timeline" replace />

  const chronoIndex = timelineData.indexOf(entry)
  const total = timelineData.length
  const progressPct = ((chronoIndex + 1) / total) * 100
  const { prev, next } = neighbors(timelineData, entry, pathFor.timeline, (t) => t.title)

  return (
    <>
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
            <ChronoMeter index={chronoIndex} total={total} pct={progressPct} />
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
          { label: 'Personajes', type: 'character', items: resolveCharacterIds(entry.relatedCharacters) },
          { label: 'Regiones', type: 'region', items: resolveRegionIds(entry.relatedRegions) },
          { label: 'Facciones', type: 'faction', items: resolveFactionIds(entry.relatedFactions) },
          { label: 'Conceptos', type: 'concept', items: resolveConceptIds(entry.relatedConcepts) },
          { label: 'Eventos relacionados', type: 'timeline', items: resolveTimelineIds(entry.relatedTimelineEvents) },
        ]}
        legacyContent={
          (!entry.deepLore || entry.deepLore.length === 0) && (
            <div className="space-y-6 mb-10">
              {entry.lore.map((p, i) => (
                <p key={i} className="font-body text-base text-codex-parchment leading-loose"><EnrichedText text={p} selfId={entry.id} /></p>
              ))}
              <section>
                <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
                  Por qué importa
                </h2>
                <p className="font-body text-base text-codex-parchment leading-loose"><EnrichedText text={entry.whyItMatters} selfId={entry.id} /></p>
              </section>
            </div>
          )
        }
        prev={prev ? { ...prev, label: `${prev.label}` } : null}
        next={next ? { ...next, label: `${next.label}` } : null}
        bookmark={{ type: 'timeline', slug: entry.slug ?? entry.id }}
      />

      <ChronoFloatingBar
        chronoIndex={chronoIndex}
        total={total}
        prevTo={prev?.to}
        nextTo={next?.to}
      />
    </>
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

function ChronoMeter({ index, total, pct }: { index: number; total: number; pct: number }) {
  return (
    <div>
      <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-1.5">
        Lectura cronológica
      </p>
      <p className="font-subheading text-sm text-codex-parchment leading-snug mb-2">
        Evento {index + 1} de {total}
      </p>
      <div className="h-1 bg-codex-brown/40 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-codex-gold/70"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <Link
        to="/timeline"
        className="inline-flex items-center gap-1 mt-2 text-[10px] font-heading text-codex-gold-dim hover:text-codex-gold-bright tracking-wider uppercase transition-colors"
      >
        <BookOpen size={10} />
        Ver índice completo
      </Link>
    </div>
  )
}

function ChronoFloatingBar({
  chronoIndex, total, prevTo, nextTo,
}: {
  chronoIndex: number
  total: number
  prevTo?: string
  nextTo?: string
}) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 lg:left-60 z-30 bg-codex-black/95 backdrop-blur-md border-t border-codex-gold-dim/25 px-4 py-2.5"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, type: 'spring', damping: 25 }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {prevTo ? (
          <Link
            to={prevTo}
            className="flex items-center gap-1.5 px-3 py-1.5 font-heading text-xs tracking-wider uppercase text-codex-parchment-dim hover:text-codex-gold-bright transition-colors"
          >
            <ChevronLeft size={12} />
            <span className="hidden sm:inline">Anterior</span>
          </Link>
        ) : <div className="w-12" />}

        <div className="flex-1 flex items-center gap-2 min-w-0">
          <div className="flex-1 h-0.5 bg-codex-brown/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-codex-gold/70 transition-all duration-500"
              style={{ width: `${((chronoIndex + 1) / total) * 100}%` }}
            />
          </div>
          <span className="shrink-0 font-heading text-[10px] text-codex-gold-dim tracking-wider uppercase">
            {chronoIndex + 1} / {total}
          </span>
        </div>

        {nextTo ? (
          <Link
            to={nextTo}
            className="flex items-center gap-1.5 px-3 py-1.5 font-heading text-xs tracking-wider uppercase text-codex-gold/80 hover:text-codex-gold-bright transition-colors"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight size={12} />
          </Link>
        ) : <div className="w-12" />}
      </div>
    </motion.div>
  )
}
