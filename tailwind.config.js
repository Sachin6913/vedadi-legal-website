/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          black: "var(--color-bg)",
          charcoal: "var(--color-section)",
          card: "var(--color-card)",
          gold: "var(--color-gold)",
          muted: "var(--color-muted)",
          text: "var(--color-text)",
          border: "var(--color-border)"
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Inter"', "Arial", "sans-serif"]
      },
      boxShadow: {
        gold: "0 0 35px rgba(201, 168, 76, 0.18)"
      }
    }
  },
  plugins: []
};
