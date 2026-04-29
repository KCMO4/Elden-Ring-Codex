import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Search } from 'lucide-react'

import { SidebarNav, type Section } from './components/SidebarNav'
import { LandingPage } from './components/LandingPage'
import { TimelineSection } from './components/TimelineSection'
import { CharacterSection } from './components/CharacterSection'
import { FactionSection } from './components/FactionSection'
import { RegionSection } from './components/RegionSection'
import { GlossarySection } from './components/GlossarySection'
import { EndingsSection } from './components/EndingsSection'
import { ScrollProgress } from './components/ScrollProgress'
import { SearchBar } from './components/SearchBar'
import { RuneOrnament } from './components/illustrations/RuneSeparator'

import { timelineData, charactersData, factionsData, regionsData, glossaryData } from './data'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export default function App() {
  const [section, setSection] = useState<Section>('portada')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [readingMode, setReadingMode] = useState(false)
  const [globalSearch, setGlobalSearch] = useState('')
  const [showGlobalSearch, setShowGlobalSearch] = useState(false)

  const navigate = useCallback((s: Section) => {
    setSection(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Keyboard shortcut: Ctrl+K for search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setShowGlobalSearch((v) => !v)
      }
      if (e.key === 'Escape') setShowGlobalSearch(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const renderSection = () => {
    switch (section) {
      case 'portada':
        return <LandingPage onNavigate={navigate} />
      case 'timeline':
        return <TimelineSection entries={timelineData} readingMode={readingMode} />
      case 'personajes':
        return <CharacterSection characters={charactersData} />
      case 'facciones':
        return <FactionSection factions={factionsData} />
      case 'regiones':
        return <RegionSection regions={regionsData} />
      case 'glosario':
        return <GlossarySection entries={glossaryData} />
      case 'finales':
        return <EndingsSection />
      default:
        return null
    }
  }

  return (
    <div className={`flex min-h-dvh bg-codex-black ${readingMode ? 'reading-mode' : ''}`}>
      <ScrollProgress />

      <SidebarNav
        active={section}
        onNavigate={navigate}
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        readingMode={readingMode}
        onToggleReading={() => setReadingMode((v) => !v)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar (mobile + desktop) */}
        <header className={`sticky top-0 z-30 flex items-center justify-between px-4 py-3
          bg-codex-black/90 backdrop-blur-md border-b border-codex-gold-dim/20
          transition-all duration-300
          ${readingMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex items-center gap-2 text-codex-gold-dim hover:text-codex-gold transition-colors"
            aria-label="Abrir menú"
          >
            <Menu size={20} />
          </button>

          {/* Logo (desktop, hidden because sidebar shows it) */}
          <div className="hidden lg:flex items-center gap-2">
            <RuneOrnament className="w-6 h-6 opacity-60" />
            <span className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase">
              Códice del Orden Fracturado
            </span>
          </div>

          {/* Section title on mobile */}
          <span className="lg:hidden font-heading text-sm text-codex-parchment-dim tracking-wide capitalize">
            {section === 'portada' ? 'Elden Ring Códice' : section}
          </span>

          {/* Search button */}
          <button
            onClick={() => setShowGlobalSearch(!showGlobalSearch)}
            className="flex items-center gap-1.5 text-codex-gold-dim hover:text-codex-gold transition-colors"
            aria-label="Buscar (Ctrl+K)"
          >
            <Search size={18} />
            <span className="hidden md:inline text-xs font-heading tracking-wider opacity-60">
              Ctrl+K
            </span>
          </button>
        </header>

        {/* Global search bar */}
        <AnimatePresence>
          {showGlobalSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-codex-gold-dim/20 bg-codex-black/95 px-4 py-3"
            >
              <div className="max-w-2xl mx-auto">
                <SearchBar
                  value={globalSearch}
                  onChange={setGlobalSearch}
                  placeholder="Buscar en todo el Códice..."
                />
                {globalSearch.trim().length > 1 && (
                  <GlobalSearchResults
                    query={globalSearch}
                    onNavigate={(s) => { navigate(s); setShowGlobalSearch(false); setGlobalSearch('') }}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reading mode indicator */}
        {readingMode && (
          <motion.div
            className="fixed top-4 right-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() => setReadingMode(false)}
              className="px-3 py-1.5 bg-codex-brown/80 border border-codex-gold-dim/30 text-codex-gold-dim text-xs font-heading tracking-wider rounded-sm hover:border-codex-gold-dim/50 hover:text-codex-parchment transition-all backdrop-blur-sm"
            >
              × Salir Lectura
            </button>
          </motion.div>
        )}

        {/* Main content area */}
        <main className={`flex-1 ${readingMode && section !== 'portada' ? 'max-w-3xl mx-auto w-full px-6' : ''}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={section}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="border-t border-codex-gold-dim/15 py-8 px-6 text-center">
          <p className="font-heading text-xs text-codex-parchment-dim/40 tracking-widest uppercase">
            Códice del Orden Fracturado · Solo juego base · Sin afiliación con FromSoftware
          </p>
        </footer>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────── */
/* Global search results overlay                                   */
/* ──────────────────────────────────────────────────────────────── */
function GlobalSearchResults({
  query,
  onNavigate,
}: {
  query: string
  onNavigate: (s: Section) => void
}) {
  const q = query.toLowerCase()

  const timelineHits = timelineData.filter(
    (e) => e.title.toLowerCase().includes(q) || e.lore.some((p) => p.toLowerCase().includes(q))
  ).slice(0, 3)

  const charHits = charactersData.filter(
    (c) => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q)
  ).slice(0, 3)

  const glossaryHits = glossaryData.filter(
    (g) => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)
  ).slice(0, 3)

  const regionHits = regionsData.filter(
    (r) => r.name.toLowerCase().includes(q) || r.historical.toLowerCase().includes(q)
  ).slice(0, 3)

  const total = timelineHits.length + charHits.length + glossaryHits.length + regionHits.length

  if (total === 0) {
    return (
      <div className="mt-3 p-4 parchment-panel text-center">
        <p className="text-sm text-codex-parchment-dim">Sin resultados para "{query}"</p>
      </div>
    )
  }

  return (
    <div className="mt-3 parchment-panel divide-y divide-codex-gold-dim/20 max-h-72 overflow-y-auto">
      {timelineHits.map((e) => (
        <ResultRow key={e.id} label={e.title} sub="Timeline" onClick={() => onNavigate('timeline')} />
      ))}
      {charHits.map((c) => (
        <ResultRow key={c.id} label={c.name} sub={c.faction} onClick={() => onNavigate('personajes')} />
      ))}
      {regionHits.map((r) => (
        <ResultRow key={r.id} label={r.name} sub="Región" onClick={() => onNavigate('regiones')} />
      ))}
      {glossaryHits.map((g) => (
        <ResultRow key={g.id} label={g.term} sub="Glosario" onClick={() => onNavigate('glosario')} />
      ))}
    </div>
  )
}

function ResultRow({ label, sub, onClick }: { label: string; sub: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-codex-gold/5 transition-colors text-left"
    >
      <span className="font-heading text-sm text-codex-parchment">{label}</span>
      <span className="text-xs text-codex-gold-dim uppercase tracking-wider">{sub}</span>
    </button>
  )
}
