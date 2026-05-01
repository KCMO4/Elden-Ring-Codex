import type { Certainty } from '../data/types'

const config: Record<Certainty, {
  label: string; color: string; bg: string; border: string; tooltip: string
}> = {
  confirmado: {
    label: 'Confirmado',
    color: 'text-codex-gold-bright',
    bg: 'bg-codex-gold/10',
    border: 'border-codex-gold/40',
    tooltip: 'Hecho directamente atestiguado en items, diálogo o cinemáticas del juego base.',
  },
  inferencia: {
    label: 'Inferencia Fuerte',
    color: 'text-amber-300',
    bg: 'bg-amber-900/20',
    border: 'border-amber-700/40',
    tooltip: 'Consecuencia lógica fuerte sostenida por la cosmología, no enunciada literalmente.',
  },
  teoria: {
    label: 'Teoría',
    color: 'text-codex-parchment-dim',
    bg: 'bg-codex-brown/30',
    border: 'border-codex-parchment-dim/30',
    tooltip: 'Lectura comunitaria razonable pero no sostenida por items específicos.',
  },
}

export function CertaintyBadge({ certainty }: { certainty: Certainty }) {
  const c = config[certainty]
  return (
    <span
      title={c.tooltip}
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-xs font-medium tracking-wider uppercase border cursor-help ${c.color} ${c.bg} ${c.border}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
      {c.label}
    </span>
  )
}
