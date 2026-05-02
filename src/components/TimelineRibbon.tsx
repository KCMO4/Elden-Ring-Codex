import { useState, useMemo, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react'
import type { TimelineEntry, Certainty } from '../data/types'
import { pathFor } from '../data/lookups'
import { CertaintyBadge } from './CertaintyBadge'

interface Props {
  entries: TimelineEntry[]
}

/**
 * Maps the human-readable `chapter` field to an era category for color-coding.
 * Roman numeral chapters (I, II, ...) are mapped via their numeric prefix in chapterNumber.
 */
function classifyEra(entry: TimelineEntry): 'pre-orden' | 'orden-dorado' | 'pre-fractura' | 'fractura' | 'Tarnished' {
  const c = (entry.chapter ?? '').toLowerCase()
  if (c.includes('pre-orden') || c.includes('antiguos') || c.includes('transición')) return 'pre-orden'
  if (c.includes('orden dorado')) return 'orden-dorado'
  if (c.includes('pre-fractura') || c.includes('post-noche')) return 'pre-fractura'
  if (c.includes('fractura')) return 'fractura'
  if (c.includes('Tarnished')) return 'Tarnished'
  // Roman numeral chapters: classify by chapterNumber prefix
  const num = romanToInt(entry.chapterNumber.split('·')[0].trim())
  if (num <= 3) return 'pre-orden'
  if (num <= 10) return 'orden-dorado'
  if (num <= 12) return 'pre-fractura'
  if (num <= 14) return 'fractura'
  return 'Tarnished'
}

function romanToInt(s: string): number {
  const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let total = 0
  for (let i = 0; i < s.length; i++) {
    const cur = map[s[i]] ?? 0
    const nxt = map[s[i + 1]] ?? 0
    total += cur < nxt ? -cur : cur
  }
  return total
}

/* Era tokens routed through codex-* CSS-var palette so light mode adapts.
   Previously used Tailwind palette (purple-300, amber-400, blue-300) which
   were dark-tuned and washed out on the cream background. */
const eraStyles: Record<string, { label: string; bg: string; border: string; dot: string; text: string }> = {
  'pre-orden':     { label: 'Pre-Orden',          bg: 'bg-codex-rot/10',     border: 'border-codex-rot/30',     dot: 'bg-codex-rot',     text: 'text-codex-rot' },
  'orden-dorado':  { label: 'Orden Dorado',       bg: 'bg-codex-gold/10',    border: 'border-codex-gold/40',    dot: 'bg-codex-gold',    text: 'text-codex-gold' },
  'pre-fractura':  { label: 'Pre-Fractura',       bg: 'bg-codex-flame/10',   border: 'border-codex-flame/40',   dot: 'bg-codex-flame',   text: 'text-codex-flame' },
  'fractura':      { label: 'Era de la Fractura', bg: 'bg-codex-crimson/10', border: 'border-codex-crimson/40', dot: 'bg-codex-crimson', text: 'text-codex-crimson' },
  'Tarnished':     { label: 'Era del Tarnished',  bg: 'bg-codex-ghost/10',   border: 'border-codex-ghost/30',   dot: 'bg-codex-ghost',   text: 'text-codex-ghost' },
}

const ZOOM_LEVELS = [180, 240, 320, 420] // card widths in px
const DEFAULT_ZOOM = 1

export function TimelineRibbon({ entries }: Props) {
  const [zoom, setZoom] = useState(DEFAULT_ZOOM)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardWidth = ZOOM_LEVELS[zoom]

  const eraCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const e of entries) {
      const era = classifyEra(e)
      counts[era] = (counts[era] ?? 0) + 1
    }
    return counts
  }, [entries])

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0
  }, [zoom])

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'left' ? -cardWidth * 2 : cardWidth * 2, behavior: 'smooth' })
  }

  return (
    <div className="parchment-panel p-4 mb-8">
      {/* Controls — stack vertically on mobile, side-by-side from sm: up */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <p className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase">
            Línea cosmológica · {entries.length} eventos
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            {Object.entries(eraStyles).map(([era, s]) =>
              eraCounts[era] ? (
                <span key={era} className="flex items-center gap-1.5 text-[10px] font-heading tracking-wider uppercase text-codex-parchment-dim/70">
                  <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                  {s.label}
                </span>
              ) : null,
            )}
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setZoom((z) => Math.max(0, z - 1))}
            disabled={zoom === 0}
            className="p-1.5 text-codex-gold-dim hover:text-codex-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Reducir zoom"
          >
            <ZoomOut size={14} />
          </button>
          <span className="font-heading text-[10px] text-codex-gold-dim tracking-wider w-8 text-center">{zoom + 1}/{ZOOM_LEVELS.length}</span>
          <button
            onClick={() => setZoom((z) => Math.min(ZOOM_LEVELS.length - 1, z + 1))}
            disabled={zoom === ZOOM_LEVELS.length - 1}
            className="p-1.5 text-codex-gold-dim hover:text-codex-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Aumentar zoom"
          >
            <ZoomIn size={14} />
          </button>
          <div className="w-px h-5 bg-codex-gold-dim/20 mx-1" />
          <button
            onClick={() => scroll('left')}
            className="p-1.5 text-codex-gold-dim hover:text-codex-gold transition-colors"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1.5 text-codex-gold-dim hover:text-codex-gold transition-colors"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Ribbon */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(138,112,64,0.4) rgba(63,40,28,0.2)',
          }}
        >
          {/* Spine */}
          <div className="relative" style={{ minWidth: `${entries.length * (cardWidth + 12)}px` }}>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-codex-gold-dim/0 via-codex-gold-dim/40 to-codex-gold-dim/0 -translate-y-1/2" />

            <div className="flex gap-3 relative">
              {entries.map((entry, i) => {
                const era = classifyEra(entry)
                const styles = eraStyles[era]
                const isAbove = i % 2 === 0
                return (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '50px' }}
                    transition={{ delay: i * 0.015 }}
                    className="shrink-0 flex flex-col items-center"
                    style={{ width: cardWidth }}
                  >
                    {/* Card above or below the spine */}
                    <div className={`flex flex-col ${isAbove ? '' : 'flex-col-reverse'}`}>
                      <Link
                        to={pathFor.timeline(entry)}
                        className={`block parchment-panel p-3 border ${styles.border} ${styles.bg} group hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] transition-all`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className={`font-heading text-[10px] ${styles.text} tracking-widest uppercase`}>
                            {entry.chapterNumber}
                          </span>
                          <CertaintyBadge certainty={entry.certainty as Certainty} />
                        </div>
                        <h4 className="font-heading text-sm text-codex-parchment leading-tight group-hover:text-codex-gold-bright transition-colors mb-1.5 line-clamp-2">
                          {entry.title}
                        </h4>
                        <p className="font-subheading italic text-xs text-codex-parchment-dim/70 leading-snug line-clamp-2">
                          {entry.poeticIntro}
                        </p>
                      </Link>

                      {/* Connector to spine */}
                      <div className={`flex justify-center ${isAbove ? 'mt-2' : 'mb-2'}`}>
                        <div className="w-px h-6 border-l" style={{ borderLeftColor: 'rgba(138,112,64,0.4)' }} />
                      </div>

                      {/* Spine dot */}
                      <div className="flex justify-center">
                        <div className={`w-2.5 h-2.5 rounded-full ${styles.dot} ring-2 ring-codex-black`} />
                      </div>
                    </div>

                    {/* Index number under spine */}
                    <span className="font-heading text-[10px] text-codex-parchment-dim/70 tracking-wider mt-1.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <p className="font-heading text-[10px] text-codex-parchment-dim/70 tracking-wider uppercase text-center mt-2">
        Desliza horizontalmente · Click en cualquier evento para abrirlo
      </p>
    </div>
  )
}
