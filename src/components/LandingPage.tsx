import { motion } from 'framer-motion'
import { Clock, Search, BookOpen } from 'lucide-react'
import { GoldenTree } from './illustrations/GoldenTree'
import { BrokenRing } from './illustrations/BrokenRing'
import { RuneSeparator } from './illustrations/RuneSeparator'

interface Props {
  /** Optional legacy navigation callback (string section id). Pages now have proper URLs. */
  onNavigate?: (s: string) => void
}

export function LandingPage({ onNavigate }: Props) {
  const navTo = (section: string) => {
    if (onNavigate) onNavigate(section)
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Background atmospheric effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #c5a059 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] opacity-5"
          style={{ background: 'radial-gradient(circle, #6b2d4a 0%, transparent 70%)' }} />

        {/* Parchment texture lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px opacity-5"
            style={{
              top: `${(i + 1) * 8}%`,
              background: 'linear-gradient(to right, transparent, #c5a059, transparent)',
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
            Lore Profundo · Juego Base
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
          "Timeline profundo del lore base, personajes, batallas, dioses, regiones y tragedias del Interregno"
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <CtaButton
            icon={<BookOpen size={16} />}
            label="Comenzar Lectura"
            primary
            onClick={() => navTo('timeline')}
          />
          <CtaButton
            icon={<Clock size={16} />}
            label="Ver Timeline"
            onClick={() => navTo('timeline')}
          />
          <CtaButton
            icon={<Search size={16} />}
            label="Buscar Personaje"
            onClick={() => navTo('personajes')}
          />
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          {[
            { num: '16', label: 'Capítulos' },
            { num: '30', label: 'Personajes' },
            { num: '21', label: 'Facciones' },
            { num: '18', label: 'Regiones' },
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

function CtaButton({
  icon, label, primary, onClick,
}: {
  icon: React.ReactNode; label: string; primary?: boolean; onClick: () => void
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 font-heading text-sm tracking-widest uppercase transition-all duration-200
        ${primary
          ? 'bg-codex-gold/15 border border-codex-gold/50 text-codex-gold-bright hover:bg-codex-gold/25 hover:shadow-[0_0_20px_rgba(197,160,89,0.2)]'
          : 'bg-codex-brown/50 border border-codex-gold-dim/30 text-codex-parchment-dim hover:border-codex-gold-dim/50 hover:text-codex-parchment'
        } rounded-sm`}
    >
      {icon}
      {label}
    </motion.button>
  )
}
