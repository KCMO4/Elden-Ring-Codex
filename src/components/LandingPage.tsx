import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Clock, Search, BookOpen, ArrowRight, Compass,
  Users, Shield, Map as MapIcon, BookMarked, Scroll, Flag,
  type LucideIcon,
} from 'lucide-react'
import { GoldenTree } from './illustrations/GoldenTree'
import { BrokenRing } from './illustrations/BrokenRing'
import { RuneSeparator } from './illustrations/RuneSeparator'
import { FeaturedEntry } from './FeaturedEntry'
import { useReadingHistory, type HistoryItem } from '../lib/readingHistory'
import { entityTypePath } from '../data/lookups'
import type { EntityType } from '../data/types'
import { charactersData } from '../data/characters'
import { factionsData } from '../data/factions'
import { regionsData } from '../data/regions'
import { timelineData } from '../data/timeline'

/* The legacy `onNavigate?` prop existed during the pre-Router era and was
   kept by App.tsx via a string transform. With proper Link support here it
   is no longer needed; App.tsx renders <LandingPage/> with no props. */

export function LandingPage() {
  const { items: history } = useReadingHistory()
  const recent = history.slice(0, 6)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Background atmospheric effects — themed via CSS vars so light mode adapts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgb(var(--codex-gold)) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] opacity-5"
          style={{ background: 'radial-gradient(circle, rgb(var(--codex-rot)) 0%, transparent 70%)' }} />

        {/* Parchment texture lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px opacity-5"
            style={{
              top: `${(i + 1) * 8}%`,
              background: 'linear-gradient(to right, transparent, rgb(var(--codex-gold)), transparent)',
            }}
          />
        ))}
      </div>

      {/* Broken ring — top decorative */}
      <motion.div
        className="absolute top-8 right-8 opacity-20"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.2, rotate: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <BrokenRing size={100} />
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-8 opacity-15"
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 0.15, rotate: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <BrokenRing size={80} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Tree illustration */}
        <motion.div
          className="w-48 h-64 md:w-64 md:h-80 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <GoldenTree />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-heading text-xs text-codex-gold-dim tracking-[0.4em] uppercase mb-4">
            Lore Profundo del Orden Fracturado
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-codex-gold-bright leading-tight mb-4"
            style={{ textShadow: '0 0 30px rgba(197,160,89,0.3)' }}>
            Elden Ring
          </h1>
          <h2 className="font-subheading text-2xl md:text-3xl italic text-codex-parchment-dim mb-6">
            Códice del Orden Fracturado
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <RuneSeparator className="mb-6" />
        </motion.div>

        <motion.p
          className="font-subheading text-lg italic text-codex-parchment-dim leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          "Timeline profundo del lore base, personajes, batallas, dioses, regiones y tragedias de las Tierras Intermedias"
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <CtaLink
            icon={<BookOpen size={16} />}
            label="Comenzar Lectura"
            to="/timeline"
            primary
          />
          <CtaLink
            icon={<Compass size={16} />}
            label="Rutas Narrativas"
            to="/rutas"
          />
          <CtaLink
            icon={<Search size={16} />}
            label="Buscar Personaje"
            to="/personajes"
          />
        </motion.div>

        <FeaturedEntry />

        {/* Continue reading — only renders when localStorage has visited entries */}
        {recent.length > 0 && (
          <motion.section
            className="mt-16 text-left"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <p className="font-heading text-xs text-codex-gold-dim tracking-[0.3em] uppercase mb-4 text-center">
              Continuar leyendo
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {recent.map((item) => (
                <ContinueReadingCard key={`${item.type}:${item.slug}`} item={item} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Bottom stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          {[
            { num: String(timelineData.length), label: 'Capítulos' },
            { num: String(charactersData.length), label: 'Personajes' },
            { num: String(factionsData.length), label: 'Facciones' },
            { num: String(regionsData.length), label: 'Regiones' },
          ].map(({ num, label }) => (
            <div key={label} className="parchment-panel p-4 text-center">
              <p className="font-heading text-2xl text-codex-gold mb-1" style={{ textShadow: '0 0 10px rgba(197,160,89,0.4)' }}>
                {num}
              </p>
              <p className="font-heading text-xs text-codex-parchment-dim tracking-wider uppercase">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const TYPE_META: Record<EntityType, { label: string; icon: LucideIcon }> = {
  character: { label: 'Personaje', icon: Users },
  region:    { label: 'Región',    icon: MapIcon },
  faction:   { label: 'Facción',   icon: Shield },
  concept:   { label: 'Concepto',  icon: BookMarked },
  timeline:  { label: 'Capítulo',  icon: Clock },
  ending:    { label: 'Final',     icon: Flag },
}

function ContinueReadingCard({ item }: { item: HistoryItem }) {
  const meta = TYPE_META[item.type]
  const Icon = meta?.icon ?? Scroll

  return (
    <Link
      to={entityTypePath(item.type, item.slug)}
      className="parchment-panel p-3 group hover:border-codex-gold-dim/60
                 hover:shadow-[0_0_15px_rgba(197,160,89,0.08)] transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center rounded-sm
                        bg-codex-brown/40 border border-codex-gold-dim/20 text-codex-gold-dim
                        group-hover:text-codex-gold-bright transition-colors">
          <Icon size={14} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-heading text-[10px] text-codex-gold-dim/80 tracking-widest uppercase">
            {meta?.label ?? 'Entrada'}
          </p>
          <p className="font-subheading text-sm text-codex-parchment group-hover:text-codex-gold-bright
                        transition-colors leading-snug truncate">
            {item.label}
          </p>
          {item.sublabel && (
            <p className="font-body text-[11px] text-codex-parchment-dim/70 truncate">
              {item.sublabel}
            </p>
          )}
        </div>
        <ArrowRight size={12} className="shrink-0 mt-1.5 text-codex-gold-dim/60 group-hover:text-codex-gold transition-colors" />
      </div>
    </Link>
  )
}

function CtaLink({
  icon, label, to, primary,
}: {
  icon: React.ReactNode
  label: string
  to: string
  primary?: boolean
}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-6 py-3 font-heading text-sm tracking-widest uppercase rounded-sm
                  transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]
        ${primary
          ? 'bg-codex-gold/15 border border-codex-gold/50 text-codex-gold-bright hover:bg-codex-gold/25 hover:shadow-[0_0_20px_rgba(197,160,89,0.2)]'
          : 'bg-codex-brown/50 border border-codex-gold-dim/30 text-codex-parchment-dim hover:border-codex-gold-dim/50 hover:text-codex-parchment'
        }`}
    >
      {icon}
      {label}
    </Link>
  )
}
