import { useEffect, useState } from 'react'

interface Props {
  headings: { id: string; text: string; level: 2 | 3 }[]
}

/**
 * Sidebar table of contents with scroll-spy. As the reader scrolls, the
 * active heading is highlighted with a small gold bar on the left. Clicks
 * jump to the heading via native `<a href="#id">` (with smooth-scroll
 * behaviour from the global CSS).
 */
export function TableOfContents({ headings }: Props) {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  return (
    <div className="parchment-panel p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="block w-1 h-1 rounded-full bg-codex-gold-dim" aria-hidden />
        <p className="font-heading text-xs text-codex-gold-dim tracking-[0.18em] uppercase">
          En esta página
        </p>
      </div>
      <ul className="space-y-0.5 text-sm relative">
        <span aria-hidden className="absolute left-0 top-1 bottom-1 w-px bg-codex-gold-dim/15" />
        {headings.map((h) => {
          const isActive = active === h.id
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`relative block py-1 pl-3 transition-all leading-snug
                  ${h.level === 3 ? 'pl-5 text-[13px]' : ''}
                  ${isActive
                    ? 'text-codex-gold-bright'
                    : 'text-codex-parchment-dim hover:text-codex-parchment'
                  }`}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-codex-gold rounded-r-sm shadow-[0_0_6px_rgba(212,173,98,0.5)]"
                  />
                )}
                {h.text}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
