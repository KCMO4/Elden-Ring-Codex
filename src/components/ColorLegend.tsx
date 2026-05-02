import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info, ChevronUp } from 'lucide-react'
import { ERA_LABEL } from '../lib/eraOf'

/* Inline collapsible legend that explains the color cues used on the
   cards in this library page. Default state is collapsed (single button)
   to keep the listing clean; expanded shows era dots, faction-stripe hint,
   and a read-marker note. */
export function ColorLegend() {
  const [open, setOpen] = useState(false)

  return (
    <div className="-mt-3 mb-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 text-xs font-heading tracking-wider uppercase
                   text-codex-gold-dim hover:text-codex-gold-bright transition-colors"
      >
        {open ? <ChevronUp size={12} /> : <Info size={12} />}
        <span>{open ? 'Ocultar guía' : 'Guía de colores'}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="legend"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 parchment-panel p-3.5 space-y-3 text-xs">
              {/* Eras */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <span className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim/90 shrink-0">
                  Eras
                </span>
                <span className="inline-flex items-center gap-1.5 text-codex-flame">
                  <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-current" />
                  {ERA_LABEL['pre-order']}
                </span>
                <span className="inline-flex items-center gap-1.5 text-codex-gold">
                  <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-current" />
                  {ERA_LABEL.marika}
                </span>
                <span className="inline-flex items-center gap-1.5 text-codex-rot">
                  <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-current" />
                  {ERA_LABEL.shattering}
                </span>
                <span className="inline-flex items-center gap-1.5 text-codex-ghost">
                  <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-current" />
                  {ERA_LABEL.tarnished}
                </span>
              </div>

              {/* Faction stripe */}
              <div className="flex items-start gap-3">
                <span className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim/90 shrink-0 pt-0.5">
                  Franja
                </span>
                <span className="flex items-center gap-2 text-codex-parchment-dim">
                  <span aria-hidden className="inline-block w-1 h-4 bg-codex-gold rounded-sm" />
                  <span aria-hidden className="inline-block w-1 h-4 bg-codex-ghost rounded-sm" />
                  <span aria-hidden className="inline-block w-1 h-4 bg-codex-crimson rounded-sm" />
                  <span aria-hidden className="inline-block w-1 h-4 bg-codex-flame rounded-sm" />
                  <span aria-hidden className="inline-block w-1 h-4 bg-codex-rot rounded-sm" />
                  <span className="ml-1">El borde lateral de cada card refleja su facción.</span>
                </span>
              </div>

              {/* Read marker */}
              <div className="flex items-center gap-3">
                <span className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim/90 shrink-0">
                  Lectura
                </span>
                <span className="text-codex-parchment-dim flex items-center gap-1.5">
                  <span className="text-codex-gold">✓</span>
                  Entrada cuyo contenido ya recorriste (&gt;70 %)
                </span>
              </div>

              {/* Tip */}
              <p className="text-[11px] text-codex-parchment-dim/70 italic pt-1 border-t border-codex-gold-dim/15">
                Pulsa <kbd className="font-mono text-[10px] bg-codex-brown/60 border border-codex-gold-dim/40 rounded px-1">?</kbd> para ver la leyenda completa y atajos de teclado.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
