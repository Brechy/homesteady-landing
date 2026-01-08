/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e8ebe3',
          200: '#d3d9c9',
          300: '#b5c0a5',
          400: '#96a580',
          500: '#5D7A5D',
          600: '#4a6249',
          700: '#3d4f3d',
          800: '#344134',
          900: '#2d372d',
        },
        terracotta: {
          50: '#fdf6f3',
          100: '#fceae3',
          200: '#f9d5c7',
          300: '#f4b8a1',
          400: '#ec9070',
          500: '#C4704E',
          600: '#b55a3a',
          700: '#97472f',
          800: '#7c3d2b',
          900: '#673628',
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
          50: '#FDFBF7',
          100: '#faf6ed',
          200: '#f4ebda',
          300: '#ebdbc0',
          400: '#dfc59f',
          500: '#d3ae82',
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
