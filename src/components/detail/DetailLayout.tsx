import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronRight as Chev, Clock } from 'lucide-react'
import type { BucketItem, Certainty, EntityType, FallbackType, RichBlock } from '../../data/types'
import { CodexImage, type ImageVariant } from '../images/CodexImage'
import { CertaintyBadge } from '../CertaintyBadge'
import { EraBadge } from '../EraBadge'
import { TagPill } from '../TagPill'
import { RichLoreText, extractHeadings, InlineProse } from '../RichLoreText'
import { RelatedReadings } from '../RelatedReadings'
import { NoteEditor } from '../NoteEditor'
import { RuneOrnament } from '../illustrations/RuneSeparator'
import { BookmarkButton } from '../BookmarkButton'
import { ShareButton } from '../ShareButton'
import { ExportButton } from '../ExportButton'
import { QuoteShareBubble } from '../QuoteShareBubble'
import { MobileToC } from './MobileToC'
import { TableOfContents } from './TableOfContents'
import { BackToTop } from '../BackToTop'
import { EntityGraph } from './EntityGraph'
import { usePageMeta } from '../../lib/pageMeta'
import { categoryToArtPath } from '../../lib/assetPaths'
import { recordVisit } from '../../lib/readingHistory'
import { markRead } from '../../lib/readStatus'
import { readingTimeMinutes } from '../../lib/readingTime'
import { useNavDirection } from '../../lib/navDirection'
import type { ImageCategory } from '../../lib/imageSources'

export interface Breadcrumb {
  label: string
  to?: string
}

/**
 * Returns true when the hero subtitle visibly duplicates the summary that
 * follows. Many entries derive `subtitle` from a fallback like `what` /
 * `belief` / `historical` whose first sentence is also the opening of the
 * `summary`. Showing both produces two italic blocks saying nearly the
 * same thing.
 *
 * Heuristic: normalize both to lowercase + strip diacritics, then check
 * whether the longer field starts with the shorter one (or whether the
 * subtitle is contained within the summary).
 */
function isSubtitleRedundant(subtitle?: string, summary?: string | undefined): boolean {
  if (!subtitle || !summary) return false
  const norm = (s: string) =>
    s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim()
  const a = norm(subtitle)
  const b = norm(summary)
  if (a.length < 4) return false
  return b.startsWith(a) || b.includes(a)
}

export interface RelatedItem {
  to: string
  label: string
  sublabel?: string
}

export interface RelatedGroup {
  label: string
  items: RelatedItem[]
  /** Used for graph visualization grouping. Optional — list still renders without it. */
  type?: 'character' | 'region' | 'faction' | 'concept' | 'timeline' | 'ending'
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
  confirmed?: BucketItem[]
  inferred?: BucketItem[]
  theories?: BucketItem[]
  ambiguous?: BucketItem[]
  beneficiaries?: import('../../data/types').ProseField
  victims?: import('../../data/types').ProseField
  relatedGroups?: RelatedGroup[]
  prev?: PrevNextItem | null
  next?: PrevNextItem | null
  /** Optional extra content rendered above deepLore (legacy fields).
      Used for entries that do NOT have deepLore — replaces it with a long-form
      narrative built from the structural fields (tragedy/theme/etc.). */
  legacyContent?: ReactNode
  /** Structural fact panels (tragedy / theme / events / bosses / belief
      / whyMatters / etc.) shown ALWAYS — compact format that complements
      the deepLore narrative or stands alone when there is no deepLore. */
  structuralFacts?: ReactNode
  /** If provided, shows the Bookmark toggle in the hero. */
  bookmark?: { type: EntityType; slug: string }
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
  structuralFacts,
  confirmed,
  inferred,
  theories,
  ambiguous,
  beneficiaries,
  victims,
  relatedGroups = [],
  prev,
  next,
  legacyContent,
  bookmark,
}: DetailLayoutProps) {
  const headings = extractHeadings(deepLore)
  const readingMin = readingTimeMinutes(deepLore, summary)
  const navigate = useNavigate()
  const { setDirection } = useNavDirection()

  usePageMeta({
    title,
    description: summary ?? subtitle,
    ogImage: heroEntity ? categoryToArtPath(heroEntity.category, heroEntity.id) : undefined,
  })

  /* Record this visit in the reading-history log so it shows up under
     "Continuar leyendo" on the landing page. */
  useEffect(() => {
    if (!bookmark) return
    recordVisit({ type: bookmark.type, slug: bookmark.slug, label: title, sublabel: subtitle })
  }, [bookmark?.type, bookmark?.slug, title, subtitle])

  /* Keyboard shortcuts: j → next, k → previous. Inert when the user is
     typing in an input, textarea or contenteditable element.
     Refs avoid stale closure during rapid navigation between detail pages. */
  const nextRef = useRef(next)
  const prevRef = useRef(prev)
  nextRef.current = next
  prevRef.current = prev

  /* Direction-aware navigation: forward/backward signals to App's
     AnimatePresence so the page transition slides horizontally
     (page-turn feel) instead of fading. */
  const goNext = useCallback(() => {
    if (!nextRef.current) return
    setDirection('forward')
    navigate(nextRef.current.to)
  }, [navigate, setDirection])
  const goPrev = useCallback(() => {
    if (!prevRef.current) return
    setDirection('backward')
    navigate(prevRef.current.to)
  }, [navigate, setDirection])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const tgt = e.target as HTMLElement | null
      if (tgt) {
        const tag = tgt.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tgt.isContentEditable) return
      }
      if (e.key === 'j' && nextRef.current) {
        e.preventDefault()
        goNext()
      } else if (e.key === 'k' && prevRef.current) {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  /* Cinematic parallax: as the user scrolls, the hero image shifts up at 35%
     of scroll speed, creating depth without obscuring readability. */
  const heroRef = useRef<HTMLDivElement>(null)
  const articleRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], ['0%', '-12%'])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.55])

  /* Sticky breadcrumbs: appear pinned at top once the hero scrolls past
     ~280px (typical hero height crossover). Avoids layout shift via fixed
     position + always-mounted, just toggling opacity/translate. */
  const [stickyVisible, setStickyVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 280)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Per-article reading progress: tied to the article's own scroll range.
     Bar fills as the reader moves through the content. Hidden until ~5%
     so it doesn't flash at page-load. */
  const { scrollYProgress: articleProgress } = useScroll({
    target: articleRef,
    offset: ['start start', 'end end'],
  })
  const progressScale = useTransform(articleProgress, [0, 1], [0, 1])
  const progressOpacity = useTransform(articleProgress, [0, 0.04, 0.08, 0.97, 1], [0, 0, 1, 1, 0])

  /* Mark this entry as "read" once the user crosses 70% of the article's
     scroll range. Uses motionValue's onChange so it fires only once per page. */
  useEffect(() => {
    if (!bookmark) return
    let alreadyMarked = false
    const unsub = articleProgress.on('change', (v) => {
      if (alreadyMarked) return
      if (v >= 0.7) {
        alreadyMarked = true
        markRead(bookmark.type, bookmark.slug)
      }
    })
    return () => unsub()
  }, [articleProgress, bookmark?.type, bookmark?.slug])

  /* Derive the entity image path from a target route. Used both for the
     prefetch hint and the hover thumbnail. */
  const heroImageFor = (to: string | undefined): string | null => {
    if (!to) return null
    const m = to.match(/^\/(personajes|regiones|facciones|conceptos|finales|timeline)\/([^/]+)$/)
    if (!m) return null
    const folder = ({
      personajes: 'characters', regiones: 'regions', facciones: 'factions',
      conceptos: 'concepts', finales: 'endings', timeline: 'timeline',
    } as const)[m[1] as 'personajes']
    return `/art/${folder}/${m[2]}.jpg`
  }
  const prevImage = heroImageFor(prev?.to)
  const nextImage = heroImageFor(next?.to)

  /* Prefetch hero images for prev/next entries so j/k navigation feels
     instant — the browser starts the request while the user is still on
     this page. Uses <link rel="prefetch"> so it doesn't block paint. */
  useEffect(() => {
    const links: HTMLLinkElement[] = []
    for (const href of [prevImage, nextImage]) {
      if (!href) continue
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.as = 'image'
      link.href = href
      document.head.appendChild(link)
      links.push(link)
    }
    return () => { for (const l of links) l.remove() }
  }, [prevImage, nextImage])

  return (
    <article ref={articleRef}>
      {/* Per-article reading progress bar — pinned to the very top, fills
         left-to-right as the reader moves through this article's scroll range. */}
      <motion.div
        aria-hidden
        style={{ scaleX: progressScale, opacity: progressOpacity, transformOrigin: '0% 50%' }}
        className="fixed top-0 left-0 right-0 h-[2px] z-50
                   bg-gradient-to-r from-codex-gold-dim via-codex-gold to-codex-gold-bright
                   shadow-[0_0_8px_rgba(212,173,98,0.6)] pointer-events-none"
      />

      {/* Sticky breadcrumbs — show after the hero scrolls out of view */}
      <div
        aria-hidden={!stickyVisible}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
                    ${stickyVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="bg-codex-black/85 backdrop-blur-md border-b border-codex-gold-dim/25
                        shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
          <div className="max-w-5xl mx-auto px-4 md:px-10 py-2.5 flex items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <Breadcrumbs crumbs={breadcrumbs} />
              <p className="font-heading text-xs text-codex-parchment-dim truncate mt-0.5">
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div ref={heroRef} className="relative overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="will-change-transform">
          <CodexImage
            alt={title}
            fallbackType={heroFallback}
            variant={heroVariant}
            entityCategory={heroEntity?.category}
            entityId={heroEntity?.id}
            overlayOpacity={0.55}
            hoverZoom={false}
            className="md:!aspect-[16/6]"
          />
        </motion.div>
        {/* Title overlay — kept outside parallax so it stays readable */}
        <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
          <div className="p-6 md:p-10 max-w-5xl mx-auto w-full pointer-events-auto">
            <Breadcrumbs crumbs={breadcrumbs} />
            <div className="flex items-end justify-between gap-4 flex-wrap mt-3">
              <div className="min-w-0">
                <h1 className="font-heading text-3xl md:text-5xl text-codex-gold-bright leading-tight"
                    style={{ textShadow: '0 4px 24px rgba(0,0,0,0.85)' }}>
                  {title}
                </h1>
                {subtitle && !isSubtitleRedundant(subtitle, summary) && (
                  <p className="font-subheading italic text-lg md:text-xl text-codex-parchment-dim mt-2"
                     style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}>
                    {subtitle}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {certainty && <CertaintyBadge certainty={certainty} />}
                <EraBadge entity={{ id: bookmark?.slug, tags }} />
                <span
                  title="Tiempo estimado de lectura"
                  className="inline-flex items-center gap-1.5 rounded-sm border border-codex-gold-dim/35 bg-codex-black/30 px-1.5 py-0.5
                             font-heading text-[9px] tracking-wider uppercase text-codex-gold-dim/90"
                >
                  <Clock size={9} aria-hidden />
                  {readingMin} min
                </span>
                {bookmark && <BookmarkButton type={bookmark.type} slug={bookmark.slug} />}
                <ShareButton />
                {bookmark && (
                  <ExportButton
                    title={title}
                    type={bookmark.type}
                    slug={bookmark.slug}
                    subtitle={subtitle}
                    summary={summary}
                    tags={tags}
                    deepLore={deepLore}
                    confirmed={confirmed}
                    inferred={inferred}
                    theories={theories}
                    ambiguous={ambiguous}
                    beneficiaries={beneficiaries}
                    victims={victims}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
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

        {/* Summary — rendered as italic blockquote with gold side bar.
            Visually a cita: links inside would clutter the opening voice. */}
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
          {/* Main column. `data-quote-source` lets <QuoteShareBubble>
              recognise selections originating here as quotable. */}
          <div className="min-w-0 max-w-3xl" data-quote-source="true">
            {legacyContent}

            {deepLore.length > 0 && <RichLoreText blocks={deepLore} />}

            {/* Structural facts — compact panels with the entry's
                key fields (tragedy/theme/events/bosses/belief/etc.).
                Always rendered; complements the deepLore or stands
                alone for entries without long-form content. */}
            {structuralFacts && (
              <div className="mt-12">{structuralFacts}</div>
            )}

            {/* Knowledge buckets */}
            {(confirmed?.length || inferred?.length || theories?.length || ambiguous?.length || beneficiaries || victims) && (
              <section className="mt-12">
                <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-5 pb-2 border-b border-codex-gold-dim/30">
                  Hechos, inferencias, teorías y ambigüedades
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {confirmed && confirmed.length > 0 && (
                    <KnowledgeBox label="Hechos confirmados" tone="gold" items={confirmed} selfId={bookmark?.slug} />
                  )}
                  {inferred && inferred.length > 0 && (
                    <KnowledgeBox label="Inferencias fuertes" tone="parchment" items={inferred} selfId={bookmark?.slug} />
                  )}
                  {theories && theories.length > 0 && (
                    <KnowledgeBox label="Teorías razonables" tone="moon" items={theories} selfId={bookmark?.slug} />
                  )}
                  {ambiguous && ambiguous.length > 0 && (
                    <KnowledgeBox label="Ambigüedades abiertas" tone="rot" items={ambiguous} selfId={bookmark?.slug} />
                  )}
                </div>

                {(beneficiaries || victims) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {beneficiaries && (
                      <div className="parchment-panel p-4">
                        <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-2">
                          Quién se benefició
                        </p>
                        <p className="font-body text-sm text-codex-parchment-dim leading-relaxed"><InlineProse node={beneficiaries} selfId={bookmark?.slug} /></p>
                      </div>
                    )}
                    {victims && (
                      <div className="parchment-panel p-4 border-codex-rot/30">
                        <p className="font-heading text-xs text-codex-rot/80 tracking-wider uppercase mb-2">
                          Quién sufrió
                        </p>
                        <p className="font-body text-sm text-codex-parchment-dim leading-relaxed"><InlineProse node={victims} selfId={bookmark?.slug} /></p>
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}

            {/* Related readings — surfaces shared-tag and cross-referenced
                entries the reader might enjoy after this one. */}
            {bookmark && <RelatedReadings type={bookmark.type} slug={bookmark.slug} />}

            {/* Prev / Next */}
            {(prev || next) && (
              <nav className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-3">
                {prev ? (
                  <div className="relative group">
                    <Link
                      to={prev.to}
                      onClick={(e) => { e.preventDefault(); goPrev() }}
                      className="parchment-panel p-4 hover:border-codex-gold-dim/60 transition-all flex"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="flex items-center gap-1.5 text-codex-gold-dim text-xs font-heading tracking-wider uppercase mb-1.5">
                          <ChevronLeft size={12} />
                          Anterior
                        </span>
                        <span className="font-subheading text-base text-codex-parchment group-hover:text-codex-gold-bright transition-colors block truncate">
                          {prev.label}
                        </span>
                      </div>
                    </Link>
                    {prevImage && (
                      <PrevNextThumbnail src={prevImage} alt={prev.label} side="left" />
                    )}
                  </div>
                ) : <div />}
                {next ? (
                  <div className="relative group">
                    <Link
                      to={next.to}
                      onClick={(e) => { e.preventDefault(); goNext() }}
                      className="parchment-panel p-4 hover:border-codex-gold-dim/60 transition-all flex text-right"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="flex items-center justify-end gap-1.5 text-codex-gold-dim text-xs font-heading tracking-wider uppercase mb-1.5">
                          Siguiente
                          <ChevronRight size={12} />
                        </span>
                        <span className="font-subheading text-base text-codex-parchment group-hover:text-codex-gold-bright transition-colors block truncate">
                          {next.label}
                        </span>
                      </div>
                    </Link>
                    {nextImage && (
                      <PrevNextThumbnail src={nextImage} alt={next.label} side="right" />
                    )}
                  </div>
                ) : <div />}
              </nav>
            )}
          </div>

          {/* Sticky sidebar — three focused modules:
              · metaCard: structural info specific to the entity type
              · TableOfContents: scrollspy navigation through the article
              · EntityGraph: visual map of related entities (with hover preview)
              MentionedGlossary was removed because every link in the prose
              already shows the same hover-card preview.
              The textual RelatedList× N (Personajes/Regiones/etc.) was
              removed because EntityGraph covers the same data visually with
              click navigation. */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {metaCard && (
              <div className="parchment-panel p-4 space-y-3">{metaCard}</div>
            )}

            {bookmark && <NoteEditor type={bookmark.type} slug={bookmark.slug} />}

            {headings.length > 0 && (
              <TableOfContents headings={headings} />
            )}

            {relatedGroups.some((g) => g.type && g.items.length > 0) && (
              <EntityGraph
                centerLabel={title}
                groups={relatedGroups
                  .filter((g) => g.type && g.items.length > 0)
                  .map((g) => ({ type: g.type!, items: g.items }))}
              />
            )}
          </aside>
        </div>
      </div>

      {headings.length > 0 && <MobileToC headings={headings} />}
      <BackToTop />
      <QuoteShareBubble />
    </article>
  )
}

/* ──────────────────────────────────────────────────────────── */
/* Hover thumbnail for prev/next buttons. Renders absolute over the
   button's group, fades in on hover. Uses image already prefetched
   so it appears instantly. */
function PrevNextThumbnail({ src, alt, side }: { src: string; alt: string; side: 'left' | 'right' }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-20 top-1/2 -translate-y-1/2
                  ${side === 'left' ? 'right-3' : 'left-3'}
                  w-20 h-12 rounded-sm overflow-hidden border border-codex-gold-dim/40
                  shadow-[0_4px_18px_rgba(0,0,0,0.5)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
        onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none' }}
      />
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */
/* Mobile-only floating ToC button + bottom-sheet drawer.
   The desktop sidebar TableOfContents disappears below `lg`; this brings
   the same in-page navigation back as a thumb-friendly drawer. */
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
  label, tone, items, selfId,
}: {
  label: string
  tone: 'gold' | 'parchment' | 'rot' | 'moon'
  items: BucketItem[]
  selfId?: string
}) {
  const toneClasses = {
    gold:      'border-codex-gold/30 text-codex-gold',
    parchment: 'border-codex-gold-dim/30 text-codex-parchment',
    rot:       'border-codex-rot/40 text-codex-rot',
    moon:      'border-blue-400/30 text-blue-300',
  }[tone]

  return (
    <div className={`parchment-panel p-4 border ${toneClasses}`}>
      <p className={`font-heading text-xs tracking-wider uppercase mb-2 ${toneClasses.split(' ')[1]}`}>{label}</p>
      <ul className="space-y-1.5">
        {items.map((t, i) => (
          <li key={i} className="font-body text-sm text-codex-parchment-dim leading-relaxed flex gap-2">
            <span className="text-codex-gold-dim mt-0.5 shrink-0 text-[10px]">◆</span>
            <span><InlineProse node={t} selfId={selfId} /></span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* TableOfContents and MobileToC live in their own files now —
   `./TableOfContents.tsx` and `./MobileToC.tsx`. */

