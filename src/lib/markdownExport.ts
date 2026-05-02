import type { BucketItem, ProseField, RichBlock, RichInline } from '../data/types'

/**
 * Serialize a DeepEntity to a Markdown document with YAML frontmatter and
 * resolved cross-links (`[label](/path)`). Designed for offline reading or
 * importing into Obsidian / Logseq / a personal vault.
 */

export interface ExportInput {
  /** Display title (`# Title` heading) */
  title: string
  /** Stable slug + entity type (used in the frontmatter and the on-disk filename) */
  type: string
  slug: string
  /** Optional epithet line under the title */
  subtitle?: string
  /** Card subtitle / role / summary */
  summary?: string
  /** Tags from the entity */
  tags?: string[]
  /** The structured lore body */
  deepLore?: RichBlock[]
  /** Buckets — same as DeepEntity */
  confirmed?: BucketItem[]
  inferred?: BucketItem[]
  theories?: BucketItem[]
  ambiguous?: BucketItem[]
  beneficiaries?: ProseField
  victims?: ProseField
  /** URL prefix for internal links (e.g. https://example.com or '' for relative) */
  baseUrl?: string
}

/* ───── Inline + block serialization ───── */

function inlineToMd(node: RichInline, baseUrl: string): string {
  if (typeof node === 'string') return node
  if (node.type === 'em') return `*${node.text}*`
  if (node.type === 'strong') return `**${node.text}**`
  if (node.type === 'link') {
    const route = entityRoute(node.targetType, node.slug)
    const href = baseUrl ? `${baseUrl}${route}` : route
    return `[${node.label}](${href})`
  }
  return ''
}

function entityRoute(type: string, slug: string): string {
  switch (type) {
    case 'character': return `/personajes/${slug}`
    case 'region':    return `/regiones/${slug}`
    case 'faction':   return `/facciones/${slug}`
    case 'concept':   return `/conceptos/${slug}`
    case 'timeline':  return `/timeline/${slug}`
    case 'ending':    return `/finales/${slug}`
    default:          return `/${slug}`
  }
}

function inlinesToMd(inlines: RichInline[], baseUrl: string): string {
  return inlines.map((n) => inlineToMd(n, baseUrl)).join('')
}

function blockToMd(b: RichBlock, baseUrl: string): string {
  switch (b.type) {
    case 'paragraph':
      return inlinesToMd(b.children, baseUrl)
    case 'heading':
      return `${'#'.repeat(b.level + 1)} ${b.text}`
    case 'quote': {
      const body = `> ${b.text.split('\n').join('\n> ')}`
      return b.attribution ? `${body}\n>\n> — ${b.attribution}` : body
    }
    case 'list': {
      const marker = b.ordered ? '1. ' : '- '
      return b.items.map((item) => `${marker}${inlinesToMd(item, baseUrl)}`).join('\n')
    }
  }
}

function bucketToMd(items: BucketItem[], baseUrl: string): string {
  return items
    .map((it) => {
      if (typeof it === 'string') return `- ${it}`
      if (Array.isArray(it)) return `- ${inlinesToMd(it, baseUrl)}`
      /* Wrapped variant with expansion marker — annotate the line and
         flatten its content. */
      const tag = it.expansion === 'sote' ? ' _(SOTE)_' : ''
      const content = typeof it.content === 'string' ? it.content : inlinesToMd(it.content, baseUrl)
      return `- ${content}${tag}`
    })
    .join('\n')
}

function proseToMd(p: ProseField, baseUrl: string): string {
  return typeof p === 'string' ? p : inlinesToMd(p, baseUrl)
}

/* ───── Frontmatter ───── */

function frontmatter(input: ExportInput): string {
  const lines = ['---']
  lines.push(`title: ${yamlString(input.title)}`)
  lines.push(`type: ${input.type}`)
  lines.push(`slug: ${input.slug}`)
  if (input.subtitle) lines.push(`subtitle: ${yamlString(input.subtitle)}`)
  if (input.tags && input.tags.length > 0) {
    lines.push(`tags:`)
    for (const t of input.tags) lines.push(`  - ${yamlString(t)}`)
  }
  lines.push(`source: Códice del Orden Fracturado`)
  lines.push(`exported: ${new Date().toISOString()}`)
  lines.push('---')
  return lines.join('\n')
}

function yamlString(s: string): string {
  /* Quote if there's any character YAML might interpret weirdly */
  if (/[:#&*!|>'%@`,\-{}\[\]]/.test(s) || /^\s|\s$/.test(s)) {
    return `"${s.replace(/"/g, '\\"')}"`
  }
  return s
}

/* ───── Top-level renderer ───── */

export function exportEntityToMarkdown(input: ExportInput): string {
  const baseUrl = input.baseUrl ?? ''
  const parts: string[] = []
  parts.push(frontmatter(input))
  parts.push('')
  parts.push(`# ${input.title}`)
  if (input.subtitle) parts.push(`*${input.subtitle}*`)
  parts.push('')
  if (input.summary) {
    parts.push(`> ${input.summary.split('\n').join('\n> ')}`)
    parts.push('')
  }

  if (input.deepLore && input.deepLore.length > 0) {
    for (const b of input.deepLore) {
      parts.push(blockToMd(b, baseUrl))
      parts.push('')
    }
  }

  if (input.confirmed && input.confirmed.length > 0) {
    parts.push('## Hechos confirmados')
    parts.push(bucketToMd(input.confirmed, baseUrl))
    parts.push('')
  }
  if (input.inferred && input.inferred.length > 0) {
    parts.push('## Inferencias fuertes')
    parts.push(bucketToMd(input.inferred, baseUrl))
    parts.push('')
  }
  if (input.theories && input.theories.length > 0) {
    parts.push('## Teorías razonables')
    parts.push(bucketToMd(input.theories, baseUrl))
    parts.push('')
  }
  if (input.ambiguous && input.ambiguous.length > 0) {
    parts.push('## Ambigüedades abiertas')
    parts.push(bucketToMd(input.ambiguous, baseUrl))
    parts.push('')
  }
  if (input.beneficiaries) {
    parts.push('## Quién se benefició')
    parts.push(proseToMd(input.beneficiaries, baseUrl))
    parts.push('')
  }
  if (input.victims) {
    parts.push('## Quién sufrió')
    parts.push(proseToMd(input.victims, baseUrl))
    parts.push('')
  }

  return parts.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n'
}

/** Trigger a browser download of the given markdown content. */
export function downloadMarkdown(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename.endsWith('.md') ? filename : `${filename}.md`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  /* Revoke after a tick so the download starts in some browsers */
  setTimeout(() => URL.revokeObjectURL(url), 200)
}
