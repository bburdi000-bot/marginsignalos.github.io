/** @type {import('tailwindcss').Config} */
// Static build that replaces the cdn.tailwindcss.com Play CDN.
// Theme is a superset of the inline tailwind.config blocks that were on every page.
module.exports = {
  content: ["./*.html", "./blog/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        brand: {
          bg: "#F8FAFC",
          navy: "#0F172A",
          orange: "#F97316",
          muted: "#64748B",
          border: "#E2E8F0",
          dark: "#020617",
        },
      },
      backgroundImage: {
        "grid-light": `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23e2e8f0' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      },
      animation: {
        loadingBar: "loadingBar 1.8s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
      },
      keyframes: {
        loadingBar: {
          "0%": { width: "0%", opacity: "1" },
          "70%": { width: "100%", opacity: "1" },
          "100%": { width: "100%", opacity: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
