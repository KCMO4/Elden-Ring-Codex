import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Faction } from '../data/types'
import { CertaintyBadge } from './CertaintyBadge'
import { TagPill } from './TagPill'
import { CodexImage } from './images/CodexImage'
import { CornerOrnaments } from './CornerOrnaments'
import { factionFallbacks } from '../lib/fallbackMap'
import { factionTone, toneBorderClass } from '../lib/factionColors'
import { EraBadge } from './EraBadge'
import { ReadCheck } from './ReadCheck'
import { pathFor } from '../data/lookups'
import { RuneSeparator } from './illustrations/RuneSeparator'

interface Props {
  faction: Faction
  onTagClick?: (tag: string) => void
  /** Optional position in a grid — used for subtle stagger entrance */
  index?: number
}

export function FactionCard({ faction, onTagClick, index = 0 }: Props) {
  const [open, setOpen] = useState(false)
  const fallback = factionFallbacks[faction.id] ?? 'faction'
  const tone = factionTone(faction.id)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.45, delay: (index % 12) * 0.04, ease: [0.22, 1, 0.36, 1], layout: { duration: 0.3 } }}
      className={`parchment-panel overflow-hidden cursor-pointer group transition-all duration-500
                  border-l-[3px] ${toneBorderClass[tone]}
                  hover:border-codex-gold/60
                  hover:shadow-[0_0_0_1px_rgba(197,160,89,0.25),0_8px_30px_rgba(197,160,89,0.18),0_0_60px_rgba(197,160,89,0.08)]`}
      onClick={() => setOpen(!open)}
    >
      {/* Emblem / artwork */}
      <div className="relative">
        <CodexImage
          alt={faction.name}
          fallbackType={fallback}
          variant="card"
          entityCategory="factions"
          entityId={faction.id}
          overlayOpacity={0.45}
          hoverZoom
        >
          {/* Certainty badge — top right corner only */}
          <div className="absolute top-2 right-2 z-10">
            <CertaintyBadge certainty={faction.certainty} />
          </div>
        </CodexImage>

        <CornerOrnaments size="sm" />
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex items-center justify-end gap-1.5 mb-1 -mt-1">
          <ReadCheck type="faction" slug={faction.id} />
          <EraBadge entity={faction} size="compact" />
        </div>
        <h3 className="font-heading text-base text-codex-gold-bright leading-tight mb-2">
          {faction.name}
        </h3>
        <p className="text-sm text-codex-parchment-dim leading-relaxed line-clamp-2 mb-2">
          {faction.what}
        </p>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <RuneSeparator className="my-4 opacity-40" />

              <div className="space-y-4">
                <Section label="¿Qué son?" content={faction.what} />

                <div className="p-3 bg-codex-green/15 border border-codex-gold-dim/20 rounded-sm">
                  <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-1">
                    Creen / Representan
                  </p>
                  <p className="font-subheading italic text-sm text-codex-parchment-dim leading-relaxed">
                    {faction.belief}
                  </p>
                </div>

                <Section label="¿Por qué importan?" content={faction.whyMatters} />

                <div className="p-3 bg-codex-brown/30 border border-codex-gold-dim/15 rounded-sm">
                  <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-1">
                    Relación con el Orden Dorado
                  </p>
                  <p className="text-xs text-codex-parchment-dim leading-relaxed">{faction.relationToOrder}</p>
                </div>

                {faction.keyMembers && faction.keyMembers.length > 0 && (
                  <div>
                    <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-2">
                      Miembros Notables
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {faction.keyMembers.map((m) => (
                        <span key={m} className="text-xs px-2 py-0.5 bg-codex-brown/50 text-codex-parchment-dim border border-codex-gold-dim/20 rounded-sm">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-codex-gold-dim/20">
                  {faction.tags.map((tag) => (
                    <TagPill key={tag} tag={tag} onClick={onTagClick} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-3 pt-3 border-t border-codex-gold-dim/15 flex items-center justify-between gap-3">
          <span className="font-heading text-xs tracking-wider uppercase text-codex-gold-dim group-hover:text-codex-gold transition-colors">
            {open ? '↑ Cerrar' : '↓ Resumen'}
          </span>
          <Link
            to={pathFor.faction(faction)}
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

function Section({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-1">{label}</p>
      <p className="text-sm text-codex-parchment leading-relaxed">{content}</p>
    </div>
  )
}
