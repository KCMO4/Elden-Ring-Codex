import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Users, BookOpen, ArrowRight } from 'lucide-react'
import type { Character } from '../data/types'
import { CertaintyBadge } from './CertaintyBadge'
import { TagPill } from './TagPill'
import { CodexImage } from './images/CodexImage'
import { CornerOrnaments } from './CornerOrnaments'
import { EraBadge } from './EraBadge'
import { ReadCheck } from './ReadCheck'
import { characterFallbacks } from '../lib/fallbackMap'
import { factionTone, toneBorderClass, toneTextClass } from '../lib/factionColors'
import { pathFor } from '../data/lookups'
import { RuneSeparator } from './illustrations/RuneSeparator'

interface Props {
  character: Character
  onTagClick?: (tag: string) => void
  /** Optional position in a grid — used for subtle stagger entrance */
  index?: number
}

export function CharacterCard({ character, onTagClick, index = 0 }: Props) {
  const [open, setOpen] = useState(false)
  const fallback = characterFallbacks[character.id] ?? 'character'
  const tone = factionTone(character.faction)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.45, delay: (index % 12) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`parchment-panel overflow-hidden cursor-pointer transition-all duration-500 group
        border-l-[3px] ${toneBorderClass[tone]}
        hover:border-codex-gold/60
        hover:shadow-[0_0_0_1px_rgba(197,160,89,0.25),0_8px_30px_rgba(197,160,89,0.18),0_0_60px_rgba(197,160,89,0.08)]
        ${open ? 'border-codex-gold-dim/60' : ''}`}
      onClick={() => setOpen(!open)}
    >
      {/* Portrait image */}
      <div className="relative">
        <CodexImage
          alt={character.name}
          fallbackType={fallback}
          variant="landscape"
          entityCategory="characters"
          entityId={character.id}
          overlayOpacity={0.35}
          hoverZoom
        >
          {/* Certainty badge — top right corner only */}
          <div className="absolute top-2 right-2 z-10">
            <CertaintyBadge certainty={character.certainty} />
          </div>
        </CodexImage>

        <CornerOrnaments />
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex items-center justify-between gap-2 mb-1">
          <p className={`font-heading text-[10px] tracking-widest uppercase ${toneTextClass[tone]}`}>
            {character.faction}
          </p>
          <div className="flex items-center gap-1.5">
            <ReadCheck type="character" slug={character.id} />
            <EraBadge entity={character} size="compact" />
          </div>
        </div>
        <h3 className="font-heading text-base text-codex-gold-bright leading-tight mb-3">
          {character.name}
        </h3>
        <p className="font-body text-sm text-codex-parchment-dim leading-relaxed mb-3 line-clamp-2">
          {character.role}
        </p>

        <p className="font-subheading italic text-sm text-codex-parchment-dim/80 leading-relaxed line-clamp-3 mb-3">
          "{character.poeticDesc}"
        </p>

        {/* Expanded details */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <RuneSeparator className="mb-4 opacity-40" />

              <div className="space-y-4">
                {/* Tragedy */}
                <div className="p-3 bg-codex-rot/10 border-l-2 border-codex-rot/40 rounded-sm">
                  <p className="font-heading text-xs text-codex-rot/70 tracking-wider uppercase mb-1">
                    Tragedia Central
                  </p>
                  <p className="font-subheading italic text-sm text-codex-parchment-dim leading-relaxed">
                    {character.tragedy}
                  </p>
                </div>

                {/* Events */}
                <div>
                  <FieldLabel icon={<BookOpen size={11} />} text="Eventos Principales" />
                  <ul className="mt-2 space-y-1.5">
                    {character.events.map((e, i) => (
                      <li key={i} className="text-sm text-codex-parchment leading-relaxed flex gap-2">
                        <span className="text-codex-gold-dim mt-0.5 shrink-0 text-xs">◆</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Region + related */}
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <FieldLabel icon={<MapPin size={11} />} text="Región" />
                    <p className="text-sm text-codex-parchment mt-1">{character.region}</p>
                  </div>
                  <div>
                    <FieldLabel icon={<Users size={11} />} text="Relacionados" />
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {character.related.map((r) => (
                        <span key={r} className="text-xs px-2 py-0.5 bg-codex-brown/50 text-codex-parchment-dim border border-codex-gold-dim/20 rounded-sm">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Theme */}
                <div className="p-3 bg-codex-green/15 border border-codex-gold-dim/20 rounded-sm">
                  <FieldLabel icon={<BookOpen size={11} />} text="Significado Temático" />
                  <p className="text-sm text-codex-parchment-dim mt-2 leading-relaxed">{character.theme}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-codex-gold-dim/20">
                  {character.tags.map((tag) => (
                    <TagPill key={tag} tag={tag} onClick={onTagClick} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer: expand toggle + leer más */}
        <div className="mt-3 pt-3 border-t border-codex-gold-dim/15 flex items-center justify-between gap-3">
          <span className="font-heading text-xs tracking-wider uppercase text-codex-gold-dim group-hover:text-codex-gold transition-colors">
            {open ? '↑ Cerrar' : '↓ Expandir'}
          </span>
          <Link
            to={pathFor.character(character)}
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

function FieldLabel({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-codex-gold-dim">
      {icon}
      <span className="font-heading text-xs tracking-wider uppercase">{text}</span>
    </div>
  )
}
