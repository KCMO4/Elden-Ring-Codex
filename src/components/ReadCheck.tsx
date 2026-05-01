import type { EntityType } from '../data/types'
import { useReadSet } from '../lib/readStatus'

interface Props {
  type: EntityType
  slug: string
  className?: string
}

/* Subtle gold checkmark shown on cards for entries the user has scrolled
   through (>70%). Provides at-a-glance "what have I covered" feedback in
   long lists without being intrusive. */
export function ReadCheck({ type, slug, className = '' }: Props) {
  const set = useReadSet(type)
  if (!set.has(slug)) return null
  return (
    <span
      title="Ya leído"
      aria-label="Entrada ya leída"
      className={`inline-flex items-center justify-center text-codex-gold text-xs leading-none ${className}`}
    >
      ✓
    </span>
  )
}
