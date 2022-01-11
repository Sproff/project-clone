const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "Duplicate-Sans": ["'Duplicate Sans'", "'DM Sans'", "sans-serif"],
      "DM-Sans": ["DM Sans", "sans-serif"],
      "DM-Mono": ["DM Mono", "monospace"],
    },
    colors: {
      default: "#fffff",
      transparent: "transparent",
      white: {
        100: "#ffffff",
        200: "#f5f5f5",
        300: "rgba(63,63,63,1)",
        400: "rgba(96,96,96,1)",
        500: "rgba(245,245,245,1)",
        600: "rgba(181,181,181,1)",
        700: "rgba(229,229,229,1)",
      },
      black: {
        100: "#000000",
        200: "rgba(0, 0, 0, 0.9)",
        300: "rgba(32,32,32,1)",
      },
      blue: {
        100: "rgba(0,85,186,1)",
      },
      fontSize: {
        lg: "0.9375rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
    screens: {
      xsm: "0px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
