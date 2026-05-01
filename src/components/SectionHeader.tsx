import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { RuneSeparator } from './illustrations/RuneSeparator'

interface SectionHeaderProps {
  chapter?: string
  title: string
  subtitle?: string
  poeticIntro?: string
  /** If provided, renders a "Lectura completa" link to /lectura/<readingCategory>. */
  readingCategory?: 'personajes' | 'facciones' | 'regiones' | 'conceptos' | 'timeline' | 'finales'
}

export function SectionHeader({ chapter, title, subtitle, poeticIntro, readingCategory }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {chapter && (
        <p className="font-heading text-codex-gold-dim text-sm tracking-[0.3em] uppercase mb-2">
          Capítulo {chapter}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl text-codex-gold-bright text-glow mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-subheading text-lg text-codex-parchment-dim italic">{subtitle}</p>
      )}
      {readingCategory && (
        <Link
          to={`/lectura/${readingCategory}`}
          className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-sm
                     border border-codex-gold-dim/30 bg-codex-brown/30
                     font-heading text-[11px] tracking-wider uppercase text-codex-parchment-dim
                     hover:border-codex-gold-dim/60 hover:text-codex-gold transition-all"
        >
          <BookOpen size={11} />
          Lectura completa
        </Link>
      )}
      <div className="mt-6">
        <RuneSeparator />
      </div>
      {poeticIntro && (
        <p className="mt-6 font-subheading text-lg italic text-codex-parchment-dim max-w-2xl mx-auto leading-relaxed">
          "{poeticIntro}"
        </p>
      )}
    </motion.div>
  )
}
