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
      className="relative w-full h-44 md:h-56 overflow-hidden mb-0"
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

      {/* Gradient fade to page bg at bottom */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,10,8,0.15) 0%, rgba(10,10,8,0.6) 70%, rgba(10,10,8,1) 100%)',
        }}
      />

      {/* Subtle top vignette */}
      <div className="absolute inset-x-0 top-0 h-10"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,8,0.8), transparent)' }}
      />
    </motion.div>
  )
}
