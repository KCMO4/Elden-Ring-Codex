import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom'
import { Menu, Search } from 'lucide-react'

import { SidebarNav } from './components/SidebarNav'
import { LandingPage } from './components/LandingPage'
import { TimelineSection } from './components/TimelineSection'
import { CharacterSection } from './components/CharacterSection'
import { FactionSection } from './components/FactionSection'
import { RegionSection } from './components/RegionSection'
import { GlossarySection } from './components/GlossarySection'
import { EndingsSection } from './components/EndingsSection'
import { ScrollProgress } from './components/ScrollProgress'
import { RuneOrnament } from './components/illustrations/RuneSeparator'

import { CharacterDetailPage } from './pages/CharacterDetailPage'
import { RegionDetailPage } from './pages/RegionDetailPage'
import { FactionDetailPage } from './pages/FactionDetailPage'
import { ConceptDetailPage } from './pages/ConceptDetailPage'
import { TimelineDetailPage } from './pages/TimelineDetailPage'
import { EndingDetailPage } from './pages/EndingDetailPage'
import { SearchPage } from './pages/SearchPage'
import { NotFoundPage } from './pages/NotFoundPage'

import { timelineData, charactersData, factionsData, regionsData, glossaryData } from './data'
import { ImageSourcesProvider } from './lib/imageSources'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

const sectionTitleByPath: Array<[RegExp, string]> = [
  [/^\/$/, 'Elden Ring Códice'],
  [/^\/timeline/, 'Timeline'],
  [/^\/personajes/, 'Personajes'],
  [/^\/facciones/, 'Facciones'],
  [/^\/regiones/, 'Regiones'],
  [/^\/conceptos/, 'Conceptos'],
  [/^\/finales/, 'Finales'],
  [/^\/busqueda/, 'Búsqueda'],
]

function deriveTitle(pathname: string): string {
  return sectionTitleByPath.find(([re]) => re.test(pathname))?.[1] ?? 'Códice'
}

export default function App() {
  return (
    <BrowserRouter>
      <ImageSourcesProvider>
        <AppShell />
      </ImageSourcesProvider>
    </BrowserRouter>
  )
}

function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [readingMode, setReadingMode] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        navigate('/busqueda')
      }
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [navigate])

  return (
    <div className={`flex min-h-dvh bg-codex-black ${readingMode ? 'reading-mode' : ''}`}>
      <ScrollProgress />

      <SidebarNav
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        readingMode={readingMode}
        onToggleReading={() => setReadingMode((v) => !v)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <header className={`sticky top-0 z-30 flex items-center justify-between px-4 py-3
          bg-codex-black/90 backdrop-blur-md border-b border-codex-gold-dim/20
          transition-all duration-300
          ${readingMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex items-center gap-2 text-codex-gold-dim hover:text-codex-gold transition-colors"
            aria-label="Abrir menú"
          >
            <Menu size={20} />
          </button>

          <Link to="/" className="hidden lg:flex items-center gap-2">
            <RuneOrnament className="w-6 h-6 opacity-60" />
            <span className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase">
              Códice del Orden Fracturado
            </span>
          </Link>

          <span className="lg:hidden font-heading text-sm text-codex-parchment-dim tracking-wide">
            {deriveTitle(location.pathname)}
          </span>

          <Link
            to="/busqueda"
            className="flex items-center gap-1.5 text-codex-gold-dim hover:text-codex-gold transition-colors"
            aria-label="Buscar (Ctrl+K)"
          >
            <Search size={18} />
            <span className="hidden md:inline text-xs font-heading tracking-wider opacity-60">
              Ctrl+K
            </span>
          </Link>
        </header>

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

        <main className={`flex-1 ${readingMode && !isHome ? 'max-w-3xl mx-auto w-full px-6' : ''}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <Routes>
                <Route path="/" element={<LandingPage onNavigate={(s) => navigate(`/${s === 'portada' ? '' : s === 'glosario' ? 'conceptos' : s}`)} />} />
                <Route path="/timeline" element={<TimelineSection entries={timelineData} readingMode={readingMode} />} />
                <Route path="/timeline/:slug" element={<TimelineDetailPage />} />
                <Route path="/personajes" element={<CharacterSection characters={charactersData} />} />
                <Route path="/personajes/:slug" element={<CharacterDetailPage />} />
                <Route path="/facciones" element={<FactionSection factions={factionsData} />} />
                <Route path="/facciones/:slug" element={<FactionDetailPage />} />
                <Route path="/regiones" element={<RegionSection regions={regionsData} />} />
                <Route path="/regiones/:slug" element={<RegionDetailPage />} />
                <Route path="/conceptos" element={<GlossarySection entries={glossaryData} />} />
                <Route path="/conceptos/:slug" element={<ConceptDetailPage />} />
                <Route path="/finales" element={<EndingsSection />} />
                <Route path="/finales/:slug" element={<EndingDetailPage />} />
                <Route path="/busqueda" element={<SearchPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="border-t border-codex-gold-dim/15 py-8 px-6 text-center">
          <p className="font-heading text-xs text-codex-parchment-dim/40 tracking-widest uppercase">
            Códice del Orden Fracturado · Solo juego base · Sin afiliación con FromSoftware
          </p>
        </footer>
      </div>
    </div>
  )
}
