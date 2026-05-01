import { useState, useEffect, useRef } from 'react'
import { Link2, Check } from 'lucide-react'

interface Props {
  className?: string
}

/**
 * Copies the current page URL to the clipboard with a brief "Copiado" check
 * affordance. The codex is local-first, so URLs only work on the same device,
 * but they remain useful for personal bookmarking and switching browsers.
 */
export function ShareButton({ className = '' }: Props) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }, [])

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard API can fail in non-secure contexts; silently ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={copied ? 'Enlace copiado' : 'Copiar enlace de esta página'}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border transition-all
        font-heading text-[11px] tracking-wider uppercase
        ${copied
          ? 'border-codex-gold/50 bg-codex-gold/10 text-codex-gold'
          : 'border-codex-gold-dim/30 bg-transparent text-codex-parchment-dim hover:border-codex-gold-dim/60 hover:text-codex-parchment'}
        ${className}`}
    >
      {copied ? <Check size={13} /> : <Link2 size={13} />}
      <span>{copied ? 'Copiado' : 'Compartir'}</span>
    </button>
  )
}
