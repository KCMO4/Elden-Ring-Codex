export function RuneSeparator({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 24" className={`w-full ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="sepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8a7040" stopOpacity="0" />
          <stop offset="30%" stopColor="#c5a059" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#e8d5a3" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#c5a059" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8a7040" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="12" x2="180" y2="12" stroke="url(#sepGrad)" strokeWidth="1" />
      <line x1="220" y1="12" x2="400" y2="12" stroke="url(#sepGrad)" strokeWidth="1" />
      {/* Central ornament */}
      <g transform="translate(200, 12)">
        <polygon points="0,-6 6,0 0,6 -6,0" fill="#c5a059" opacity="0.8" />
        <polygon points="0,-3 3,0 0,3 -3,0" fill="#e8d5a3" opacity="0.9" />
      </g>
      {/* Side marks */}
      {[-80, 80].map((x) => (
        <g key={x} transform={`translate(${200 + x}, 12)`}>
          <line x1="0" y1="-4" x2="0" y2="4" stroke="#c5a059" strokeWidth="1" opacity="0.5" />
        </g>
      ))}
    </svg>
  )
}

export function RuneOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-12 h-12 ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id="ornGlow">
          <stop offset="0%" stopColor="#e8d5a3" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c5a059" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="25" stroke="#c5a059" strokeWidth="0.5" fill="none" opacity="0.3" />
      <circle cx="30" cy="30" r="18" stroke="#8a7040" strokeWidth="0.5" fill="none" opacity="0.5" />
      <polygon points="30,8 34,22 48,22 37,31 41,45 30,36 19,45 23,31 12,22 26,22"
               fill="none" stroke="#c5a059" strokeWidth="0.8" opacity="0.7" />
      <circle cx="30" cy="30" r="3" fill="#e8d5a3" opacity="0.8" />
    </svg>
  )
}
