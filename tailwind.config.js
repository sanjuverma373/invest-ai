/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins, sans-serif",
        "orbitron": "Orbitron, sans-serif",
        "openSans": "Open_Sans, sans-serif"
      }
    },
  },
  plugins: [],
}
