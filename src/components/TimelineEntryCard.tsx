import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { TimelineEntry } from '../data/types'
import { CertaintyBadge } from './CertaintyBadge'
import { EraBadge } from './EraBadge'
import { ReadCheck } from './ReadCheck'
import { EnrichedText } from './RichLoreText'
import { pathFor } from '../data/lookups'

interface Props {
  entry: TimelineEntry
  /** Optional position in a grid — used for subtle stagger entrance */
  index?: number
}

export function TimelineEntryCard({ entry, index = 0 }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05, ease: [0.22, 1, 0.36, 1], layout: { duration: 0.3 } }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-codex-gold/40 via-codex-gold-dim/20 to-transparent ml-4 hidden md:block" />

      <div className="parchment-panel p-6 md:p-8 md:ml-10 relative transition-all duration-300
                      hover:border-codex-gold/60
                      hover:shadow-[0_0_0_1px_rgba(197,160,89,0.25),0_8px_30px_rgba(197,160,89,0.18),0_0_60px_rgba(197,160,89,0.08)]">
        {/* Timeline dot */}
        <div className="absolute -left-6 top-8 hidden md:flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-codex-gold-dim border border-codex-gold/50 shadow-[0_0_8px_rgba(197,160,89,0.4)]" />
        </div>

        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <span className="font-heading text-xs text-codex-gold-dim tracking-[0.25em] uppercase">
              {entry.chapterNumber}
            </span>
            <Link to={pathFor.timeline(entry)} className="block group">
              <h3 className="font-heading text-base text-codex-gold-bright text-glow mt-1 group-hover:text-glow transition-all">
                {entry.title}
              </h3>
            </Link>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <ReadCheck type="timeline" slug={entry.id} />
            <EraBadge entity={entry} size="compact" />
            <CertaintyBadge certainty={entry.certainty} />
          </div>
        </div>

        {/* Poetic intro */}
        <p className="font-subheading italic text-codex-parchment-dim text-base leading-relaxed mb-6 pl-4 border-l border-codex-gold-dim/30">
          "{entry.poeticIntro}"
        </p>

        <p className="font-body text-codex-parchment-dim text-sm leading-relaxed line-clamp-3">
          <EnrichedText text={entry.lore[0]} selfId={entry.id} />
        </p>

        <div className="mt-5 pt-4 border-t border-codex-gold-dim/15 flex items-center justify-end">
          <Link
            to={pathFor.timeline(entry)}
            className="flex items-center gap-1 font-heading text-xs tracking-wider uppercase text-codex-gold/80 hover:text-codex-gold-bright transition-colors group"
          >
            Ver ficha
            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
