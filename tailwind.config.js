/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        codex: {
          black: '#0a0a08',
          brown: '#1c1410',
          green: '#0f1a15',
          gold: '#c5a059',
          'gold-dim': '#8a7040',
          'gold-bright': '#e8d5a3',
          parchment: '#e3d5b8',
          'parchment-dim': '#b0a28a',
          ink: '#2b2118',
          crimson: '#8a2e2e',
          rot: '#6b2d4a',
          ghost: '#3a506b',
          flame: '#8c4a2f',
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
