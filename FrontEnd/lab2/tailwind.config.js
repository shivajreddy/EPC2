/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      textColor: {
        skin: {
          base: 'var(--textColor)',
          base2: 'var(--color-text-base)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--bgColor)',
        }
      },
    },
  },
  plugins: [],
}