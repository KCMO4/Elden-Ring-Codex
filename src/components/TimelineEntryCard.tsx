import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import type { TimelineEntry } from '../data/types'
import { CertaintyBadge } from './CertaintyBadge'
import { EraBadge } from './EraBadge'
import { ReadCheck } from './ReadCheck'
import { TagPill } from './TagPill'
import { RuneSeparator } from './illustrations/RuneSeparator'
import { pathFor } from '../data/lookups'

interface Props {
  entry: TimelineEntry
  onTagClick?: (tag: string) => void
  readingMode?: boolean
  /** Optional position in a grid — used for subtle stagger entrance */
  index?: number
}

export function TimelineEntryCard({ entry, onTagClick, readingMode, index = 0 }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05, ease: [0.22, 1, 0.36, 1], layout: { duration: 0.3 } }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-codex-gold/40 via-codex-gold-dim/20 to-transparent ml-4 hidden md:block" />

      <div className={`parchment-panel p-6 md:p-8 md:ml-10 relative transition-all duration-300
        hover:border-codex-gold-dim/50 hover:shadow-[0_0_20px_rgba(197,160,89,0.08)]
        ${readingMode ? '' : ''}`}
      >
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
            <h3 className="font-heading text-base text-codex-gold-bright text-glow mt-1">
              {entry.title}
            </h3>
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

        {/* Lore paragraphs */}
        <AnimatePresence initial={false}>
          {(expanded || readingMode) ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className="space-y-4 mb-6">
                {entry.lore.map((para, i) => (
                  <p key={i} className="font-body text-codex-parchment leading-relaxed text-sm md:text-base">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-6 p-4 bg-codex-green/20 border border-codex-gold-dim/20 rounded-sm">
                <p className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase mb-2">
                  ¿Por qué importa?
                </p>
                <p className="font-body text-codex-parchment-dim text-sm leading-relaxed">
                  {entry.whyItMatters}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="font-body text-codex-parchment-dim text-sm leading-relaxed line-clamp-3">
                {entry.lore[0]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="mt-5">
          <RuneSeparator className="mb-4 opacity-40" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {entry.tags.slice(0, 5).map((tag) => (
                <TagPill key={tag} tag={tag} onClick={onTagClick} />
              ))}
            </div>
            <div className="flex items-center gap-3">
              {!readingMode && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-1.5 text-xs text-codex-gold-dim hover:text-codex-gold transition-colors font-heading tracking-wider uppercase"
                >
                  {expanded ? (
                    <><ChevronUp size={14} /> Contraer</>
                  ) : (
                    <><ChevronDown size={14} /> Expandir</>
                  )}
                </button>
              )}
              <Link
                to={pathFor.timeline(entry)}
                className="flex items-center gap-1 text-xs text-codex-gold/80 hover:text-codex-gold-bright transition-colors font-heading tracking-wider uppercase"
              >
                Leer más
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
