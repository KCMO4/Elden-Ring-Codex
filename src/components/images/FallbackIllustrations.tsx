/** SVG fallback illustrations — atmospheric multi-layer scenes for each
 *  entity type. Each scene combines:
 *    - sky / atmospheric gradient
 *    - background depth (mountains / mist / aureole)
 *    - midground architecture or organic forms
 *    - foreground primary symbol
 *    - particle motes & light rays for air
 *    - vignette + heraldic gold frame
 *
 *  All positions are deterministic (seeded sin/cos) so layout is stable.
 *  No animation here — these render as backdrops behind hero text and
 *  cards, so they prioritise composition over motion.
 */
import type { FallbackType } from '../../data/types'
export type { FallbackType }

interface Props {
  type: FallbackType
  aspect?: 'portrait' | 'landscape' | 'square'
  className?: string
}

export function FallbackIllustration({ type, aspect = 'landscape', className = '' }: Props) {
  const dims = aspect === 'portrait'
    ? { w: 400, h: 500 }
    : aspect === 'square'
    ? { w: 400, h: 400 }
    : { w: 800, h: 400 }

  return (
    <svg
      viewBox={`0 0 ${dims.w} ${dims.h}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {renderScene(type, dims.w, dims.h)}
    </svg>
  )
}

/* ════════════════════════════════════════════════════════════════════════ */
/* Shared helpers                                                          */
/* ════════════════════════════════════════════════════════════════════════ */

/** Deterministic pseudo-random in [0,1] from a seed scalar. */
function rand(seed: number): number {
  return (Math.sin(seed * 12.9898) * 43758.5453) % 1 * 0.5 + 0.5
}

function Particles({
  count, w, h, color, size = 1.5, opacity = 0.55, seed = 0,
}: {
  count: number; w: number; h: number; color: string;
  size?: number; opacity?: number; seed?: number
}) {
  const dots = []
  for (let i = 0; i < count; i++) {
    const x = (Math.sin(seed + i * 1.7) * 0.5 + 0.5) * w
    const y = (Math.cos(seed + i * 2.3) * 0.5 + 0.5) * h
    const r = size * (0.4 + rand(seed + i * 3.1) * 0.7)
    const o = opacity * (0.35 + rand(seed + i * 4.7) * 0.65)
    dots.push(<circle key={i} cx={x} cy={y} r={r} fill={color} opacity={o} />)
  }
  return <>{dots}</>
}

/** Twinkling-style stars with optional cross-flares on the brightest ones. */
function StarField({
  w, h, count = 50, seed = 0, color = '#e0d8f0', flareCount = 4,
}: {
  w: number; h: number; count?: number; seed?: number; color?: string; flareCount?: number
}) {
  const stars = []
  for (let i = 0; i < count; i++) {
    const x = (Math.sin(seed + i * 1.7) * 0.5 + 0.5) * w
    const y = (Math.cos(seed + i * 2.3) * 0.5 + 0.5) * h
    const r = 0.5 + rand(seed + i * 5.1) * 1.4
    const o = 0.45 + rand(seed + i * 7.3) * 0.55
    stars.push(<circle key={`s-${i}`} cx={x} cy={y} r={r} fill={color} opacity={o} />)
  }
  // The brightest few get cross-shaped flares
  for (let i = 0; i < flareCount; i++) {
    const x = (Math.sin(seed * 1.3 + i * 2.7) * 0.5 + 0.5) * w
    const y = (Math.cos(seed * 1.3 + i * 3.5) * 0.5 + 0.5) * h
    const r = 1.6 + rand(seed * 2 + i) * 0.8
    stars.push(
      <g key={`f-${i}`} transform={`translate(${x} ${y})`} opacity={0.85}>
        <circle r={r * 1.5} fill={color} opacity={0.18} />
        <circle r={r} fill="#ffffff" />
        <line x1={-r * 3.2} y1={0} x2={r * 3.2} y2={0} stroke={color} strokeWidth={0.4} opacity={0.7} />
        <line x1={0} y1={-r * 3.2} x2={0} y2={r * 3.2} stroke={color} strokeWidth={0.4} opacity={0.7} />
      </g>
    )
  }
  return <>{stars}</>
}

/** Diagonal sun-rays emanating from a point. */
function LightRays({
  x, y, w, h, count = 5, color = 'rgba(255,245,216,0.16)', strokeWidth = 1,
}: {
  x: number; y: number; w: number; h: number; count?: number; color?: string; strokeWidth?: number
}) {
  const rays = []
  const step = 60 / Math.max(count - 1, 1)
  for (let i = 0; i < count; i++) {
    const angle = -30 + step * i // -30° to +30° from straight down
    const dx = Math.sin((angle * Math.PI) / 180)
    const dy = Math.cos((angle * Math.PI) / 180)
    const len = Math.max(w, h) * 1.2
    rays.push(
      <line
        key={i}
        x1={x} y1={y}
        x2={x + dx * len}
        y2={y + dy * len}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    )
  }
  return <>{rays}</>
}

function Vignette({ w, h, intensity = 0.85 }: { w: number; h: number; intensity?: number }) {
  const id = `vignette-${Math.round(intensity * 100)}`
  return (
    <>
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="68%">
          <stop offset="0%"  stopColor="rgba(0,0,0,0)" />
          <stop offset="70%" stopColor="rgba(8,8,5,0.25)" />
          <stop offset="100%" stopColor={`rgba(8,8,5,${intensity})`} />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#${id})`} pointerEvents="none" />
    </>
  )
}

/** Heraldic gold frame — corner brackets only, refined. */
function GoldFrame({ w, h }: { w: number; h: number }) {
  const m = 10
  const len = 18
  const stroke = 'rgba(197,160,89,0.55)'
  return (
    <g pointerEvents="none">
      {[
        [m, m, 1, 1],         // top-left
        [w - m, m, -1, 1],    // top-right
        [m, h - m, 1, -1],    // bottom-left
        [w - m, h - m, -1, -1], // bottom-right
      ].map(([x, y, sx, sy], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <line x1={0} y1={0} x2={(sx as number) * len} y2={0} stroke={stroke} strokeWidth={0.9} />
          <line x1={0} y1={0} x2={0} y2={(sy as number) * len} stroke={stroke} strokeWidth={0.9} />
          <circle r={1.4} fill={stroke} opacity={0.7} />
        </g>
      ))}
    </g>
  )
}

/* ════════════════════════════════════════════════════════════════════════ */
/* Scenes by type                                                          */
/* ════════════════════════════════════════════════════════════════════════ */

function renderScene(type: FallbackType, w: number, h: number) {
  switch (type) {
    case 'golden-order':    return <GoldenOrderScene w={w} h={h} />
    case 'omen':            return <OmenScene w={w} h={h} />
    case 'rot':             return <RotScene w={w} h={h} />
    case 'blood':           return <BloodScene w={w} h={h} />
    case 'moon':            return <MoonScene w={w} h={h} />
    case 'dragon':          return <DragonScene w={w} h={h} />
    case 'death':
    case 'ending-dusk':     return <DeathScene w={w} h={h} />
    case 'flame':           return <FlameScene w={w} h={h} />
    case 'frenzied-flame':
    case 'ending-frenzied': return <FrenziedScene w={w} h={h} />
    case 'cosmic':          return <CosmicScene w={w} h={h} />
    case 'serpent':         return <SerpentScene w={w} h={h} />
    case 'nox':             return <NoxScene w={w} h={h} />
    case 'haligtree':       return <HaligtreeScene w={w} h={h} />
    case 'war':             return <WarScene w={w} h={h} />
    case 'beast':           return <BeastScene w={w} h={h} />
    case 'character':       return <CharacterScene w={w} h={h} />
    case 'region':          return <RegionScene w={w} h={h} />
    case 'faction':         return <FactionScene w={w} h={h} />
    case 'concept':         return <ConceptScene w={w} h={h} />
    case 'ending-fracture': return <FractureScene w={w} h={h} />
    case 'ending-order':    return <OrderScene w={w} h={h} />
    case 'ending-despair':  return <DespairScene w={w} h={h} />
    case 'ending-stars':    return <StarsEndingScene w={w} h={h} />
  }
}

/* ──────── GOLDEN ORDER (section hero — towering Árbol Áureo) ──────── */
function GoldenOrderScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <radialGradient id="go-sky" cx="50%" cy="35%" r="85%">
          <stop offset="0%"  stopColor="#5a4218" />
          <stop offset="40%" stopColor="#2a1d0c" />
          <stop offset="100%" stopColor="#0a0805" />
        </radialGradient>
        <radialGradient id="go-aureole" cx="50%" cy="32%" r="50%">
          <stop offset="0%"  stopColor="rgba(255,245,216,0.55)" />
          <stop offset="55%" stopColor="rgba(232,213,163,0.18)" />
          <stop offset="100%" stopColor="rgba(232,213,163,0)" />
        </radialGradient>
        <linearGradient id="go-trunk" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%"  stopColor="#fff5d0" />
          <stop offset="35%" stopColor="#e8d5a3" />
          <stop offset="70%" stopColor="#a88040" />
          <stop offset="100%" stopColor="#3a2814" />
        </linearGradient>
        <radialGradient id="go-canopy" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(255,245,216,0.85)" />
          <stop offset="50%" stopColor="rgba(232,213,163,0.55)" />
          <stop offset="100%" stopColor="rgba(197,160,89,0)" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect width={w} height={h} fill="url(#go-sky)" />

      {/* Aureole */}
      <ellipse cx={cx} cy={h * 0.32} rx={w * 0.55} ry={h * 0.45} fill="url(#go-aureole)" />

      {/* Light rays from canopy */}
      <g opacity={0.45}>
        <LightRays x={cx} y={h * 0.18} w={w} h={h} count={9} strokeWidth={1.1} />
      </g>

      {/* Distant background mountains */}
      <path
        d={`M 0 ${h * 0.7} L ${w * 0.18} ${h * 0.55} L ${w * 0.32} ${h * 0.62}
            L ${w * 0.55} ${h * 0.5} L ${w * 0.72} ${h * 0.6} L ${w} ${h * 0.55}
            L ${w} ${h} L 0 ${h} Z`}
        fill="rgba(40,28,12,0.5)"
      />

      {/* Árbol Áureo */}
      <g transform={`translate(${cx} ${h})`}>
        {/* Trunk */}
        <path
          d={`M -10 0 L -14 -${h * 0.55} L 14 -${h * 0.55} L 10 0 Z`}
          fill="url(#go-trunk)"
        />
        {/* Trunk highlight */}
        <rect x={-1.2} y={-h * 0.55} width={2.4} height={h * 0.55}
              fill="rgba(255,245,216,0.4)" />
        {/* Branch hints — short stubs */}
        <line x1={0} y1={-h * 0.55} x2={-w * 0.08} y2={-h * 0.62}
              stroke="#c5a059" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
        <line x1={0} y1={-h * 0.55} x2={w * 0.08} y2={-h * 0.62}
              stroke="#c5a059" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
        <line x1={0} y1={-h * 0.5} x2={-w * 0.06} y2={-h * 0.58}
              stroke="#c5a059" strokeWidth={1.5} strokeLinecap="round" opacity={0.7} />
        <line x1={0} y1={-h * 0.5} x2={w * 0.06} y2={-h * 0.58}
              stroke="#c5a059" strokeWidth={1.5} strokeLinecap="round" opacity={0.7} />

        {/* Canopy — multi-layer cloud */}
        <ellipse cx={0} cy={-h * 0.62} rx={w * 0.21} ry={h * 0.22} fill="url(#go-canopy)" opacity={0.95} />
        <ellipse cx={-w * 0.09} cy={-h * 0.56} rx={w * 0.13} ry={h * 0.16} fill="url(#go-canopy)" opacity={0.7} />
        <ellipse cx={w * 0.09} cy={-h * 0.56} rx={w * 0.13} ry={h * 0.16} fill="url(#go-canopy)" opacity={0.7} />
        <ellipse cx={0} cy={-h * 0.7} rx={w * 0.14} ry={h * 0.1} fill="url(#go-canopy)" opacity={0.65} />
        <ellipse cx={-w * 0.16} cy={-h * 0.6} rx={w * 0.07} ry={h * 0.09} fill="url(#go-canopy)" opacity={0.45} />
        <ellipse cx={w * 0.16} cy={-h * 0.6} rx={w * 0.07} ry={h * 0.09} fill="url(#go-canopy)" opacity={0.45} />

        {/* Crown star */}
        <g transform={`translate(0 ${-h * 0.72})`}>
          <circle r={6} fill="#ffffff" opacity={0.9} />
          <circle r={14} fill="#fff5d8" opacity={0.25} />
        </g>

        {/* Roots fanning out */}
        {[-1, -0.7, -0.4, 0.4, 0.7, 1].map((m, i) => (
          <path key={i}
                d={`M 0 0 C ${m * w * 0.05} ${h * 0.02}
                          ${m * w * 0.15} ${h * 0.04}
                          ${m * w * 0.28} ${h * 0.05}`}
                stroke="#3a2814" strokeWidth={1.5 - i * 0.1}
                strokeLinecap="round" fill="none" opacity={0.65} />
        ))}
      </g>

      <Particles count={36} w={w} h={h} color="#fff5d8" size={1.2} opacity={0.6} seed={1} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── OMEN (chained silhouette behind prison bars) ──────── */
function OmenScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <radialGradient id="omen-bg" cx="50%" cy="55%" r="85%">
          <stop offset="0%"  stopColor="#3a2530" />
          <stop offset="50%" stopColor="#1a0e15" />
          <stop offset="100%" stopColor="#080406" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#omen-bg)" />

      {/* Distant glimmer behind the figure */}
      <ellipse cx={cx} cy={h * 0.55} rx={w * 0.25} ry={h * 0.35} fill="rgba(140,80,60,0.18)" />

      {/* Prison bars vertical */}
      {[0.12, 0.26, 0.74, 0.88].map((p, i) => (
        <g key={i}>
          <rect x={p * w - 2} y={0} width={4} height={h} fill="#0a0606" />
          <rect x={p * w - 2.4} y={0} width={0.6} height={h} fill="rgba(120,90,60,0.25)" />
        </g>
      ))}

      {/* Chained Omen silhouette */}
      <g transform={`translate(${cx} ${h * 0.55})`}>
        {/* Cuernos largos curvados */}
        <path d={`M -${w * 0.04} -${h * 0.05} Q -${w * 0.13} -${h * 0.18} -${w * 0.07} -${h * 0.27}`}
              stroke="#3a2820" strokeWidth={5.5} fill="none" strokeLinecap="round" />
        <path d={`M ${w * 0.04} -${h * 0.05} Q ${w * 0.13} -${h * 0.18} ${w * 0.07} -${h * 0.27}`}
              stroke="#3a2820" strokeWidth={5.5} fill="none" strokeLinecap="round" />

        {/* Cabeza */}
        <ellipse cx={0} cy={0} rx={w * 0.075} ry={h * 0.08} fill="#1a0d0d" />
        {/* Mandíbula y silueta interior */}
        <ellipse cx={0} cy={h * 0.025} rx={w * 0.05} ry={h * 0.025} fill="#0a0404" opacity={0.8} />

        {/* Hombros + torso */}
        <path d={`M -${w * 0.16} ${h * 0.1} L -${w * 0.2} ${h * 0.34}
                  L ${w * 0.2} ${h * 0.34} L ${w * 0.16} ${h * 0.1}
                  Q 0 ${h * 0.06} ${w * 0.16} ${h * 0.1} Z`}
              fill="#1a0d0d" />

        {/* Cadenas */}
        {[-1, 1].map((side) => (
          <g key={side}>
            <line x1={side * w * 0.16} y1={h * 0.16}
                  x2={side * w * 0.32} y2={h * 0.4}
                  stroke="rgba(170,130,80,0.6)" strokeWidth={1.6} strokeDasharray="4 3" />
            {[0, 1, 2, 3].map((j) => (
              <circle key={j}
                      cx={side * (w * 0.16 + (w * 0.04) * j)}
                      cy={h * 0.16 + (h * 0.06) * j}
                      r={1.6} fill="rgba(170,130,80,0.7)" />
            ))}
          </g>
        ))}

        {/* Ojo brillante apenas visible */}
        <circle cx={-w * 0.025} cy={-h * 0.005} r={1.5} fill="#dc4040" opacity={0.85} />
      </g>

      <Particles count={22} w={w} h={h} color="#6b5040" size={1} opacity={0.4} seed={2} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── ROT (8-petal scarlet bloom) ──────── */
function RotScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h * 0.52
  return (
    <g>
      <defs>
        <radialGradient id="rot-bg" cx="50%" cy="50%" r="85%">
          <stop offset="0%"  stopColor="#6a1a30" />
          <stop offset="50%" stopColor="#2a0810" />
          <stop offset="100%" stopColor="#080306" />
        </radialGradient>
        <radialGradient id="rot-petal" cx="40%" cy="30%" r="80%">
          <stop offset="0%"  stopColor="#ffaaaa" />
          <stop offset="35%" stopColor="#dc4060" />
          <stop offset="70%" stopColor="#8a2a1a" />
          <stop offset="100%" stopColor="#3a0810" />
        </radialGradient>
        <radialGradient id="rot-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#ffe0d0" />
          <stop offset="50%" stopColor="#dc4040" />
          <stop offset="100%" stopColor="#5a0810" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#rot-bg)" />

      {/* Pulse aureole */}
      <ellipse cx={cx} cy={cy} rx={w * 0.4} ry={h * 0.32} fill="rgba(220,80,80,0.18)" />

      {/* Pútrid mist below */}
      <ellipse cx={cx} cy={h * 0.92} rx={w * 0.65} ry={h * 0.12} fill="rgba(80,30,40,0.55)" />
      <ellipse cx={cx} cy={h * 0.85} rx={w * 0.5} ry={h * 0.08} fill="rgba(100,40,50,0.35)" />

      {/* 8-petal flower */}
      <g transform={`translate(${cx} ${cy})`}>
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45
          return (
            <ellipse
              key={`p1-${i}`}
              cx={0} cy={-h * 0.13}
              rx={w * 0.07} ry={h * 0.13}
              fill="url(#rot-petal)"
              opacity={0.92}
              transform={`rotate(${angle})`}
            />
          )
        })}
        {/* Inner ring of smaller petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45 + 22.5
          return (
            <ellipse
              key={`p2-${i}`}
              cx={0} cy={-h * 0.07}
              rx={w * 0.04} ry={h * 0.07}
              fill="url(#rot-petal)"
              opacity={0.75}
              transform={`rotate(${angle})`}
            />
          )
        })}

        {/* Core */}
        <circle r={w * 0.045} fill="url(#rot-core)" />
        <circle r={w * 0.02} fill="#ffe0d0" opacity={0.85} />

        {/* Stamens — small dots around core */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180
          return (
            <circle key={i}
                    cx={Math.cos(a) * w * 0.052}
                    cy={Math.sin(a) * w * 0.052}
                    r={1.2} fill="#ffaaaa" opacity={0.85} />
          )
        })}
      </g>

      {/* Drips */}
      {[0.18, 0.32, 0.46, 0.6, 0.74, 0.86].map((p, i) => (
        <path key={i}
              d={`M ${p * w} ${h * 0.7} Q ${p * w + (i % 2 ? 3 : -3)} ${h * 0.85} ${p * w} ${h}`}
              stroke="rgba(180,60,80,0.55)" strokeWidth={1.3} fill="none" />
      ))}

      <Particles count={42} w={w} h={h} color="#ff6080" size={1.3} opacity={0.55} seed={3} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── BLOOD (sigil sangriento sobre charco) ──────── */
function BloodScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h * 0.48
  return (
    <g>
      <defs>
        <radialGradient id="blood-bg" cx="50%" cy="40%" r="85%">
          <stop offset="0%"  stopColor="#5a0a18" />
          <stop offset="60%" stopColor="#1a0408" />
          <stop offset="100%" stopColor="#080205" />
        </radialGradient>
        <radialGradient id="blood-sigil" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#dc3030" />
          <stop offset="50%" stopColor="#8a1818" />
          <stop offset="100%" stopColor="#3a0408" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#blood-bg)" />

      {/* Pool of blood */}
      <ellipse cx={cx} cy={h * 0.88} rx={w * 0.45} ry={h * 0.08} fill="#5a0a18" />
      <ellipse cx={cx + w * 0.05} cy={h * 0.9} rx={w * 0.3} ry={h * 0.045}
               fill="#8a2030" opacity={0.85} />

      {/* Bleeding sigil — runic mark */}
      <g transform={`translate(${cx} ${cy})`}>
        {/* Outer ring */}
        <circle r={w * 0.16} fill="none" stroke="#5a1020" strokeWidth={2.5} opacity={0.85} />
        <circle r={w * 0.13} fill="none" stroke="#dc3030" strokeWidth={1.5} opacity={0.65}
                strokeDasharray="8 5" />
        {/* Bleeding core */}
        <circle r={w * 0.07} fill="url(#blood-sigil)" />
        <circle r={w * 0.025} fill="#ffaaaa" opacity={0.7} />
        {/* Three dagger lines */}
        {[0, 120, 240].map((angle) => {
          const a = (angle * Math.PI) / 180
          return (
            <line key={angle}
                  x1={Math.cos(a) * w * 0.04} y1={Math.sin(a) * w * 0.04}
                  x2={Math.cos(a) * w * 0.155} y2={Math.sin(a) * w * 0.155}
                  stroke="#dc3030" strokeWidth={1.6} opacity={0.9} />
          )
        })}
      </g>

      {/* Drips down to pool */}
      {[0.18, 0.3, 0.42, 0.58, 0.7, 0.82].map((p, i) => (
        <g key={i}>
          <path d={`M ${p * w} ${cy + h * 0.06} Q ${p * w + 1.5} ${h * 0.7} ${p * w} ${h * 0.85}`}
                stroke="#5a1020" strokeWidth={2} fill="none" opacity={0.85} />
          {/* Drop at the bottom */}
          <circle cx={p * w} cy={h * 0.85} r={1.6} fill="#8a2030" opacity={0.9} />
        </g>
      ))}

      <Particles count={28} w={w} h={h} color="#dc4040" size={1.3} opacity={0.5} seed={4} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── MOON (luna llena sobre torre y bosque) ──────── */
function MoonScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h * 0.36
  return (
    <g>
      <defs>
        <linearGradient id="moon-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#0a0a28" />
          <stop offset="50%" stopColor="#1a1a48" />
          <stop offset="100%" stopColor="#0a0818" />
        </linearGradient>
        <radialGradient id="moon-disc" cx="38%" cy="35%" r="65%">
          <stop offset="0%"  stopColor="#fff5e8" />
          <stop offset="55%" stopColor="#a8b8d8" />
          <stop offset="100%" stopColor="#5a6890" />
        </radialGradient>
        <radialGradient id="moon-aureole" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(180,200,230,0.55)" />
          <stop offset="60%" stopColor="rgba(150,170,210,0.18)" />
          <stop offset="100%" stopColor="rgba(150,170,210,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#moon-sky)" />

      {/* Stars */}
      <StarField w={w} h={h * 0.7} count={70} seed={5} color="#e8e0f0" flareCount={5} />

      {/* Moon aureole */}
      <circle cx={cx} cy={cy} r={w * 0.22} fill="url(#moon-aureole)" />

      {/* Moon disc */}
      <circle cx={cx} cy={cy} r={w * 0.11} fill="url(#moon-disc)" />
      {/* Craters */}
      <circle cx={cx - w * 0.02} cy={cy - h * 0.012} r={w * 0.014} fill="#7888a8" opacity={0.55} />
      <circle cx={cx + w * 0.026} cy={cy + h * 0.022} r={w * 0.02}  fill="#7888a8" opacity={0.5} />
      <circle cx={cx - w * 0.005} cy={cy + h * 0.026} r={w * 0.01}  fill="#7888a8" opacity={0.5} />
      <circle cx={cx + w * 0.014} cy={cy - h * 0.018} r={w * 0.007} fill="#7888a8" opacity={0.5} />

      {/* Distant forest silhouette */}
      <g fill="#0a0a18">
        <path d={`M 0 ${h * 0.86} L ${w * 0.04} ${h * 0.78} L ${w * 0.07} ${h * 0.86}`} />
        <path d={`M ${w * 0.06} ${h * 0.86} L ${w * 0.11} ${h * 0.74} L ${w * 0.14} ${h * 0.86}`} />
        <path d={`M ${w * 0.13} ${h * 0.86} L ${w * 0.18} ${h * 0.78} L ${w * 0.22} ${h * 0.86}`} />
        <path d={`M ${w * 0.78} ${h * 0.86} L ${w * 0.82} ${h * 0.78} L ${w * 0.86} ${h * 0.86}`} />
        <path d={`M ${w * 0.86} ${h * 0.86} L ${w * 0.91} ${h * 0.74} L ${w * 0.94} ${h * 0.86}`} />
      </g>

      {/* Torre lejana */}
      <g transform={`translate(${cx + w * 0.28} ${h * 0.86})`}>
        <rect x={-9} y={-h * 0.5} width={18} height={h * 0.5}
              fill="#0a0820" stroke="rgba(50,60,100,0.5)" strokeWidth={0.8} />
        <polygon points={`0 -${h * 0.6} -13 -${h * 0.5} 13 -${h * 0.5}`} fill="#0a0820" />
        <rect x={-3} y={-h * 0.34} width={6} height={11} fill="#5a6890" opacity={0.9} />
        <rect x={-3} y={-h * 0.18} width={6} height={11} fill="#5a6890" opacity={0.7} />
      </g>

      {/* Foreground ground */}
      <path d={`M 0 ${h * 0.86} L ${w} ${h * 0.86} L ${w} ${h} L 0 ${h} Z`} fill="#080614" />

      {/* Mist crawling at the base */}
      <ellipse cx={cx} cy={h * 0.88} rx={w * 0.55} ry={h * 0.05} fill="rgba(80,90,130,0.25)" />

      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── DRAGON (relámpago sobre bestia alada) ──────── */
function DragonScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h * 0.48
  return (
    <g>
      <defs>
        <linearGradient id="drag-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#3a2440" />
          <stop offset="60%" stopColor="#15102a" />
          <stop offset="100%" stopColor="#080612" />
        </linearGradient>
        <linearGradient id="drag-wing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#2a1c30" />
          <stop offset="100%" stopColor="#0a0810" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill="url(#drag-sky)" />

      {/* Storm clouds */}
      <ellipse cx={w * 0.22} cy={h * 0.28} rx={w * 0.22} ry={h * 0.08} fill="rgba(60,40,80,0.7)" />
      <ellipse cx={w * 0.7} cy={h * 0.22} rx={w * 0.2} ry={h * 0.07} fill="rgba(50,35,70,0.65)" />
      <ellipse cx={w * 0.5} cy={h * 0.55} rx={w * 0.35} ry={h * 0.1} fill="rgba(35,25,55,0.75)" />

      {/* Lightning */}
      <g>
        <path d={`M ${w * 0.7} ${h * 0.04} L ${w * 0.66} ${h * 0.22}
                  L ${w * 0.72} ${h * 0.27} L ${w * 0.6} ${h * 0.55}
                  L ${w * 0.68} ${h * 0.6} L ${w * 0.58} ${h * 0.78}`}
              stroke="rgba(220,220,255,0.25)" strokeWidth={5} fill="none" />
        <path d={`M ${w * 0.7} ${h * 0.04} L ${w * 0.66} ${h * 0.22}
                  L ${w * 0.72} ${h * 0.27} L ${w * 0.6} ${h * 0.55}
                  L ${w * 0.68} ${h * 0.6} L ${w * 0.58} ${h * 0.78}`}
              stroke="#fff8e0" strokeWidth={1.5} fill="none" opacity={0.95} />
      </g>

      {/* Dragon silhouette */}
      <g transform={`translate(${cx} ${cy})`}>
        {/* Wings — extended span */}
        <path d={`M -${w * 0.04} -${h * 0.02}
                  Q -${w * 0.18} -${h * 0.18} -${w * 0.22} -${h * 0.12}
                  Q -${w * 0.18} -${h * 0.06} -${w * 0.1} -${h * 0.04}
                  Q -${w * 0.13} 0 -${w * 0.16} ${h * 0.02}
                  Q -${w * 0.05} -${h * 0.02} 0 -${h * 0.03} Z`}
              fill="url(#drag-wing)" />
        <path d={`M ${w * 0.04} -${h * 0.02}
                  Q ${w * 0.18} -${h * 0.18} ${w * 0.22} -${h * 0.12}
                  Q ${w * 0.18} -${h * 0.06} ${w * 0.1} -${h * 0.04}
                  Q ${w * 0.13} 0 ${w * 0.16} ${h * 0.02}
                  Q ${w * 0.05} -${h * 0.02} 0 -${h * 0.03} Z`}
              fill="url(#drag-wing)" />

        {/* Body */}
        <ellipse rx={w * 0.13} ry={h * 0.038} fill="#15101a" />
        {/* Spinal ridge */}
        <line x1={-w * 0.13} y1={-h * 0.005} x2={w * 0.13} y2={-h * 0.005}
              stroke="#3a2840" strokeWidth={1} opacity={0.85} />

        {/* Neck + head curving forward */}
        <path d={`M -${w * 0.13} 0 Q -${w * 0.22} -${h * 0.04} -${w * 0.3} -${h * 0.08}`}
              stroke="#15101a" strokeWidth={9} fill="none" strokeLinecap="round" />
        <ellipse cx={-w * 0.31} cy={-h * 0.085} rx={w * 0.035} ry={h * 0.022} fill="#15101a" />
        {/* Eye glint */}
        <circle cx={-w * 0.32} cy={-h * 0.09} r={1.4} fill="#ffaa30" opacity={0.95} />
        {/* Horn */}
        <line x1={-w * 0.31} y1={-h * 0.1} x2={-w * 0.34} y2={-h * 0.13}
              stroke="#3a2840" strokeWidth={1.5} strokeLinecap="round" />

        {/* Tail */}
        <path d={`M ${w * 0.13} 0 Q ${w * 0.25} ${h * 0.04} ${w * 0.32} ${h * 0.025}
                  Q ${w * 0.36} ${h * 0.008} ${w * 0.38} 0`}
              stroke="#15101a" strokeWidth={6} fill="none" strokeLinecap="round" />
      </g>

      {/* Rain hint */}
      <g stroke="rgba(180,170,210,0.18)" strokeWidth={0.6}>
        {[0.05, 0.15, 0.4, 0.55, 0.85, 0.95].map((p, i) => (
          <line key={i} x1={p * w} y1={h * 0.55} x2={p * w - 5} y2={h * 0.85} />
        ))}
      </g>

      <Particles count={20} w={w} h={h} color="#a0a0c0" size={1} opacity={0.35} seed={6} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── DEATH / DUSK (árbol seco con espectros) ──────── */
function DeathScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <linearGradient id="death-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#1a1d35" />
          <stop offset="50%" stopColor="#2a3055" />
          <stop offset="100%" stopColor="#080614" />
        </linearGradient>
        <radialGradient id="death-glow" cx="50%" cy="60%" r="50%">
          <stop offset="0%"  stopColor="rgba(110,180,200,0.3)" />
          <stop offset="100%" stopColor="rgba(110,180,200,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#death-sky)" />

      {/* Distant moon */}
      <circle cx={w * 0.18} cy={h * 0.22} r={w * 0.04} fill="rgba(180,200,230,0.55)" />
      <circle cx={w * 0.18} cy={h * 0.22} r={w * 0.06} fill="rgba(180,200,230,0.18)" />

      {/* Ghost flame ground glow */}
      <ellipse cx={cx} cy={h * 0.85} rx={w * 0.5} ry={h * 0.18} fill="url(#death-glow)" />

      {/* Mist layers */}
      <ellipse cx={cx} cy={h * 0.72} rx={w * 0.6} ry={h * 0.13} fill="rgba(60,80,110,0.35)" />
      <ellipse cx={cx} cy={h * 0.85} rx={w * 0.75} ry={h * 0.1} fill="rgba(40,55,85,0.55)" />

      {/* Dead tree central */}
      <g transform={`translate(${cx} ${h * 0.95})`}>
        <path d={`M 0 0 L -3.5 -${h * 0.5} L 3.5 -${h * 0.5} L 0 0 Z`} fill="#0a0a14" />
        {/* Branches — gnarled */}
        <path d={`M 0 -${h * 0.5} Q -${w * 0.08} -${h * 0.55} -${w * 0.1} -${h * 0.62}`}
              stroke="#0a0a14" strokeWidth={2.5} fill="none" strokeLinecap="round" />
        <path d={`M 0 -${h * 0.5} Q ${w * 0.07} -${h * 0.55} ${w * 0.09} -${h * 0.6}`}
              stroke="#0a0a14" strokeWidth={2.2} fill="none" strokeLinecap="round" />
        <path d={`M 0 -${h * 0.45} Q -${w * 0.05} -${h * 0.5} -${w * 0.08} -${h * 0.55}`}
              stroke="#0a0a14" strokeWidth={1.8} fill="none" strokeLinecap="round" />
        <path d={`M 0 -${h * 0.4} Q ${w * 0.06} -${h * 0.45} ${w * 0.1} -${h * 0.5}`}
              stroke="#0a0a14" strokeWidth={1.6} fill="none" strokeLinecap="round" />
        {/* Twiglets */}
        <line x1={-w * 0.1} y1={-h * 0.62} x2={-w * 0.13} y2={-h * 0.66}
              stroke="#0a0a14" strokeWidth={1} />
        <line x1={w * 0.09} y1={-h * 0.6} x2={w * 0.13} y2={-h * 0.64}
              stroke="#0a0a14" strokeWidth={1} />
      </g>

      {/* Ghostflame motes — clustered */}
      {[
        [cx - w * 0.18, h * 0.78], [cx - w * 0.05, h * 0.82], [cx + w * 0.08, h * 0.79],
        [cx + w * 0.21, h * 0.83], [cx - w * 0.28, h * 0.86],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={4} fill="rgba(100,180,200,0.4)" />
          <circle cx={x} cy={y} r={1.6} fill="#a0d0e0" opacity={0.85} />
        </g>
      ))}

      {/* Tombstone */}
      <g transform={`translate(${cx + w * 0.22} ${h * 0.86})`}>
        <rect x={-13} y={-h * 0.18} width={26} height={h * 0.18} fill="#0a0a14" />
        <ellipse cx={0} cy={-h * 0.18} rx={13} ry={6} fill="#0a0a14" />
        <line x1={-7} y1={-h * 0.13} x2={7} y2={-h * 0.13}
              stroke="#3a4a60" strokeWidth={0.6} opacity={0.6} />
      </g>

      <Particles count={28} w={w} h={h} color="#a0c0d8" size={1.1} opacity={0.45} seed={7} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── FLAME (fuego elevándose) ──────── */
function FlameScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <linearGradient id="flame-sky" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%"  stopColor="#1a0805" />
          <stop offset="50%" stopColor="#3e1808" />
          <stop offset="100%" stopColor="#0a0204" />
        </linearGradient>
        <radialGradient id="flame-aureole" cx="50%" cy="78%" r="55%">
          <stop offset="0%"  stopColor="rgba(255,160,40,0.65)" />
          <stop offset="100%" stopColor="rgba(255,160,40,0)" />
        </radialGradient>
        <linearGradient id="flame-body" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%"  stopColor="#ffeaaa" />
          <stop offset="35%" stopColor="#ffaa20" />
          <stop offset="65%" stopColor="#dc6018" />
          <stop offset="100%" stopColor="rgba(220,96,24,0)" />
        </linearGradient>
        <linearGradient id="flame-inner" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%"  stopColor="#ffffff" />
          <stop offset="60%" stopColor="#ffeaaa" />
          <stop offset="100%" stopColor="rgba(255,234,170,0)" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill="url(#flame-sky)" />
      <ellipse cx={cx} cy={h * 0.85} rx={w * 0.55} ry={h * 0.32} fill="url(#flame-aureole)" />

      {/* Side flames first — behind central */}
      <g transform={`translate(${cx - w * 0.16} ${h * 0.92}) scale(${w / 800})`}>
        <path d="M 0 0 Q -22 -45 -10 -110 Q 0 -140 12 -110 Q 24 -45 0 0 Z"
              fill="url(#flame-body)" opacity={0.85} />
      </g>
      <g transform={`translate(${cx + w * 0.16} ${h * 0.92}) scale(${w / 800})`}>
        <path d="M 0 0 Q -20 -40 -8 -100 Q 0 -130 10 -100 Q 22 -40 0 0 Z"
              fill="url(#flame-body)" opacity={0.85} />
      </g>

      {/* Central flame — outer */}
      <g transform={`translate(${cx} ${h * 0.9}) scale(${w / 800})`}>
        <path d="M 0 0 Q -38 -50 -22 -130 Q -10 -210 0 -290 Q 10 -210 22 -130 Q 38 -50 0 0 Z"
              fill="url(#flame-body)" />
      </g>
      {/* Central flame — inner core */}
      <g transform={`translate(${cx} ${h * 0.9}) scale(${w / 800})`}>
        <path d="M 0 0 Q -22 -40 -12 -100 Q -4 -180 0 -240 Q 4 -180 12 -100 Q 22 -40 0 0 Z"
              fill="url(#flame-inner)" opacity={0.85} />
      </g>

      {/* Sparks rising */}
      <Particles count={55} w={w} h={h * 0.85} color="#ffd060" size={1.2} opacity={0.7} seed={8} />
      {/* Embers below */}
      <Particles count={20} w={w} h={h * 0.2} color="#ffaa20" size={1.6} opacity={0.85} seed={28} />

      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── FRENZIED FLAME (caos amarillo + tres dedos) ──────── */
function FrenziedScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h / 2
  return (
    <g>
      <defs>
        <radialGradient id="frenzy-bg" cx="50%" cy="50%" r="80%">
          <stop offset="0%"  stopColor="#7a4810" />
          <stop offset="55%" stopColor="#3a1a08" />
          <stop offset="100%" stopColor="#0a0604" />
        </radialGradient>
        <radialGradient id="frenzy-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#fff5d8" />
          <stop offset="50%" stopColor="#ffd060" />
          <stop offset="100%" stopColor="#ffaa20" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#frenzy-bg)" />

      {/* Chaotic concentric rings */}
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={cx} cy={cy} r={w * 0.13 + i * 28} fill="none"
                stroke="rgba(255,200,40,0.28)" strokeWidth={1.4}
                strokeDasharray={`${22 - i * 4} ${8 + i * 3}`} />
      ))}

      {/* Glow aureole */}
      <circle cx={cx} cy={cy} r={w * 0.16} fill="rgba(255,200,40,0.25)" />

      {/* Three fingers */}
      <g transform={`translate(${cx} ${cy})`}>
        {[-30, 0, 30].map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            {/* Base of finger */}
            <ellipse rx={5} ry={4} fill="#ffaa20" opacity={0.85} transform={`translate(0 -${h * 0.04})`} />
            {/* Finger curve */}
            <path d={`M 0 0 Q -3 -${h * 0.18} 0 -${h * 0.27}`}
                  stroke="#ffd060" strokeWidth={6.5} fill="none" strokeLinecap="round" />
            <path d={`M 0 0 Q -3 -${h * 0.18} 0 -${h * 0.27}`}
                  stroke="#fff5d8" strokeWidth={2.5} fill="none" strokeLinecap="round" opacity={0.7} />
            {/* Tip */}
            <circle cx={0} cy={-h * 0.27} r={5} fill="#fff5d8" />
          </g>
        ))}

        {/* Core orb */}
        <circle r={w * 0.05} fill="url(#frenzy-core)" />
        <circle r={w * 0.018} fill="#ffffff" />
      </g>

      {/* Chaotic outward rays */}
      <g stroke="rgba(255,200,40,0.4)" strokeWidth={1}>
        {Array.from({ length: 18 }).map((_, i) => {
          const a = (i * 20 * Math.PI) / 180
          return (
            <line key={i}
                  x1={cx + Math.cos(a) * w * 0.18}
                  y1={cy + Math.sin(a) * w * 0.18}
                  x2={cx + Math.cos(a) * w * (0.25 + (i % 3) * 0.08)}
                  y2={cy + Math.sin(a) * w * (0.25 + (i % 3) * 0.08)} />
          )
        })}
      </g>

      <Particles count={60} w={w} h={h} color="#ffd060" size={1.5} opacity={0.65} seed={9} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── COSMIC (galaxia + meteorito) ──────── */
function CosmicScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h / 2
  return (
    <g>
      <defs>
        <radialGradient id="cosmic-bg" cx="50%" cy="50%" r="85%">
          <stop offset="0%"  stopColor="#1d0d3a" />
          <stop offset="60%" stopColor="#0a061a" />
          <stop offset="100%" stopColor="#040208" />
        </radialGradient>
        <radialGradient id="cosmic-galaxy" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(220,180,255,0.7)" />
          <stop offset="50%" stopColor="rgba(150,100,210,0.35)" />
          <stop offset="100%" stopColor="rgba(120,80,180,0)" />
        </radialGradient>
        <radialGradient id="cosmic-galaxy-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#fff5d8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="rgba(220,180,255,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#cosmic-bg)" />

      {/* Galaxy disc — three layered ellipses for spiral arm illusion */}
      <g transform={`rotate(-22 ${cx} ${cy})`}>
        <ellipse cx={cx - w * 0.06} cy={cy - h * 0.06}
                 rx={w * 0.4} ry={h * 0.18} fill="url(#cosmic-galaxy)" />
        <ellipse cx={cx - w * 0.04} cy={cy - h * 0.04}
                 rx={w * 0.28} ry={h * 0.12} fill="url(#cosmic-galaxy)" opacity={0.7} />
        <ellipse cx={cx - w * 0.02} cy={cy - h * 0.02}
                 rx={w * 0.14} ry={h * 0.06} fill="url(#cosmic-galaxy-core)" />
      </g>

      {/* Stars */}
      <StarField w={w} h={h} count={90} seed={10} color="#e8d8ff" flareCount={5} />

      {/* Meteor */}
      <g transform={`translate(${w * 0.78} ${h * 0.18}) rotate(38)`}>
        <line x1={0} y1={0} x2={-90} y2={0} stroke="rgba(220,180,255,0.5)" strokeWidth={1.5} />
        <line x1={0} y1={0} x2={-55} y2={0} stroke="rgba(255,255,255,0.85)" strokeWidth={2.5} />
        <line x1={0} y1={0} x2={-25} y2={0} stroke="#ffffff" strokeWidth={4} />
        <circle r={5} fill="#ffffff" />
        <circle r={9} fill="#ffffff" opacity={0.25} />
      </g>

      {/* Constellation — Glintstone Crown shape */}
      <g stroke="rgba(180,150,220,0.4)" strokeWidth={0.6} fill="none">
        <line x1={w * 0.18} y1={h * 0.66} x2={w * 0.27} y2={h * 0.72} />
        <line x1={w * 0.27} y1={h * 0.72} x2={w * 0.36} y2={h * 0.65} />
        <line x1={w * 0.36} y1={h * 0.65} x2={w * 0.45} y2={h * 0.7} />
        <line x1={w * 0.45} y1={h * 0.7}  x2={w * 0.54} y2={h * 0.62} />
        <line x1={w * 0.54} y1={h * 0.62} x2={w * 0.63} y2={h * 0.68} />
      </g>
      {[
        [0.18, 0.66], [0.27, 0.72], [0.36, 0.65], [0.45, 0.7], [0.54, 0.62], [0.63, 0.68],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x * w} cy={y * h} r={2.4} fill="#e0c0ff" />
          <circle cx={x * w} cy={y * h} r={4} fill="#e0c0ff" opacity={0.25} />
        </g>
      ))}

      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── SERPENT (volcán con serpiente espectral) ──────── */
function SerpentScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <linearGradient id="serp-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#4a1208" />
          <stop offset="100%" stopColor="#0a0204" />
        </linearGradient>
        <linearGradient id="serp-magma" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#fff5d0" />
          <stop offset="30%" stopColor="#ff6020" />
          <stop offset="100%" stopColor="#5a1500" />
        </linearGradient>
        <radialGradient id="serp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(255,120,40,0.65)" />
          <stop offset="100%" stopColor="rgba(255,120,40,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#serp-sky)" />

      {/* Mountain glow */}
      <ellipse cx={cx} cy={h * 0.45} rx={w * 0.3} ry={h * 0.18} fill="url(#serp-glow)" />

      {/* Volcán silueta — varias capas para profundidad */}
      <path d={`M 0 ${h} L ${cx - w * 0.22} ${h * 0.55} L ${cx - w * 0.04} ${h * 0.4}
                L ${cx + w * 0.04} ${h * 0.4} L ${cx + w * 0.22} ${h * 0.55}
                L ${w} ${h} Z`}
            fill="#1a0a05" />
      <path d={`M ${cx - w * 0.18} ${h * 0.7} L ${cx - w * 0.02} ${h * 0.45}
                L ${cx + w * 0.02} ${h * 0.45} L ${cx + w * 0.18} ${h * 0.7} Z`}
            fill="#0e0604" opacity={0.85} />

      {/* Magma cráter */}
      <path d={`M ${cx - w * 0.05} ${h * 0.42} L ${cx + w * 0.05} ${h * 0.42}
                L ${cx + w * 0.07} ${h * 0.5} L ${cx - w * 0.07} ${h * 0.5} Z`}
            fill="url(#serp-magma)" />
      {/* Bubbles in magma */}
      <circle cx={cx - 4} cy={h * 0.46} r={2.5} fill="#ffd060" opacity={0.85} />
      <circle cx={cx + 6} cy={h * 0.45} r={2}   fill="#ffaa30" opacity={0.85} />
      <circle cx={cx} cy={h * 0.48} r={1.6} fill="#ffeac0" opacity={0.95} />

      {/* Magma drips down volcano slope */}
      {[
        { x: cx - w * 0.08, y0: h * 0.5, y1: h * 0.6 },
        { x: cx + w * 0.06, y0: h * 0.49, y1: h * 0.62 },
        { x: cx - w * 0.13, y0: h * 0.58, y1: h * 0.7 },
      ].map((d, i) => (
        <path key={i}
              d={`M ${d.x} ${d.y0} Q ${d.x + 2} ${(d.y0 + d.y1) / 2} ${d.x} ${d.y1}`}
              stroke="#ff6020" strokeWidth={2} fill="none" strokeLinecap="round" opacity={0.85} />
      ))}

      {/* Serpent coiling in the smoke above */}
      <g transform={`translate(${cx} ${h * 0.28})`}>
        {/* Main coiled body */}
        <path d={`M -${w * 0.22} 0
                  Q -${w * 0.12} -${h * 0.1} 0 -${h * 0.04}
                  Q ${w * 0.08} ${h * 0.02} ${w * 0.18} -${h * 0.06}
                  Q ${w * 0.26} -${h * 0.12} ${w * 0.32} -${h * 0.18}`}
              stroke="#5a2010" strokeWidth={9} fill="none" strokeLinecap="round" />
        <path d={`M -${w * 0.22} 0
                  Q -${w * 0.12} -${h * 0.1} 0 -${h * 0.04}
                  Q ${w * 0.08} ${h * 0.02} ${w * 0.18} -${h * 0.06}
                  Q ${w * 0.26} -${h * 0.12} ${w * 0.32} -${h * 0.18}`}
              stroke="#8a3018" strokeWidth={3} fill="none" strokeLinecap="round" opacity={0.7} />
        {/* Head */}
        <ellipse cx={w * 0.32} cy={-h * 0.18} rx={w * 0.03} ry={h * 0.02} fill="#5a2010" />
        <circle cx={w * 0.335} cy={-h * 0.19} r={1.6} fill="#ffaa30" />
        {/* Forked tongue */}
        <path d={`M ${w * 0.34} -${h * 0.18} L ${w * 0.36} -${h * 0.175}
                  L ${w * 0.34} -${h * 0.17} L ${w * 0.36} -${h * 0.165}`}
              stroke="#dc4040" strokeWidth={0.8} fill="none" />
      </g>

      <Particles count={32} w={w} h={h} color="#ff8030" size={1.3} opacity={0.55} seed={11} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── NOX (ciudad subterránea bajo cielo falso) ──────── */
function NoxScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <linearGradient id="nox-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#0a0825" />
          <stop offset="55%" stopColor="#181a3e" />
          <stop offset="100%" stopColor="#080a1a" />
        </linearGradient>
        <radialGradient id="nox-aureole" cx="50%" cy="40%" r="60%">
          <stop offset="0%"  stopColor="rgba(180,200,240,0.18)" />
          <stop offset="100%" stopColor="rgba(180,200,240,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#nox-sky)" />
      <ellipse cx={cx} cy={h * 0.4} rx={w * 0.5} ry={h * 0.25} fill="url(#nox-aureole)" />

      {/* Stars (false sky) */}
      <StarField w={w} h={h * 0.55} count={90} seed={12} color="#c0c8e8" flareCount={6} />

      {/* Constellations */}
      <g stroke="rgba(180,200,240,0.4)" strokeWidth={0.6} fill="none">
        <line x1={w * 0.3} y1={h * 0.15} x2={w * 0.36} y2={h * 0.25} />
        <line x1={w * 0.36} y1={h * 0.25} x2={w * 0.46} y2={h * 0.18} />
        <line x1={w * 0.46} y1={h * 0.18} x2={w * 0.55} y2={h * 0.25} />
        <line x1={w * 0.6} y1={h * 0.32} x2={w * 0.7} y2={h * 0.24} />
      </g>

      {/* Ciudad subterránea — torres, cúpulas, agujas */}
      <g fill="#1a1633">
        {/* Torre alta central */}
        <rect x={cx - w * 0.04} y={h * 0.48} width={w * 0.08} height={h * 0.52} />
        <polygon points={`${cx} ${h * 0.42} ${cx - w * 0.05} ${h * 0.5} ${cx + w * 0.05} ${h * 0.5}`} />
        {/* Cúpulas a los lados */}
        <ellipse cx={w * 0.22} cy={h * 0.6} rx={w * 0.07} ry={h * 0.05} />
        <rect x={w * 0.22 - w * 0.025} y={h * 0.6} width={w * 0.05} height={h * 0.4} />
        <ellipse cx={w * 0.78} cy={h * 0.6} rx={w * 0.07} ry={h * 0.05} />
        <rect x={w * 0.78 - w * 0.025} y={h * 0.6} width={w * 0.05} height={h * 0.4} />
        {/* Torres delgadas adicionales */}
        <rect x={w * 0.13} y={h * 0.65} width={w * 0.04} height={h * 0.35} />
        <rect x={w * 0.83} y={h * 0.65} width={w * 0.04} height={h * 0.35} />
        <rect x={w * 0.32} y={h * 0.7} width={w * 0.04} height={h * 0.3} />
        <rect x={w * 0.64} y={h * 0.7} width={w * 0.04} height={h * 0.3} />
        {/* Agujas */}
        <polygon points={`${w * 0.15} ${h * 0.6} ${w * 0.13} ${h * 0.65} ${w * 0.17} ${h * 0.65}`} />
        <polygon points={`${w * 0.85} ${h * 0.6} ${w * 0.83} ${h * 0.65} ${w * 0.87} ${h * 0.65}`} />
      </g>

      {/* Ventanas iluminadas */}
      {[
        [0.14, 0.7], [0.14, 0.78], [0.14, 0.86],
        [0.22, 0.65], [0.22, 0.75], [0.22, 0.85],
        [0.78, 0.65], [0.78, 0.75], [0.78, 0.85],
        [0.86, 0.7], [0.86, 0.78], [0.86, 0.86],
        [0.5, 0.55], [0.5, 0.65], [0.5, 0.75], [0.5, 0.85],
        [0.33, 0.78], [0.33, 0.88],
        [0.65, 0.78], [0.65, 0.88],
      ].map(([px, py], i) => (
        <g key={i}>
          <rect x={px * w - 1.4} y={py * h - 2} width={2.8} height={4} fill="#a8b8d8" opacity={0.85} />
          <rect x={px * w - 1.4} y={py * h - 2} width={2.8} height={4} fill="#fff5d8" opacity={0.4} />
        </g>
      ))}

      {/* Niebla baja */}
      <ellipse cx={cx} cy={h} rx={w * 0.7} ry={h * 0.08} fill="rgba(40,50,90,0.55)" />

      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── HALIGTREE (árbol pálido entre niebla) ──────── */
function HaligtreeScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <linearGradient id="hali-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#1f2818" />
          <stop offset="55%" stopColor="#0c1408" />
          <stop offset="100%" stopColor="#040804" />
        </linearGradient>
        <radialGradient id="hali-aureole" cx="50%" cy="40%" r="55%">
          <stop offset="0%"  stopColor="rgba(220,240,180,0.45)" />
          <stop offset="100%" stopColor="rgba(220,240,180,0)" />
        </radialGradient>
        <linearGradient id="hali-tree" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%"  stopColor="#e8f0c0" />
          <stop offset="50%" stopColor="#a0c060" />
          <stop offset="100%" stopColor="#1a2010" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill="url(#hali-sky)" />
      <ellipse cx={cx} cy={h * 0.4} rx={w * 0.45} ry={h * 0.35} fill="url(#hali-aureole)" />

      {/* Distant fortress silhouette */}
      <g fill="#0a1408" opacity={0.7}>
        <rect x={w * 0.05} y={h * 0.7} width={w * 0.05} height={h * 0.3} />
        <polygon points={`${w * 0.075} ${h * 0.65} ${w * 0.05} ${h * 0.7} ${w * 0.1} ${h * 0.7}`} />
        <rect x={w * 0.9} y={h * 0.7} width={w * 0.05} height={h * 0.3} />
        <polygon points={`${w * 0.925} ${h * 0.65} ${w * 0.9} ${h * 0.7} ${w * 0.95} ${h * 0.7}`} />
      </g>

      {/* Pale tree */}
      <g transform={`translate(${cx} ${h})`}>
        {/* Trunk */}
        <path d={`M -7 0 L -10 -${h * 0.5} L 10 -${h * 0.5} L 7 0 Z`} fill="url(#hali-tree)" />
        {/* Trunk highlight */}
        <rect x={-1} y={-h * 0.5} width={2} height={h * 0.5} fill="rgba(232,240,192,0.6)" />
        {/* Canopy — pale layered */}
        <ellipse cx={0} cy={-h * 0.6} rx={w * 0.18} ry={h * 0.22} fill="url(#hali-tree)" opacity={0.9} />
        <ellipse cx={-w * 0.07} cy={-h * 0.55} rx={w * 0.1} ry={h * 0.14} fill="url(#hali-tree)" opacity={0.7} />
        <ellipse cx={w * 0.07} cy={-h * 0.55} rx={w * 0.1} ry={h * 0.14} fill="url(#hali-tree)" opacity={0.7} />
        <ellipse cx={0} cy={-h * 0.7} rx={w * 0.12} ry={h * 0.1} fill="url(#hali-tree)" opacity={0.65} />
        {/* Crown light */}
        <circle cx={0} cy={-h * 0.72} r={6} fill="#fff5d0" opacity={0.85} />
      </g>

      {/* Falling leaves */}
      <Particles count={42} w={w} h={h} color="#c0d090" size={1.2} opacity={0.7} seed={13} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── WAR (guerrero con estandarte) ──────── */
function WarScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <linearGradient id="war-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#5a3818" />
          <stop offset="50%" stopColor="#3a200c" />
          <stop offset="100%" stopColor="#0a0604" />
        </linearGradient>
        <radialGradient id="war-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(255,180,80,0.5)" />
          <stop offset="100%" stopColor="rgba(255,180,80,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#war-sky)" />

      {/* Setting sun behind */}
      <ellipse cx={cx} cy={h * 0.5} rx={w * 0.3} ry={h * 0.22} fill="url(#war-sun)" />
      <circle cx={cx} cy={h * 0.5} r={w * 0.05} fill="rgba(255,200,100,0.7)" />

      {/* Distant smoking ruins */}
      <path d={`M 0 ${h * 0.7} L ${w * 0.15} ${h * 0.55} L ${w * 0.2} ${h * 0.65}
                L ${w * 0.32} ${h * 0.5} L ${w * 0.4} ${h * 0.6}
                L ${w * 0.55} ${h * 0.48} L ${w * 0.68} ${h * 0.58}
                L ${w * 0.78} ${h * 0.45} L ${w * 0.88} ${h * 0.55}
                L ${w} ${h * 0.5} L ${w} ${h} L 0 ${h} Z`}
            fill="#1a1208" />

      {/* Smoke columns */}
      {[0.2, 0.55, 0.85].map((p, i) => (
        <g key={i} opacity={0.6}>
          <ellipse cx={p * w} cy={h * 0.4} rx={12} ry={28} fill="rgba(60,45,30,0.65)" />
          <ellipse cx={p * w + (i - 1) * 4} cy={h * 0.32} rx={10} ry={22} fill="rgba(50,38,25,0.55)" />
        </g>
      ))}

      {/* Foreground warrior */}
      <g transform={`translate(${cx} ${h * 0.88})`}>
        {/* Capa */}
        <path d={`M -14 -${h * 0.28} L -28 -${h * 0.04} L -22 ${h * 0.02}
                  L 0 -${h * 0.12} L 22 ${h * 0.02} L 28 -${h * 0.04}
                  L 14 -${h * 0.28} Z`}
              fill="#3a2010" opacity={0.9} />
        {/* Cuerpo */}
        <rect x={-14} y={-h * 0.32} width={28} height={h * 0.32} fill="#0a0604" />
        {/* Hombros / armadura */}
        <ellipse cx={-12} cy={-h * 0.3} rx={6} ry={4} fill="#2a1808" />
        <ellipse cx={12} cy={-h * 0.3} rx={6} ry={4} fill="#2a1808" />
        {/* Cabeza con yelmo */}
        <ellipse cx={0} cy={-h * 0.36} rx={11} ry={13} fill="#0a0604" />
        <rect x={-7} y={-h * 0.37} width={14} height={3} fill="#3a2818" />
        {/* Visor */}
        <rect x={-5} y={-h * 0.36} width={10} height={1.5} fill="#1a1208" />

        {/* Espada erecta detrás del hombro */}
        <line x1={16} y1={-h * 0.18} x2={32} y2={-h * 0.5}
              stroke="#3a2818" strokeWidth={3} strokeLinecap="round" />
        <line x1={16} y1={-h * 0.18} x2={32} y2={-h * 0.5}
              stroke="#c5a059" strokeWidth={1} strokeLinecap="round" opacity={0.85} />
        <circle cx={16} cy={-h * 0.18} r={2} fill="#c5a059" />

        {/* Estandarte */}
        <line x1={-18} y1={-h * 0.32} x2={-18} y2={-h * 0.62} stroke="#5a3a18" strokeWidth={2.5} />
        <path d={`M -18 -${h * 0.62} L -2 -${h * 0.55} L -2 -${h * 0.42} L -18 -${h * 0.5} Z`}
              fill="#8a3020" opacity={0.9} />
        {/* Símbolo en estandarte */}
        <circle cx={-10} cy={-h * 0.49} r={2.5} fill="#c5a059" opacity={0.85} />
      </g>

      <Particles count={28} w={w} h={h} color="#a89060" size={1.1} opacity={0.5} seed={14} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── BEAST (cuadrúpedo en bosque oscuro) ──────── */
function BeastScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <linearGradient id="beast-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#1d1a10" />
          <stop offset="100%" stopColor="#0a0a06" />
        </linearGradient>
        <radialGradient id="beast-glow" cx="50%" cy="80%" r="40%">
          <stop offset="0%"  stopColor="rgba(180,200,80,0.18)" />
          <stop offset="100%" stopColor="rgba(180,200,80,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#beast-sky)" />
      <ellipse cx={cx} cy={h * 0.85} rx={w * 0.5} ry={h * 0.18} fill="url(#beast-glow)" />

      {/* Forest behind */}
      <g fill="#070704">
        {[0.05, 0.18, 0.32, 0.68, 0.82, 0.95].map((p, i) => (
          <path key={i}
                d={`M ${p * w - 30} ${h * 0.68}
                    L ${p * w} ${h * 0.32 + (i % 2) * h * 0.05}
                    L ${p * w + 30} ${h * 0.68} Z`} />
        ))}
      </g>
      {/* Tree trunks */}
      {[0.05, 0.18, 0.32, 0.68, 0.82, 0.95].map((p, i) => (
        <rect key={i}
              x={p * w - 2} y={h * 0.5}
              width={4} height={h * 0.2}
              fill="#070704" />
      ))}

      {/* Quadruped beast */}
      <g transform={`translate(${cx} ${h * 0.85})`}>
        {/* Body */}
        <ellipse cx={0} cy={-h * 0.07} rx={w * 0.13} ry={h * 0.05} fill="#1a1812" />
        {/* Head */}
        <ellipse cx={-w * 0.13} cy={-h * 0.09} rx={w * 0.045} ry={h * 0.04} fill="#1a1812" />
        {/* Open jaw */}
        <path d={`M -${w * 0.16} -${h * 0.085}
                  L -${w * 0.18} -${h * 0.08}
                  L -${w * 0.17} -${h * 0.075}
                  L -${w * 0.155} -${h * 0.08} Z`}
              fill="#3a1008" opacity={0.9} />
        {/* Horns */}
        <path d={`M -${w * 0.14} -${h * 0.11} Q -${w * 0.18} -${h * 0.18} -${w * 0.13} -${h * 0.21}`}
              stroke="#3a2818" strokeWidth={2.5} fill="none" strokeLinecap="round" />
        <path d={`M -${w * 0.12} -${h * 0.11} Q -${w * 0.08} -${h * 0.18} -${w * 0.11} -${h * 0.2}`}
              stroke="#3a2818" strokeWidth={2.2} fill="none" strokeLinecap="round" />
        {/* Mane / fur on neck */}
        <path d={`M -${w * 0.1} -${h * 0.1} Q -${w * 0.11} -${h * 0.13} -${w * 0.07} -${h * 0.12}
                  Q -${w * 0.05} -${h * 0.13} -${w * 0.04} -${h * 0.09}`}
              fill="#1a1812" />
        {/* Legs (4) */}
        {[-w * 0.085, -w * 0.045, w * 0.045, w * 0.085].map((x, i) => (
          <g key={i}>
            <rect x={x - 2.2} y={-h * 0.04} width={4.4} height={h * 0.06} fill="#1a1812" />
            <rect x={x - 2.5} y={h * 0.018} width={5} height={3} fill="#0a0a08" />
          </g>
        ))}
        {/* Tail */}
        <path d={`M ${w * 0.12} -${h * 0.08} Q ${w * 0.18} -${h * 0.13} ${w * 0.2} -${h * 0.1}`}
              stroke="#1a1812" strokeWidth={3} fill="none" strokeLinecap="round" />
        {/* Eye glow */}
        <circle cx={-w * 0.144} cy={-h * 0.094} r={1.4} fill="#ff8830" />
        <circle cx={-w * 0.144} cy={-h * 0.094} r={2.4} fill="#ff8830" opacity={0.3} />
      </g>

      <Particles count={32} w={w} h={h} color="#a8c860" size={1} opacity={0.45} seed={15} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── CHARACTER (retrato encapuchado bajo arco) ──────── */
function CharacterScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <radialGradient id="char-bg" cx="50%" cy="38%" r="80%">
          <stop offset="0%"  stopColor="#4a3018" />
          <stop offset="55%" stopColor="#1a120c" />
          <stop offset="100%" stopColor="#0a0604" />
        </radialGradient>
        <radialGradient id="char-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(232,213,163,0.45)" />
          <stop offset="60%" stopColor="rgba(197,160,89,0.15)" />
          <stop offset="100%" stopColor="rgba(197,160,89,0)" />
        </radialGradient>
        <linearGradient id="char-cloak" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%"  stopColor="#1a1208" />
          <stop offset="100%" stopColor="#0a0604" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill="url(#char-bg)" />

      {/* Halo */}
      <ellipse cx={cx} cy={h * 0.38} rx={w * 0.2} ry={h * 0.25} fill="url(#char-halo)" />

      {/* Pointed gothic arch behind subject */}
      <g fill="none" stroke="rgba(197,160,89,0.45)" strokeWidth={1}>
        <path d={`M ${cx - w * 0.18} ${h}
                  L ${cx - w * 0.18} ${h * 0.45}
                  Q ${cx - w * 0.18} ${h * 0.18} ${cx} ${h * 0.18}
                  Q ${cx + w * 0.18} ${h * 0.18} ${cx + w * 0.18} ${h * 0.45}
                  L ${cx + w * 0.18} ${h}`} />
        {/* Inner arch */}
        <path d={`M ${cx - w * 0.13} ${h}
                  L ${cx - w * 0.13} ${h * 0.5}
                  Q ${cx - w * 0.13} ${h * 0.27} ${cx} ${h * 0.27}
                  Q ${cx + w * 0.13} ${h * 0.27} ${cx + w * 0.13} ${h * 0.5}
                  L ${cx + w * 0.13} ${h}`} opacity={0.6} />
      </g>

      {/* Hooded silhouette */}
      <g transform={`translate(${cx} ${h})`}>
        {/* Cloak shoulders */}
        <path d={`M -${w * 0.2} 0
                  L -${w * 0.24} -${h * 0.35}
                  Q -${w * 0.18} -${h * 0.45} 0 -${h * 0.5}
                  Q ${w * 0.18} -${h * 0.45} ${w * 0.24} -${h * 0.35}
                  L ${w * 0.2} 0 Z`}
              fill="url(#char-cloak)" />
        {/* Hood */}
        <path d={`M -${w * 0.13} -${h * 0.55}
                  Q -${w * 0.13} -${h * 0.78} 0 -${h * 0.78}
                  Q ${w * 0.13} -${h * 0.78} ${w * 0.13} -${h * 0.55}
                  L ${w * 0.1} -${h * 0.5}
                  Q ${w * 0.06} -${h * 0.65} 0 -${h * 0.66}
                  Q -${w * 0.06} -${h * 0.65} -${w * 0.1} -${h * 0.5} Z`}
              fill="#080404" />
        {/* Face (just barely visible) */}
        <ellipse cx={0} cy={-h * 0.62} rx={w * 0.06} ry={h * 0.07} fill="#1a1208" />
        {/* Eye glints */}
        <circle cx={-w * 0.018} cy={-h * 0.625} r={1.4} fill="#c5a059" opacity={0.85} />
        <circle cx={w * 0.018} cy={-h * 0.625} r={1.4} fill="#c5a059" opacity={0.85} />

        {/* Necklace pendant */}
        <path d={`M -${w * 0.04} -${h * 0.46} L 0 -${h * 0.42} L ${w * 0.04} -${h * 0.46}`}
              stroke="#c5a059" strokeWidth={1.5} fill="none" />
        <circle cx={0} cy={-h * 0.42} r={3} fill="#c5a059" opacity={0.95} />
        <circle cx={0} cy={-h * 0.42} r={1.2} fill="#fff5d8" />
      </g>

      <Particles count={26} w={w} h={h} color="#c5a059" size={0.9} opacity={0.45} seed={16} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── REGION (paisaje multi-capa con sol) ──────── */
function RegionScene({ w, h }: { w: number; h: number }) {
  return (
    <g>
      <defs>
        <linearGradient id="reg-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#6a4a25" />
          <stop offset="35%" stopColor="#3a2818" />
          <stop offset="70%" stopColor="#1a1208" />
          <stop offset="100%" stopColor="#0a0604" />
        </linearGradient>
        <radialGradient id="reg-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(255,225,160,0.85)" />
          <stop offset="50%" stopColor="rgba(232,213,163,0.35)" />
          <stop offset="100%" stopColor="rgba(232,213,163,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#reg-sky)" />

      {/* Sun */}
      <ellipse cx={w * 0.7} cy={h * 0.28} rx={w * 0.1} ry={w * 0.1} fill="url(#reg-sun)" />
      <circle cx={w * 0.7} cy={h * 0.28} r={w * 0.04} fill="#fff5d8" />
      <circle cx={w * 0.7} cy={h * 0.28} r={w * 0.022} fill="#ffffff" />

      {/* Distant clouds */}
      <ellipse cx={w * 0.25} cy={h * 0.32} rx={w * 0.18} ry={h * 0.04}
               fill="rgba(140,110,70,0.45)" />
      <ellipse cx={w * 0.85} cy={h * 0.4} rx={w * 0.15} ry={h * 0.03}
               fill="rgba(140,110,70,0.4)" />

      {/* 4 mountain layers — atmospheric perspective */}
      <path d={`M 0 ${h * 0.55} L ${w * 0.18} ${h * 0.4}
                L ${w * 0.32} ${h * 0.48} L ${w * 0.5} ${h * 0.36}
                L ${w * 0.7} ${h * 0.42} L ${w * 0.85} ${h * 0.32}
                L ${w} ${h * 0.4} L ${w} ${h} L 0 ${h} Z`}
            fill="rgba(60,40,20,0.4)" />
      <path d={`M 0 ${h * 0.65} L ${w * 0.2} ${h * 0.5}
                L ${w * 0.4} ${h * 0.55} L ${w * 0.6} ${h * 0.45}
                L ${w * 0.8} ${h * 0.52} L ${w} ${h * 0.5}
                L ${w} ${h} L 0 ${h} Z`}
            fill="rgba(40,28,14,0.6)" />
      <path d={`M 0 ${h * 0.78} L ${w * 0.22} ${h * 0.65}
                L ${w * 0.4} ${h * 0.7} L ${w * 0.7} ${h * 0.6}
                L ${w * 0.92} ${h * 0.65} L ${w} ${h * 0.62}
                L ${w} ${h} L 0 ${h} Z`}
            fill="rgba(20,14,8,0.78)" />
      <path d={`M 0 ${h * 0.92} L ${w * 0.3} ${h * 0.82}
                L ${w * 0.6} ${h * 0.86} L ${w * 0.85} ${h * 0.8}
                L ${w} ${h * 0.84} L ${w} ${h} L 0 ${h} Z`}
            fill="#0a0a04" />

      {/* Birds — small Vs */}
      {[
        [0.42, 0.22, 1.2], [0.45, 0.2, 1.0], [0.48, 0.23, 1.1],
        [0.16, 0.3, 1.0], [0.19, 0.32, 0.9],
      ].map(([x, y, s], i) => (
        <path key={i}
              d={`M ${x * w} ${y * h}
                  L ${x * w + 4 * (s as number)} ${y * h - 2 * (s as number)}
                  L ${x * w + 8 * (s as number)} ${y * h}`}
              stroke="#0a0604" strokeWidth={1} fill="none" opacity={0.85} />
      ))}

      {/* Atmospheric haze across mountain crests */}
      <ellipse cx={w * 0.5} cy={h * 0.66} rx={w * 0.5} ry={h * 0.04} fill="rgba(120,90,55,0.35)" />

      <Particles count={28} w={w} h={h * 0.6} color="#c5a059" size={1} opacity={0.4} seed={17} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── FACTION (heráldica refinada) ──────── */
function FactionScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h * 0.52
  return (
    <g>
      <defs>
        <radialGradient id="fac-bg" cx="50%" cy="45%" r="85%">
          <stop offset="0%"  stopColor="#4a2814" />
          <stop offset="60%" stopColor="#1a0c06" />
          <stop offset="100%" stopColor="#080404" />
        </radialGradient>
        <linearGradient id="fac-shield" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#5a3a18" />
          <stop offset="55%" stopColor="#3a2412" />
          <stop offset="100%" stopColor="#1a0e08" />
        </linearGradient>
        <linearGradient id="fac-band" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#fff5d8" />
          <stop offset="100%" stopColor="#c5a059" />
        </linearGradient>
        <radialGradient id="fac-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(232,213,163,0.4)" />
          <stop offset="100%" stopColor="rgba(232,213,163,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#fac-bg)" />

      {/* Background glow */}
      <ellipse cx={cx} cy={cy} rx={w * 0.3} ry={h * 0.32} fill="url(#fac-glow)" />

      {/* Decorative crown ribbon at top */}
      <g transform={`translate(${cx} ${cy - h * 0.32})`}>
        <path d={`M -${w * 0.18} 0 L 0 -8 L ${w * 0.18} 0 L ${w * 0.16} 8 L 0 4 L -${w * 0.16} 8 Z`}
              fill="#c5a059" opacity={0.85} />
        <path d={`M -${w * 0.18} 0 L 0 -8 L ${w * 0.18} 0 L ${w * 0.16} 8 L 0 4 L -${w * 0.16} 8 Z`}
              fill="none" stroke="#fff5d8" strokeWidth={0.6} />
        <circle r={2.5} cy={-2} fill="#fff5d8" />
      </g>

      {/* Gothic shield */}
      <g transform={`translate(${cx} ${cy})`}>
        <path d={`M -${w * 0.16} -${h * 0.24}
                  L ${w * 0.16} -${h * 0.24}
                  L ${w * 0.16} ${h * 0.04}
                  Q ${w * 0.16} ${h * 0.22} ${w * 0.05} ${h * 0.3}
                  Q 0 ${h * 0.32} -${w * 0.05} ${h * 0.3}
                  Q -${w * 0.16} ${h * 0.22} -${w * 0.16} ${h * 0.04} Z`}
              fill="url(#fac-shield)" stroke="#c5a059" strokeWidth={2.5} />

        {/* Inner shield border */}
        <path d={`M -${w * 0.13} -${h * 0.2}
                  L ${w * 0.13} -${h * 0.2}
                  L ${w * 0.13} ${h * 0.03}
                  Q ${w * 0.13} ${h * 0.2} ${w * 0.04} ${h * 0.27}
                  Q 0 ${h * 0.29} -${w * 0.04} ${h * 0.27}
                  Q -${w * 0.13} ${h * 0.2} -${w * 0.13} ${h * 0.03} Z`}
              fill="none" stroke="#c5a059" strokeWidth={0.8} opacity={0.55} />

        {/* Diagonal band charge */}
        <path d={`M -${w * 0.16} -${h * 0.1}
                  L ${w * 0.16} -${h * 0.22}
                  L ${w * 0.16} -${h * 0.04}
                  L -${w * 0.16} ${h * 0.08} Z`}
              fill="url(#fac-band)" opacity={0.78} />

        {/* Heraldic charge: 8-pointed star */}
        <g transform={`translate(0 ${h * 0.05})`}>
          <polygon
            points="0,-22 6,-6 22,0 6,6 0,22 -6,6 -22,0 -6,-6"
            fill="#fff5d8"
            opacity={0.95}
          />
          <polygon
            points="0,-12 4,-4 12,0 4,4 0,12 -4,4 -12,0 -4,-4"
            fill="#fff8e0"
          />
          <circle r={2.4} fill="#c5a059" />
        </g>

        {/* Bottom flourish */}
        <path d={`M -${w * 0.05} ${h * 0.27}
                  Q 0 ${h * 0.32} ${w * 0.05} ${h * 0.27}`}
              stroke="#c5a059" strokeWidth={1.2} fill="none" opacity={0.7} />
      </g>

      <Particles count={24} w={w} h={h} color="#c5a059" size={1} opacity={0.4} seed={18} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── CONCEPT (orbe rúnico con anillo de glifos) ──────── */
function ConceptScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h / 2
  return (
    <g>
      <defs>
        <radialGradient id="con-bg" cx="50%" cy="50%" r="85%">
          <stop offset="0%"  stopColor="#1f1a3a" />
          <stop offset="55%" stopColor="#0a0818" />
          <stop offset="100%" stopColor="#040208" />
        </radialGradient>
        <radialGradient id="con-orb" cx="38%" cy="35%" r="65%">
          <stop offset="0%"  stopColor="#fff5d8" />
          <stop offset="40%" stopColor="#e8d5a3" />
          <stop offset="80%" stopColor="#a87830" />
          <stop offset="100%" stopColor="#3a2010" />
        </radialGradient>
        <radialGradient id="con-aureole" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(232,213,163,0.45)" />
          <stop offset="100%" stopColor="rgba(232,213,163,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#con-bg)" />

      {/* Aureole */}
      <circle cx={cx} cy={cy} r={w * 0.22} fill="url(#con-aureole)" />

      {/* Outer rune ring with glyphs */}
      <g transform={`translate(${cx} ${cy})`}>
        <circle r={w * 0.16} fill="none" stroke="#c5a059" strokeWidth={1.2} opacity={0.55} />
        <circle r={w * 0.155} fill="none" stroke="#e8d5a3" strokeWidth={0.6} opacity={0.4}
                strokeDasharray="2 6" />
        <circle r={w * 0.135} fill="none" stroke="#c5a059" strokeWidth={0.8} opacity={0.65}
                strokeDasharray="8 4" />

        {/* 12 glyphs around the ring */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30
          const a = (angle * Math.PI) / 180
          const r = w * 0.16
          const x = Math.cos(a) * r
          const y = Math.sin(a) * r
          return (
            <g key={i} transform={`translate(${x} ${y}) rotate(${angle + 90})`}>
              {/* Glyph: a small cross with outer dot */}
              <line x1={-3} y1={0} x2={3} y2={0} stroke="#e8d5a3" strokeWidth={1} />
              <line x1={0} y1={-3} x2={0} y2={3} stroke="#e8d5a3" strokeWidth={1} />
              <circle r={1.2} fill="#fff5d8" />
            </g>
          )
        })}

        {/* Central orb */}
        <circle r={w * 0.075} fill="url(#con-orb)" />
        {/* Highlight */}
        <ellipse cx={-w * 0.022} cy={-w * 0.022} rx={w * 0.025} ry={w * 0.018}
                 fill="rgba(255,255,220,0.45)" transform="rotate(-25)" />
        {/* Inner core */}
        <circle r={w * 0.025} fill="#ffffff" opacity={0.4} />

        {/* Light strands radiating from center */}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = ((i * 45 + 22.5) * Math.PI) / 180
          const r1 = w * 0.075
          const r2 = w * 0.13
          return (
            <line key={i}
                  x1={Math.cos(a) * r1} y1={Math.sin(a) * r1}
                  x2={Math.cos(a) * r2} y2={Math.sin(a) * r2}
                  stroke="rgba(255,245,216,0.5)" strokeWidth={1} />
          )
        })}
      </g>

      <Particles count={48} w={w} h={h} color="#e8d5a3" size={1.1} opacity={0.55} seed={19} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── ENDING-FRACTURE (anillo agrietado) ──────── */
function FractureScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h / 2
  return (
    <g>
      <defs>
        <radialGradient id="frac-bg" cx="50%" cy="50%" r="85%">
          <stop offset="0%"  stopColor="#5a3818" />
          <stop offset="65%" stopColor="#1a0c06" />
          <stop offset="100%" stopColor="#080404" />
        </radialGradient>
        <radialGradient id="frac-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(255,220,150,0.65)" />
          <stop offset="100%" stopColor="rgba(255,220,150,0)" />
        </radialGradient>
        <linearGradient id="frac-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#fff5d8" />
          <stop offset="50%" stopColor="#c5a059" />
          <stop offset="100%" stopColor="#7a5520" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill="url(#frac-bg)" />
      <ellipse cx={cx} cy={cy} rx={w * 0.35} ry={h * 0.35} fill="url(#frac-glow)" />

      {/* Cracked ring */}
      <g transform={`translate(${cx} ${cy})`}>
        <circle r={w * 0.18} fill="none" stroke="url(#frac-ring)" strokeWidth={6} opacity={0.95} />
        <circle r={w * 0.16} fill="none" stroke="#fff5d8" strokeWidth={1.5} opacity={0.5} />

        {/* Cracks radiating */}
        {[
          'M -180,0 L -150,-12 L -120,8 L -90,-5 L -60,10 L -30,-4 L 0,5 L 30,-8 L 60,4 L 90,-10 L 120,6 L 150,-12 L 180,0',
          'M -90,-150 L -75,-120 L -88,-90 L -72,-60 L -85,-30 L -68,0 L -82,30 L -65,60 L -78,90 L -62,120 L -75,150',
        ].map((d, i) => (
          <g key={i} transform={`scale(${w / 800})`}>
            <path d={d} stroke="#0a0604" strokeWidth={i === 0 ? 6 : 4} fill="none" opacity={0.95} />
            <path d={d} stroke="rgba(220,80,80,0.55)" strokeWidth={i === 0 ? 2 : 1.5} fill="none" />
          </g>
        ))}

        {/* Sparks at crack ends */}
        {[
          [-w * 0.18, 0], [w * 0.18, 0],
          [0, -w * 0.18], [0, w * 0.18],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={4} fill="#fff5d8" opacity={0.85} />
            <circle cx={x} cy={y} r={9} fill="#fff5d8" opacity={0.25} />
          </g>
        ))}
      </g>

      {/* Falling fragments */}
      {[
        [cx - w * 0.32, cy + h * 0.12, 30],
        [cx + w * 0.28, cy + h * 0.18, -45],
        [cx - w * 0.18, cy + h * 0.24, 15],
        [cx + w * 0.15, cy - h * 0.22, 70],
      ].map(([x, y, rot], i) => (
        <path key={i}
              d="M 0 0 L 8 -2 L 6 4 Z"
              transform={`translate(${x} ${y}) rotate(${rot})`}
              fill="#c5a059" opacity={0.75} />
      ))}

      <Particles count={42} w={w} h={h} color="#fff5d8" size={1.2} opacity={0.65} seed={20} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── ENDING-ORDER (mandala perfecto) ──────── */
function OrderScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h / 2
  return (
    <g>
      <defs>
        <radialGradient id="ord-bg" cx="50%" cy="50%" r="85%">
          <stop offset="0%"  stopColor="#5a3a14" />
          <stop offset="60%" stopColor="#1a0c06" />
          <stop offset="100%" stopColor="#080404" />
        </radialGradient>
        <radialGradient id="ord-aureole" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(255,220,150,0.5)" />
          <stop offset="100%" stopColor="rgba(255,220,150,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#ord-bg)" />
      <ellipse cx={cx} cy={cy} rx={w * 0.32} ry={h * 0.32} fill="url(#ord-aureole)" />

      {/* Light rays from center */}
      <g stroke="rgba(255,245,216,0.18)" strokeWidth={1}>
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 15 * Math.PI) / 180
          return (
            <line key={i}
                  x1={cx} y1={cy}
                  x2={cx + Math.cos(a) * w * 0.45}
                  y2={cy + Math.sin(a) * w * 0.45} />
          )
        })}
      </g>

      {/* Mandala rings */}
      <g transform={`translate(${cx} ${cy})`} stroke="#c5a059" fill="none">
        <circle r={w * 0.22} strokeWidth={1.3} opacity={0.55} strokeDasharray="3 5" />
        <circle r={w * 0.18} strokeWidth={1.4} opacity={0.85} />
        <circle r={w * 0.14} strokeWidth={1.0} opacity={0.7} />
        <circle r={w * 0.1}  strokeWidth={1.2} opacity={0.85} />
        <circle r={w * 0.06} strokeWidth={0.9} opacity={0.65} />

        {/* Star on each cardinal */}
        {[0, 90, 180, 270].map((angle, i) => {
          const a = (angle * Math.PI) / 180
          return (
            <g key={i} transform={`translate(${Math.sin(a) * w * 0.14} ${-Math.cos(a) * w * 0.14}) rotate(${angle})`}>
              <polygon points="0,-6 1.5,-1.5 6,0 1.5,1.5 0,6 -1.5,1.5 -6,0 -1.5,-1.5"
                       fill="#fff5d8" stroke="none" opacity={0.95} />
            </g>
          )
        })}

        {/* Inter-cardinal small dots */}
        {[45, 135, 225, 315].map((angle, i) => {
          const a = (angle * Math.PI) / 180
          return (
            <circle key={i}
                    cx={Math.sin(a) * w * 0.18}
                    cy={-Math.cos(a) * w * 0.18}
                    r={2} fill="#e8d5a3" stroke="none" opacity={0.9} />
          )
        })}

        {/* Radial lines from inner to outer */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
          const a = (angle * Math.PI) / 180
          return (
            <line key={i}
                  x1={Math.sin(a) * w * 0.06}
                  y1={-Math.cos(a) * w * 0.06}
                  x2={Math.sin(a) * w * 0.18}
                  y2={-Math.cos(a) * w * 0.18}
                  strokeWidth={i % 3 === 0 ? 1 : 0.5}
                  opacity={i % 3 === 0 ? 0.85 : 0.5} />
          )
        })}

        {/* Central core */}
        <circle r={w * 0.025} fill="#fff5d8" stroke="none" />
        <circle r={w * 0.012} fill="#ffffff" stroke="none" />
      </g>

      <Particles count={28} w={w} h={h} color="#fff5d8" size={0.9} opacity={0.5} seed={21} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── ENDING-DESPAIR (marca maldita) ──────── */
function DespairScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2, cy = h / 2
  return (
    <g>
      <defs>
        <radialGradient id="desp-bg" cx="50%" cy="50%" r="85%">
          <stop offset="0%"  stopColor="#5a0e10" />
          <stop offset="60%" stopColor="#1a0408" />
          <stop offset="100%" stopColor="#080202" />
        </radialGradient>
        <radialGradient id="desp-eye" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#dc2020" />
          <stop offset="50%" stopColor="#8a1010" />
          <stop offset="100%" stopColor="#1a0408" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#desp-bg)" />

      {/* Wounded eye motif */}
      <g transform={`translate(${cx} ${cy})`}>
        {/* Outer wound */}
        <ellipse rx={w * 0.18} ry={h * 0.08} fill="none" stroke="#5a1010" strokeWidth={4} />
        <ellipse rx={w * 0.16} ry={h * 0.07} fill="none" stroke="#8a2020" strokeWidth={1.5} opacity={0.85} />
        {/* Eye socket */}
        <ellipse rx={w * 0.13} ry={h * 0.055} fill="#1a0408" />
        {/* Bloody iris */}
        <circle r={w * 0.04} fill="url(#desp-eye)" />
        {/* Pupil */}
        <circle r={w * 0.018} fill="#080202" />
        <circle r={w * 0.008} fill="#dc4040" opacity={0.8} />

        {/* Tear-drop bleeding */}
        <path d={`M 0 ${h * 0.05} Q -2 ${h * 0.18} 0 ${h * 0.3}
                  Q 2 ${h * 0.2} 0 ${h * 0.05}`}
              fill="#5a1010" opacity={0.9} />
        <circle cx={0} cy={h * 0.3} r={3} fill="#8a2020" />

        {/* Lash strokes above */}
        {[-w * 0.15, -w * 0.08, 0, w * 0.08, w * 0.15].map((x, i) => (
          <line key={i}
                x1={x} y1={-h * 0.06}
                x2={x + (i - 2) * 2} y2={-h * 0.1}
                stroke="#5a1010" strokeWidth={1.5} strokeLinecap="round" opacity={0.8} />
        ))}
      </g>

      {/* Cursed marks around — like spells */}
      {[
        [-w * 0.32, -h * 0.22], [w * 0.28, -h * 0.18],
        [-w * 0.28, h * 0.24],  [w * 0.32, h * 0.22],
        [-w * 0.18, -h * 0.34], [w * 0.18, h * 0.34],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${cx + x} ${cy + y}) rotate(${i * 38})`}>
          {/* Curse rune: octagram */}
          <polygon points="0,-9 3,-3 9,0 3,3 0,9 -3,3 -9,0 -3,-3"
                   fill="none" stroke="#8a2020" strokeWidth={1.2} opacity={0.7} />
          <circle r={1.2} fill="#dc2020" opacity={0.85} />
        </g>
      ))}

      {/* Bleeding cracks across the bg */}
      <g stroke="rgba(140,40,40,0.45)" strokeWidth={1} fill="none">
        <path d={`M 0 ${h * 0.5} L ${w * 0.18} ${h * 0.45} L ${w * 0.3} ${h * 0.55}`} />
        <path d={`M ${w} ${h * 0.55} L ${w * 0.82} ${h * 0.5} L ${w * 0.7} ${h * 0.6}`} />
      </g>

      <Particles count={36} w={w} h={h} color="#8a2020" size={1.2} opacity={0.5} seed={22} />
      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}

/* ──────── ENDING-STARS (luna creciente sobre constelaciones) ──────── */
function StarsEndingScene({ w, h }: { w: number; h: number }) {
  const cx = w / 2
  return (
    <g>
      <defs>
        <linearGradient id="stars-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#0a0825" />
          <stop offset="50%" stopColor="#1a154a" />
          <stop offset="100%" stopColor="#080418" />
        </linearGradient>
        <radialGradient id="stars-moon" cx="35%" cy="35%" r="60%">
          <stop offset="0%"  stopColor="#e8d8ff" />
          <stop offset="60%" stopColor="#a098d0" />
          <stop offset="100%" stopColor="#3a3060" />
        </radialGradient>
        <radialGradient id="stars-nebula" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(160,140,210,0.35)" />
          <stop offset="60%" stopColor="rgba(120,90,180,0.18)" />
          <stop offset="100%" stopColor="rgba(120,90,180,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="url(#stars-sky)" />

      {/* Vast nebula clouds */}
      <ellipse cx={cx} cy={h * 0.4} rx={w * 0.5} ry={h * 0.28} fill="url(#stars-nebula)" />
      <ellipse cx={w * 0.32} cy={h * 0.32} rx={w * 0.22} ry={h * 0.13} fill="url(#stars-nebula)" />
      <ellipse cx={w * 0.72} cy={h * 0.5} rx={w * 0.18} ry={h * 0.1} fill="url(#stars-nebula)" />

      {/* Star field */}
      <StarField w={w} h={h * 0.78} count={120} seed={23} color="#e0d8f0" flareCount={8} />

      {/* Crescent moon */}
      <g transform={`translate(${cx + w * 0.2} ${h * 0.27})`}>
        {/* Outer aureole */}
        <circle r={w * 0.1} fill="rgba(200,180,240,0.18)" />
        {/* Moon disc */}
        <circle r={w * 0.07} fill="url(#stars-moon)" />
        {/* Crescent shadow */}
        <circle cx={w * 0.022} cy={-w * 0.014} r={w * 0.058} fill="#080418" />
        {/* Sliver highlight */}
        <path d={`M -${w * 0.06} 0 A ${w * 0.07} ${w * 0.07} 0 0 0 -${w * 0.045} -${w * 0.04}`}
              stroke="#fff5d8" strokeWidth={0.8} fill="none" opacity={0.5} />
      </g>

      {/* Constellation: Ranni's pattern (simplified) */}
      <g stroke="rgba(180,160,220,0.5)" strokeWidth={0.6} fill="none">
        <line x1={w * 0.15} y1={h * 0.5} x2={w * 0.22} y2={h * 0.55} />
        <line x1={w * 0.22} y1={h * 0.55} x2={w * 0.3} y2={h * 0.48} />
        <line x1={w * 0.3} y1={h * 0.48} x2={w * 0.32} y2={h * 0.4} />
        <line x1={w * 0.3} y1={h * 0.48} x2={w * 0.4} y2={h * 0.52} />
        <line x1={w * 0.4} y1={h * 0.52} x2={w * 0.46} y2={h * 0.58} />
      </g>
      {[
        [0.15, 0.5], [0.22, 0.55], [0.3, 0.48], [0.32, 0.4], [0.4, 0.52], [0.46, 0.58],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x * w} cy={y * h} r={2.6} fill="#fff" />
          <circle cx={x * w} cy={y * h} r={4.5} fill="#fff" opacity={0.25} />
        </g>
      ))}

      {/* Distant horizon */}
      <path d={`M 0 ${h * 0.86} L ${w * 0.42} ${h * 0.79} L ${w * 0.7} ${h * 0.83}
                L ${w} ${h * 0.81} L ${w} ${h} L 0 ${h} Z`}
            fill="#0a0820" />
      <ellipse cx={cx} cy={h * 0.86} rx={w * 0.5} ry={h * 0.04} fill="rgba(100,80,160,0.25)" />

      <Vignette w={w} h={h} />
      <GoldFrame w={w} h={h} />
    </g>
  )
}
