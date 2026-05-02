/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Tokens are CSS variables resolved at runtime — see src/index.css
           for `:root` (dark default) and `[data-theme="light"]` overrides. */
        codex: {
          black:           'rgb(var(--codex-black) / <alpha-value>)',
          brown:           'rgb(var(--codex-brown) / <alpha-value>)',
          green:           'rgb(var(--codex-green) / <alpha-value>)',
          gold:            'rgb(var(--codex-gold) / <alpha-value>)',
          'gold-dim':      'rgb(var(--codex-gold-dim) / <alpha-value>)',
          'gold-bright':   'rgb(var(--codex-gold-bright) / <alpha-value>)',
          parchment:       'rgb(var(--codex-parchment) / <alpha-value>)',
          'parchment-dim': 'rgb(var(--codex-parchment-dim) / <alpha-value>)',
          ink:             'rgb(var(--codex-ink) / <alpha-value>)',
          crimson:         'rgb(var(--codex-crimson) / <alpha-value>)',
          rot:             'rgb(var(--codex-rot) / <alpha-value>)',
          ghost:           'rgb(var(--codex-ghost) / <alpha-value>)',
          flame:           'rgb(var(--codex-flame) / <alpha-value>)',
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        subheading: ['Cormorant Garamond', 'serif'],
        body: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'parchment-gradient': 'linear-gradient(to bottom right, #1c1410, #0f1a15)',
        'gold-glow': 'radial-gradient(circle, rgba(197,160,89,0.15) 0%, rgba(0,0,0,0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(1.3)' },
        }
      }
    },
  },
  plugins: [],
}
