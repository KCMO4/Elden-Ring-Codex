interface TagPillProps {
  tag: string
  onClick?: (tag: string) => void
  active?: boolean
  size?: 'sm' | 'md'
}

export function TagPill({ tag, onClick, active = false, size = 'sm' }: TagPillProps) {
  const base = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'

  return (
    <button
      onClick={() => onClick?.(tag)}
      className={`inline-flex items-center rounded-sm font-medium tracking-wide transition-all duration-200
        ${base}
        ${active
          ? 'bg-codex-gold/20 text-codex-gold border border-codex-gold/50 shadow-[0_0_8px_rgba(197,160,89,0.2)]'
          : 'bg-codex-brown/40 text-codex-parchment-dim border border-codex-gold-dim/20 hover:border-codex-gold-dim/40 hover:text-codex-parchment'
        }
        ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {tag}
    </button>
  )
}
