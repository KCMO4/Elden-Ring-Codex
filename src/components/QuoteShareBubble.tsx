import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Check } from 'lucide-react'

/**
 * Floating "share quote" bubble that appears next to a non-empty text
 * selection inside the article body. Click → copies the selected text
 * formatted as a Markdown blockquote with a back-link to the current page,
 * ready to paste anywhere (Discord, Slack, notes apps).
 *
 * Mounts as a single instance at the bottom of <DetailLayout>; listens to
 * `selectionchange` and shows itself only when the selection lives inside
 * an `[data-quote-source="true"]` ancestor (the article main column).
 */
export function QuoteShareBubble() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)
  const hideTimer = useRef<number | null>(null)

  useEffect(() => {
    const onSelectionChange = () => {
      const sel = window.getSelection()
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
        setPos(null)
        return
      }
      const range = sel.getRangeAt(0)
      const text = sel.toString().trim()
      if (text.length < 6) {
        setPos(null)
        return
      }
      /* Only inside article body */
      const container = range.commonAncestorContainer
      const el = container.nodeType === 1
        ? (container as Element)
        : container.parentElement
      const allowed = el?.closest('[data-quote-source="true"]')
      if (!allowed) {
        setPos(null)
        return
      }
      const rect = range.getBoundingClientRect()
      if (rect.width === 0 && rect.height === 0) {
        setPos(null)
        return
      }
      setText(text)
      setPos({
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + window.scrollY,
      })
    }

    document.addEventListener('selectionchange', onSelectionChange)
    return () => document.removeEventListener('selectionchange', onSelectionChange)
  }, [])

  useEffect(() => () => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current)
  }, [])

  const onCopy = async () => {
    const url = window.location.href
    const formatted = `> ${text.replace(/\n/g, '\n> ')}\n>\n> — [${document.title.replace(/ · .*/, '')}](${url})`
    try {
      await navigator.clipboard.writeText(formatted)
      setCopied(true)
      if (hideTimer.current) window.clearTimeout(hideTimer.current)
      hideTimer.current = window.setTimeout(() => setCopied(false), 1400)
    } catch {/* clipboard denied — silent */}
  }

  return (
    <AnimatePresence>
      {pos && (
        <motion.button
          type="button"
          onClick={onCopy}
          /* Mousedown would clear selection before click fires; capture in mousedown handler. */
          onMouseDown={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 4, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.92 }}
          transition={{ duration: 0.15 }}
          style={{
            position: 'absolute',
            left: pos.x,
            top: pos.y - 38,
            transform: 'translateX(-50%)',
            zIndex: 60,
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm
                     bg-codex-black/95 border border-codex-gold-dim/50
                     shadow-[0_4px_18px_rgba(0,0,0,0.5)]
                     font-heading text-[10px] tracking-wider uppercase
                     text-codex-gold-bright hover:bg-codex-brown/95 transition-colors"
        >
          {copied ? <Check size={11} aria-hidden /> : <Quote size={11} aria-hidden />}
          {copied ? 'Copiada' : 'Copiar cita'}
        </motion.button>
      )}
    </AnimatePresence>
  )
}
