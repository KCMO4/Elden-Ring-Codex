import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme, type Theme } from '../lib/theme'

/* Compact 3-state segmented control. Cycles dark → light → system → dark. */
export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme()

  const options: { value: Theme; icon: React.ReactNode; label: string }[] = [
    { value: 'dark',   icon: <Moon size={12} />,    label: 'Oscuro' },
    { value: 'light',  icon: <Sun size={12} />,     label: 'Claro' },
    { value: 'system', icon: <Monitor size={12} />, label: 'Sistema' },
  ]

  if (compact) {
    /* Single button cycling through states — used in tight nav corners */
    const next = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'
    const current = options.find((o) => o.value === theme)!
    return (
      <button
        type="button"
        onClick={() => setTheme(next)}
        className="p-1.5 rounded-sm border border-codex-gold-dim/20 text-codex-gold-dim
                   hover:text-codex-gold-bright hover:border-codex-gold-dim/50 transition-all"
        aria-label={`Tema: ${current.label} — pulsa para cambiar`}
        title={`Tema: ${current.label}`}
      >
        {current.icon}
      </button>
    )
  }

  return (
    <div
      role="radiogroup"
      aria-label="Tema visual"
      className="inline-flex items-center gap-0.5 p-0.5 rounded-sm
                 bg-codex-brown/30 border border-codex-gold-dim/20"
    >
      {options.map((opt) => {
        const active = theme === opt.value
        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(opt.value)}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-sm transition-all
                       font-heading text-[10px] tracking-wider uppercase
                       ${active
                         ? 'bg-codex-gold/15 text-codex-gold-bright'
                         : 'text-codex-gold-dim hover:text-codex-parchment'
                       }`}
            title={opt.label}
          >
            {opt.icon}
            <span className="hidden sm:inline">{opt.label}</span>
          </button>
        )
      })}
    </div>
  )
}
