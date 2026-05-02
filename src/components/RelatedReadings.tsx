import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { findRelatedReadings } from '../lib/relatedReadings'
import { entityTypeLabel } from './RichLoreText'
import type { EntityType } from '../data/types'
import { useExpansion } from '../lib/expansion'
import { getEntityPreview } from '../data/lookups'

interface Props {
  type: EntityType
  slug: string
  /** Hide the panel entirely if there are fewer than `min` matches.
      Defaults to 2 — single-match suggestions feel arbitrary. */
  min?: number
}

/**
 * Sidebar / footer panel that surfaces 3-5 related entries based on shared
 * tags + curated cross-references. Rendered after the user crosses 70 %
 * of the article (handled by the parent — DetailLayout listens to scroll
 * progress and mounts this).
 */
export function RelatedReadings({ type, slug, min = 2 }: Props) {
  const { hideSote } = useExpansion()
  /* Filter out SOTE-marked targets when reader is in base mode. */
  const related = findRelatedReadings(type, slug, 5).filter((r) => {
    if (!hideSote) return true
    const p = getEntityPreview(r.type, r.slug)
    return p?.expansion !== 'sote'
  })
  if (related.length < min) return null

  return (
    <motion.section
      aria-label="Lecturas relacionadas"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-12 parchment-panel p-5 md:p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="block w-1 h-1 rounded-full bg-codex-gold-dim" aria-hidden />
        <p className="font-heading text-xs text-codex-gold-dim tracking-[0.18em] uppercase">
          Lecturas relacionadas
        </p>
        <span className="flex-1 h-px bg-codex-gold-dim/20" aria-hidden />
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {related.map((r) => (
          <li key={`${r.type}:${r.slug}`}>
            <Link
              to={r.to}
              className="block parchment-panel p-3 hover:border-codex-gold-dim/60 transition-all group"
            >
              <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-0.5">
                {entityTypeLabel[r.type]}
              </p>
              <p className="font-subheading text-sm text-codex-parchment group-hover:text-codex-gold-bright transition-colors flex items-center gap-1.5">
                {r.label}
                <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0 transition-all" />
              </p>
              {r.reason && (
                <p className="font-body text-[10px] text-codex-parchment-dim/55 italic mt-1">
                  {r.reason}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.section>
  )
}
