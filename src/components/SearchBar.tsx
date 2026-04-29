import { Search, X } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = 'Buscar en el Códice...' }: SearchBarProps) {
  return (
    <div className="relative group">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-codex-gold-dim group-focus-within:text-codex-gold transition-colors"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-8 py-2.5 bg-codex-brown/50 border border-codex-gold-dim/30
                   text-codex-parchment placeholder-codex-parchment-dim/50
                   font-body text-sm rounded-sm
                   focus:outline-none focus:border-codex-gold/60 focus:bg-codex-brown/70
                   transition-all duration-200"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-codex-parchment-dim hover:text-codex-parchment"
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
}
