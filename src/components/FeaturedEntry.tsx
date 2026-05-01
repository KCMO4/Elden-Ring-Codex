import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { CodexImage } from './images/CodexImage'
import {
  charactersData, factionsData, regionsData, glossaryData, timelineData,
} from '../data'
import { endingsData } from '../data/endings'
import { pathFor } from '../data/lookups'
import {
  characterFallbacks, factionFallbacks, regionFallbacks, glossaryFallbacks,
} from '../lib/fallbackMap'
import type { ImageCategory } from '../lib/imageSources'
import type { FallbackType } from '../data/types'

interface FeaturedItem {
  href: string
  title: string
  subtitle?: string
  pitch: string
  category: ImageCategory
  id: string
  fallback: FallbackType
  badge: string
}

/**
 * "Curaduría del Códice" — selects a single entry to highlight on the
 * landing page. Rotates daily based on the day of year (so a single visit
 * across a day shows the same entry; tomorrow's visit picks a different one).
 */
export function FeaturedEntry() {
  const item = useMemo<FeaturedItem>(() => {
    /* Pool of entries — only deep-tier entities so the pitch reads well. */
    const pool: FeaturedItem[] = [
      ...charactersData.map<FeaturedItem>((c) => ({
        href: pathFor.character(c),
        title: c.name,
        subtitle: c.role,
        pitch: c.tragedy,
        category: 'characters',
        id: c.id,
        fallback: characterFallbacks[c.id] ?? 'character',
        badge: 'Personaje',
      })),
      ...regionsData.map<FeaturedItem>((r) => ({
        href: pathFor.region(r),
        title: r.name,
        subtitle: r.mainFaction,
        pitch: r.hiddenTragedy,
        category: 'regions',
        id: r.id,
        fallback: regionFallbacks[r.id] ?? 'region',
        badge: 'Región',
      })),
      ...factionsData.map<FeaturedItem>((f) => ({
        href: pathFor.faction(f),
        title: f.name,
        subtitle: undefined,
        pitch: f.belief,
        category: 'factions',
        id: f.id,
        fallback: factionFallbacks[f.id] ?? 'faction',
        badge: 'Facción',
      })),
      ...glossaryData.map<FeaturedItem>((g) => ({
        href: pathFor.concept(g),
        title: g.term,
        pitch: g.definition,
        category: 'concepts',
        id: g.id,
        fallback: glossaryFallbacks[g.id] ?? 'concept',
        badge: 'Concepto',
      })),
      ...timelineData.map<FeaturedItem>((t) => ({
        href: pathFor.timeline(t),
        title: t.title,
        subtitle: t.chapterNumber,
        pitch: t.poeticIntro,
        category: 'timelineEvents',
        id: t.id,
        fallback: 'concept',
        badge: 'Evento',
      })),
      ...endingsData.map<FeaturedItem>((e) => ({
        href: pathFor.ending(e),
        title: e.name,
        subtitle: e.subtitle,
        pitch: e.meaning,
        category: 'endings',
        id: e.id,
        fallback: e.fallbackType ?? 'ending-fracture',
        badge: 'Final',
      })),
    ]
    /* Day-of-year hash → stable per-day selection. */
    const now = new Date()
    const start = new Date(now.getFullYear(), 0, 0)
    const day = Math.floor((now.getTime() - start.getTime()) / 86_400_000)
    return pool[day % pool.length]
  }, [])

  return (
    <motion.section
      className="mt-16 mb-4"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.7 }}
    >
      <p className="font-heading text-xs text-codex-gold-dim tracking-[0.3em] uppercase mb-4 text-center flex items-center justify-center gap-2">
        <Sparkles size={11} className="text-codex-gold" />
        Curaduría del día
        <Sparkles size={11} className="text-codex-gold" />
      </p>
      <Link
        to={item.href}
        className="block parchment-panel overflow-hidden group transition-all duration-500
                   hover:border-codex-gold/60
                   hover:shadow-[0_0_0_1px_rgba(197,160,89,0.3),0_12px_50px_rgba(197,160,89,0.20),0_0_80px_rgba(197,160,89,0.10)]"
      >
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-0">
          <div className="relative">
            <CodexImage
              alt={item.title}
              fallbackType={item.fallback}
              variant="card"
              entityCategory={item.category}
              entityId={item.id}
              overlayOpacity={0.25}
              hoverZoom
            />
            <span className="absolute top-3 left-3 px-2 py-1 rounded-sm bg-codex-black/70 backdrop-blur-sm
                             font-heading text-[10px] tracking-widest uppercase text-codex-gold border border-codex-gold-dim/40">
              {item.badge}
            </span>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h3 className="font-heading text-2xl md:text-3xl text-codex-gold-bright leading-tight mb-2 group-hover:[text-shadow:0_0_18px_rgba(232,213,163,0.4)] transition-all">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="font-subheading italic text-base text-codex-parchment-dim mb-4">
                {item.subtitle}
              </p>
            )}
            <p className="font-body text-sm text-codex-parchment leading-relaxed line-clamp-3 mb-5">
              {item.pitch}
            </p>
            <span className="inline-flex items-center gap-1.5 font-heading text-xs tracking-wider uppercase text-codex-gold/80 group-hover:text-codex-gold-bright transition-colors">
              Leer ahora
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.section>
  )
}
