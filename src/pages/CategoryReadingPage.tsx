import { useEffect, useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { SectionHero } from '../components/SectionHero'
import { RichLoreText } from '../components/RichLoreText'
import { RuneOrnament } from '../components/illustrations/RuneSeparator'
import { CodexImage } from '../components/images/CodexImage'
import { CertaintyBadge } from '../components/CertaintyBadge'
import { usePageMeta } from '../lib/pageMeta'
import {
  charactersData, factionsData, regionsData, glossaryData, timelineData,
} from '../data'
import { endingsData } from '../data/endings'
import { pathFor } from '../data/lookups'
import { characterFallbacks, factionFallbacks, regionFallbacks, glossaryFallbacks } from '../lib/fallbackMap'
import type { ImageCategory } from '../lib/imageSources'
import type { FallbackType, RichBlock } from '../data/types'

type ReadingCategory =
  | 'personajes' | 'facciones' | 'regiones' | 'conceptos' | 'timeline' | 'finales'

interface ReadingItem {
  id: string
  title: string
  subtitle?: string
  summary?: string
  certainty?: 'confirmado' | 'inferencia' | 'teoria'
  deepLore?: RichBlock[]
  href: string
  imageCategory: ImageCategory
  fallback: FallbackType
}

const categoryMeta: Record<ReadingCategory, {
  label: string
  hero: FallbackType
  intro: string
  back: string
  items: () => ReadingItem[]
}> = {
  personajes: {
    label: 'Enciclopedia de Personajes',
    hero: 'golden-order',
    intro: 'Las almas que dieron forma a las Tierras Intermedias, leídas en orden canónico de aparición.',
    back: '/personajes',
    items: () =>
      charactersData.map((c) => ({
        id: c.id,
        title: c.name,
        subtitle: c.role,
        summary: c.tragedy,
        certainty: c.certainty,
        deepLore: (c as any).deepLore as RichBlock[] | undefined,
        href: pathFor.character(c),
        imageCategory: 'characters',
        fallback: characterFallbacks[c.id] ?? 'character',
      })),
  },
  facciones: {
    label: 'Facciones y Lore Enemigo',
    hero: 'war',
    intro: 'Los grupos que definen las Tierras Intermedias en su fractura.',
    back: '/facciones',
    items: () =>
      factionsData.map((f) => ({
        id: f.id,
        title: f.name,
        subtitle: f.what,
        summary: f.belief,
        certainty: f.certainty,
        deepLore: (f as any).deepLore as RichBlock[] | undefined,
        href: pathFor.faction(f),
        imageCategory: 'factions',
        fallback: factionFallbacks[f.id] ?? 'faction',
      })),
  },
  regiones: {
    label: 'Regiones de las Tierras Intermedias',
    hero: 'dragon',
    intro: 'Cada tierra, su historia, su tragedia oculta.',
    back: '/regiones',
    items: () =>
      regionsData.map((r) => ({
        id: r.id,
        title: r.name,
        subtitle: r.mainFaction,
        summary: r.historical,
        certainty: r.certainty,
        deepLore: (r as any).deepLore as RichBlock[] | undefined,
        href: pathFor.region(r),
        imageCategory: 'regions',
        fallback: regionFallbacks[r.id] ?? 'region',
      })),
  },
  conceptos: {
    label: 'Glosario de las Tierras Intermedias',
    hero: 'cosmic',
    intro: 'Los conceptos que definen el cosmos del Orden Dorado.',
    back: '/conceptos',
    items: () =>
      glossaryData.map((g) => ({
        id: g.id,
        title: g.term,
        summary: g.definition,
        certainty: g.certainty,
        deepLore: (g as any).deepLore as RichBlock[] | undefined,
        href: pathFor.concept(g),
        imageCategory: 'concepts',
        fallback: glossaryFallbacks[g.id] ?? 'concept',
      })),
  },
  timeline: {
    label: 'Timeline Profundo',
    hero: 'ending-fracture',
    intro: 'Del Vacío a la Fractura — historia completa en orden cronológico.',
    back: '/timeline',
    items: () =>
      timelineData.map((t) => ({
        id: t.id,
        title: t.title,
        subtitle: t.chapterNumber,
        summary: t.poeticIntro,
        certainty: t.certainty,
        deepLore: (t as any).deepLore as RichBlock[] | undefined,
        href: pathFor.timeline(t),
        imageCategory: 'timelineEvents',
        fallback: 'concept',
      })),
  },
  finales: {
    label: 'Los Seis Finales',
    hero: 'ending-fracture',
    intro: 'Las eras que el Tarnished puede instaurar — sin orden canónico, solo elecciones.',
    back: '/finales',
    items: () =>
      endingsData.map((e) => ({
        id: e.id,
        title: e.name,
        subtitle: e.subtitle,
        summary: e.description,
        deepLore: undefined,
        href: pathFor.ending(e),
        imageCategory: 'endings',
        fallback: e.fallbackType ?? 'ending-fracture',
      })),
  },
}

export function CategoryReadingPage() {
  const { category } = useParams<{ category: string }>()
  const meta = category && (category in categoryMeta) ? categoryMeta[category as ReadingCategory] : null
  if (!meta) return <Navigate to="/" replace />

  usePageMeta({
    title: `${meta.label} · Lectura completa`,
    description: meta.intro,
  })

  const items = useMemo(() => meta.items(), [meta])

  /* Scroll to top on mount so we always start from the intro. */
  useEffect(() => { window.scrollTo({ top: 0 }) }, [category])

  return (
    <article>
      <SectionHero fallbackType={meta.hero} />

      <div className="codex-section pt-6">
        {/* Header + back link */}
        <Link
          to={meta.back}
          className="inline-flex items-center gap-1.5 font-heading text-xs tracking-wider uppercase text-codex-gold-dim hover:text-codex-gold transition-colors mb-4"
        >
          <ArrowLeft size={12} />
          Volver al índice
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl text-codex-gold-bright leading-tight mb-3">
          {meta.label}
        </h1>
        <p className="font-subheading italic text-lg text-codex-parchment-dim mb-6 max-w-3xl">
          {meta.intro}
        </p>

        <div className="flex items-center gap-3 text-sm text-codex-parchment-dim mb-12">
          <BookOpen size={14} className="text-codex-gold-dim" />
          <span>Lectura continua · {items.length} entradas</span>
        </div>

        <RuneOrnament className="w-12 h-12 mx-auto mb-12 opacity-50" />

        {/* All entries in sequence */}
        <div className="codex-reading-width space-y-20">
          {items.map((item, i) => (
            <motion.section
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-24"
            >
              {/* Image banner */}
              <div className="relative mb-6">
                <CodexImage
                  alt={item.title}
                  fallbackType={item.fallback}
                  variant="banner"
                  entityCategory={item.imageCategory}
                  entityId={item.id}
                  overlayOpacity={0.35}
                  hoverZoom={false}
                />
              </div>

              {/* Title row */}
              <div className="flex items-baseline gap-3 flex-wrap mb-2">
                <span className="font-heading text-xs tracking-widest uppercase text-codex-gold-dim/80">
                  {String(i + 1).padStart(2, '0')} · {meta.label.split(' ')[0]}
                </span>
                {item.certainty && <CertaintyBadge certainty={item.certainty} />}
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-codex-gold-bright leading-tight mb-2">
                {item.title}
              </h2>
              {item.subtitle && (
                <p className="font-subheading italic text-base text-codex-parchment-dim mb-4">
                  {item.subtitle}
                </p>
              )}

              {/* Summary as intro paragraph */}
              {item.summary && (
                <p className="font-body text-base text-codex-parchment leading-loose mb-6 pl-4 border-l border-codex-gold-dim/30">
                  {item.summary}
                </p>
              )}

              {/* Deep lore body */}
              {item.deepLore && item.deepLore.length > 0 && (
                <RichLoreText blocks={item.deepLore} />
              )}

              {/* Footer link to detail page */}
              <div className="mt-8 pt-4 border-t border-codex-gold-dim/20 text-right">
                <Link
                  to={item.href}
                  className="font-heading text-xs tracking-wider uppercase text-codex-gold-dim hover:text-codex-gold transition-colors"
                >
                  Página dedicada →
                </Link>
              </div>

              {i < items.length - 1 && (
                <RuneOrnament className="w-10 h-10 mx-auto mt-16 opacity-30" />
              )}
            </motion.section>
          ))}
        </div>

        {/* End */}
        <div className="text-center mt-20 mb-12">
          <RuneOrnament className="w-16 h-16 mx-auto opacity-50 mb-6" />
          <p className="font-subheading italic text-codex-parchment-dim">
            Final de la lectura completa.
          </p>
          <Link
            to={meta.back}
            className="inline-flex items-center gap-1.5 mt-6 font-heading text-xs tracking-wider uppercase text-codex-gold hover:text-codex-gold-bright transition-colors"
          >
            <ArrowLeft size={12} />
            Volver al índice
          </Link>
        </div>
      </div>
    </article>
  )
}
