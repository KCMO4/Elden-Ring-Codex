/* Counted body scroll lock — multiple modals/drawers can lock independently
   without fighting each other. The lock is released only when the last
   acquirer calls its release function. Previously, two consumers (SidebarNav
   + ShortcutsCheatsheet) each saved/restored `body.style.overflow` and
   would clobber each other's saved value when nested. */

let lockCount = 0
let prevOverflow: string | null = null

export function acquireScrollLock(): () => void {
  if (lockCount === 0) {
    prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
  lockCount += 1

  let released = false
  return () => {
    if (released) return
    released = true
    lockCount -= 1
    if (lockCount === 0) {
      document.body.style.overflow = prevOverflow ?? ''
      prevOverflow = null
    }
  }
}
