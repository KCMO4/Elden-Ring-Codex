import type { RichBlock, RichInline } from '../data/types'

/* Estimate reading time for a block of lore. ~220 words/min for narrative
   prose in Spanish (slightly slower than English news), rounded up to the
   next minute. Returns at least 1 to avoid awkward "0 min" labels. */
const WORDS_PER_MINUTE = 220

function inlineWordCount(node: RichInline): number {
  if (typeof node === 'string') return node.split(/\s+/).filter(Boolean).length
  if (node.type === 'em' || node.type === 'strong') return node.text.split(/\s+/).filter(Boolean).length
  if (node.type === 'link') return node.label.split(/\s+/).filter(Boolean).length
  return 0
}

export function countWords(blocks: RichBlock[] | undefined, summary?: string): number {
  let total = summary ? summary.split(/\s+/).filter(Boolean).length : 0
  if (!blocks) return total
  for (const block of blocks) {
    if (block.type === 'paragraph') {
      total += block.children.reduce((acc, c) => acc + inlineWordCount(c), 0)
    } else if (block.type === 'heading') {
      total += block.text.split(/\s+/).filter(Boolean).length
    } else if (block.type === 'quote') {
      total += block.text.split(/\s+/).filter(Boolean).length
    } else if (block.type === 'list') {
      for (const item of block.items) {
        total += item.reduce((acc, c) => acc + inlineWordCount(c), 0)
      }
    }
  }
  return total
}

export function readingTimeMinutes(blocks: RichBlock[] | undefined, summary?: string): number {
  const words = countWords(blocks, summary)
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}
