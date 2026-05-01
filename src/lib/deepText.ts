import type { DeepEntity, RichBlock, RichInline } from '../data/types'

function flattenInline(items: RichInline[]): string {
  return items
    .map((it) => {
      if (typeof it === 'string') return it
      if (it.type === 'em' || it.type === 'strong') return it.text
      if (it.type === 'link') return it.label
      return ''
    })
    .join(' ')
}

function flattenBlock(b: RichBlock): string {
  switch (b.type) {
    case 'paragraph':
      return flattenInline(b.children)
    case 'heading':
      return b.text
    case 'quote':
      return `${b.text} ${b.attribution ?? ''}`
    case 'list':
      return b.items.map((items) => flattenInline(items)).join(' ')
  }
}

/** Flatten a DeepEntity's lore arrays into one searchable string. */
export function flattenLore(e: DeepEntity): string {
  const parts: string[] = []
  if (e.summary) parts.push(e.summary)
  if (e.subtitle) parts.push(e.subtitle)
  if (e.deepLore) parts.push(e.deepLore.map(flattenBlock).join(' '))
  if (e.confirmed) parts.push(e.confirmed.join(' '))
  if (e.inferred) parts.push(e.inferred.join(' '))
  if (e.theories) parts.push(e.theories.join(' '))
  if (e.ambiguous) parts.push(e.ambiguous.join(' '))
  if (e.beneficiaries) parts.push(e.beneficiaries)
  if (e.victims) parts.push(e.victims)
  return parts.join(' ').toLowerCase()
}

/** Extract a 120-char snippet around the first match position. */
export function extractSnippet(haystack: string, needle: string, len = 120): string | null {
  const idx = haystack.toLowerCase().indexOf(needle.toLowerCase())
  if (idx < 0) return null
  const start = Math.max(0, idx - Math.floor(len / 2))
  const end = Math.min(haystack.length, start + len)
  let snip = haystack.slice(start, end).trim()
  if (start > 0) snip = '…' + snip
  if (end < haystack.length) snip = snip + '…'
  return snip
}
