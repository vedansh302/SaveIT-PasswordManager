/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Add your existing text-gradient animation
        'text-gradient': 'text-gradient 5s linear infinite',
        // Add the new background-shine animation
        'background-shine': 'background-shine 3.5s linear infinite',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      keyframes: {
        // Add your existing text-gradient keyframes
        'text-gradient': {
          'to': {
            backgroundPosition: '200% center',
          },
        },
        // Add the new background-shine keyframes
        'background-shine': {
          'from': {
            backgroundPosition: '0 0',
          },
          'to': {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  plugins: [],
}
