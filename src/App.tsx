import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom'
import { Menu, Search } from 'lucide-react'

import { SidebarNav } from './components/SidebarNav'
import { LandingPage } from './components/LandingPage'
import { ScrollProgress } from './components/ScrollProgress'
import { ScrollToTop } from './components/ScrollToTop'
import { PageSkeleton } from './components/PageSkeleton'
import { ShortcutsCheatsheet } from './components/ShortcutsCheatsheet'
import { RuneOrnament } from './components/illustrations/RuneSeparator'

import { ImageSourcesProvider } from './lib/imageSources'
import { NavDirectionProvider, useNavDirection } from './lib/navDirection'

/* Section list pages — eagerly imported because they are entry points
   into the codex from the sidebar. Their data is also already in the
   manualChunks so the impact on the initial bundle is bounded. */
import { TimelineSection } from './components/TimelineSection'
import { CharacterSection } from './components/CharacterSection'
import { FactionSection } from './components/FactionSection'
import { RegionSection } from './components/RegionSection'
import { GlossarySection } from './components/GlossarySection'
import { EndingsSection } from './components/EndingsSection'

import { timelineData, charactersData, factionsData, regionsData, glossaryData } from './data'

/* Detail pages and secondary pages — lazy-loaded because they are
   only visited from list pages. Each becomes its own chunk. */
const CharacterDetailPage = lazy(() => import('./pages/CharacterDetailPage').then((m) => ({ default: m.CharacterDetailPage })))
const RegionDetailPage    = lazy(() => import('./pages/RegionDetailPage').then((m) => ({ default: m.RegionDetailPage })))
const FactionDetailPage   = lazy(() => import('./pages/FactionDetailPage').then((m) => ({ default: m.FactionDetailPage })))
const ConceptDetailPage   = lazy(() => import('./pages/ConceptDetailPage').then((m) => ({ default: m.ConceptDetailPage })))
const TimelineDetailPage  = lazy(() => import('./pages/TimelineDetailPage').then((m) => ({ default: m.TimelineDetailPage })))
const EndingDetailPage    = lazy(() => import('./pages/EndingDetailPage').then((m) => ({ default: m.EndingDetailPage })))
const RoutesListPage      = lazy(() => import('./pages/RoutesListPage').then((m) => ({ default: m.RoutesListPage })))
const RouteDetailPage     = lazy(() => import('./pages/RouteDetailPage').then((m) => ({ default: m.RouteDetailPage })))
const SearchPage          = lazy(() => import('./pages/SearchPage').then((m) => ({ default: m.SearchPage })))
const BookmarksPage       = lazy(() => import('./pages/BookmarksPage').then((m) => ({ default: m.BookmarksPage })))
const GenealogyPage       = lazy(() => import('./pages/GenealogyPage').then((m) => ({ default: m.GenealogyPage })))
const NotFoundPage        = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))
const TagPage             = lazy(() => import('./pages/TagPage').then((m) => ({ default: m.TagPage })))
const CategoryReadingPage = lazy(() => import('./pages/CategoryReadingPage').then((m) => ({ default: m.CategoryReadingPage })))

const pageVariants = {
  initial: { opacity: 0, y: 16, x: 0 },
  animate: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: -8, x: 0 },
}

/* Direction-aware variants: when DetailLayout signals a forward (j / next) or
   backward (k / prev) navigation, slide horizontally instead of fading. */
const pageVariantsForward = {
  initial: { opacity: 0, x: 32, y: 0 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -32, y: 0 },
}
const pageVariantsBackward = {
  initial: { opacity: 0, x: -32, y: 0 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 32, y: 0 },
}

const sectionTitleByPath: Array<[RegExp, string]> = [
  [/^\/$/, 'Elden Ring Códice'],
  [/^\/timeline/, 'Timeline'],
  [/^\/personajes/, 'Personajes'],
  [/^\/facciones/, 'Facciones'],
  [/^\/regiones/, 'Regiones'],
  [/^\/conceptos/, 'Conceptos'],
  [/^\/finales/, 'Finales'],
  [/^\/rutas/, 'Rutas Narrativas'],
  [/^\/busqueda/, 'Búsqueda'],
  [/^\/favoritos/, 'Favoritos'],
  [/^\/genealogia/, 'Genealogía'],
]

function deriveTitle(pathname: string): string {
  return sectionTitleByPath.find(([re]) => re.test(pathname))?.[1] ?? 'Códice'
}

const isMac = typeof navigator !== 'undefined'
  && /mac|iphone|ipad|ipod/i.test(navigator.platform || navigator.userAgent || '')
const shortcutLabel = isMac ? '⌘K' : 'Ctrl+K'

/** Decide which skeleton shape best matches the destination route. */
function pageSkeletonVariant(pathname: string): 'detail' | 'list' | 'generic' {
  if (/^\/(?:personajes|regiones|facciones|conceptos|timeline|finales|rutas)\/[^/]+$/.test(pathname)) return 'detail'
  if (pathname.startsWith('/etiqueta/')) return 'detail'
  if (pathname === '/busqueda' || pathname === '/favoritos' || pathname === '/rutas' || pathname === '/genealogia') return 'list'
  return 'generic'
}

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <MotionConfig reducedMotion="user">
        <ImageSourcesProvider>
          <NavDirectionProvider>
            <AppShell />
          </NavDirectionProvider>
        </ImageSourcesProvider>
      </MotionConfig>
    </BrowserRouter>
  )
}

function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const { direction } = useNavDirection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [readingMode, setReadingMode] = useState(false)
  const isHome = location.pathname === '/'

  const activeVariants =
    direction === 'forward'  ? pageVariantsForward  :
    direction === 'backward' ? pageVariantsBackward :
                                pageVariants

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        navigate('/busqueda')
        return
      }
      if (e.key === 'Escape') setMobileMenuOpen(false)
      /* `/` jumps to search — standard wiki shortcut. Inert when typing in
         an input/textarea/contenteditable so it doesn't hijack normal text input. */
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const tgt = e.target as HTMLElement | null
        if (tgt) {
          const tag = tgt.tagName
          if (tag === 'INPUT' || tag === 'TEXTAREA' || tgt.isContentEditable) return
        }
        e.preventDefault()
        navigate('/busqueda')
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [navigate])

  return (
    <div className={`flex min-h-dvh bg-codex-black ${readingMode ? 'reading-mode' : ''}`}>
      <a href="#main-content" className="skip-to-content">Saltar al contenido</a>
      <ScrollToTop />
      <ScrollProgress />
      <ShortcutsCheatsheet />

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
            aria-label={`Buscar (${shortcutLabel})`}
          >
            <Search size={18} />
            <span className="hidden md:inline text-xs font-heading tracking-wider opacity-60">
              {shortcutLabel}
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

        <main id="main-content" className={`flex-1 ${readingMode && !isHome ? 'max-w-3xl mx-auto w-full px-6' : ''}`}>
          <Suspense fallback={<PageSkeleton variant={pageSkeletonVariant(location.pathname)} />}>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                variants={activeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: direction === 'neutral' ? 0.35 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Passing `location` explicitly is essential here: without it,
                    Routes uses the latest location from context, so during the
                    AnimatePresence exit animation the *old* motion.div would
                    re-render with the *new* page's component (causing flicker
                    and the "Leer más" navigation to look broken). */}
                <Routes location={location}>
                  <Route path="/" element={<LandingPage />} />
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
                  <Route path="/rutas" element={<RoutesListPage />} />
                  <Route path="/rutas/:id" element={<RouteDetailPage />} />
                  <Route path="/busqueda" element={<SearchPage />} />
                  <Route path="/favoritos" element={<BookmarksPage />} />
                  <Route path="/genealogia" element={<GenealogyPage />} />
                  <Route path="/etiqueta/:slug" element={<TagPage />} />
                  <Route path="/lectura/:category" element={<CategoryReadingPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </main>

        <footer className="border-t border-codex-gold-dim/15 py-8 px-6 text-center">
          <p className="font-heading text-xs text-codex-parchment-dim/60 tracking-widest uppercase">
            Códice del Orden Fracturado · Solo juego base · Sin afiliación con FromSoftware
          </p>
        </footer>
      </div>
    </div>
  )
}
