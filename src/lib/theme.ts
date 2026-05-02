import { useEffect, useState } from 'react'

const STORAGE_KEY = 'codex-theme-v1'
const EVENT_KEY = 'codex-theme-change'

export type Theme = 'dark' | 'light' | 'system'

function readStored(): Theme {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'dark' || v === 'light' || v === 'system') return v
  } catch {/* noop */}
  return 'system'
}

/** Resolve the actual rendered theme — `system` checks prefers-color-scheme. */
function resolve(theme: Theme): 'dark' | 'light' {
  if (theme !== 'system') return theme
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }
  return 'dark'
}

function apply(theme: Theme): void {
  if (typeof document === 'undefined') return
  const resolved = resolve(theme)
  if (theme === 'system') {
    /* Remove the attribute so the @media query in CSS takes effect */
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', resolved)
  }
}

/** Boot the theme from localStorage at app start. Call once from main.tsx. */
export function initTheme(): void {
  apply(readStored())
}

/** Reactive hook — returns current preference + setter. */
export function useTheme(): {
  theme: Theme
  resolved: 'dark' | 'light'
  setTheme: (next: Theme) => void
} {
  const [theme, setLocal] = useState<Theme>(() => readStored())
  const [resolved, setResolved] = useState<'dark' | 'light'>(() => resolve(readStored()))

  useEffect(() => {
    const onChange = () => {
      const next = readStored()
      setLocal(next)
      setResolved(resolve(next))
    }
    window.addEventListener(EVENT_KEY, onChange)
    window.addEventListener('storage', onChange)
    /* Re-resolve when the OS preference changes (only relevant in `system` mode) */
    const mql = window.matchMedia('(prefers-color-scheme: light)')
    const onMqlChange = () => {
      if (readStored() === 'system') setResolved(resolve('system'))
    }
    mql.addEventListener('change', onMqlChange)
    return () => {
      window.removeEventListener(EVENT_KEY, onChange)
      window.removeEventListener('storage', onChange)
      mql.removeEventListener('change', onMqlChange)
    }
  }, [])

  const setTheme = (next: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {/* noop */}
    apply(next)
    setLocal(next)
    setResolved(resolve(next))
    window.dispatchEvent(new CustomEvent(EVENT_KEY))
  }

  return { theme, resolved, setTheme }
}
