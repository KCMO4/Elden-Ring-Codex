import { Layers, Layers2 } from 'lucide-react'
import { useExpansion, type ExpansionFilter } from '../lib/expansion'

/* Compact 2-state toggle in the sidebar — show all (base + SOTE) or
   hide SOTE blocks. Mirrors ThemeToggle styling for visual consistency. */
export function ExpansionToggle() {
  const { filter, setFilter } = useExpansion()

  const options: { value: ExpansionFilter; icon: React.ReactNode; label: string; help: string }[] = [
    { value: 'all',  icon: <Layers2 size={12} />, label: 'Todo',  help: 'Mostrar contenido base y SOTE' },
    { value: 'base', icon: <Layers size={12} />,  label: 'Base',  help: 'Ocultar bloques marcados como SOTE' },
  ]

  return (
    <div
      role="radiogroup"
      aria-label="Filtro de expansión"
      className="inline-flex items-center gap-0.5 p-0.5 rounded-sm
                 bg-codex-brown/30 border border-codex-gold-dim/20"
    >
      {options.map((opt) => {
        const active = filter === opt.value
        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={active}
            onClick={() => setFilter(opt.value)}
            title={opt.help}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-sm transition-all
                       font-heading text-[10px] tracking-wider uppercase
                       ${active
                         ? 'bg-codex-gold/15 text-codex-gold-bright'
                         : 'text-codex-gold-dim hover:text-codex-parchment'
                       }`}
          >
            {opt.icon}
            <span className="hidden sm:inline">{opt.label}</span>
          </button>
        )
      })}
    </div>
  )
}
