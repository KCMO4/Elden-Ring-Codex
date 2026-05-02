import { motion } from 'framer-motion'
import { FallbackIllustration } from './images/FallbackIllustrations'
import type { FallbackType } from '../data/types'

interface SectionHeroProps {
  fallbackType: FallbackType
  /** Optional image path (from public/) */
  imageSrc?: string
}

export function SectionHero({ fallbackType, imageSrc }: SectionHeroProps) {
  return (
    <motion.div
      className="relative w-full h-56 md:h-72 overflow-hidden mb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      ) : (
        <FallbackIllustration type={fallbackType} aspect="landscape" className="w-full h-full" />
      )}

      {/* Gradient fade to page bg at bottom — theme-aware via codex-black var
          so light mode fades to cream, not near-black-on-cream. */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgb(var(--codex-black) / 0.15) 0%, rgb(var(--codex-black) / 0.6) 70%, rgb(var(--codex-black)) 100%)',
        }}
      />

      {/* Subtle top vignette */}
      <div className="absolute inset-x-0 top-0 h-10"
        style={{ background: 'linear-gradient(to bottom, rgb(var(--codex-black) / 0.8), transparent)' }}
      />
    </motion.div>
  )
}
