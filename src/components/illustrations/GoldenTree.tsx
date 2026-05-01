import { motion } from 'framer-motion'

/**
 * Árbol Áureo of the Codex — the centerpiece illustration on the landing page.
 *
 * Layered composition (back → front):
 *   1. Background aureole (soft radial light enveloping the whole tree)
 *   2. Sun rays descending through the canopy
 *   3. Crown halo (breathing radial behind the highest leaves)
 *   4. Roots fanning into darkness (drawn first so trunk overlaps cleanly)
 *   5. Ground mist
 *   6. Trunk (filled tapered shape with bark detail)
 *   7. Branch system: 4 main → secondary → tertiary, all stroke-drawn
 *   8. Canopy: overlapping golden cloud ellipses
 *   9. Orbs / glowing leaves twinkling on branch tips
 *  10. Falling leaves drifting down
 *  11. Crown star with rays at the top of the trunk
 *
 * All animations honor `prefers-reduced-motion` via the global `MotionConfig`
 * in App.tsx. No `Math.random()` is called in render: positions and sizes are
 * derived from constant tables so layout is stable across re-renders.
 */
export function GoldenTree({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Aureole — large soft light enveloping the tree */}
        <radialGradient id="gt-aureole" cx="50%" cy="38%" r="60%">
          <stop offset="0%"  stopColor="#fff5d8" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#e8d5a3" stopOpacity="0.28" />
          <stop offset="70%" stopColor="#c5a059" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#3a2a14" stopOpacity="0" />
        </radialGradient>

        {/* Crown halo — concentrated golden glow behind the canopy */}
        <radialGradient id="gt-crown-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#fff8e0" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#e8d5a3" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
        </radialGradient>

        {/* Trunk — gold gleam at top descending to dark roots */}
        <linearGradient id="gt-trunk" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#fff0c8" />
          <stop offset="20%"  stopColor="#e8d5a3" />
          <stop offset="55%"  stopColor="#c5a059" />
          <stop offset="85%"  stopColor="#6a4a25" />
          <stop offset="100%" stopColor="#2a1c10" />
        </linearGradient>

        {/* Trunk highlight — single bright vertical streak */}
        <linearGradient id="gt-trunk-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#fff8e0" stopOpacity="0.7" />
          <stop offset="50%"  stopColor="#fff5d8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e8d5a3" stopOpacity="0" />
        </linearGradient>

        {/* Canopy clouds — soft, multi-stop gold for the leaf masses */}
        <radialGradient id="gt-canopy" cx="50%" cy="45%" r="55%">
          <stop offset="0%"   stopColor="#fff5d0" stopOpacity="0.95" />
          <stop offset="40%"  stopColor="#e8d5a3" stopOpacity="0.65" />
          <stop offset="75%"  stopColor="#c5a059" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#8a7040" stopOpacity="0" />
        </radialGradient>

        {/* Branch gradient — mirrors trunk but lighter */}
        <linearGradient id="gt-branch" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#fff5d8" />
          <stop offset="60%"  stopColor="#e8d5a3" />
          <stop offset="100%" stopColor="#a88040" />
        </linearGradient>

        {/* Light ray vertical fade — used for the rays through the canopy */}
        <linearGradient id="gt-ray" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%"   stopColor="#fff8e0" stopOpacity="0.5" />
          <stop offset="65%"  stopColor="#fff5d8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#fff5d8" stopOpacity="0" />
        </linearGradient>

        {/* Ground mist — faint horizontal halo at the base of the trunk */}
        <radialGradient id="gt-mist" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#c5a059" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
        </radialGradient>

        {/* Star at the crown of the tree */}
        <radialGradient id="gt-star" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
          <stop offset="50%"  stopColor="#fff5d8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#e8d5a3" stopOpacity="0" />
        </radialGradient>

        {/* Soft glow blur for orbs / star */}
        <filter id="gt-bloom" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* ───────── 1. Background aureole ───────── */}
      <ellipse cx="200" cy="240" rx="210" ry="290" fill="url(#gt-aureole)" />

      {/* ───────── 2. Sun rays through canopy ───────── */}
      <g>
        {RAY_OFFSETS.map((dx, i) => (
          <motion.line
            key={i}
            x1={200 + dx} y1={110}
            x2={200 + dx * 3.4} y2={585}
            stroke="url(#gt-ray)"
            strokeWidth={1.6}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.18, 0.5, 0.18] }}
            transition={{
              duration: 7 + (i % 3),
              repeat: Infinity,
              delay: 1.2 + i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </g>

      {/* ───────── 3. Crown halo ───────── */}
      <motion.ellipse
        cx="200" cy="120" rx="135" ry="95"
        fill="url(#gt-crown-halo)"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: [0.7, 0.95, 0.7], scale: [1, 1.04, 1] }}
        transition={{
          opacity: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          scale:   { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ transformOrigin: '200px 120px' }}
      />

      {/* ───────── 4. Roots ───────── */}
      <g>
        {ROOTS.map((r, i) => (
          <motion.path
            key={i}
            d={r.d}
            stroke="#4a3418"
            strokeWidth={r.w}
            strokeLinecap="round"
            fill="none"
            opacity={r.o}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 1.4 + i * 0.07, ease: 'easeOut' }}
          />
        ))}
      </g>

      {/* ───────── 5. Ground mist ───────── */}
      <ellipse cx="200" cy="558" rx="190" ry="38" fill="url(#gt-mist)" />

      {/* ───────── 6. Trunk ───────── */}
      <motion.path
        d="
          M 192 558
          C 192 540, 195 480, 197 380
          C 198 320, 199 260, 199 200
          C 199 170, 200 140, 200 118
          L 200 118
          C 200 140, 201 170, 201 200
          C 201 260, 202 320, 203 380
          C 205 480, 208 540, 208 558 Z
        "
        fill="url(#gt-trunk)"
        initial={{ opacity: 0, scaleY: 0.85 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{ transformOrigin: '200px 558px' }}
      />

      {/* Trunk highlight — vertical bright streak slightly off-center */}
      <motion.rect
        x={198.4} y={120} width={1.2} height={430}
        fill="url(#gt-trunk-highlight)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.6, delay: 0.3, ease: 'easeOut' }}
      />

      {/* Trunk dark seam */}
      <motion.path
        d="M 200 555 L 200 120"
        stroke="#1f1408"
        strokeWidth={0.6}
        opacity={0.55}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />

      {/* Bark notches — subtle horizontal striations */}
      {BARK_NOTCHES.map((y, i) => (
        <motion.line
          key={i}
          x1={195 + (i % 2) * 0.5} y1={y}
          x2={205 - (i % 2) * 0.5} y2={y + 0.4}
          stroke="#3a2814"
          strokeWidth={0.6}
          opacity={0.4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.0 + i * 0.04 }}
        />
      ))}

      {/* ───────── 7. Branch system ───────── */}
      {/* Main branches */}
      {MAIN_BRANCHES.map((b, i) => (
        <motion.path
          key={`mb-${i}`}
          d={b.d}
          stroke="url(#gt-branch)"
          strokeWidth={b.w}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.5 + i * 0.06, ease: 'easeOut' }}
        />
      ))}

      {/* Secondary branches */}
      {SECONDARY_BRANCHES.map((b, i) => (
        <motion.path
          key={`sb-${i}`}
          d={b.d}
          stroke="#c5a059"
          strokeWidth={b.w}
          strokeLinecap="round"
          fill="none"
          opacity={0.85}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.85 + i * 0.05, ease: 'easeOut' }}
        />
      ))}

      {/* Tertiary branches — twiglets reaching to canopy edges */}
      {TERTIARY_BRANCHES.map((b, i) => (
        <motion.path
          key={`tb-${i}`}
          d={b.d}
          stroke="#e8d5a3"
          strokeWidth={b.w}
          strokeLinecap="round"
          fill="none"
          opacity={0.7}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.0, delay: 1.1 + i * 0.03, ease: 'easeOut' }}
        />
      ))}

      {/* ───────── 8. Canopy clouds ───────── */}
      {CANOPY.map((c, i) => (
        <motion.ellipse
          key={`c-${i}`}
          cx={c.cx} cy={c.cy} rx={c.rx} ry={c.ry}
          fill="url(#gt-canopy)"
          opacity={c.o}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: c.o, scale: 1 }}
          transition={{ duration: 1.4, delay: 1.0 + i * 0.08, ease: 'easeOut' }}
          style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
        />
      ))}

      {/* ───────── 9. Glowing orbs ───────── */}
      {ORBS.map((o, i) => (
        <g key={`o-${i}`}>
          <motion.circle
            cx={o.cx} cy={o.cy} r={o.r * 2.4}
            fill="#fff5d8"
            opacity={0.18}
            filter="url(#gt-bloom)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.12, 0.3, 0.12] }}
            transition={{ duration: o.d, repeat: Infinity, delay: o.delay }}
          />
          <motion.circle
            cx={o.cx} cy={o.cy} r={o.r}
            fill="#fff8e0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.18, 1] }}
            transition={{
              opacity: { duration: o.d, repeat: Infinity, delay: o.delay, ease: 'easeInOut' },
              scale:   { duration: o.d, repeat: Infinity, delay: o.delay, ease: 'easeInOut' },
            }}
          />
        </g>
      ))}

      {/* ───────── 10. Falling leaves ───────── */}
      {LEAVES.map((l, i) => (
        <motion.circle
          key={`l-${i}`}
          cx={l.cx} cy={l.cy}
          r={l.r}
          fill="#e8d5a3"
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, 60, 120, 180, 240],
            x: [0, l.sway, -l.sway, l.sway / 2, 0],
            opacity: [0, 0.85, 0.85, 0.5, 0],
          }}
          transition={{
            duration: l.d,
            repeat: Infinity,
            delay: l.delay,
            ease: 'easeIn',
          }}
        />
      ))}

      {/* ───────── 11. Crown star ───────── */}
      <g>
        {/* Soft halo around the star */}
        <motion.circle
          cx="200" cy="115" r="22"
          fill="url(#gt-star)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 4-pointed star rays */}
        {[0, 45, 90, 135].map((angle, i) => (
          <motion.line
            key={`s-${i}`}
            x1={200 - Math.cos((angle * Math.PI) / 180) * 18}
            y1={115 - Math.sin((angle * Math.PI) / 180) * 18}
            x2={200 + Math.cos((angle * Math.PI) / 180) * 18}
            y2={115 + Math.sin((angle * Math.PI) / 180) * 18}
            stroke="#fff8e0"
            strokeWidth={i === 0 || i === 2 ? 1.2 : 0.8}
            strokeLinecap="round"
            opacity={0.85}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            style={{ transformOrigin: '200px 115px' }}
          />
        ))}
        {/* Bright core */}
        <motion.circle
          cx="200" cy="115" r="3.5"
          fill="#ffffff"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '200px 115px' }}
        />
      </g>
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────── */
/* Constant tables — kept outside the component so React doesn't  */
/* re-create arrays on every render.                              */
/* ──────────────────────────────────────────────────────────── */

const RAY_OFFSETS = [-72, -52, -32, -14, 14, 32, 52, 72]

const ROOTS = [
  { d: 'M 200 545 C 175 555 145 568 95 580',  w: 2.0, o: 0.7 },
  { d: 'M 200 545 C 165 558 130 572 70 590',  w: 1.5, o: 0.55 },
  { d: 'M 200 545 C 155 552 115 562 55 568',  w: 1.2, o: 0.45 },
  { d: 'M 200 548 C 200 562 195 580 178 595', w: 1.2, o: 0.6 },
  { d: 'M 200 548 C 200 562 205 580 222 595', w: 1.2, o: 0.6 },
  { d: 'M 200 545 C 225 555 255 568 305 580', w: 2.0, o: 0.7 },
  { d: 'M 200 545 C 235 558 270 572 330 590', w: 1.5, o: 0.55 },
  { d: 'M 200 545 C 245 552 285 562 345 568', w: 1.2, o: 0.45 },
  { d: 'M 200 545 C 130 555 80 562 25 575',   w: 0.9, o: 0.35 },
  { d: 'M 200 545 C 270 555 320 562 375 575', w: 0.9, o: 0.35 },
]

const MAIN_BRANCHES = [
  { d: 'M 198 295 C 180 270, 145 240, 105 200', w: 5 },
  { d: 'M 202 295 C 220 270, 255 240, 295 200', w: 5 },
  { d: 'M 198 235 C 175 215, 145 195, 110 170', w: 4 },
  { d: 'M 202 235 C 225 215, 255 195, 290 170', w: 4 },
  { d: 'M 199 185 C 188 170, 175 152, 162 135', w: 3.2 },
  { d: 'M 201 185 C 212 170, 225 152, 238 135', w: 3.2 },
]

const SECONDARY_BRANCHES = [
  { d: 'M 145 240 C 125 222, 100 205, 75 190',  w: 2.4 },
  { d: 'M 255 240 C 275 222, 300 205, 325 190', w: 2.4 },
  { d: 'M 145 195 C 130 175, 110 158, 88 142',  w: 2.0 },
  { d: 'M 255 195 C 270 175, 290 158, 312 142', w: 2.0 },
  { d: 'M 175 215 C 160 200, 145 185, 130 168', w: 1.7 },
  { d: 'M 225 215 C 240 200, 255 185, 270 168', w: 1.7 },
  { d: 'M 188 170 C 178 158, 165 145, 152 132', w: 1.5 },
  { d: 'M 212 170 C 222 158, 235 145, 248 132', w: 1.5 },
]

const TERTIARY_BRANCHES = [
  { d: 'M 105 200 C 95 192, 82 185, 70 180',   w: 1.2 },
  { d: 'M 295 200 C 305 192, 318 185, 330 180', w: 1.2 },
  { d: 'M 110 170 C 100 162, 90 156, 78 150',   w: 1.0 },
  { d: 'M 290 170 C 300 162, 310 156, 322 150', w: 1.0 },
  { d: 'M 162 135 C 158 128, 152 122, 146 118', w: 0.9 },
  { d: 'M 238 135 C 242 128, 248 122, 254 118', w: 0.9 },
  { d: 'M 75 190 C 65 184, 58 178, 50 175',     w: 0.8 },
  { d: 'M 325 190 C 335 184, 342 178, 350 175', w: 0.8 },
  { d: 'M 88 142 C 80 136, 73 132, 65 128',     w: 0.8 },
  { d: 'M 312 142 C 320 136, 327 132, 335 128', w: 0.8 },
]

const CANOPY = [
  { cx: 200, cy: 130, rx: 110, ry: 60, o: 0.9 },
  { cx: 165, cy: 145, rx: 70,  ry: 45, o: 0.7 },
  { cx: 235, cy: 145, rx: 70,  ry: 45, o: 0.7 },
  { cx: 130, cy: 160, rx: 50,  ry: 32, o: 0.55 },
  { cx: 270, cy: 160, rx: 50,  ry: 32, o: 0.55 },
  { cx: 200, cy: 100, rx: 65,  ry: 32, o: 0.7 },
  { cx: 95,  cy: 175, rx: 32,  ry: 22, o: 0.4 },
  { cx: 305, cy: 175, rx: 32,  ry: 22, o: 0.4 },
]

const ORBS = [
  { cx: 200, cy: 115, r: 2.6, d: 4.0, delay: 1.8 },
  { cx: 165, cy: 138, r: 2.0, d: 3.6, delay: 2.0 },
  { cx: 235, cy: 138, r: 2.0, d: 3.6, delay: 2.2 },
  { cx: 105, cy: 198, r: 2.4, d: 4.4, delay: 2.4 },
  { cx: 295, cy: 198, r: 2.4, d: 4.4, delay: 2.5 },
  { cx: 145, cy: 168, r: 1.6, d: 3.2, delay: 2.6 },
  { cx: 255, cy: 168, r: 1.6, d: 3.2, delay: 2.7 },
  { cx: 75,  cy: 188, r: 1.4, d: 3.8, delay: 2.8 },
  { cx: 325, cy: 188, r: 1.4, d: 3.8, delay: 2.9 },
  { cx: 162, cy: 132, r: 1.2, d: 3.0, delay: 3.0 },
  { cx: 238, cy: 132, r: 1.2, d: 3.0, delay: 3.1 },
  { cx: 200, cy: 155, r: 1.5, d: 3.4, delay: 3.2 },
  { cx: 130, cy: 155, r: 1.0, d: 2.8, delay: 3.3 },
  { cx: 270, cy: 155, r: 1.0, d: 2.8, delay: 3.4 },
]

const LEAVES = [
  { cx: 175, cy: 180, r: 1.4, sway:  10, d: 8,  delay: 3.0 },
  { cx: 215, cy: 200, r: 1.2, sway: -12, d: 9,  delay: 4.5 },
  { cx: 150, cy: 220, r: 1.5, sway:  14, d: 10, delay: 5.2 },
  { cx: 245, cy: 240, r: 1.0, sway: -10, d: 8,  delay: 6.8 },
  { cx: 185, cy: 260, r: 1.3, sway:  12, d: 11, delay: 7.4 },
  { cx: 220, cy: 280, r: 1.1, sway: -14, d: 9,  delay: 8.5 },
  { cx: 165, cy: 300, r: 1.4, sway:  10, d: 10, delay: 9.0 },
  { cx: 230, cy: 195, r: 1.2, sway: -10, d: 9,  delay: 10.2 },
]

const BARK_NOTCHES = [180, 220, 270, 320, 360, 410, 460, 500]
