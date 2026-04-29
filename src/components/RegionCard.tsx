import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sword } from 'lucide-react'
import type { Region } from '../data/types'
import { CertaintyBadge } from './CertaintyBadge'
import { TagPill } from './TagPill'
import { CodexImage } from './images/CodexImage'
import { getRegionArt } from '../lib/assetPaths'
import { regionFallbacks } from '../lib/fallbackMap'

interface Props {
  region: Region
  selected?: boolean
  onSelect?: () => void
  onTagClick?: (tag: string) => void
}

export function RegionCard({ region, selected, onSelect, onTagClick }: Props) {
  const [expanded, setExpanded] = useState(false)
  const fallback = regionFallbacks[region.id] ?? 'region'
  const isOpen = expanded || selected

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`parchment-panel overflow-hidden transition-all duration-300 group cursor-pointer
        ${selected
          ? 'border-codex-gold/50 shadow-[0_0_30px_rgba(197,160,89,0.15)]'
          : 'hover:border-codex-gold-dim/50 hover:shadow-[0_0_15px_rgba(197,160,89,0.07)]'
        }`}
      onClick={onSelect}
    >
      {/* Banner image */}
      <div className="relative">
        <CodexImage
          src={getRegionArt(region.id)}
          alt={region.name}
          fallbackType={fallback}
          variant="banner"
          overlayOpacity={0.4}
          hoverZoom
        >
          <div className="p-4">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="font-heading text-xs text-codex-gold-dim/80 tracking-widest uppercase mb-0.5">
                  {region.mainFaction}
                </p>
                <h3 className="font-heading text-xl text-codex-gold-bright leading-tight drop-shadow-lg"
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}>
                  {region.name}
                </h3>
              </div>
              <CertaintyBadge certainty={region.certainty} />
            </div>
          </div>
        </CodexImage>

        {/* Corner frames */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-codex-gold-dim/50 pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-codex-gold-dim/50 pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="p-4">
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

        <div
          className="mt-3 pt-3 border-t border-codex-gold-dim/15 flex justify-end"
          onClick={(e) => { e.stopPropagation(); setExpanded(!expanded) }}
        >
          <span className="font-heading text-xs tracking-wider uppercase text-codex-gold-dim group-hover:text-codex-gold transition-colors">
            {isOpen ? '↑ Contraer' : '↓ Explorar'}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
