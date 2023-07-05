/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'main-orange' : '#FF5403',
        'light-orange' : '#FFEEE5'
      }
    },
  },
  plugins: [],
}

