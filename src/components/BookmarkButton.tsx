import { Bookmark, BookmarkCheck } from 'lucide-react'
import { useBookmarks } from '../lib/bookmarks'
import type { EntityType } from '../data/types'

interface Props {
  type: EntityType
  slug: string
  className?: string
}

export function BookmarkButton({ type, slug, className = '' }: Props) {
  const { has, toggle } = useBookmarks()
  const active = has(type, slug)

  return (
    <button
      onClick={() => toggle(type, slug)}
      aria-label={active ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border transition-all
        font-heading text-[11px] tracking-wider uppercase
        ${active
          ? 'border-codex-gold/50 bg-codex-gold/10 text-codex-gold'
          : 'border-codex-gold-dim/30 bg-transparent text-codex-parchment-dim hover:border-codex-gold-dim/60 hover:text-codex-parchment'}
        ${className}`}
    >
      {active ? <BookmarkCheck size={13} /> : <Bookmark size={13} />}
      <span>{active ? 'Guardado' : 'Guardar'}</span>
    </button>
  )
}
