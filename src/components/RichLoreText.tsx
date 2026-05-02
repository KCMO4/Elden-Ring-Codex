import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { EntityHoverCard } from './EntityHoverCard'
import type { EntityType, RichBlock, RichInline } from '../data/types'
import {
  findCharacter, findRegion, findFaction, findConcept, findTimelineEntry, findEnding,
} from '../data/lookups'
import { enrichText } from '../lib/enrichText'

const entityRouteMap: Record<EntityType, string> = {
  character: '/personajes',
  region:    '/regiones',
  faction:   '/facciones',
  concept:   '/conceptos',
  ending:    '/finales',
  timeline:  '/timeline',
}

/* Unified link styling — all entity types share the same parchment color.
   Earlier the codex used per-type colors (character/faction/region/etc.)
   but with thousands of cross-links per page the rainbow effect became
   visually noisy. Single tone keeps prose readable; the hover-card still
   shows the type/faction/era of the target. */
const UNIFIED_LINK_CLASS =
  'text-codex-parchment decoration-codex-parchment-dim/55 hover:text-white hover:decoration-codex-parchment hover:[text-shadow:0_0_8px_rgba(237,224,197,0.45)]'

export const entityLinkClass: Record<EntityType, string> = {
  character: UNIFIED_LINK_CLASS,
  faction:   UNIFIED_LINK_CLASS,
  region:    UNIFIED_LINK_CLASS,
  concept:   UNIFIED_LINK_CLASS,
  timeline:  UNIFIED_LINK_CLASS,
  ending:    UNIFIED_LINK_CLASS,
}

export const entityTypeLabel: Record<EntityType, string> = {
  character: 'Personaje',
  faction:   'Facción',
  region:    'Región',
  concept:   'Concepto',
  timeline:  'Evento',
  ending:    'Final',
}

export function entityHref(targetType: EntityType, slug: string): string {
  return `${entityRouteMap[targetType]}/${slug}`
}

/** Checks whether a (type, slug) pair resolves to an existing entity. */
function resolves(targetType: EntityType, slug: string): boolean {
  switch (targetType) {
    case 'character': return findCharacter(slug) !== undefined
    case 'region':    return findRegion(slug) !== undefined
    case 'faction':   return findFaction(slug) !== undefined
    case 'concept':   return findConcept(slug) !== undefined
    case 'timeline':  return findTimelineEntry(slug) !== undefined
    case 'ending':    return findEnding(slug) !== undefined
  }
}

interface InlineProps {
  node: RichInline
}

export function InlineNode({ node }: InlineProps) {
  if (typeof node === 'string') return <>{node}</>
  if (node.type === 'em') return <em className="italic text-codex-parchment">{node.text}</em>
  if (node.type === 'strong') return <strong className="text-codex-gold-bright font-semibold">{node.text}</strong>
  if (node.type === 'link') {
    /* Tolerant render: if the slug doesn't resolve to an entity we have a
       page for, render as styled emphasis instead of a clickable link
       that would 404. The underline is dotted to hint at the soft state. */
    if (!resolves(node.targetType, node.slug)) {
      return (
        <span
          className="text-codex-parchment-dim italic
                     decoration-codex-gold-dim/30 underline decoration-dotted underline-offset-2"
          title="Referencia mencionada pero sin página dedicada todavía"
        >
          {node.label}
        </span>
      )
    }
    return (
      <EntityHoverCard targetType={node.targetType} slug={node.slug}>
        <Link
          to={entityHref(node.targetType, node.slug)}
          className={`underline underline-offset-2 transition-colors ${entityLinkClass[node.targetType]}`}
        >
          {node.label}
        </Link>
      </EntityHoverCard>
    )
  }
  return null
}

interface BlockProps {
  block: RichBlock
  headingId?: string
}

function BlockNode({ block, headingId }: BlockProps) {
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
    /* Gold ink-wash reveal: when the heading scrolls into view it briefly
       glows brighter, then settles to a subtle baseline shadow. Plays once
       per heading and respects prefers-reduced-motion via MotionConfig. */
    if (block.level === 2) {
      return (
        <motion.h2
          id={headingId}
          initial={{ opacity: 0.55 }}
          whileInView={{
            opacity: [0.55, 1, 1],
            textShadow: [
              '0 0 0px rgba(242,222,176,0)',
              '0 0 22px rgba(242,222,176,0.55)',
              '0 0 6px rgba(242,222,176,0.18)',
            ],
          }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 1.1, times: [0, 0.45, 1], ease: 'easeOut' }}
          className="font-heading text-2xl text-codex-gold-bright tracking-wide mt-12 mb-4 pb-2 border-b border-codex-gold-dim/30 scroll-mt-24"
        >
          {block.text}
        </motion.h2>
      )
    }
    return (
      <motion.h3
        id={headingId}
        initial={{ opacity: 0.6 }}
        whileInView={{
          opacity: [0.6, 1, 1],
          textShadow: [
            '0 0 0px rgba(212,173,98,0)',
            '0 0 14px rgba(212,173,98,0.45)',
            '0 0 4px rgba(212,173,98,0.12)',
          ],
        }}
        viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        transition={{ duration: 0.95, times: [0, 0.45, 1], ease: 'easeOut' }}
        className="font-heading text-lg text-codex-gold tracking-wide mt-8 mb-3 scroll-mt-24"
      >
        {block.text}
      </motion.h3>
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

/**
 * Generate stable, unique anchor IDs for the heading blocks. If two headings
 * share the same text (e.g. "Origen") we suffix the second one with `-2`,
 * the third with `-3`, etc. This keeps in-page anchors and the table of
 * contents reliable across long entries with repeated section names.
 */
function buildHeadingIdMap(blocks: RichBlock[]): Map<RichBlock, string> {
  const map = new Map<RichBlock, string>()
  const counts = new Map<string, number>()
  for (const block of blocks) {
    if (block.type !== 'heading') continue
    const base =
      block.id ??
      block.text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') ??
      'section'
    const safe = base || 'section'
    const seen = counts.get(safe) ?? 0
    counts.set(safe, seen + 1)
    map.set(block, seen === 0 ? safe : `${safe}-${seen + 1}`)
  }
  return map
}

/** Build a key that's stable across re-orders for a top-level block. */
function blockKey(b: RichBlock, i: number): string {
  if (b.type === 'heading')   return `h${b.level}:${b.id ?? b.text}:${i}`
  if (b.type === 'paragraph') return `p:${i}`
  if (b.type === 'quote')     return `q:${b.text.slice(0, 40)}:${i}`
  return `${b.ordered ? 'ol' : 'ul'}:${i}`
}

export function RichLoreText({ blocks }: { blocks: RichBlock[] }) {
  const headingIds = buildHeadingIdMap(blocks)
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => (
        <BlockNode key={blockKey(b, i)} block={b} headingId={headingIds.get(b)} />
      ))}
    </div>
  )
}

/** Render either a plain string or a RichInline[] (e.g. bucket items, beneficiaries,
   victims) — supports inline cross-link nodes alongside text.
   When `node` is a plain string AND `selfId` is provided, the string is
   auto-enriched at render time: entity mentions become inline links. This
   gives consistent cross-link behavior across paragraphs, buckets, prose
   fields, and `data/*.ts` strings rendered directly. */
export function InlineProse({ node, selfId }: { node: string | RichInline[]; selfId?: string }) {
  const nodes = useMemo(() => {
    if (typeof node === 'string') return enrichText(node, selfId)
    return node
  }, [node, selfId])
  return (
    <>
      {nodes.map((child, i) => (
        <InlineNode key={i} node={child} />
      ))}
    </>
  )
}

/** Convenience wrapper around InlineProse for the common case where the
   caller has a plain string field from data/*.ts and wants it enriched. */
export function EnrichedText({ text, selfId }: { text: string; selfId?: string }) {
  return <InlineProse node={text} selfId={selfId} />
}

/** Extract H2/H3 headings for the table of contents, with deduplicated ids. */
export function extractHeadings(blocks: RichBlock[]): { id: string; text: string; level: 2 | 3 }[] {
  const headingIds = buildHeadingIdMap(blocks)
  return blocks
    .filter((b): b is Extract<RichBlock, { type: 'heading' }> => b.type === 'heading')
    .map((h) => ({
      id: headingIds.get(h)!,
      text: h.text,
      level: h.level,
    }))
}
