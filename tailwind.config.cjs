/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        stone: "#F7F5F1",
        "stone-deep": "#EFECE6",
        ink: "#0E1116",
        "ink-soft": "#2A3038",
        muted: "#5C6570",
        accent: "#1B4F72",
        "accent-hover": "#163F5B",
        line: "rgba(14, 17, 22, 0.12)",
        surface: "#FFFFFF",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
