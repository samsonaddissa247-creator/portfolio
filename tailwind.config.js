/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        surface: "#12161F",
        surface2: "#1A2030",
        border: "#232A3B",
        accent: "#F2A93B",
        accent2: "#4FD1C5",
        text: "#E7E9EE",
        muted: "#8B93A7",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(242, 169, 61, 0.25)",
      },
    },
  },
  plugins: [],
}

