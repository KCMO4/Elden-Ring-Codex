import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { EntityType } from '../data/types'
import { getEntityPreview } from '../data/lookups'
import { categoryToArtPath } from '../lib/assetPaths'
import { EraBadge } from './EraBadge'
import { entityTypeLabel } from './RichLoreText'

interface Props {
  /** The entity link being decorated */
  targetType: EntityType
  slug: string
  /** What the link itself renders — we wrap it transparently */
  children: ReactNode
}

const HOVER_DELAY_MS = 220
const HIDE_DELAY_MS  = 100

/* Wikipedia-style hover preview for internal lore links. Wraps the child
   link, listens for hover/focus, and shows a small popover with thumbnail
   + name + 1-line role + faction + era. Lookup is O(1) (already-loaded
   data); image lazy-loads when the card opens.

   Uses CSS `position: absolute` relative to the wrapper. The popover
   tries to position above the link; if there's no viewport room above,
   falls back to below. */
export function EntityHoverCard({ targetType, slug, children }: Props) {
  const wrapRef = useRef<HTMLSpanElement>(null)
  const showTimer = useRef<number | null>(null)
  const hideTimer = useRef<number | null>(null)
  const [open, setOpen] = useState(false)
  const [side, setSide] = useState<'top' | 'bottom'>('top')

  /* Lazy compute — only when opened we pay the lookup */
  const preview = open ? getEntityPreview(targetType, slug) : null

  const computeSide = () => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    /* If less than 220px above the link, drop below */
    setSide(rect.top < 230 ? 'bottom' : 'top')
  }

  const onEnter = () => {
    if (hideTimer.current) { window.clearTimeout(hideTimer.current); hideTimer.current = null }
    if (open) return
    showTimer.current = window.setTimeout(() => {
      computeSide()
      setOpen(true)
    }, HOVER_DELAY_MS)
  }
  const onLeave = () => {
    if (showTimer.current) { window.clearTimeout(showTimer.current); showTimer.current = null }
    hideTimer.current = window.setTimeout(() => setOpen(false), HIDE_DELAY_MS)
  }

  useEffect(() => () => {
    if (showTimer.current) window.clearTimeout(showTimer.current)
    if (hideTimer.current) window.clearTimeout(hideTimer.current)
  }, [])

  return (
    <span
      ref={wrapRef}
      className="relative inline"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      {children}
      <AnimatePresence>
        {open && preview && (
          <motion.span
            role="tooltip"
            initial={{ opacity: 0, y: side === 'top' ? 4 : -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: side === 'top' ? 4 : -4 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className={`absolute z-40 left-0 w-[300px] max-w-[88vw]
                        ${side === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}
                        block`}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <span className="block bg-codex-black/95 backdrop-blur-md
                             border border-codex-gold-dim/45 rounded-sm
                             shadow-[0_8px_28px_rgba(0,0,0,0.6),0_0_0_1px_rgba(212,173,98,0.12)]
                             overflow-hidden">
              <span className="flex">
                {/* Thumbnail */}
                <span className="block w-20 h-24 shrink-0 bg-codex-brown/50 overflow-hidden border-r border-codex-gold-dim/25">
                  <img
                    src={categoryToArtPath(preview.imageCategory, preview.imageId)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                </span>
                {/* Body */}
                <span className="block p-3 min-w-0 flex-1">
                  <span className="block font-heading text-[9px] tracking-widest uppercase text-codex-gold-dim mb-0.5">
                    {entityTypeLabel[preview.type]}
                    {preview.faction && (
                      <span className="text-codex-parchment-dim normal-case font-body tracking-normal"> · {preview.faction}</span>
                    )}
                  </span>
                  <span className="flex items-baseline gap-2 mb-1">
                    <span className="block font-heading text-sm text-codex-gold-bright leading-tight">
                      {preview.name}
                    </span>
                    {preview.expansion === 'sote' && (
                      <span
                        className="font-heading text-[8px] tracking-widest uppercase px-1 py-0.5 rounded-sm
                                   bg-codex-rot/15 border border-codex-rot/40 text-codex-rot/95"
                        title="Esta entrada incluye contenido del DLC Shadow of the Erdtree"
                      >
                        SOTE
                      </span>
                    )}
                  </span>
                  {preview.summary && (
                    <span className={`block font-body text-xs text-codex-parchment-dim leading-snug
                      ${preview.type === 'concept' ? 'line-clamp-6' : 'line-clamp-3'}`}>
                      {preview.summary}
                    </span>
                  )}
                  <span className="block mt-1.5">
                    <EraBadge entity={{ id: preview.id, tags: preview.tags }} size="full" />
                  </span>
                </span>
              </span>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
