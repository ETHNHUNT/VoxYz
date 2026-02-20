import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        // warm off‑white cream matching the original parchment tone
        paper: '#F5F0E8',
        accent: '#E84A4A',
        sunshine: '#F5D94E',
        secondary: '#3B82F6',
        muted: '#9CA3AF',
        // aliases for backwards compatibility
        cream: '#F5F0E8',
        coral: '#E84A4A',
        'vox-yellow': '#F5D94E',
        'vox-green': '#22C55E',
        'vox-dark': '#111111',
      },
      fontFamily: {
        display: ['var(--font-kalam)', 'cursive'], // used for headings/nav
        // body text should be a clean sans-serif, not handwritten
        body: ['system-ui', 'Helvetica', 'Arial', 'sans-serif'],
        // keep handwritten font available under a new key if needed
        hand: ['var(--font-patrick-hand)', 'cursive'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        pixel: ['var(--font-pixel)', 'monospace'],
      },
      boxShadow: {
        // brutalist solid 4px offset hard shadows matching the original (#1a1a1a)
        hard: '4px 4px 0px 0px #1a1a1a',
        'hard-lg': '8px 8px 0px 0px #1a1a1a',
        'hard-sm': '2px 2px 0px 0px #1a1a1a',
        // sketch remains for a slightly different style if used elsewhere
        sketch: '4px 4px 0px 0px #111111',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '24px 24px',
      },
    },
  },
  plugins: [],
};
export default config;
