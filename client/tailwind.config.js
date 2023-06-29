/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#0861FA",
        cGrey: "#39393A",
        cGreyLit: "#666666",
        cWhiteMix: "#F4F5F6",
      },
    },
  },
  plugins: []
}