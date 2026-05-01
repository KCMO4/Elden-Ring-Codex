import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll on route change. Place once inside <BrowserRouter>.
 *
 * - Path change without hash → instant scroll to top.
 * - Path change with hash → scroll to that element (retrying briefly so
 *   lazy-loaded pages have time to render the target).
 * - Hash-only change (in-page ToC click) → do nothing; the browser already
 *   handled it natively.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    const pathChanged = prevPathname.current !== pathname
    prevPathname.current = pathname

    if (!pathChanged) return

    if (hash) {
      const id = hash.slice(1)
      const tryScroll = (): boolean => {
        const el = document.getElementById(id)
        if (!el) return false
        el.scrollIntoView({ behavior: 'auto', block: 'start' })
        return true
      }
      if (tryScroll()) return
      const t = window.setTimeout(tryScroll, 250)
      return () => window.clearTimeout(t)
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
