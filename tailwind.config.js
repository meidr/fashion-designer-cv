/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Bodoni Moda', 'serif'],
        'subheading': ['Tenor Sans', 'sans-serif'],
        'body': ['Raleway', 'sans-serif'],
      },
      colors: {
        'brand': {
          50: '#f5f8fd',
          100: '#eef4fb',
          200: '#c7d8f0',
          300: '#93b8e8',
          400: '#5a90d8',
          500: '#3b86ef',
          600: '#2b6cdb',
          700: '#2255b8',
          800: '#1e4697',
          900: '#1a3b7c',
          950: '#112653',
        }
      }
    },
  },
  plugins: [],
}
