/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0D9488",
        secondary: "#8B5CF6",
        tertiary: "#14B8A6",
        darkGray: "#1F2937",
        lightGray: "#F9FAFB",
        dimTeal: "rgba(13, 148, 136, 0.1)",
        dimPurple: "rgba(139, 92, 246, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};