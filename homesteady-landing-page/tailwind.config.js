/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Coral (CTAs, buttons)
        coral: {
          50: '#fff5f2',
          100: '#ffe8e2',
          200: '#ffd4c8',
          300: '#ffb39e',
          400: '#f88a6a',
          500: '#f26641',
          600: '#e04d28',
          700: '#bc3c1d',
          800: '#9b341c',
          900: '#80301d',
        },
        // Accent - Forest Green
        forest: {
          50: '#ecfdf3',
          100: '#d1fae1',
          200: '#a6f4c8',
          300: '#6de8a8',
          400: '#34d484',
          500: '#288326',
          600: '#1c6b1e',
          700: '#18571a',
          800: '#174518',
          900: '#143916',
        },
        // Highlight - Mint
        mint: {
          50: '#edfff5',
          100: '#d5ffea',
          200: '#aeffd8',
          300: '#8ce2a7',
          400: '#51cf7d',
          500: '#29b35c',
          600: '#1c9348',
          700: '#1a733c',
          800: '#195b33',
          900: '#174b2c',
        },
        // Background - Warm Cream
        cream: {
          50: '#fdf9f3',
          100: '#faf4ea',
          200: '#f5ead6',
          300: '#eedcbc',
          400: '#e5c89a',
          500: '#ddb87d',
        },
        // Text - Navy
        navy: {
          50: '#e6eef5',
          100: '#ccdded',
          200: '#99bcdb',
          300: '#669bc9',
          400: '#337ab7',
          500: '#0058a5',
          600: '#004684',
          700: '#003563',
          800: '#011c31',
          900: '#00111d',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Poppins', 'system-ui', 'sans-serif'],
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

