/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rose: {
          gold: '#b76e79',
          'gold-light': '#d4a0a7',
          'gold-dark': '#8b4e57',
        },
        blush: {
          50: '#fff0f3',
          100: '#ffe0e6',
          200: '#ffc1ce',
          300: '#ff93a8',
          400: '#ff5c7f',
          500: '#f42b5a',
          600: '#e11044',
          700: '#ba0a39',
          800: '#9b0c35',
          900: '#840d32',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e7',
          300: '#f5e8d0',
          400: '#efd5b0',
          500: '#e5bc88',
          600: '#d4995a',
        },
        gold: {
          light: '#f5d0a9',
          DEFAULT: '#d4af6d',
          dark: '#a67c3d',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'rose-gradient': 'linear-gradient(135deg, #b76e79 0%, #d4a0a7 50%, #f5d0a9 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1a0a0d 0%, #2d1318 50%, #3d1a20 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(183,110,121,0.9) 0%, rgba(212,160,167,0.7) 50%, rgba(245,208,169,0.5) 100%)',
      },
      boxShadow: {
        'rose': '0 4px 30px rgba(183, 110, 121, 0.25)',
        'rose-lg': '0 10px 60px rgba(183, 110, 121, 0.35)',
        'glow': '0 0 30px rgba(183, 110, 121, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
