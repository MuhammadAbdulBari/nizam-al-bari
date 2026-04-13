// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef9e6',
          100: '#fdf0cc',
          200: '#fbe199',
          300: '#f9d266',
          400: '#f7c333',
          500: '#D4AF37',
          600: '#b8942e',
          700: '#9c7a26',
          800: '#805f1d',
          900: '#644515',
        },
        green: {
          50: '#f0f7f2',
          100: '#dcebe1',
          200: '#b9d7c3',
          300: '#96c3a5',
          400: '#73af87',
          500: '#4a9b69',
          600: '#2d7a4a',
          700: '#1e5e36',
          800: '#0a2e1c',
          900: '#051a0f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-on-hover': 'scaleOnHover 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleOnHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}