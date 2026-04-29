import { Link } from 'react-router-dom'
import type { EntityType, RichBlock, RichInline } from '../data/types'

const entityRouteMap: Record<EntityType, string> = {
  character: '/personajes',
  region:    '/regiones',
  faction:   '/facciones',
  concept:   '/conceptos',
  ending:    '/finales',
  timeline:  '/timeline',
}

export function entityHref(targetType: EntityType, slug: string): string {
  return `${entityRouteMap[targetType]}/${slug}`
}

interface InlineProps {
  node: RichInline
}

function InlineNode({ node }: InlineProps) {
  if (typeof node === 'string') return <>{node}</>
  if (node.type === 'em') return <em className="italic text-codex-parchment">{node.text}</em>
  if (node.type === 'strong') return <strong className="text-codex-gold-bright font-semibold">{node.text}</strong>
  if (node.type === 'link') {
    return (
      <Link
        to={entityHref(node.targetType, node.slug)}
        className="text-codex-gold underline decoration-codex-gold-dim/50 underline-offset-2
                   hover:text-codex-gold-bright hover:decoration-codex-gold transition-colors
                   hover:[text-shadow:0_0_8px_rgba(232,213,163,0.4)]"
      >
        {node.label}
      </Link>
    )
  }
  return null
}

interface BlockProps {
  block: RichBlock
}

function BlockNode({ block }: BlockProps) {
  if (block.type === 'paragraph') {
    return (
      <p className="font-body text-base text-codex-parchment leading-loose">
        {block.children.map((child, i) => (
          <InlineNode key={i} node={child} />
        ))}
      </p>
    )
  }
  if (block.type === 'heading') {
    const slug = block.id ?? block.text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    if (block.level === 2) {
      return (
        <h2 id={slug} className="font-heading text-2xl text-codex-gold-bright tracking-wide mt-12 mb-4 pb-2 border-b border-codex-gold-dim/30 scroll-mt-24">
          {block.text}
        </h2>
      )
    }
    return (
      <h3 id={slug} className="font-heading text-lg text-codex-gold tracking-wide mt-8 mb-3 scroll-mt-24">
        {block.text}
      </h3>
    )
  }
  if (block.type === 'quote') {
    return (
      <blockquote className="my-6 pl-5 border-l-2 border-codex-gold-dim/50
                              bg-codex-brown/20 py-3 pr-4 rounded-r-sm">
        <p className="font-subheading italic text-base text-codex-parchment-dim leading-relaxed">
          "{block.text}"
        </p>
        {block.attribution && (
          <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mt-2">
            — {block.attribution}
          </p>
        )}
      </blockquote>
    )
  }
  // list
  const ListTag = block.ordered ? 'ol' : 'ul'
  return (
    <ListTag className={`my-4 space-y-2 ${block.ordered ? 'list-decimal pl-6' : 'pl-1'}`}>
      {block.items.map((item, i) => (
        <li key={i} className="font-body text-base text-codex-parchment leading-relaxed flex gap-2">
          {!block.ordered && <span className="text-codex-gold-dim shrink-0 mt-1 text-xs">◆</span>}
          <span>
            {item.map((child, j) => (
              <InlineNode key={j} node={child} />
            ))}
          </span>
        </li>
      ))}
    </ListTag>
  )
}

export function RichLoreText({ blocks }: { blocks: RichBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => (
        <BlockNode key={i} block={b} />
      ))}
    </div>
  )
}

/** Extract H2 headings for table of contents */
export function extractHeadings(blocks: RichBlock[]): { id: string; text: string; level: 2 | 3 }[] {
  return blocks
    .filter((b): b is Extract<RichBlock, { type: 'heading' }> => b.type === 'heading')
    .map((h) => ({
      id: h.id ?? h.text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      text: h.text,
      level: h.level,
    }))
}
