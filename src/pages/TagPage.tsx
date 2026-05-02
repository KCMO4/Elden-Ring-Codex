import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tag as TagIcon, ArrowRight, Hash } from 'lucide-react'
import {
  findEntriesByTag, tagLabelFromSlug, getAllTags, tagPath,
} from '../lib/tagAggregator'
import { pathFor } from '../data/lookups'
import { EnrichedText } from '../components/RichLoreText'
import { SectionHero } from '../components/SectionHero'
import { CertaintyBadge } from '../components/CertaintyBadge'
import { RuneSeparator } from '../components/illustrations/RuneSeparator'
import { usePageMeta } from '../lib/pageMeta'
import type { Certainty } from '../data/types'

export function TagPage() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return <Navigate to="/" replace />

  const label = tagLabelFromSlug(slug)
  const matches = findEntriesByTag(slug)
  const hasMatches = matches.total > 0

  usePageMeta({
    title: label ? `Etiqueta: ${label}` : 'Etiqueta no encontrada',
    description: label
      ? `${matches.total} entrada${matches.total === 1 ? '' : 's'} del codex marcadas con "${label}".`
      : undefined,
  })

  if (!label || !hasMatches) {
    return <UnknownTagState slug={slug} />
  }

  return (
    <article>
      <SectionHero fallbackType="concept" />

      <div className="codex-section pt-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="font-heading text-xs text-codex-gold-dim tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
            <TagIcon size={12} /> Etiqueta del códice
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-codex-gold-bright leading-tight"
              style={{ textShadow: '0 0 30px rgba(197,160,89,0.18)' }}>
            {label}
          </h1>
          <p className="font-subheading italic text-codex-parchment-dim mt-3 text-lg">
            {matches.total} entrada{matches.total === 1 ? '' : 's'} del códice — repartidas entre{' '}
            {[
              matches.characters.length && `${matches.characters.length} personajes`,
              matches.factions.length   && `${matches.factions.length} facciones`,
              matches.regions.length    && `${matches.regions.length} regiones`,
              matches.timeline.length   && `${matches.timeline.length} eventos del Timeline`,
            ].filter(Boolean).join(' · ')}.
          </p>
        </motion.div>

        <RuneSeparator className="mb-10 opacity-40" />

        <div className="space-y-12 max-w-4xl">
          {matches.characters.length > 0 && (
            <Group title="Personajes" count={matches.characters.length}>
              {matches.characters.map((c) => (
                <ResultCard
                  key={c.id}
                  to={pathFor.character(c)}
                  title={c.name}
                  sublabel={c.role}
                  certainty={c.certainty}
                  context={c.faction}
                />
              ))}
            </Group>
          )}

          {matches.factions.length > 0 && (
            <Group title="Facciones" count={matches.factions.length}>
              {matches.factions.map((f) => (
                <ResultCard
                  key={f.id}
                  to={pathFor.faction(f)}
                  title={f.name}
                  sublabel={f.what}
                  certainty={f.certainty}
                />
              ))}
            </Group>
          )}

          {matches.regions.length > 0 && (
            <Group title="Regiones" count={matches.regions.length}>
              {matches.regions.map((r) => (
                <ResultCard
                  key={r.id}
                  to={pathFor.region(r)}
                  title={r.name}
                  sublabel={r.historical}
                  certainty={r.certainty}
                  context={r.mainFaction}
                />
              ))}
            </Group>
          )}

          {matches.timeline.length > 0 && (
            <Group title="Timeline" count={matches.timeline.length}>
              {matches.timeline.map((t) => (
                <ResultCard
                  key={t.id}
                  to={pathFor.timeline(t)}
                  title={t.title}
                  sublabel={t.poeticIntro}
                  certainty={t.certainty}
                  context={t.chapter}
                />
              ))}
            </Group>
          )}
        </div>

        {/* Related tags */}
        <RelatedTagsBlock currentSlug={slug} />
      </div>
    </article>
  )
}

/* ──────────────────────────────────────────────────────────── */

function Group({
  title, count, children,
}: {
  title: string
  count: number
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="flex items-baseline gap-3 mb-4">
        <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide">{title}</h2>
        <span className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase">
          {count} entrada{count === 1 ? '' : 's'}
        </span>
      </div>
      <div className="space-y-2">{children}</div>
    </section>
  )
}

function ResultCard({
  to, title, sublabel, certainty, context,
}: {
  to: string
  title: string
  sublabel?: string
  certainty: Certainty
  context?: string
}) {
  return (
    <Link
      to={to}
      className="block parchment-panel p-4 group hover:border-codex-gold-dim/60
                 hover:shadow-[0_0_15px_rgba(197,160,89,0.07)] transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-heading text-lg text-codex-parchment group-hover:text-codex-gold-bright transition-colors leading-tight">
              {title}
            </h3>
            {context && (
              <span className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase">
                {context}
              </span>
            )}
          </div>
          {sublabel && (
            <p className="font-body text-sm text-codex-parchment-dim mt-1 leading-snug line-clamp-2">
              <EnrichedText text={sublabel} />
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <CertaintyBadge certainty={certainty} />
          <ArrowRight size={14} className="text-codex-gold-dim group-hover:text-codex-gold-bright transition-colors" />
        </div>
      </div>
    </Link>
  )
}

function RelatedTagsBlock({ currentSlug }: { currentSlug: string }) {
  /* Show the 24 most-popular tags excluding the current one — gives a
     "next thread to pull" without overloading the page. */
  const tags = getAllTags()
    .filter((t) => t.slug !== currentSlug)
    .slice(0, 24)

  if (tags.length === 0) return null

  return (
    <section className="mt-16 pt-10 border-t border-codex-gold-dim/20">
      <p className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase mb-4 flex items-center gap-2">
        <Hash size={12} /> Otras etiquetas
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <Link
            key={t.slug}
            to={tagPath(t.label)}
            className="inline-flex items-baseline gap-1.5 px-3 py-1 rounded-sm font-body text-xs
                       bg-codex-brown/40 text-codex-parchment-dim border border-codex-gold-dim/20
                       hover:border-codex-gold-dim/50 hover:text-codex-parchment transition-all"
          >
            <span>{t.label}</span>
            <span className="text-[10px] text-codex-gold-dim/70">{t.count}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function UnknownTagState({ slug }: { slug: string }) {
  /* Suggest similar tags when the slug doesn't resolve — helps with typos. */
  const all = getAllTags()
  const suggestions = all.filter((t) => t.slug.includes(slug) || slug.includes(t.slug)).slice(0, 8)

  return (
    <section className="codex-section py-24 max-w-2xl">
      <p className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase mb-4">
        Etiqueta desconocida
      </p>
      <h1 className="font-heading text-3xl text-codex-gold-bright mb-4">
        No hay entradas con la etiqueta «{slug}»
      </h1>
      <p className="font-subheading italic text-codex-parchment-dim mb-10">
        Es posible que la URL esté mal formada o que la etiqueta haya sido renombrada. Estas son algunas que sí existen:
      </p>
      {suggestions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((t) => (
            <Link
              key={t.slug}
              to={tagPath(t.label)}
              className="inline-flex items-baseline gap-1.5 px-3 py-1 rounded-sm
                         bg-codex-brown/40 text-codex-parchment-dim border border-codex-gold-dim/30
                         hover:border-codex-gold-dim/60 hover:text-codex-parchment transition-all"
            >
              <span>{t.label}</span>
              <span className="text-[10px] text-codex-gold-dim/70">{t.count}</span>
            </Link>
          ))}
        </div>
      )}
      <div className="mt-10">
        <Link
          to="/"
          className="inline-block px-5 py-2 bg-codex-gold/10 border border-codex-gold/40 text-codex-gold font-heading text-sm tracking-wider uppercase rounded-sm hover:bg-codex-gold/20 transition-all"
        >
          Volver al códice
        </Link>
      </div>
    </section>
  )
}
