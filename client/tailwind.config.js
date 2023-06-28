/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#0860FB",
        cGrey: "#39393A",
        cGreyLit: "#666666",
        cWhiteMix: "#F4F5F6",
      },
    },
  },
  plugins: [],
}

