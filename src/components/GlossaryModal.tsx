import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import type { GlossaryEntry } from '../data/types'
import { CertaintyBadge } from './CertaintyBadge'
import { CodexImage } from './images/CodexImage'
import { glossaryFallbacks } from '../lib/fallbackMap'
import { EnrichedText } from './RichLoreText'
import { pathFor } from '../data/lookups'

interface Props {
  entries: GlossaryEntry[]
  onTermClick?: (term: string) => void
}

export function GlossarySection({ entries, onTermClick }: Props) {
  const [selected, setSelected] = useState<GlossaryEntry | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  /* Focus trap + Escape close + restore focus on modal lifecycle. */
  useEffect(() => {
    if (!selected) return

    previouslyFocused.current = document.activeElement as HTMLElement | null

    const focusables = () => {
      if (!modalRef.current) return [] as HTMLElement[]
      const sel = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      return Array.from(modalRef.current.querySelectorAll<HTMLElement>(sel))
    }

    /* Focus first focusable element when modal opens. */
    const focusables0 = focusables()
    focusables0[0]?.focus()

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setSelected(null)
        return
      }
      if (e.key !== 'Tab') return
      const list = focusables()
      if (list.length === 0) return
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
      previouslyFocused.current?.focus()
    }
  }, [selected])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map((entry) => {
          const fallback = glossaryFallbacks[entry.id] ?? 'concept'
          return (
            <motion.button
              key={entry.id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelected(entry)}
              className="parchment-panel overflow-hidden text-left group hover:border-codex-gold-dim/50 transition-all duration-200"
            >
              {/* Small concept art strip */}
              <div className="h-20 relative overflow-hidden">
                <CodexImage
                  alt={entry.term}
                  fallbackType={fallback}
                  variant="banner"
                  entityCategory="concepts"
                  entityId={entry.id}
                  overlayOpacity={0.5}
                  hoverZoom
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-heading text-sm text-codex-gold-bright group-hover:text-glow transition-all leading-tight">
                    {entry.term}
                  </h4>
                  <CertaintyBadge certainty={entry.certainty} />
                </div>
                <p className="text-xs text-codex-parchment-dim leading-relaxed line-clamp-3">
                  <EnrichedText text={entry.definition} selfId={entry.id} />
                </p>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-codex-black/85 backdrop-blur-sm" />

            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="glossary-modal-title"
              className="relative w-full max-w-2xl parchment-panel border-codex-gold-dim/50 max-h-[90vh] overflow-hidden flex flex-col"
              style={{ boxShadow: '0 0 60px rgba(197,160,89,0.18)' }}
              initial={{ scale: 0.93, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 12 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header art */}
              <div className="h-40 relative shrink-0">
                <CodexImage
                  alt={selected.term}
                  fallbackType={glossaryFallbacks[selected.id] ?? 'concept'}
                  variant="banner"
                  entityCategory="concepts"
                  entityId={selected.id}
                  overlayOpacity={0.5}
                  hoverZoom={false}
                />

                {/* Corner frames */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-codex-gold-dim/50 pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-codex-gold-dim/50 pointer-events-none" />

                {/* Title over art */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <CertaintyBadge certainty={selected.certainty} />
                  <h3 id="glossary-modal-title" className="font-heading text-2xl text-codex-gold-bright mt-2 drop-shadow-lg"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
                    {selected.term}
                  </h3>
                </div>
              </div>

              {/* Body - scrollable */}
              <div className="overflow-y-auto p-6 space-y-5">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-sm bg-codex-black/60 text-codex-parchment-dim hover:text-codex-parchment transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={16} />
                </button>

                <p className="font-body text-base text-codex-parchment leading-loose">
                  <EnrichedText text={selected.definition} selfId={selected.id} />
                </p>

                <div className="bg-codex-green/15 border border-codex-gold-dim/20 p-4 rounded-sm">
                  <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-3">
                    Análisis Profundo
                  </p>
                  <p className="font-body text-sm text-codex-parchment-dim leading-loose">
                    <EnrichedText text={selected.deepDive} selfId={selected.id} />
                  </p>
                </div>

                {selected.related.length > 0 && (
                  <div>
                    <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-3">
                      Conceptos Relacionados
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selected.related.map((r) => (
                        <button
                          key={r}
                          onClick={() => {
                            const found = entries.find(
                              (e) => e.term === r || e.id === r.toLowerCase().replace(/[\s/]+/g, '-')
                            )
                            if (found) setSelected(found)
                            else onTermClick?.(r)
                          }}
                          className="px-3 py-1.5 text-xs bg-codex-brown/50 text-codex-parchment-dim border border-codex-gold-dim/30 rounded-sm hover:border-codex-gold-dim/60 hover:text-codex-parchment transition-all font-body"
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-codex-gold-dim/20">
                  <Link
                    to={pathFor.concept(selected)}
                    onClick={() => setSelected(null)}
                    className="flex items-center justify-end gap-1.5 font-heading text-xs tracking-wider uppercase text-codex-gold hover:text-codex-gold-bright transition-colors"
                  >
                    Página completa
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
