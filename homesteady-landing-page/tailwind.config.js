/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#e8f8ef',
          100: '#d1f1df',
          200: '#a3e4bf',
          300: '#75d69f',
          400: '#47c97f',
          500: '#2ECC71',
          600: '#27AE60',
          700: '#1e8a4c',
          800: '#166639',
          900: '#0d4225',
        },
        coral: {
          50: '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc7c7',
          300: '#ffa3a3',
          400: '#ff8787',
          500: '#FF6B6B',
          600: '#e85555',
          700: '#c73e3e',
          800: '#a32d2d',
          900: '#7f2222',
        },
        gold: {
          50: '#fdfaed',
          100: '#f9f1cc',
          200: '#f3e194',
          300: '#eccc5c',
          400: '#D4A84B',
          500: '#d09422',
          600: '#b8741a',
          700: '#995518',
          800: '#7d441b',
          900: '#68391a',
        },
        cream: {
          50: '#FFF8E7',
          100: '#fff5de',
          200: '#ffeecc',
          300: '#ffe4b3',
          400: '#ffd999',
          500: '#ffce80',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
