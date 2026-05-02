import { eraOf, ERA_LABEL, ERA_TONE } from '../lib/eraOf'

interface Props {
  entity: { id?: string; tags?: string[] } | null | undefined
  /** Compact = dot only, full = dot + label */
  size?: 'compact' | 'full'
  className?: string
}

/* Small temporal badge: classifies an entity into one of the 4 eras of
   the codex (Pre-Orden / Era de Marika / Fractura / Tarnished) and renders
   a colored dot + label. Returns null when there's no confident era match
   (we'd rather omit it than mislabel). */
export function EraBadge({ entity, size = 'full', className = '' }: Props) {
  const era = eraOf(entity)
  if (!era) return null

  return (
    <span
      title={`Era: ${ERA_LABEL[era]}`}
      aria-label={`Era: ${ERA_LABEL[era]}`}
      className={`inline-flex items-center gap-1.5 rounded-sm border px-1.5 py-0.5
                  font-heading text-[9px] tracking-wider uppercase
                  ${ERA_TONE[era]} ${className}`}
    >
      <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-current" />
      {size === 'full' ? <span>{ERA_LABEL[era]}</span> : <span className="sr-only">{ERA_LABEL[era]}</span>}
    </span>
  )
}
