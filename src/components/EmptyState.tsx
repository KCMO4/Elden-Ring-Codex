import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { RuneOrnament } from './illustrations/RuneSeparator'

interface Props {
  /** Title shown prominently. */
  title: string
  /** Optional secondary description. */
  description?: string
  /** Optional CTA — typically a "clear filters" callback. */
  actionLabel?: string
  onAction?: () => void
  /** Visual variant. */
  variant?: 'search' | 'filter' | 'rune'
}

const ICONS = {
  search: Search,
  filter: Filter,
  rune:   null, // uses RuneOrnament instead
}

/**
 * Empty state used by listing pages when filters/search produce no results.
 * Animated entry, gentle iconography, optional CTA. Avoids the bleak feeling
 * of plain "Sin resultados" text.
 */
export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  variant = 'rune',
}: Props) {
  const Icon = variant === 'rune' ? null : ICONS[variant]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="parchment-panel p-12 text-center max-w-2xl mx-auto"
    >
      <div className="flex justify-center mb-4">
        {Icon ? (
          <Icon size={32} className="text-codex-gold-dim" aria-hidden />
        ) : (
          <RuneOrnament className="w-12 h-12 opacity-40" />
        )}
      </div>
      <p className="font-subheading text-lg text-codex-parchment italic mb-2">
        {title}
      </p>
      {description && (
        <p className="font-body text-sm text-codex-parchment-dim/70 leading-relaxed mt-2 mb-4">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 font-heading text-xs tracking-wider uppercase
                     bg-codex-gold/15 text-codex-gold border border-codex-gold/40 rounded-sm
                     hover:bg-codex-gold/25 hover:border-codex-gold/60 transition-all"
        >
          {actionLabel}
        </button>
      )}
    </motion.div>
  )
}
