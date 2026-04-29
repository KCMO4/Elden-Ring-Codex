import { motion, AnimatePresence } from 'framer-motion'
import { X, BookOpen, Clock, Users, Shield, Map, BookMarked, Scroll } from 'lucide-react'
import { RuneOrnament } from './illustrations/RuneSeparator'

export type Section = 'portada' | 'timeline' | 'personajes' | 'facciones' | 'regiones' | 'glosario' | 'finales'

const navItems: { id: Section; label: string; icon: React.ReactNode; sub?: string }[] = [
  { id: 'portada', label: 'Portada', icon: <BookOpen size={14} />, sub: 'Códice del Orden Fracturado' },
  { id: 'timeline', label: 'Timeline Profundo', icon: <Clock size={14} />, sub: '16 capítulos' },
  { id: 'personajes', label: 'Enciclopedia', icon: <Users size={14} />, sub: 'Personajes' },
  { id: 'facciones', label: 'Facciones', icon: <Shield size={14} />, sub: 'Facciones y Enemigos' },
  { id: 'regiones', label: 'Regiones', icon: <Map size={14} />, sub: 'Geografía del Lore' },
  { id: 'glosario', label: 'Glosario', icon: <BookMarked size={14} />, sub: 'Conceptos Clave' },
  { id: 'finales', label: 'Los Finales', icon: <Scroll size={14} />, sub: 'Las 6 Eras' },
]

interface Props {
  active: Section
  onNavigate: (s: Section) => void
  mobileOpen: boolean
  onClose: () => void
  readingMode: boolean
  onToggleReading: () => void
}

export function SidebarNav({ active, onNavigate, mobileOpen, onClose, readingMode, onToggleReading }: Props) {
  const content = (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-codex-gold-dim/20">
        <div className="flex items-center gap-3">
          <RuneOrnament className="w-8 h-8 shrink-0" />
          <div>
            <p className="font-heading text-xs text-codex-gold tracking-widest uppercase">Elden Ring</p>
            <p className="font-heading text-[10px] text-codex-parchment-dim tracking-wide">Códice del Orden Fracturado</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => { onNavigate(item.id); onClose() }}
            className={`w-full text-left px-3 py-2.5 rounded-sm mb-1 transition-all duration-200 group
              ${active === item.id
                ? 'bg-codex-gold/10 border border-codex-gold/30 shadow-[0_0_10px_rgba(197,160,89,0.1)]'
                : 'hover:bg-codex-brown/40 border border-transparent hover:border-codex-gold-dim/20'
              }`}
          >
            <div className="flex items-center gap-2.5">
              <span className={`transition-colors ${active === item.id ? 'text-codex-gold' : 'text-codex-gold-dim group-hover:text-codex-gold'}`}>
                {item.icon}
              </span>
              <div>
                <p className={`font-heading text-xs tracking-wide ${active === item.id ? 'text-codex-gold-bright' : 'text-codex-parchment-dim group-hover:text-codex-parchment'}`}>
                  {item.label}
                </p>
                {item.sub && (
                  <p className="text-[10px] text-codex-parchment-dim/60 mt-0.5">{item.sub}</p>
                )}
              </div>
            </div>
          </button>
        ))}
      </nav>

      {/* Reading mode toggle */}
      <div className="p-4 border-t border-codex-gold-dim/20">
        <button
          onClick={onToggleReading}
          className={`w-full px-3 py-2 rounded-sm font-heading text-xs tracking-wider uppercase transition-all
            ${readingMode
              ? 'bg-codex-gold/15 border border-codex-gold/40 text-codex-gold'
              : 'bg-codex-brown/40 border border-codex-gold-dim/20 text-codex-parchment-dim hover:border-codex-gold-dim/40 hover:text-codex-parchment'
            }`}
        >
          {readingMode ? '📖 Modo Lectura ✓' : '📖 Modo Lectura'}
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-60 shrink-0 bg-codex-black/80 border-r border-codex-gold-dim/20 sticky top-0 h-screen">
        {content}
      </aside>

      {/* Mobile drawer */}
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
                className="absolute top-4 right-4 text-codex-parchment-dim hover:text-codex-parchment"
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
