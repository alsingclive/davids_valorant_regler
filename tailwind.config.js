module.exports = {
  content: ["./src/**/*.{liquid,ts,js,html}"],
  theme: {
    extend: {
      colors: {
        "primary": {
          "light": "#6ee7b7", // emerald-300 / light
          DEFAULT: "#bf354a", // emerald-400 / regular
          "dark": "#ff4662", // emerald-500 / dark
        }
      }
    },
  },
  plugins: [],
}