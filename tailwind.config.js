// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite",
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },

        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
    },
  },
  plugins: [require('daisyui'),],
}
