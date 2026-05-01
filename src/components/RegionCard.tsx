import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sword, ArrowRight } from 'lucide-react'
import type { Region } from '../data/types'
import { CertaintyBadge } from './CertaintyBadge'
import { TagPill } from './TagPill'
import { CodexImage } from './images/CodexImage'
import { CornerOrnaments } from './CornerOrnaments'
import { regionFallbacks } from '../lib/fallbackMap'
import { factionTone, toneBorderClass, toneTextClass } from '../lib/factionColors'
import { EraBadge } from './EraBadge'
import { ReadCheck } from './ReadCheck'
import { pathFor } from '../data/lookups'

interface Props {
  region: Region
  selected?: boolean
  onSelect?: () => void
  onTagClick?: (tag: string) => void
  /** Optional position in a grid — used for subtle stagger entrance */
  index?: number
}

export function RegionCard({ region, selected, onSelect, onTagClick, index = 0 }: Props) {
  const [expanded, setExpanded] = useState(false)
  const fallback = regionFallbacks[region.id] ?? 'region'
  const isOpen = expanded || selected
  const tone = factionTone(region.mainFaction)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.45, delay: (index % 12) * 0.04, ease: [0.22, 1, 0.36, 1], layout: { duration: 0.3 } }}
      className={`parchment-panel overflow-hidden transition-all duration-500 group cursor-pointer
        border-l-[3px] ${toneBorderClass[tone]}
        ${selected
          ? 'border-codex-gold/60 shadow-[0_0_0_1px_rgba(197,160,89,0.3),0_0_40px_rgba(197,160,89,0.18)]'
          : 'hover:border-codex-gold/60 hover:shadow-[0_0_0_1px_rgba(197,160,89,0.25),0_8px_30px_rgba(197,160,89,0.18),0_0_60px_rgba(197,160,89,0.08)]'
        }`}
      onClick={onSelect}
    >
      {/* Banner image */}
      <div className="relative">
        <CodexImage
          alt={region.name}
          fallbackType={fallback}
          variant="banner"
          entityCategory="regions"
          entityId={region.id}
          overlayOpacity={0.4}
          hoverZoom
        >
          {/* Certainty badge — top right corner only */}
          <div className="absolute top-2 right-2 z-10">
            <CertaintyBadge certainty={region.certainty} />
          </div>
        </CodexImage>

        <CornerOrnaments corners="top" />
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex items-center justify-between gap-2 mb-1">
          <p className={`font-heading text-[10px] tracking-widest uppercase ${toneTextClass[tone]}`}>
            {region.mainFaction}
          </p>
          <div className="flex items-center gap-1.5">
            <ReadCheck type="region" slug={region.id} />
            <EraBadge entity={region} size="compact" />
          </div>
        </div>
        <h3 className="font-heading text-base text-codex-gold-bright leading-tight mb-3">
          {region.name}
        </h3>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              key="open"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-4">
                {/* Historical */}
                <div>
                  <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-2">
                    Relevancia Histórica
                  </p>
                  <p className="text-sm text-codex-parchment leading-relaxed">{region.historical}</p>
                </div>

                {/* Bosses */}
                <div>
                  <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-2">
                    <Sword size={10} className="inline mr-1" />
                    Jefes / Encuentros
                  </p>
                  <ul className="space-y-1">
                    {region.bosses.map((boss, i) => (
                      <li key={i} className="text-sm text-codex-parchment-dim flex gap-2">
                        <span className="text-codex-crimson mt-0.5 shrink-0">⚔</span>
                        {boss}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hidden tragedy */}
                <div className="p-3 bg-codex-rot/10 border-l-2 border-codex-rot/40 rounded-sm">
                  <p className="font-heading text-xs text-codex-rot/70 tracking-wider uppercase mb-1">
                    Tragedia Oculta
                  </p>
                  <p className="font-subheading italic text-sm text-codex-parchment-dim leading-relaxed">
                    {region.hiddenTragedy}
                  </p>
                </div>

                {/* Timeline relation */}
                <div className="p-3 bg-codex-green/15 border border-codex-gold-dim/20 rounded-sm">
                  <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-1">
                    Relación con el Timeline
                  </p>
                  <p className="text-sm text-codex-parchment-dim leading-relaxed">{region.timelineRelation}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-codex-gold-dim/20">
                  {region.tags.map((tag) => (
                    <TagPill key={tag} tag={tag} onClick={onTagClick} />
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="collapsed"
              className="text-sm text-codex-parchment-dim leading-relaxed line-clamp-2"
            >
              {region.historical}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="mt-3 pt-3 border-t border-codex-gold-dim/15 flex items-center justify-between gap-3">
          <span
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded) }}
            className="font-heading text-xs tracking-wider uppercase text-codex-gold-dim group-hover:text-codex-gold transition-colors cursor-pointer"
          >
            {isOpen ? '↑ Contraer' : '↓ Explorar'}
          </span>
          <Link
            to={pathFor.region(region)}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 font-heading text-xs tracking-wider uppercase text-codex-gold/80 hover:text-codex-gold-bright transition-colors"
          >
            Leer más
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
