import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, BookOpen } from 'lucide-react'
import type { EntityType, RichBlock, RichInline } from '../data/types'
import { getEntityPreview, entityTypePath } from '../data/lookups'
import { entityLinkClass, entityTypeLabel } from './RichLoreText'

interface Mention { type: EntityType; slug: string; count: number }

/* Walk the lore blocks and collect every internal link reference, with
   per-target hit count. Used by the in-page mini-glossary so the reader
   can see who/what is mentioned without leaving the article. */
function extractMentions(blocks: RichBlock[]): Mention[] {
  const counts = new Map<string, Mention>()
  const visit = (n: RichInline) => {
    if (typeof n === 'string') return
    if (n.type === 'link') {
      const key = `${n.targetType}:${n.slug}`
      const cur = counts.get(key)
      if (cur) cur.count += 1
      else counts.set(key, { type: n.targetType, slug: n.slug, count: 1 })
    }
  }
  for (const b of blocks) {
    if (b.type === 'paragraph') for (const c of b.children) visit(c)
    else if (b.type === 'list') for (const item of b.items) for (const c of item) visit(c)
  }
  return [...counts.values()].sort((a, b) => b.count - a.count)
}

interface Props {
  blocks: RichBlock[]
  /** Entities to exclude — usually the article's own slug to avoid self-reference */
  excludeIds?: string[]
}

/* Collapsible panel listing the most-mentioned entities in this article
   with their 1-line summary. The reader expands when lost without
   navigating away. */
export function MentionedGlossary({ blocks, excludeIds = [] }: Props) {
  const [open, setOpen] = useState(false)
  const mentions = useMemo(() => {
    return extractMentions(blocks)
      .filter((m) => !excludeIds.includes(m.slug))
      .slice(0, 12)
      .map((m) => ({ ...m, preview: getEntityPreview(m.type, m.slug) }))
      .filter((m) => m.preview !== null)
  }, [blocks, excludeIds])

  if (mentions.length === 0) return null

  return (
    <div className="parchment-panel overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-2 p-3 hover:bg-codex-brown/30 transition-colors"
      >
        <span className="flex items-center gap-2">
          <BookOpen size={14} className="text-codex-gold-dim" />
          <span className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase">
            Glosario de este artículo
          </span>
        </span>
        <span className="flex items-center gap-2">
          <span className="font-heading text-[10px] text-codex-parchment-dim/70">
            {mentions.length}
          </span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={14} className="text-codex-gold-dim" />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-codex-gold-dim/20"
          >
            <ul className="divide-y divide-codex-gold-dim/10">
              {mentions.map((m) => (
                <li key={`${m.type}:${m.slug}`} className="p-3">
                  <Link
                    to={entityTypePath(m.type, m.slug)}
                    className="block group"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className={`font-heading text-sm leading-tight underline underline-offset-2 ${entityLinkClass[m.type]}`}>
                        {m.preview!.name}
                      </span>
                      <span className="font-heading text-[9px] text-codex-parchment-dim/70 tracking-widest uppercase shrink-0">
                        {entityTypeLabel[m.type]}
                      </span>
                    </div>
                    {m.preview!.summary && (
                      <p className="font-body text-xs text-codex-parchment-dim leading-snug line-clamp-2">
                        {m.preview!.summary}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
