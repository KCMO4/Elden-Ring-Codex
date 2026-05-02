import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from 'lucide-react'

interface Props {
  headings: { id: string; text: string; level: 2 | 3 }[]
}

/**
 * Bottom-sheet table of contents for `<lg` viewports. A floating action
 * button reveals a drawer that slides up from the bottom with the article's
 * headings. Closing requires Esc, the close button, or tapping the
 * backdrop.
 */
export function MobileToC({ headings }: Props) {
  const [open, setOpen] = useState(false)
  /* Lift the trigger button on routes that pin a floating bar at the bottom
     (currently only TimelineDetailPage with its ChronoFloatingBar). */
  const hasFloatingBar = typeof window !== 'undefined'
    && /^\/timeline\/[^/]+$/.test(window.location.pathname)

  /* Close on Escape and lock background scroll while the sheet is open. */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  const handleSelect = (id: string) => {
    setOpen(false)
    /* Wait one frame so the body-scroll-lock has been released before we
       scroll to the target element — otherwise the smooth scroll is no-op. */
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir índice"
        className={`lg:hidden fixed left-6 z-40
                   w-11 h-11 flex items-center justify-center rounded-full
                   bg-codex-brown/85 border border-codex-gold-dim/40 backdrop-blur-md
                   text-codex-gold-dim hover:text-codex-gold-bright hover:border-codex-gold/60
                   hover:shadow-[0_0_18px_rgba(197,160,89,0.3)] transition-all duration-200
                   ${hasFloatingBar ? 'bottom-20' : 'bottom-6'}`}
      >
        <List size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="lg:hidden fixed inset-0 z-50 bg-codex-black/75 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Índice de la página"
              className="lg:hidden fixed left-0 right-0 bottom-0 z-50 max-h-[70vh]
                         bg-codex-black border-t border-codex-gold-dim/40 rounded-t-md
                         flex flex-col overflow-hidden"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            >
              <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-codex-gold-dim/20">
                <p className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase">
                  En esta página
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar índice"
                  className="text-codex-parchment-dim hover:text-codex-parchment transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <ul className="overflow-y-auto py-2 px-2">
                {headings.map((h) => (
                  <li key={h.id}>
                    <button
                      type="button"
                      onClick={() => handleSelect(h.id)}
                      className={`w-full text-left px-3 py-2 rounded-sm text-sm leading-snug
                                  hover:bg-codex-brown/40 hover:text-codex-parchment transition-colors
                                  ${h.level === 3 ? 'pl-8 text-codex-parchment-dim' : 'text-codex-parchment'}`}
                    >
                      {h.text}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
