/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: 'rgb(var(--void) / <alpha-value>)',
          deep: 'rgb(var(--void-deep) / <alpha-value>)',
          raised: 'rgb(var(--void-raised) / <alpha-value>)',
        },
        quantum: {
          purple: '#6929C4',
          violet: '#A56EFF',
          indigo: '#4589FF',
          // reactive — legible on both themes; use for text, not fills
          text: 'rgb(var(--quantum-text) / <alpha-value>)',
        },
        cyan: {
          glow: '#25E5F5',
          bright: '#7CF5FF',
          // reactive — legible on both themes; use for text, not fills
          text: 'rgb(var(--cyan-text) / <alpha-value>)',
          strong: 'rgb(var(--cyan-strong) / <alpha-value>)',
        },
        magenta: {
          glow: '#FF6FD8',
          // reactive — legible on both themes; use for text, not fills
          text: 'rgb(var(--magenta-text) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          muted: 'rgb(var(--ink-muted) / <alpha-value>)',
          faint: 'rgb(var(--ink-faint) / <alpha-value>)',
        },
        // fixed dark text for use on bright accent backgrounds — never inverts with theme
        'accent-ink': '#0B0712',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, rgba(5,4,9,1)), linear-gradient(rgba(105,41,196,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(105,41,196,0.18) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(105,41,196,0.35), transparent 70%)',
      },
      backgroundSize: {
        grid: '100% 100%, 44px 44px, 44px 44px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(37,229,245,0.5), 0 0 60px rgba(37,229,245,0.15)',
        'glow-purple': '0 0 20px rgba(165,110,255,0.5), 0 0 60px rgba(165,110,255,0.2)',
        'glow-magenta': '0 0 20px rgba(255,111,216,0.4), 0 0 60px rgba(255,111,216,0.15)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.55 },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        drift: 'drift 6s ease-in-out infinite',
        scanline: 'scanline 4s linear infinite',
        marquee: 'marquee 18s linear infinite',
      },
    },
  },
  plugins: [],
}
