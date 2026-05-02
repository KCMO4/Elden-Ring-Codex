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
  /** When true, the title renders as an `<h1>` instead of `<h2>`. Use this on
      the top-level header of a list/section page so each route has exactly one
      `<h1>` for accessibility. Detail pages already have their own `<h1>` in
      DetailLayout, so they should leave this as default `false`. */
  asPageHeading?: boolean
}

export function SectionHeader({ chapter, title, subtitle, poeticIntro, readingCategory, asPageHeading = false }: SectionHeaderProps) {
  const Heading = asPageHeading ? 'h1' : 'h2'
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
      <Heading className="font-heading text-3xl md:text-4xl text-codex-gold-bright text-glow mb-3">
        {title}
      </Heading>
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
