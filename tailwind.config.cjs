const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(179, 39%, 40%)",
        secondary: "hsl(180, 38%, 77%)",
        bg: "hsl(180, 36%, 96%)"
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
