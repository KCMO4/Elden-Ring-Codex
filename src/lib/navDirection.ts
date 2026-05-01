/* Lightweight context that lets detail pages signal "I'm navigating to the
   next/previous entry" so the global page transition can do a directional
   slide instead of the default fade. Resets after each navigation. */

import { createContext, useContext, useState, useCallback, useRef, useEffect, type ReactNode, createElement } from 'react'
import { useLocation } from 'react-router-dom'

export type NavDirection = 'forward' | 'backward' | 'neutral'

interface NavDirectionContextValue {
  direction: NavDirection
  setDirection: (d: NavDirection) => void
}

const NavDirectionContext = createContext<NavDirectionContextValue>({
  direction: 'neutral',
  setDirection: () => {},
})

export function NavDirectionProvider({ children }: { children: ReactNode }) {
  const [direction, setDirectionState] = useState<NavDirection>('neutral')
  const lastSetTime = useRef(0)
  const location = useLocation()

  const setDirection = useCallback((d: NavDirection) => {
    lastSetTime.current = Date.now()
    setDirectionState(d)
  }, [])

  /* Reset to neutral after the location changes — the directional value
     is only relevant during the page that's exiting. */
  useEffect(() => {
    /* If we set direction within the last 800ms, that signal applies to THIS
       location change. Schedule a reset so the next unrelated navigation
       gets the default fade. */
    const dt = Date.now() - lastSetTime.current
    if (dt < 800) {
      const id = setTimeout(() => setDirectionState('neutral'), 600)
      return () => clearTimeout(id)
    }
    setDirectionState('neutral')
  }, [location.pathname])

  return createElement(
    NavDirectionContext.Provider,
    { value: { direction, setDirection } },
    children,
  )
}

export function useNavDirection() {
  return useContext(NavDirectionContext)
}
