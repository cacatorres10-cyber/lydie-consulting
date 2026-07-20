/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        paper: '#fdfcfa',
        ink: {
          50: '#f7f6f4',
          100: '#edeae5',
          200: '#d8d3cb',
          300: '#b8b0a4',
          400: '#948a7c',
          500: '#776d60',
          600: '#5e564b',
          700: '#4a443b',
          800: '#332e28',
          900: '#1f1b16',
          950: '#12100c',
        },
        gold: {
          50: '#faf7f2',
          100: '#f3ede2',
          200: '#e8d5b7',
          300: '#c9b8a0',
          400: '#b8a087',
          500: '#a78b71',
          600: '#8a6f56',
          700: '#6f5843',
          800: '#574531',
          900: '#453728',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out both',
        'slow-zoom': 'slowZoom 18s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite alternate',
        'float-late': 'float 7s 1.2s ease-in-out infinite alternate-reverse',
        'pulse-branch': 'pulseBranch 3.2s ease-in-out infinite',
        'dash-flow': 'dashFlow 7s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(8px)' },
        },
        pulseBranch: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.75' },
        },
        dashFlow: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-220' },
        },
      },
    },
  },
  plugins: [],
}
