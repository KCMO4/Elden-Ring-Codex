import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronRight as Chev } from 'lucide-react'
import type { Certainty, FallbackType, RichBlock } from '../../data/types'
import { CodexImage, type ImageVariant } from '../images/CodexImage'
import { CertaintyBadge } from '../CertaintyBadge'
import { TagPill } from '../TagPill'
import { RichLoreText, extractHeadings } from '../RichLoreText'
import { RuneOrnament } from '../illustrations/RuneSeparator'
import type { ImageCategory } from '../../lib/imageSources'

export interface Breadcrumb {
  label: string
  to?: string
}

export interface RelatedItem {
  to: string
  label: string
  sublabel?: string
}

export interface RelatedGroup {
  label: string
  items: RelatedItem[]
}

export interface PrevNextItem {
  to: string
  label: string
}

interface DetailLayoutProps {
  breadcrumbs: Breadcrumb[]
  title: string
  subtitle?: string
  certainty?: Certainty
  tags?: string[]
  summary?: string
  /** Hero image — pass entityCategory + entityId to enable image-sources overrides */
  heroEntity?: { category: ImageCategory; id: string }
  heroFallback?: FallbackType
  heroVariant?: ImageVariant
  /** Optional structured side-card content (role/region/faction summary, etc.) */
  metaCard?: ReactNode
  /** Main rich-text lore */
  deepLore?: RichBlock[]
  confirmed?: string[]
  inferred?: string[]
  ambiguous?: string[]
  beneficiaries?: string
  victims?: string
  relatedGroups?: RelatedGroup[]
  prev?: PrevNextItem | null
  next?: PrevNextItem | null
  /** Optional extra content rendered above deepLore (legacy fields) */
  legacyContent?: ReactNode
}

export function DetailLayout({
  breadcrumbs,
  title,
  subtitle,
  certainty,
  tags = [],
  summary,
  heroEntity,
  heroFallback = 'concept',
  heroVariant = 'banner',
  metaCard,
  deepLore = [],
  confirmed,
  inferred,
  ambiguous,
  beneficiaries,
  victims,
  relatedGroups = [],
  prev,
  next,
  legacyContent,
}: DetailLayoutProps) {
  const headings = extractHeadings(deepLore)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.title = `${title} · Códice del Orden Fracturado`
    return () => {
      document.title = 'Códice del Orden Fracturado'
    }
  }, [title])

  return (
    <article>
      {/* Hero */}
      <div className="relative">
        <CodexImage
          alt={title}
          fallbackType={heroFallback}
          variant={heroVariant}
          entityCategory={heroEntity?.category}
          entityId={heroEntity?.id}
          overlayOpacity={0.55}
          hoverZoom={false}
          className="md:!aspect-[16/6]"
        >
          <div className="p-6 md:p-10 max-w-5xl mx-auto w-full">
            {/* Breadcrumbs over hero */}
            <Breadcrumbs crumbs={breadcrumbs} />
            <div className="flex items-end justify-between gap-4 flex-wrap mt-3">
              <div className="min-w-0">
                <h1 className="font-heading text-3xl md:text-5xl text-codex-gold-bright leading-tight"
                    style={{ textShadow: '0 4px 24px rgba(0,0,0,0.85)' }}>
                  {title}
                </h1>
                {subtitle && (
                  <p className="font-subheading italic text-lg md:text-xl text-codex-parchment-dim mt-2"
                     style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}>
                    {subtitle}
                  </p>
                )}
              </div>
              {certainty && <CertaintyBadge certainty={certainty} />}
            </div>
          </div>
        </CodexImage>
      </div>

      <div className="codex-section pt-8">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((t) => (
              <TagPill key={t} tag={t} />
            ))}
          </div>
        )}

        {/* Summary */}
        {summary && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-subheading italic text-xl text-codex-parchment-dim leading-relaxed
                       border-l-2 border-codex-gold-dim/40 pl-5 mb-8 max-w-3xl"
          >
            {summary}
          </motion.p>
        )}

        <RuneOrnament className="w-12 h-12 opacity-50 my-6" />

        {/* Two-column layout: main + sticky sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* Main column */}
          <div className="min-w-0 max-w-3xl">
            {legacyContent}

            {deepLore.length > 0 && <RichLoreText blocks={deepLore} />}

            {/* Knowledge buckets */}
            {(confirmed?.length || inferred?.length || ambiguous?.length || beneficiaries || victims) && (
              <section className="mt-12">
                <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-5 pb-2 border-b border-codex-gold-dim/30">
                  Lo confirmado, lo inferido, lo ambiguo
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {confirmed && confirmed.length > 0 && (
                    <KnowledgeBox label="Confirmado" tone="gold" items={confirmed} />
                  )}
                  {inferred && inferred.length > 0 && (
                    <KnowledgeBox label="Inferencia" tone="parchment" items={inferred} />
                  )}
                  {ambiguous && ambiguous.length > 0 && (
                    <KnowledgeBox label="Ambiguo" tone="rot" items={ambiguous} />
                  )}
                </div>

                {(beneficiaries || victims) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {beneficiaries && (
                      <div className="parchment-panel p-4">
                        <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-2">
                          Quién se benefició
                        </p>
                        <p className="font-body text-sm text-codex-parchment-dim leading-relaxed">{beneficiaries}</p>
                      </div>
                    )}
                    {victims && (
                      <div className="parchment-panel p-4 border-codex-rot/30">
                        <p className="font-heading text-xs text-codex-rot/80 tracking-wider uppercase mb-2">
                          Quién sufrió
                        </p>
                        <p className="font-body text-sm text-codex-parchment-dim leading-relaxed">{victims}</p>
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}

            {/* Prev / Next */}
            {(prev || next) && (
              <nav className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-3">
                {prev ? (
                  <Link
                    to={prev.to}
                    className="parchment-panel p-4 group hover:border-codex-gold-dim/60 transition-all"
                  >
                    <span className="flex items-center gap-1.5 text-codex-gold-dim text-xs font-heading tracking-wider uppercase mb-1.5">
                      <ChevronLeft size={12} />
                      Anterior
                    </span>
                    <span className="font-subheading text-base text-codex-parchment group-hover:text-codex-gold-bright transition-colors">
                      {prev.label}
                    </span>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link
                    to={next.to}
                    className="parchment-panel p-4 group hover:border-codex-gold-dim/60 transition-all text-right"
                  >
                    <span className="flex items-center justify-end gap-1.5 text-codex-gold-dim text-xs font-heading tracking-wider uppercase mb-1.5">
                      Siguiente
                      <ChevronRight size={12} />
                    </span>
                    <span className="font-subheading text-base text-codex-parchment group-hover:text-codex-gold-bright transition-colors">
                      {next.label}
                    </span>
                  </Link>
                ) : <div />}
              </nav>
            )}
          </div>

          {/* Sticky sidebar — meta + ToC + related */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {metaCard && (
              <div className="parchment-panel p-4 space-y-3">{metaCard}</div>
            )}

            {/* Table of contents */}
            {headings.length > 0 && (
              <TableOfContents headings={headings} />
            )}

            {/* Related */}
            {relatedGroups.map((g) =>
              g.items.length > 0 ? (
                <RelatedList key={g.label} group={g} />
              ) : null
            )}
          </aside>
        </div>
      </div>
    </article>
  )
}

/* ──────────────────────────────────────────────────────────── */

function Breadcrumbs({ crumbs }: { crumbs: Breadcrumb[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 text-xs font-heading tracking-wider uppercase
                    text-codex-parchment-dim/80"
         aria-label="Breadcrumbs">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {c.to ? (
            <Link to={c.to} className="hover:text-codex-gold-bright transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="text-codex-parchment">{c.label}</span>
          )}
          {i < crumbs.length - 1 && <Chev size={11} className="opacity-50" />}
        </span>
      ))}
    </nav>
  )
}

function KnowledgeBox({
  label, tone, items,
}: {
  label: string
  tone: 'gold' | 'parchment' | 'rot'
  items: string[]
}) {
  const toneClasses = {
    gold:      'border-codex-gold/30 text-codex-gold',
    parchment: 'border-codex-gold-dim/30 text-codex-parchment',
    rot:       'border-codex-rot/40 text-codex-rot',
  }[tone]

  return (
    <div className={`parchment-panel p-4 border ${toneClasses}`}>
      <p className={`font-heading text-xs tracking-wider uppercase mb-2 ${toneClasses.split(' ')[1]}`}>{label}</p>
      <ul className="space-y-1.5">
        {items.map((t, i) => (
          <li key={i} className="font-body text-sm text-codex-parchment-dim leading-relaxed flex gap-2">
            <span className="text-codex-gold-dim mt-0.5 shrink-0 text-[10px]">◆</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

function TableOfContents({
  headings,
}: {
  headings: { id: string; text: string; level: 2 | 3 }[]
}) {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  return (
    <div className="parchment-panel p-4">
      <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-3">
        En esta página
      </p>
      <ul className="space-y-1.5 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? 'pl-3' : ''}>
            <a
              href={`#${h.id}`}
              className={`block py-0.5 transition-colors leading-snug
                ${active === h.id
                  ? 'text-codex-gold-bright'
                  : 'text-codex-parchment-dim hover:text-codex-parchment'
                }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RelatedList({ group }: { group: RelatedGroup }) {
  return (
    <div className="parchment-panel p-4">
      <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-3">
        {group.label}
      </p>
      <ul className="space-y-1.5">
        {group.items.map((it) => (
          <li key={it.to}>
            <Link
              to={it.to}
              className="block py-1 group"
            >
              <span className="font-subheading text-sm text-codex-parchment group-hover:text-codex-gold-bright transition-colors">
                {it.label}
              </span>
              {it.sublabel && (
                <span className="block text-xs text-codex-parchment-dim/60 mt-0.5">{it.sublabel}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
