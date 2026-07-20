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
        paper: '#faf8f4',
        ink: {
          50: '#f3f6fa',
          100: '#e5ebf4',
          200: '#c7d3e6',
          300: '#9db2d0',
          400: '#6d8ab5',
          500: '#4a6a9b',
          600: '#385480',
          700: '#2d4368',
          800: '#223250',
          900: '#132038',
          950: '#0a1424',
        },
        gold: {
          50: '#fbf8f1',
          100: '#f5edda',
          200: '#e9d8ae',
          300: '#dcc07e',
          400: '#cfa958',
          500: '#c29543',
          600: '#a97a36',
          700: '#8a5f2e',
          800: '#6f4c29',
          900: '#5c3f25',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out both',
        'slow-zoom': 'slowZoom 18s ease-in-out infinite alternate',
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
      },
    },
  },
  plugins: [],
}
