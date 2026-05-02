import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { acquireScrollLock } from '../lib/scrollLock'

/* Shortcut cheatsheet modal — opens when the user presses `?`. Lists all
   keyboard navigation, search, and content-color conventions in one place
   so the features we built don't stay hidden. */

const SHORTCUT_LIST: Array<{ keys: string[]; label: string; section: string }> = [
  { section: 'Navegación', keys: ['Ctrl', 'K'], label: 'Buscar (Mac: ⌘ + K)' },
  { section: 'Navegación', keys: ['/'],         label: 'Ir a la búsqueda' },
  { section: 'Navegación', keys: ['?'],         label: 'Mostrar esta ayuda' },
  { section: 'Navegación', keys: ['Esc'],       label: 'Cerrar modal / sidebar / drawer' },
  { section: 'Lectura',    keys: ['j'],         label: 'Siguiente entrada (en página de detalle)' },
  { section: 'Lectura',    keys: ['k'],         label: 'Entrada anterior (en página de detalle)' },
]

export function ShortcutsCheatsheet() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  /* Open on `?`. Inert when typing in a field. */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== '?' || e.ctrlKey || e.metaKey || e.altKey) return
      const tgt = e.target as HTMLElement | null
      if (tgt) {
        const tag = tgt.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tgt.isContentEditable) return
      }
      e.preventDefault()
      previousFocusRef.current = document.activeElement as HTMLElement | null
      setOpen(true)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  /* Focus trap + Esc to close + body scroll lock + restore focus on close.
     Pattern mirrors GlossaryModal — Tab cycles within the dialog. */
  useEffect(() => {
    if (!open) return

    const focusables = () => {
      if (!modalRef.current) return [] as HTMLElement[]
      const sel = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      return Array.from(modalRef.current.querySelectorAll<HTMLElement>(sel))
    }

    const list0 = focusables()
    list0[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
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

    document.addEventListener('keydown', onKey)
    const releaseLock = acquireScrollLock()
    return () => {
      document.removeEventListener('keydown', onKey)
      releaseLock()
      previousFocusRef.current?.focus?.()
    }
  }, [open])

  const sections = Array.from(new Set(SHORTCUT_LIST.map((s) => s.section)))

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-codex-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="shortcuts-title"
            className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              initial={{ y: 20, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 8, scale: 0.97 }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              className="parchment-panel pointer-events-auto w-full max-w-2xl bg-codex-black/95 backdrop-blur-md
                         border border-codex-gold-dim/50 p-6 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 id="shortcuts-title" className="font-heading text-xl text-codex-gold-bright tracking-wide">
                    Ayuda de navegación
                  </h2>
                  <p className="font-subheading italic text-sm text-codex-parchment-dim mt-1">
                    Atajos y convenciones del códice
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar"
                  className="text-codex-parchment-dim hover:text-codex-parchment transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {sections.map((section) => (
                <div key={section} className="mb-5">
                  <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-2">
                    {section}
                  </p>
                  <ul className="space-y-1.5">
                    {SHORTCUT_LIST.filter((s) => s.section === section).map((s, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 py-1">
                        <span className="text-sm text-codex-parchment">{s.label}</span>
                        <span className="flex items-center gap-1 shrink-0">
                          {s.keys.map((k, j) => (
                            <kbd
                              key={j}
                              className="font-mono text-[11px] bg-codex-brown/70 border border-codex-gold-dim/40 rounded
                                         px-1.5 py-0.5 text-codex-parchment shadow-[inset_0_-1px_0_rgba(0,0,0,0.3)]"
                            >
                              {k}
                            </kbd>
                          ))}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Era legend */}
              <div className="mt-4 pt-3 border-t border-codex-gold-dim/20">
                <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-2">
                  Eras
                </p>
                <ul className="flex flex-wrap gap-2">
                  <li className="inline-flex items-center gap-1.5 text-xs text-codex-flame">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" /> Pre-Orden
                  </li>
                  <li className="inline-flex items-center gap-1.5 text-xs text-codex-gold">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" /> Era de Marika
                  </li>
                  <li className="inline-flex items-center gap-1.5 text-xs text-codex-rot">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" /> La Fractura
                  </li>
                  <li className="inline-flex items-center gap-1.5 text-xs text-codex-ghost">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" /> Tarnished
                  </li>
                </ul>
              </div>

              <p className="mt-5 pt-3 border-t border-codex-gold-dim/20 text-[11px] text-codex-parchment-dim/70 italic">
                ✓ junto a una entrada significa que ya leíste {'>'}70% de su contenido.
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
