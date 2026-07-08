/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // The HIVE design tokens, exposed as Tailwind utilities so new work can
      // use `bg-navy`, `text-cyanD`, `font-display`, etc. The original CSS
      // variables in base.css remain the single source of truth.
      colors: {
        bg: '#F7F9FC',
        bg2: '#FFFFFF',
        tint: '#EEF6FB',
        navy: '#0D1B2A',
        navy2: '#1b2736',
        ink: '#13172A',
        ink2: '#4A5068',
        ink3: '#8B91A7',
        cyan: '#00C8FF',
        cyanl: '#7FE4FF',
        cyanD: '#0084B8',
        red: '#ff003c',
        amber: '#FFB703',
        green: '#00ff9f',
        purple: '#8b5cf6',
        border: '#DDE2EC',
        borderStrong: '#B9C0D0',
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        deck: '1300px',
      },
    },
  },
  // Tailwind's preflight would reset the deck's bespoke styles; base.css already
  // owns the global reset, so we keep preflight off to avoid conflicts.
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
