// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures it scans your React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B1010FF",
        light: "#ffffff",
        dark: "#111111",
        "dark-rgba": "rgba(0, 0, 0, 0.4)",
        "dark-prgba": "rgba(0, 0, 0, 0.8)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
