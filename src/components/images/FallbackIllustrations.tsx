/** SVG fallback illustrations for when local art images are missing.
 *  Each type produces a distinct, atmospheric dark-fantasy sigil.
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
      {renderFallback(type, dims.w, dims.h)}
    </svg>
  )
}

function renderFallback(type: FallbackType, w: number, h: number) {
  const cx = w / 2, cy = h / 2

  switch (type) {
    case 'golden-order':
      return <GoldenOrderSigil cx={cx} cy={cy} w={w} h={h} />
    case 'omen':
      return <OmenSigil cx={cx} cy={cy} w={w} h={h} />
    case 'rot':
      return <RotFlowerSigil cx={cx} cy={cy} w={w} h={h} />
    case 'blood':
      return <BloodSigil cx={cx} cy={cy} w={w} h={h} />
    case 'moon':
      return <MoonSigil cx={cx} cy={cy} w={w} h={h} />
    case 'dragon':
      return <DragonSigil cx={cx} cy={cy} w={w} h={h} />
    case 'death':
    case 'ending-dusk':
      return <DeathRootSigil cx={cx} cy={cy} w={w} h={h} />
    case 'flame':
      return <FlameSigil cx={cx} cy={cy} w={w} h={h} color="#c5651a" color2="#8c3a10" />
    case 'frenzied-flame':
    case 'ending-frenzied':
      return <FlameSigil cx={cx} cy={cy} w={w} h={h} color="#d4aa3a" color2="#a87820" />
    case 'cosmic':
    case 'ending-stars':
      return <CosmicSigil cx={cx} cy={cy} w={w} h={h} />
    case 'serpent':
      return <SerpentSigil cx={cx} cy={cy} w={w} h={h} />
    case 'nox':
      return <NoxSigil cx={cx} cy={cy} w={w} h={h} />
    case 'haligtree':
      return <HaligtreeSigil cx={cx} cy={cy} w={w} h={h} />
    case 'ending-fracture':
      return <FracturedRingSigil cx={cx} cy={cy} w={w} h={h} />
    case 'ending-order':
      return <PerfectOrderSigil cx={cx} cy={cy} w={w} h={h} />
    case 'ending-despair':
      return <DespairSigil cx={cx} cy={cy} w={w} h={h} />
    default:
      return <GenericCodexSigil cx={cx} cy={cy} w={w} h={h} />
  }
}

// ─── Shared helpers ──────────────────────────────────────────────────────────

interface SigilProps { cx: number; cy: number; w: number; h: number }

function Bg({ color1, color2, w, h, id }: { color1: string; color2: string; w: number; h: number; id: string }) {
  return (
    <>
      <defs>
        <radialGradient id={id} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor={color1} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color2} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="#0a0a08" />
      <rect width={w} height={h} fill={`url(#${id})`} />
    </>
  )
}

// ─── Individual sigils ────────────────────────────────────────────────────────

function GoldenOrderSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.28
  return (
    <>
      <Bg color1="#c5a059" color2="#3d2a10" w={w} h={h} id="go-bg" />
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r} stroke="#c5a059" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx={cx} cy={cy} r={r * 0.8} stroke="#8a7040" strokeWidth="0.8" fill="none" opacity="0.3" />
      {/* Sun-like rays */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = cx + Math.cos(angle) * (r * 0.85)
        const y1 = cy + Math.sin(angle) * (r * 0.85)
        const x2 = cx + Math.cos(angle) * (r * 1.15)
        const y2 = cy + Math.sin(angle) * (r * 1.15)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c5a059" strokeWidth="1" opacity="0.5" />
      })}
      {/* Inner star */}
      <polygon
        points={Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 45 * Math.PI) / 180
          const rr = i % 2 === 0 ? r * 0.35 : r * 0.15
          return `${cx + Math.cos(a) * rr},${cy + Math.sin(a) * rr}`
        }).join(' ')}
        fill="#c5a059"
        opacity="0.5"
      />
      <circle cx={cx} cy={cy} r={r * 0.08} fill="#e8d5a3" opacity="0.9" />
      {/* Erdtree roots hint */}
      {[30, 150, 270].map((deg, i) => {
        const a = (deg * Math.PI) / 180
        return (
          <line key={i}
            x1={cx + Math.cos(a) * (r * 0.5)}
            y1={cy + Math.sin(a) * (r * 0.5)}
            x2={cx + Math.cos(a) * (r * 1.3)}
            y2={cy + Math.sin(a) * (r * 1.3) + h * 0.15}
            stroke="#8a7040" strokeWidth="0.6" opacity="0.25"
          />
        )
      })}
    </>
  )
}

function OmenSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.25
  return (
    <>
      <Bg color1="#8a2e2e" color2="#1c1410" w={w} h={h} id="om-bg" />
      {/* Cracked circle */}
      <circle cx={cx} cy={cy} r={r} stroke="#8a2e2e" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="8 3" />
      {/* Horns */}
      <path d={`M ${cx - r * 0.4} ${cy - r * 0.6} Q ${cx - r * 0.8} ${cy - r * 1.6} ${cx - r * 0.5} ${cy - r * 1.9}`}
        stroke="#8a2e2e" strokeWidth="2" fill="none" opacity="0.7" />
      <path d={`M ${cx + r * 0.4} ${cy - r * 0.6} Q ${cx + r * 0.8} ${cy - r * 1.6} ${cx + r * 0.5} ${cy - r * 1.9}`}
        stroke="#8a2e2e" strokeWidth="2" fill="none" opacity="0.7" />
      {/* Eye */}
      <ellipse cx={cx} cy={cy} rx={r * 0.25} ry={r * 0.12} fill="none" stroke="#c5a059" strokeWidth="1" opacity="0.6" />
      <ellipse cx={cx} cy={cy} rx={r * 0.09} ry={r * 0.09} fill="#c5a059" opacity="0.5" />
      {/* Chains */}
      {[-r * 0.8, r * 0.8].map((dx, i) => (
        <path key={i}
          d={`M ${cx + dx} ${cy + r * 0.3} L ${cx + dx} ${cy + r * 1.2}`}
          stroke="#8a7040" strokeWidth="1" strokeDasharray="4 2" opacity="0.3"
        />
      ))}
    </>
  )
}

function RotFlowerSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.22
  const petals = 8
  return (
    <>
      <Bg color1="#6b2d4a" color2="#0f1a15" w={w} h={h} id="rot-bg" />
      {/* Petals */}
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i * (360 / petals) * Math.PI) / 180
        const px = cx + Math.cos(angle) * r
        const py = cy + Math.sin(angle) * r
        return (
          <ellipse key={i}
            cx={(cx + px) / 2} cy={(cy + py) / 2}
            rx={r * 0.38} ry={r * 0.15}
            fill="#6b2d4a" opacity="0.5"
            transform={`rotate(${(i * 360) / petals}, ${(cx + px) / 2}, ${(cy + py) / 2})`}
          />
        )
      })}
      {/* Outer petals (smaller, offset) */}
      {Array.from({ length: petals }).map((_, i) => {
        const angle = ((i * (360 / petals) + 22.5) * Math.PI) / 180
        const px = cx + Math.cos(angle) * r * 1.3
        const py = cy + Math.sin(angle) * r * 1.3
        return (
          <ellipse key={`o${i}`}
            cx={(cx + px) / 2} cy={(cy + py) / 2}
            rx={r * 0.3} ry={r * 0.1}
            fill="#8a2e4a" opacity="0.35"
            transform={`rotate(${(i * 360) / petals + 22.5}, ${(cx + px) / 2}, ${(cy + py) / 2})`}
          />
        )
      })}
      {/* Stamens */}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i * 60 * Math.PI) / 180
        return (
          <line key={i}
            x1={cx} y1={cy}
            x2={cx + Math.cos(a) * r * 0.45}
            y2={cy + Math.sin(a) * r * 0.45}
            stroke="#e8b0c0" strokeWidth="0.8" opacity="0.5"
          />
        )
      })}
      <circle cx={cx} cy={cy} r={r * 0.12} fill="#e8b0c0" opacity="0.6" />
      {/* Spores */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180
        const dist = r * (1.5 + Math.random() * 0.8)
        return (
          <circle key={`s${i}`}
            cx={cx + Math.cos(a) * dist}
            cy={cy + Math.sin(a) * dist}
            r="1.5" fill="#6b2d4a" opacity="0.4"
          />
        )
      })}
    </>
  )
}

function BloodSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.24
  return (
    <>
      <Bg color1="#6b1a1a" color2="#1a0808" w={w} h={h} id="bl-bg" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#8a2e2e" strokeWidth="1.5" opacity="0.5" />
      {/* Blood drop */}
      <path d={`M ${cx} ${cy - r * 0.6} Q ${cx + r * 0.4} ${cy + r * 0.2} ${cx} ${cy + r * 0.7} Q ${cx - r * 0.4} ${cy + r * 0.2} ${cx} ${cy - r * 0.6}`}
        fill="#8a2e2e" opacity="0.6" />
      <path d={`M ${cx} ${cy - r * 0.35} Q ${cx + r * 0.22} ${cy + r * 0.15} ${cx} ${cy + r * 0.45} Q ${cx - r * 0.22} ${cy + r * 0.15} ${cx} ${cy - r * 0.35}`}
        fill="#c5505a" opacity="0.4" />
      {/* Three fingers hint */}
      {[-r * 0.35, 0, r * 0.35].map((dx, i) => (
        <line key={i}
          x1={cx + dx} y1={cy + r * 0.7}
          x2={cx + dx} y2={cy + r * 1.3}
          stroke="#8a2e2e" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"
        />
      ))}
      {/* Outer rune ring */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180
        return (
          <rect key={i}
            x={cx + Math.cos(a) * r * 1.15 - 2}
            y={cy + Math.sin(a) * r * 1.15 - 2}
            width="4" height="4"
            fill="#8a2e2e" opacity="0.4"
            transform={`rotate(${i * 45}, ${cx + Math.cos(a) * r * 1.15}, ${cy + Math.sin(a) * r * 1.15})`}
          />
        )
      })}
    </>
  )
}

function MoonSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.26
  return (
    <>
      <Bg color1="#1a2a4a" color2="#050a15" w={w} h={h} id="mn-bg" />
      {/* Stars */}
      {Array.from({ length: 30 }).map((_, i) => {
        const x = (i * 37 + 17) % w
        const y = (i * 53 + 23) % h
        const s = 0.5 + (i % 3) * 0.5
        return <circle key={i} cx={x} cy={y} r={s} fill="#e8d5a3" opacity={0.3 + (i % 4) * 0.15} />
      })}
      {/* Moon crescent */}
      <circle cx={cx} cy={cy} r={r} fill="#1a3060" opacity="0.7" />
      <circle cx={cx + r * 0.35} cy={cy - r * 0.1} r={r * 0.82} fill="#0a0a08" opacity="0.9" />
      {/* Moon glow */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#8aa0d0" strokeWidth="1" opacity="0.4" />
      <circle cx={cx} cy={cy} r={r * 1.1} fill="none" stroke="#4a6090" strokeWidth="0.5" opacity="0.2" />
      {/* Rune marks on moon */}
      <line x1={cx - r * 0.15} y1={cy - r * 0.3} x2={cx - r * 0.15} y2={cy + r * 0.3} stroke="#8aa0d0" strokeWidth="0.8" opacity="0.4" />
      <line x1={cx - r * 0.3} y1={cy} x2={cx - r * 0.05} y2={cy} stroke="#8aa0d0" strokeWidth="0.8" opacity="0.4" />
    </>
  )
}

function DragonSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.28
  return (
    <>
      <Bg color1="#3a4a2a" color2="#0a1208" w={w} h={h} id="dr-bg" />
      {/* Dragon silhouette - simplified */}
      <ellipse cx={cx} cy={cy + r * 0.1} rx={r * 1.0} ry={r * 0.3} fill="#2a3a20" opacity="0.5" />
      {/* Wings */}
      <path d={`M ${cx} ${cy} Q ${cx - r * 1.2} ${cy - r * 0.8} ${cx - r * 1.6} ${cy + r * 0.3} Q ${cx - r * 0.9} ${cy - r * 0.1} ${cx - r * 0.3} ${cy + r * 0.1}`}
        fill="#3a5a2a" opacity="0.45" />
      <path d={`M ${cx} ${cy} Q ${cx + r * 1.2} ${cy - r * 0.8} ${cx + r * 1.6} ${cy + r * 0.3} Q ${cx + r * 0.9} ${cy - r * 0.1} ${cx + r * 0.3} ${cy + r * 0.1}`}
        fill="#3a5a2a" opacity="0.45" />
      {/* Head */}
      <ellipse cx={cx - r * 0.1} cy={cy - r * 0.35} rx={r * 0.22} ry={r * 0.15} fill="#4a6a3a" opacity="0.5" />
      {/* Two heads */}
      <ellipse cx={cx + r * 0.1} cy={cy - r * 0.5} rx={r * 0.18} ry={r * 0.12} fill="#4a6a3a" opacity="0.45" />
      {/* Lightning */}
      <path d={`M ${cx + r * 0.2} ${cy - r * 0.4} L ${cx + r * 0.4} ${cy - r * 0.1} L ${cx + r * 0.25} ${cy + r * 0.1}`}
        stroke="#c5a059" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Circle frame */}
      <circle cx={cx} cy={cy} r={r * 1.1} stroke="#8a7040" strokeWidth="1" fill="none" opacity="0.25" />
    </>
  )
}

function DeathRootSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.28
  return (
    <>
      <Bg color1="#1a2a1a" color2="#050a08" w={w} h={h} id="dth-bg" />
      {/* Deathroot branches */}
      {[
        `M ${cx} ${cy + r * 0.3} Q ${cx - r * 0.5} ${cy - r * 0.2} ${cx - r * 0.8} ${cy - r * 0.8}`,
        `M ${cx} ${cy + r * 0.3} Q ${cx + r * 0.5} ${cy - r * 0.2} ${cx + r * 0.8} ${cy - r * 0.8}`,
        `M ${cx} ${cy + r * 0.3} Q ${cx - r * 0.2} ${cy - r * 0.5} ${cx - r * 0.3} ${cy - r * 1.1}`,
        `M ${cx} ${cy + r * 0.3} Q ${cx + r * 0.2} ${cy - r * 0.5} ${cx + r * 0.3} ${cy - r * 1.1}`,
        `M ${cx} ${cy + r * 0.3} Q ${cx - r * 0.8} ${cy + r * 0.6} ${cx - r * 1.2} ${cy + r * 0.4}`,
        `M ${cx} ${cy + r * 0.3} Q ${cx + r * 0.8} ${cy + r * 0.6} ${cx + r * 1.2} ${cy + r * 0.4}`,
      ].map((d, i) => (
        <path key={i} d={d} stroke="#3a6a3a" strokeWidth={1.5 - i * 0.1} fill="none" opacity="0.55" />
      ))}
      {/* Blue flame skull */}
      <circle cx={cx} cy={cy - r * 0.1} r={r * 0.18} fill="#1a3a4a" opacity="0.6" />
      <circle cx={cx - r * 0.07} cy={cy - r * 0.15} r={r * 0.04} fill="#3a8aa0" opacity="0.7" />
      <circle cx={cx + r * 0.07} cy={cy - r * 0.15} r={r * 0.04} fill="#3a8aa0" opacity="0.7" />
      {/* Ground roots */}
      <line x1={cx - r * 0.8} y1={cy + r * 0.55} x2={cx + r * 0.8} y2={cy + r * 0.55}
        stroke="#2a4a2a" strokeWidth="1.5" opacity="0.4" />
    </>
  )
}

function FlameSigil({ cx, cy, w, h, color, color2 }: SigilProps & { color: string; color2: string }) {
  const r = Math.min(w, h) * 0.26
  return (
    <>
      <Bg color1={color} color2={color2} w={w} h={h} id="fl-bg" />
      {/* Flame tongues */}
      {[0, -r * 0.3, r * 0.3, -r * 0.55, r * 0.55].map((dx, i) => {
        const baseH = r * (1.8 - i * 0.15)
        return (
          <path key={i}
            d={`M ${cx + dx - r * 0.12} ${cy + r * 0.5}
                Q ${cx + dx - r * 0.2} ${cy - baseH * 0.3}
                  ${cx + dx} ${cy - baseH * 0.65}
                Q ${cx + dx + r * 0.2} ${cy - baseH * 0.3}
                  ${cx + dx + r * 0.12} ${cy + r * 0.5}`}
            fill={color}
            opacity={0.35 - i * 0.04}
          />
        )
      })}
      {/* Inner bright flame */}
      <path d={`M ${cx - r * 0.1} ${cy + r * 0.4} Q ${cx - r * 0.15} ${cy - r * 0.5} ${cx} ${cy - r * 0.9} Q ${cx + r * 0.15} ${cy - r * 0.5} ${cx + r * 0.1} ${cy + r * 0.4}`}
        fill="#e8d5a3" opacity="0.25" />
      {/* Three-finger symbol inside */}
      {[-r * 0.15, 0, r * 0.15].map((dx, i) => (
        <line key={i}
          x1={cx + dx} y1={cy + r * 0.3}
          x2={cx + dx} y2={cy - r * 0.1}
          stroke="#e8d5a3" strokeWidth="2" opacity="0.3" strokeLinecap="round"
        />
      ))}
    </>
  )
}

function CosmicSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.3
  return (
    <>
      <Bg color1="#2a1a4a" color2="#05030a" w={w} h={h} id="cos-bg" />
      {/* Star field */}
      {Array.from({ length: 50 }).map((_, i) => {
        const x = (i * 41 + 7) % w
        const y = (i * 61 + 13) % h
        const s = 0.5 + (i % 4) * 0.4
        return <circle key={i} cx={x} cy={y} r={s} fill="#e8d5a3" opacity={0.15 + (i % 5) * 0.1} />
      })}
      {/* Cosmic ring */}
      <circle cx={cx} cy={cy} r={r} stroke="#6a50a0" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx={cx} cy={cy} r={r * 0.7} stroke="#4a3a80" strokeWidth="0.6" fill="none" opacity="0.3" />
      {/* Constellation lines */}
      {[
        [0, r * 0.5, r * 0.4, r * 0.15],
        [r * 0.4, r * 0.15, r * 0.5, -r * 0.3],
        [r * 0.5, -r * 0.3, 0, -r * 0.55],
        [0, -r * 0.55, -r * 0.5, -r * 0.3],
        [-r * 0.5, -r * 0.3, -r * 0.4, r * 0.15],
        [-r * 0.4, r * 0.15, 0, r * 0.5],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i}
          x1={cx + x1} y1={cy + y1} x2={cx + x2} y2={cy + y2}
          stroke="#8a70c0" strokeWidth="0.7" opacity="0.35"
        />
      ))}
      {/* Constellation nodes */}
      {[
        [0, r * 0.5], [r * 0.4, r * 0.15], [r * 0.5, -r * 0.3],
        [0, -r * 0.55], [-r * 0.5, -r * 0.3], [-r * 0.4, r * 0.15],
      ].map(([dx, dy], i) => (
        <circle key={i} cx={cx + dx} cy={cy + dy} r="3" fill="#c0b0e8" opacity="0.6" />
      ))}
      {/* Central moon */}
      <circle cx={cx} cy={cy} r={r * 0.12} fill="#2a1a4a" opacity="0.8" />
      <circle cx={cx + r * 0.05} cy={cy - r * 0.03} r={r * 0.1} fill="#0a0818" opacity="0.9" />
      <circle cx={cx} cy={cy} r={r * 0.12} fill="none" stroke="#9a80d0" strokeWidth="1" opacity="0.5" />
    </>
  )
}

function SerpentSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.3
  return (
    <>
      <Bg color1="#3a1a0a" color2="#1a0808" w={w} h={h} id="sn-bg" />
      {/* Coiled serpent */}
      <path
        d={`M ${cx - r * 0.05} ${cy + r * 0.7}
            Q ${cx + r * 0.8} ${cy + r * 0.7} ${cx + r * 0.9} ${cy}
            Q ${cx + r * 0.9} ${cy - r * 0.8} ${cx} ${cy - r * 0.85}
            Q ${cx - r * 0.85} ${cy - r * 0.85} ${cx - r * 0.85} ${cy}
            Q ${cx - r * 0.85} ${cy + r * 0.5} ${cx - r * 0.2} ${cy + r * 0.6}`}
        stroke="#5a3a1a" strokeWidth="8" fill="none" opacity="0.5" strokeLinecap="round"
      />
      <path
        d={`M ${cx - r * 0.05} ${cy + r * 0.7}
            Q ${cx + r * 0.8} ${cy + r * 0.7} ${cx + r * 0.9} ${cy}
            Q ${cx + r * 0.9} ${cy - r * 0.8} ${cx} ${cy - r * 0.85}
            Q ${cx - r * 0.85} ${cy - r * 0.85} ${cx - r * 0.85} ${cy}
            Q ${cx - r * 0.85} ${cy + r * 0.5} ${cx - r * 0.2} ${cy + r * 0.6}`}
        stroke="#8a5a2a" strokeWidth="4" fill="none" opacity="0.4" strokeLinecap="round"
      />
      {/* Head */}
      <ellipse cx={cx - r * 0.35} cy={cy + r * 0.6} rx={r * 0.15} ry={r * 0.1}
        fill="#6a4a1a" opacity="0.6" transform={`rotate(-30, ${cx - r * 0.35}, ${cy + r * 0.6})`} />
      {/* Eye */}
      <circle cx={cx - r * 0.38} cy={cy + r * 0.55} r={r * 0.03} fill="#c5a059" opacity="0.8" />
      {/* Scales texture */}
      {Array.from({ length: 8 }).map((_, i) => {
        const t = i / 8
        return (
          <circle key={i}
            cx={cx - r * 0.05 + Math.sin(t * Math.PI * 2) * r * 0.3}
            cy={cy + r * 0.7 - t * r * 1.5}
            r="2" fill="#8a5a2a" opacity="0.3"
          />
        )
      })}
    </>
  )
}

function NoxSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.28
  return (
    <>
      <Bg color1="#1a2a4a" color2="#050a1a" w={w} h={h} id="nox-bg" />
      {/* Underground city silhouette */}
      {[
        [-r * 0.7, r * 0.3, r * 0.08, r * 0.25],
        [-r * 0.4, r * 0.1, r * 0.1, r * 0.45],
        [-r * 0.1, -r * 0.1, r * 0.12, r * 0.55],
        [r * 0.2, r * 0.0, r * 0.1, r * 0.45],
        [r * 0.5, r * 0.2, r * 0.08, r * 0.3],
      ].map(([dx, dy, rw, rh], i) => (
        <rect key={i}
          x={cx + dx - rw}
          y={cy + dy - rh}
          width={rw * 2}
          height={rh * 2}
          fill="#1a3a60" opacity="0.4"
        />
      ))}
      {/* Artificial moon */}
      <circle cx={cx} cy={cy - r * 0.6} r={r * 0.25} fill="#304060" opacity="0.5" />
      <circle cx={cx} cy={cy - r * 0.6} r={r * 0.25} fill="none" stroke="#6080a0" strokeWidth="1.5" opacity="0.5" />
      {/* Light beams from moon */}
      {[-r * 0.15, 0, r * 0.15].map((dx, i) => (
        <line key={i}
          x1={cx + dx} y1={cy - r * 0.35}
          x2={cx + dx * 1.5} y2={cy + r * 0.3}
          stroke="#6080a0" strokeWidth="0.6" opacity="0.2"
        />
      ))}
      {/* Silver tears */}
      {Array.from({ length: 8 }).map((_, i) => {
        const x = cx - r * 0.6 + (i % 4) * r * 0.4
        const y = cy + r * 0.1 + Math.floor(i / 4) * r * 0.2
        return <ellipse key={i} cx={x} cy={y} rx={3} ry={5} fill="#a0b0d0" opacity="0.25" />
      })}
    </>
  )
}

function HaligtreeSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.28
  return (
    <>
      <Bg color1="#1a3a1a" color2="#080f08" w={w} h={h} id="hlt-bg" />
      {/* Trunk */}
      <line x1={cx} y1={cy + r * 0.8} x2={cx} y2={cy - r * 0.4} stroke="#4a7a3a" strokeWidth="3" opacity="0.5" />
      {/* Branches */}
      {[
        [cx, cy - r * 0.1, cx - r * 0.6, cy - r * 0.7],
        [cx, cy - r * 0.1, cx + r * 0.6, cy - r * 0.7],
        [cx, cy - r * 0.3, cx - r * 0.4, cy - r * 0.9],
        [cx, cy - r * 0.3, cx + r * 0.4, cy - r * 0.9],
        [cx, cy - r * 0.4, cx, cy - r * 1.0],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#4a7a3a" strokeWidth={2 - i * 0.2} opacity="0.45" />
      ))}
      {/* Golden leaves (small) */}
      {[
        [-r * 0.6, -r * 0.7], [-r * 0.4, -r * 0.9],
        [0, -r * 1.0], [r * 0.4, -r * 0.9], [r * 0.6, -r * 0.7],
        [-r * 0.3, -r * 0.6], [r * 0.3, -r * 0.6],
      ].map(([dx, dy], i) => (
        <circle key={i} cx={cx + dx} cy={cy + dy} r={r * 0.06}
          fill="#8a9a60" opacity={0.5 + i * 0.03} />
      ))}
      {/* Ground roots */}
      {[-r * 0.5, -r * 0.2, r * 0.2, r * 0.5].map((dx, i) => (
        <path key={i}
          d={`M ${cx} ${cy + r * 0.8} Q ${cx + dx * 0.5} ${cy + r * 1.0} ${cx + dx} ${cy + r * 0.9}`}
          stroke="#3a5a2a" strokeWidth="1.5" fill="none" opacity="0.4"
        />
      ))}
      {/* Faint unalloyed gold aura */}
      <circle cx={cx} cy={cy - r * 0.3} r={r * 0.7} fill="none"
        stroke="#8a9a40" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 6" />
    </>
  )
}

function FracturedRingSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.3
  return (
    <>
      <Bg color1="#c5a059" color2="#2a1a08" w={w} h={h} id="fr-bg" />
      {/* Cracked ring */}
      <path d={`M ${cx + r * Math.cos(-0.5)} ${cy + r * Math.sin(-0.5)} A ${r} ${r} 0 1 1 ${cx + r * Math.cos(Math.PI + 0.5)} ${cy + r * Math.sin(Math.PI + 0.5)}`}
        stroke="#c5a059" strokeWidth="5" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d={`M ${cx + r * Math.cos(Math.PI - 0.5)} ${cy + r * Math.sin(Math.PI - 0.5)} A ${r} ${r} 0 0 1 ${cx + r * Math.cos(0.5)} ${cy + r * Math.sin(0.5)}`}
        stroke="#8a7040" strokeWidth="3" fill="none" opacity="0.3" strokeLinecap="round" />
      {/* Shards */}
      {[[-r * 0.1, -r * 0.1], [r * 0.15, r * 0.08], [-r * 0.05, r * 0.15]].map(([dx, dy], i) => (
        <polygon key={i}
          points={`${cx + dx},${cy + dy} ${cx + dx + r * 0.08},${cy + dy - r * 0.04} ${cx + dx + r * 0.04},${cy + dy + r * 0.1}`}
          fill="#c5a059" opacity="0.3" />
      ))}
      {/* Throne hint */}
      <rect x={cx - r * 0.18} y={cy + r * 0.4} width={r * 0.36} height={r * 0.45}
        fill="#2a1a08" stroke="#8a7040" strokeWidth="1" opacity="0.4" />
      <rect x={cx - r * 0.22} y={cy + r * 0.3} width={r * 0.44} height={r * 0.12}
        fill="#8a7040" opacity="0.35" />
    </>
  )
}

function PerfectOrderSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.3
  return (
    <>
      <Bg color1="#d4aa3a" color2="#1a1208" w={w} h={h} id="po-bg" />
      {/* Perfect concentric circles */}
      {[1, 0.82, 0.65, 0.5, 0.35].map((scale, i) => (
        <circle key={i} cx={cx} cy={cy} r={r * scale}
          stroke="#c5a059" strokeWidth="0.8" fill="none" opacity={0.2 + i * 0.08} />
      ))}
      {/* Perfect 12-pointed star */}
      <polygon
        points={Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 15 * Math.PI) / 180
          const rr = i % 2 === 0 ? r * 0.45 : r * 0.2
          return `${cx + Math.cos(a) * rr},${cy + Math.sin(a) * rr}`
        }).join(' ')}
        fill="#c5a059" opacity="0.35"
      />
      {/* Symmetrical rays */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180
        return (
          <line key={i}
            x1={cx + Math.cos(a) * r * 0.55}
            y1={cy + Math.sin(a) * r * 0.55}
            x2={cx + Math.cos(a) * r * 1.1}
            y2={cy + Math.sin(a) * r * 1.1}
            stroke="#e8d5a3" strokeWidth="0.7" opacity="0.3"
          />
        )
      })}
      <circle cx={cx} cy={cy} r={r * 0.08} fill="#e8d5a3" opacity="0.8" />
    </>
  )
}

function DespairSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.28
  return (
    <>
      <Bg color1="#5a1a0a" color2="#1a0505" w={w} h={h} id="ds-bg" />
      {/* Cursed marks */}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i * 60 * Math.PI) / 180
        const x = cx + Math.cos(a) * r * 0.7
        const y = cy + Math.sin(a) * r * 0.7
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={r * 0.08} fill="#8a2a1a" opacity="0.5" />
            <line x1={x - r * 0.05} y1={y} x2={x + r * 0.05} y2={y} stroke="#c05030" strokeWidth="1" opacity="0.5" />
            <line x1={x} y1={y - r * 0.05} x2={x} y2={y + r * 0.05} stroke="#c05030" strokeWidth="1" opacity="0.5" />
          </g>
        )
      })}
      {/* Corruption spreading */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180
        return (
          <path key={i}
            d={`M ${cx + Math.cos(a) * r * 0.15} ${cy + Math.sin(a) * r * 0.15}
                Q ${cx + Math.cos(a + 0.3) * r * 0.5} ${cy + Math.sin(a + 0.3) * r * 0.5}
                  ${cx + Math.cos(a) * r}`}
            stroke="#8a2a1a" strokeWidth="0.8" fill="none" opacity="0.35"
          />
        )
      })}
      {/* Central sigil */}
      <circle cx={cx} cy={cy} r={r * 0.18} fill="#3a0a0a" opacity="0.6" />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="#c05030" fontSize={r * 0.2} fontFamily="serif" opacity="0.5">
        ☠
      </text>
    </>
  )
}

function GenericCodexSigil({ cx, cy, w, h }: SigilProps) {
  const r = Math.min(w, h) * 0.28
  return (
    <>
      <Bg color1="#c5a059" color2="#1c1410" w={w} h={h} id="gen-bg" />
      <circle cx={cx} cy={cy} r={r} stroke="#c5a059" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx={cx} cy={cy} r={r * 0.7} stroke="#8a7040" strokeWidth="0.7" fill="none" opacity="0.25" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180
        return (
          <line key={i}
            x1={cx + Math.cos(a) * r * 0.75}
            y1={cy + Math.sin(a) * r * 0.75}
            x2={cx + Math.cos(a) * r * 0.4}
            y2={cy + Math.sin(a) * r * 0.4}
            stroke="#c5a059" strokeWidth="0.8" opacity="0.3"
          />
        )
      })}
      <polygon
        points={Array.from({ length: 6 }).map((_, i) => {
          const a = (i * 60 * Math.PI) / 180 - Math.PI / 2
          return `${cx + Math.cos(a) * r * 0.3},${cy + Math.sin(a) * r * 0.3}`
        }).join(' ')}
        fill="none" stroke="#c5a059" strokeWidth="0.8" opacity="0.4"
      />
      <circle cx={cx} cy={cy} r={r * 0.07} fill="#e8d5a3" opacity="0.7" />
    </>
  )
}
