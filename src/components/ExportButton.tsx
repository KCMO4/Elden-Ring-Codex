import { useEffect, useRef, useState } from 'react'
import { Download, Check } from 'lucide-react'
import { exportEntityToMarkdown, downloadMarkdown, type ExportInput } from '../lib/markdownExport'

interface Props extends ExportInput {
  /** Optional class for outer wrapper styling */
  className?: string
}

/**
 * Hero-area button that exports the current entity to a Markdown file with
 * YAML frontmatter and resolved internal links. Useful for offline reading
 * or imports into Obsidian / Logseq vaults.
 */
export function ExportButton({ className = '', ...input }: Props) {
  const [done, setDone] = useState(false)
  const resetTimer = useRef<number | null>(null)

  useEffect(() => () => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current)
  }, [])

  const onClick = () => {
    const md = exportEntityToMarkdown(input)
    const safeSlug = (input.slug ?? input.title).toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-|-$/g, '')
    downloadMarkdown(`${safeSlug}.md`, md)
    setDone(true)
    if (resetTimer.current) window.clearTimeout(resetTimer.current)
    resetTimer.current = window.setTimeout(() => setDone(false), 1500)
  }

  return (
    <button
      type="button"
      onClick={onClick}
      title="Exportar a Markdown (incluye links cruzados)"
      aria-label="Exportar entrada como Markdown"
      className={`inline-flex items-center gap-1.5 rounded-sm border border-codex-gold-dim/35
                  bg-codex-black/30 px-2 py-1 font-heading text-[9px] tracking-wider uppercase
                  text-codex-gold-dim/90 hover:text-codex-gold-bright hover:border-codex-gold-dim/70
                  transition-all ${className}`}
    >
      {done ? <Check size={11} aria-hidden /> : <Download size={11} aria-hidden />}
      <span>{done ? 'Descargado' : 'Markdown'}</span>
    </button>
  )
}
