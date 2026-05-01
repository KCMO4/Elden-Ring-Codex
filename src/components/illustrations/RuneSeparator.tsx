/**
 * Heraldic rune ornaments used throughout the codex as section dividers
 * and small badges. All static SVGs (no animation) for cheap repeats.
 */

/* ──────────────────────────────────────────────────────────── */
/* RuneSeparator — horizontal divider with central diamond                  */
/* ──────────────────────────────────────────────────────────── */

export function RuneSeparator({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 32" className={`w-full ${className}`} aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rs-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#8a7040" stopOpacity="0" />
          <stop offset="20%"  stopColor="#c5a059" stopOpacity="0.5" />
          <stop offset="50%"  stopColor="#e8d5a3" stopOpacity="0.85" />
          <stop offset="80%"  stopColor="#c5a059" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8a7040" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rs-line-thin" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#8a7040" stopOpacity="0" />
          <stop offset="50%"  stopColor="#c5a059" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#8a7040" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="rs-diamond" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#fff8e0" />
          <stop offset="60%"  stopColor="#e8d5a3" />
          <stop offset="100%" stopColor="#8a7040" />
        </radialGradient>
      </defs>

      {/* Two flanking gold lines */}
      <line x1="0" y1="16" x2="170" y2="16" stroke="url(#rs-line)" strokeWidth="1.1" />
      <line x1="230" y1="16" x2="400" y2="16" stroke="url(#rs-line)" strokeWidth="1.1" />

      {/* Subtle secondary lines just above/below for depth */}
      <line x1="40"  y1="12" x2="155" y2="12" stroke="url(#rs-line-thin)" strokeWidth="0.6" />
      <line x1="40"  y1="20" x2="155" y2="20" stroke="url(#rs-line-thin)" strokeWidth="0.6" />
      <line x1="245" y1="12" x2="360" y2="12" stroke="url(#rs-line-thin)" strokeWidth="0.6" />
      <line x1="245" y1="20" x2="360" y2="20" stroke="url(#rs-line-thin)" strokeWidth="0.6" />

      {/* Inner-flank tick marks */}
      {[160, 240].map((x) => (
        <g key={x}>
          <line x1={x} y1="10" x2={x} y2="22" stroke="#c5a059" strokeWidth="0.9" opacity="0.7" />
          <line x1={x - 4} y1="16" x2={x + 4} y2="16" stroke="#c5a059" strokeWidth="0.6" opacity="0.5" />
        </g>
      ))}

      {/* Outer flank rune dots */}
      {[14, 386].map((x) => (
        <circle key={x} cx={x} cy="16" r="1.6" fill="#c5a059" opacity="0.65" />
      ))}

      {/* Central ornament: layered diamond + four corner flares */}
      <g transform="translate(200 16)">
        {/* Outer rhombus */}
        <polygon points="0,-10 10,0 0,10 -10,0" fill="url(#rs-diamond)" opacity="0.95" />
        {/* Inner rhombus */}
        <polygon points="0,-5 5,0 0,5 -5,0" fill="#fff5d8" opacity="0.9" />
        {/* Center pinpoint */}
        <circle r="1.4" fill="#ffffff" />
        {/* Cardinal flares */}
        {[0, 90, 180, 270].map((angle) => {
          const a = (angle * Math.PI) / 180
          return (
            <line
              key={angle}
              x1={Math.cos(a) * 11}
              y1={Math.sin(a) * 11}
              x2={Math.cos(a) * 16}
              y2={Math.sin(a) * 16}
              stroke="#c5a059"
              strokeWidth="0.7"
              opacity="0.6"
            />
          )
        })}
      </g>
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────── */
/* RuneOrnament — small heraldic badge / mark                              */
/* ──────────────────────────────────────────────────────────── */

export function RuneOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`w-12 h-12 ${className}`} aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ro-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#fff5d8" stopOpacity="0.45" />
          <stop offset="60%"  stopColor="#e8d5a3" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ro-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="60%"  stopColor="#fff5d8" />
          <stop offset="100%" stopColor="#c5a059" />
        </radialGradient>
      </defs>

      {/* Soft glow */}
      <circle cx="32" cy="32" r="30" fill="url(#ro-glow)" />

      {/* Outer ring */}
      <circle cx="32" cy="32" r="26" fill="none" stroke="#c5a059" strokeWidth="0.7" opacity="0.55" />

      {/* Mid ring */}
      <circle cx="32" cy="32" r="20" fill="none" stroke="#8a7040" strokeWidth="0.6" opacity="0.7" />

      {/* Outer cardinal ticks */}
      {[0, 90, 180, 270].map((angle) => {
        const a = (angle * Math.PI) / 180
        return (
          <line
            key={angle}
            x1={32 + Math.cos(a) * 26}
            y1={32 + Math.sin(a) * 26}
            x2={32 + Math.cos(a) * 30}
            y2={32 + Math.sin(a) * 30}
            stroke="#c5a059"
            strokeWidth="0.8"
            opacity="0.65"
          />
        )
      })}

      {/* Eight-pointed star inside the mid ring */}
      <g transform="translate(32 32)">
        <polygon
          points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4"
          fill="none"
          stroke="#c5a059"
          strokeWidth="0.9"
          opacity="0.8"
        />
        <polygon
          points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3"
          fill="#e8d5a3"
          opacity="0.4"
        />
      </g>

      {/* Central dot — the runic "axis" */}
      <circle cx="32" cy="32" r="3.2" fill="url(#ro-core)" />
      <circle cx="32" cy="32" r="1.2" fill="#ffffff" opacity="0.9" />
    </svg>
  )
}
