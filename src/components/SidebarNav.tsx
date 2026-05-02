import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import { X, BookOpen, Clock, Users, Shield, Map, BookMarked, Scroll, Compass, Bookmark, GitBranch, Shuffle } from 'lucide-react'
import { RuneOrnament } from './illustrations/RuneSeparator'
import { randomEntryPath } from '../data/lookups'
import { ThemeToggle } from './ThemeToggle'

const navItems: { to: string; label: string; icon: React.ReactNode; sub?: string; end?: boolean }[] = [
  { to: '/', label: 'Portada', icon: <BookOpen size={14} />, sub: 'Códice del Orden Fracturado', end: true },
  { to: '/timeline', label: 'Timeline Profundo', icon: <Clock size={14} />, sub: '70 capítulos' },
  { to: '/personajes', label: 'Enciclopedia', icon: <Users size={14} />, sub: 'Personajes' },
  { to: '/facciones', label: 'Facciones', icon: <Shield size={14} />, sub: 'Facciones y Enemigos' },
  { to: '/regiones', label: 'Regiones', icon: <Map size={14} />, sub: 'Geografía del Lore' },
  { to: '/conceptos', label: 'Conceptos', icon: <BookMarked size={14} />, sub: 'Glosario de las Tierras Intermedias' },
  { to: '/finales', label: 'Los Finales', icon: <Scroll size={14} />, sub: 'Las 6 Eras' },
  { to: '/rutas', label: 'Rutas Narrativas', icon: <Compass size={14} />, sub: 'Lecturas guiadas' },
  { to: '/genealogia', label: 'Genealogía', icon: <GitBranch size={14} />, sub: 'Dinastía del Árbol Áureo' },
  { to: '/favoritos', label: 'Favoritos', icon: <Bookmark size={14} />, sub: 'Tus entradas guardadas' },
]

interface Props {
  mobileOpen: boolean
  onClose: () => void
}

export function SidebarNav({ mobileOpen, onClose }: Props) {
  const navigate = useNavigate()

  /* Body scroll lock while mobile menu is open — prevents background from
     scrolling on touch and avoids janky overscroll on iOS Safari. */
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [mobileOpen])

  const handleRandom = () => {
    onClose()
    navigate(randomEntryPath())
  }

  const content = (
    <div className="h-full flex flex-col">
      <div className="p-5 border-b border-codex-gold-dim/20">
        <NavLink to="/" onClick={onClose} className="flex items-center gap-3">
          <RuneOrnament className="w-8 h-8 shrink-0" />
          <div>
            <p className="font-heading text-xs text-codex-gold tracking-widest uppercase">Elden Ring</p>
            <p className="font-heading text-[10px] text-codex-parchment-dim tracking-wide">Códice del Orden Fracturado</p>
          </div>
        </NavLink>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onClose}
            className={({ isActive }) =>
              `block w-full text-left px-3 py-2.5 rounded-sm mb-1 transition-all duration-200 group
              ${isActive
                ? 'bg-codex-gold/10 border border-codex-gold/30 shadow-[0_0_10px_rgba(197,160,89,0.1)]'
                : 'hover:bg-codex-brown/40 border border-transparent hover:border-codex-gold-dim/20'
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center gap-2.5">
                <span className={`transition-colors ${isActive ? 'text-codex-gold' : 'text-codex-gold-dim group-hover:text-codex-gold'}`}>
                  {item.icon}
                </span>
                <div>
                  <p className={`font-heading text-xs tracking-wide ${isActive ? 'text-codex-gold-bright' : 'text-codex-parchment-dim group-hover:text-codex-parchment'}`}>
                    {item.label}
                  </p>
                  {item.sub && (
                    <p className="text-[10px] text-codex-parchment-dim/60 mt-0.5">{item.sub}</p>
                  )}
                </div>
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-codex-gold-dim/20 space-y-2">
        <button
          type="button"
          onClick={handleRandom}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-sm font-heading text-xs tracking-wider uppercase
                     bg-codex-brown/40 border border-codex-gold-dim/20 text-codex-parchment-dim
                     hover:border-codex-gold-dim/50 hover:text-codex-gold transition-all"
        >
          <Shuffle size={12} />
          Entrada aleatoria
        </button>
        <div className="flex justify-center pt-1">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )

  return (
    <>
      <aside className="hidden lg:flex flex-col w-60 shrink-0 bg-codex-black/80 border-r border-codex-gold-dim/20 sticky top-0 h-screen">
        {content}
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-codex-black/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.aside
              className="fixed left-0 top-0 bottom-0 z-50 w-72 bg-codex-black border-r border-codex-gold-dim/30 lg:hidden"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-codex-parchment-dim hover:text-codex-parchment z-10"
                aria-label="Cerrar menú"
              >
                <X size={20} />
              </button>
              {content}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
