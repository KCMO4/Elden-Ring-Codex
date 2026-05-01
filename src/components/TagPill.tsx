import { Link } from 'react-router-dom'
import { tagPath, slugifyTag, getTagCategoryCounts } from '../lib/tagAggregator'

interface TagPillProps {
  tag: string
  /** When provided, the pill becomes a toggle button (used inside filter bars). */
  onClick?: (tag: string) => void
  active?: boolean
  size?: 'sm' | 'md'
  /** When true and no onClick is set, the pill links to the tag landing page.
   *  Default is true — set to false for non-navigable contexts. */
  linkable?: boolean
}

export function TagPill({
  tag, onClick, active = false, size = 'sm', linkable = true,
}: TagPillProps) {
  const base = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'

  const sharedClass = `inline-flex items-center rounded-sm font-medium tracking-wide transition-all duration-200
    ${base}
    ${active
      ? 'bg-codex-gold/20 text-codex-gold border border-codex-gold/50 shadow-[0_0_8px_rgba(197,160,89,0.2)]'
      : 'bg-codex-brown/40 text-codex-parchment-dim border border-codex-gold-dim/20 hover:border-codex-gold-dim/40 hover:text-codex-parchment'
    }`

  if (onClick) {
    return (
      <button
        type="button"
        onClick={() => onClick(tag)}
        aria-pressed={active}
        className={`${sharedClass} cursor-pointer`}
      >
        {tag}
      </button>
    )
  }

  if (linkable) {
    return (
      <span className="relative inline-flex group">
        <Link to={tagPath(tag)} className={sharedClass}>
          {tag}
        </Link>
        <TagCountTooltip slug={slugifyTag(tag)} />
      </span>
    )
  }

  return <span className={`${sharedClass} cursor-default`}>{tag}</span>
}

/* Hover/focus tooltip showing per-category counts for the linked tag.
   CSS-only animation via group-hover/group-focus-within for smooth feel
   without per-pill state. Hidden when the tag has zero matches. */
function TagCountTooltip({ slug }: { slug: string }) {
  const c = getTagCategoryCounts(slug)
  if (c.total === 0) return null

  const parts: string[] = []
  if (c.characters > 0) parts.push(`${c.characters} ${c.characters === 1 ? 'personaje' : 'personajes'}`)
  if (c.factions   > 0) parts.push(`${c.factions} ${c.factions === 1 ? 'facción' : 'facciones'}`)
  if (c.regions    > 0) parts.push(`${c.regions} ${c.regions === 1 ? 'región' : 'regiones'}`)
  if (c.timeline   > 0) parts.push(`${c.timeline} ${c.timeline === 1 ? 'evento' : 'eventos'}`)

  return (
    <span
      role="tooltip"
      className="pointer-events-none absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-1.5
                 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
                 transition-opacity duration-150
                 whitespace-nowrap
                 bg-codex-black/95 backdrop-blur-sm border border-codex-gold-dim/40
                 rounded-sm px-2.5 py-1
                 shadow-[0_4px_18px_rgba(0,0,0,0.5),0_0_0_1px_rgba(212,173,98,0.12)]
                 font-heading text-[10px] tracking-wider uppercase text-codex-gold-dim"
    >
      <span className="text-codex-gold">{c.total}</span>
      <span className="text-codex-parchment-dim normal-case font-body tracking-normal ml-1.5">
        · {parts.join(' · ')}
      </span>
    </span>
  )
}
