import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Faction } from '../data/types'
import { CertaintyBadge } from './CertaintyBadge'
import { TagPill } from './TagPill'
import { CodexImage } from './images/CodexImage'
import { getFactionArt } from '../lib/assetPaths'
import { factionFallbacks } from '../lib/fallbackMap'
import { RuneSeparator } from './illustrations/RuneSeparator'

interface Props {
  faction: Faction
  onTagClick?: (tag: string) => void
}

export function FactionCard({ faction, onTagClick }: Props) {
  const [open, setOpen] = useState(false)
  const fallback = factionFallbacks[faction.id] ?? 'faction'

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="parchment-panel overflow-hidden cursor-pointer group hover:border-codex-gold-dim/50 hover:shadow-[0_0_20px_rgba(197,160,89,0.08)] transition-all duration-300"
      onClick={() => setOpen(!open)}
    >
      {/* Emblem / artwork */}
      <div className="relative">
        <CodexImage
          src={getFactionArt(faction.id)}
          alt={faction.name}
          fallbackType={fallback}
          variant="card"
          overlayOpacity={0.45}
          hoverZoom
        >
          <div className="p-4">
            <div className="flex items-end justify-between gap-2">
              <h3 className="font-heading text-lg text-codex-gold-bright leading-tight drop-shadow-lg"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}>
                {faction.name}
              </h3>
              <CertaintyBadge certainty={faction.certainty} />
            </div>
          </div>
        </CodexImage>

        {/* Corner frames */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-codex-gold-dim/50 pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-codex-gold-dim/50 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-codex-gold-dim/50 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-codex-gold-dim/50 pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="p-4">
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

        <div className="mt-3 pt-3 border-t border-codex-gold-dim/15 flex justify-end">
          <span className="font-heading text-xs tracking-wider uppercase text-codex-gold-dim group-hover:text-codex-gold transition-colors">
            {open ? '↑ Cerrar' : '↓ Leer más'}
          </span>
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
