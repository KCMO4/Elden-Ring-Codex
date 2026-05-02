import { useScroll, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

/* Routes where DetailLayout already renders a per-article scroll bar.
   We hide the global progress on those to avoid two stacked bars at top-0. */
const DETAIL_PREFIXES = [
  '/personajes/', '/regiones/', '/facciones/', '/conceptos/',
  '/timeline/', '/finales/', '/rutas/',
]

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const { pathname } = useLocation()
  const onDetailPage = DETAIL_PREFIXES.some((p) => pathname.startsWith(p) && pathname.length > p.length)
  if (onDetailPage) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-50 origin-left
                 bg-gradient-to-r from-codex-gold-dim via-codex-gold to-codex-gold-bright
                 shadow-[0_0_8px_rgb(var(--codex-gold)/0.5)]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
