import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronRight as Chev, Clock, List, X } from 'lucide-react'
import type { Certainty, EntityType, FallbackType, RichBlock } from '../../data/types'
import { CodexImage, type ImageVariant } from '../images/CodexImage'
import { CertaintyBadge } from '../CertaintyBadge'
import { EraBadge } from '../EraBadge'
import { MentionedGlossary } from '../MentionedGlossary'
import { TagPill } from '../TagPill'
import { RichLoreText, extractHeadings } from '../RichLoreText'
import { RuneOrnament } from '../illustrations/RuneSeparator'
import { BookmarkButton } from '../BookmarkButton'
import { ShareButton } from '../ShareButton'
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
  confirmed?: string[]
  inferred?: string[]
  theories?: string[]
  ambiguous?: string[]
  beneficiaries?: string
  victims?: string
  relatedGroups?: RelatedGroup[]
  prev?: PrevNextItem | null
  next?: PrevNextItem | null
  /** Optional extra content rendered above deepLore (legacy fields) */
  legacyContent?: ReactNode
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
                {subtitle && (
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
            {(confirmed?.length || inferred?.length || theories?.length || ambiguous?.length || beneficiaries || victims) && (
              <section className="mt-12">
                <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-5 pb-2 border-b border-codex-gold-dim/30">
                  Hechos, inferencias, teorías y ambigüedades
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {confirmed && confirmed.length > 0 && (
                    <KnowledgeBox label="Hechos confirmados" tone="gold" items={confirmed} />
                  )}
                  {inferred && inferred.length > 0 && (
                    <KnowledgeBox label="Inferencias fuertes" tone="parchment" items={inferred} />
                  )}
                  {theories && theories.length > 0 && (
                    <KnowledgeBox label="Teorías razonables" tone="moon" items={theories} />
                  )}
                  {ambiguous && ambiguous.length > 0 && (
                    <KnowledgeBox label="Ambigüedades abiertas" tone="rot" items={ambiguous} />
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

          {/* Sticky sidebar — meta + ToC + glossary + graph + related */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {metaCard && (
              <div className="parchment-panel p-4 space-y-3">{metaCard}</div>
            )}

            {/* Mini-glossary of entities mentioned in THIS article */}
            {deepLore.length > 0 && (
              <MentionedGlossary
                blocks={deepLore}
                excludeIds={bookmark ? [bookmark.slug] : []}
              />
            )}

            {/* Table of contents */}
            {headings.length > 0 && (
              <TableOfContents headings={headings} />
            )}

            {/* Mini relationship graph */}
            {relatedGroups.some((g) => g.type && g.items.length > 0) && (
              <EntityGraph
                centerLabel={title}
                groups={relatedGroups
                  .filter((g) => g.type && g.items.length > 0)
                  .map((g) => ({ type: g.type!, items: g.items }))}
              />
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

      {headings.length > 0 && <MobileToC headings={headings} />}
      <BackToTop />
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
function MobileToC({ headings }: { headings: { id: string; text: string; level: 2 | 3 }[] }) {
  const [open, setOpen] = useState(false)
  /* Lift the trigger button on routes that pin a floating bar at the bottom
     (currently only TimelineDetailPage with its ChronoFloatingBar). */
  const hasFloatingBar = typeof window !== 'undefined'
    && /^\/timeline\/[^/]+$/.test(window.location.pathname)

  /* Close on Escape and lock background scroll while the sheet is open. */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  const handleSelect = (id: string) => {
    setOpen(false)
    /* Wait one frame so the body-scroll-lock has been released before we
       scroll to the target element — otherwise the smooth scroll is no-op. */
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir índice"
        className={`lg:hidden fixed left-6 z-40
                   w-11 h-11 flex items-center justify-center rounded-full
                   bg-codex-brown/85 border border-codex-gold-dim/40 backdrop-blur-md
                   text-codex-gold-dim hover:text-codex-gold-bright hover:border-codex-gold/60
                   hover:shadow-[0_0_18px_rgba(197,160,89,0.3)] transition-all duration-200
                   ${hasFloatingBar ? 'bottom-20' : 'bottom-6'}`}
      >
        <List size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="lg:hidden fixed inset-0 z-50 bg-codex-black/75 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            {/* Drawer — slides up from the bottom */}
            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Índice de la página"
              className="lg:hidden fixed left-0 right-0 bottom-0 z-50 max-h-[70vh]
                         bg-codex-black border-t border-codex-gold-dim/40 rounded-t-md
                         flex flex-col overflow-hidden"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            >
              <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-codex-gold-dim/20">
                <p className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase">
                  En esta página
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar índice"
                  className="text-codex-parchment-dim hover:text-codex-parchment transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <ul className="overflow-y-auto py-2 px-2">
                {headings.map((h) => (
                  <li key={h.id}>
                    <button
                      type="button"
                      onClick={() => handleSelect(h.id)}
                      className={`w-full text-left px-3 py-2 rounded-sm text-sm leading-snug
                                  hover:bg-codex-brown/40 hover:text-codex-parchment transition-colors
                                  ${h.level === 3 ? 'pl-8 text-codex-parchment-dim' : 'text-codex-parchment'}`}
                    >
                      {h.text}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

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
  tone: 'gold' | 'parchment' | 'rot' | 'moon'
  items: string[]
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
