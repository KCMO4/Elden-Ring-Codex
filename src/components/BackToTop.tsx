import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

interface Props {
  /** Show when the user has scrolled at least this many px. Default 400. */
  threshold?: number
}

/**
 * Floating "back to top" button that appears once the user has scrolled
 * past the threshold. Smooth-scrolls to the top of the page when clicked.
 * Respects `prefers-reduced-motion` via the global CSS rule.
 */
export function BackToTop({ threshold = 400 }: Props) {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  /* Timeline detail pages render a ChronoFloatingBar pinned to bottom-0
     (~44px tall). Push the button above it to avoid overlap. */
  const hasFloatingBar = /^\/timeline\/[^/]+$/.test(pathname)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > threshold)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver arriba"
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.2 }}
          className={`fixed right-6 z-40
                     w-11 h-11 flex items-center justify-center rounded-full
                     bg-codex-brown/85 border border-codex-gold-dim/40 backdrop-blur-md
                     text-codex-gold-dim hover:text-codex-gold-bright hover:border-codex-gold/60
                     hover:shadow-[0_0_18px_rgba(197,160,89,0.3)]
                     transition-all duration-200
                     ${hasFloatingBar ? 'bottom-20' : 'bottom-6'}`}
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
