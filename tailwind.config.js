/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        primary: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#262626',
        secandary:'#6D6D6D',
        gray:'#C4C4C4'
      },
    },
  },
  plugins: [],
}

