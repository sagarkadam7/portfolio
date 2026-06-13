/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10100f",
        bone: "#f3f0e8",
        paper: "#fbfaf6",
        muted: "#6a655b",
        ember: "#d24b35",
        signal: "#c8dc54",
        steel: "#5a8fbc",
      },
      fontFamily: {
        display: ["Arial", "Helvetica", "sans-serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 26px 70px rgba(16, 16, 15, 0.18)",
      },
    },
  },
  plugins: [],
};
