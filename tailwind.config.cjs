/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#030712",
        secondary: "#94a3b8",
        tertiary: "#0b1220",
        "black-100": "#0a1020",
        "black-200": "#050814",
        "white-100": "#f8fafc",
      },
      boxShadow: {
        card: "0px 25px 80px -20px rgba(8, 22, 39, 0.8)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.1), transparent 45%), radial-gradient(circle at 80% 0%, rgba(139, 92, 246, 0.1), transparent 35%), radial-gradient(circle at 50% 80%, rgba(45, 212, 191, 0.08), transparent 40%)",
      },
    },
  },
  plugins: [],
};
