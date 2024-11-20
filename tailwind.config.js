/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Deep blue
        secondary: "#818CF8", // Light blue
        accent: "#34D399", // Green
        danger: "#F87171", // Red
        background: "#F9FAFB", // Light gray
        card: "#FFFFFF", // White
        border: "#E5E7EB", // Light gray border
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
