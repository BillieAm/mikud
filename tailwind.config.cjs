const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "green-logo": "hsl(179, 39%, 40%)",
        "btn-green": "hsl(180, 38%, 77%)",
        "bg-green": "hsl(180, 36%, 96%)",
        "dark-blue": "hsl(214, 70%, 29%)",
        "light-blue": "hsl(207, 54%, 52%)",
        aqua: "hsl(162, 100%, 56%)",
        "text-color": "hsl(225, 62%, 10%)",
        salmon: "hsl(0, 94%, 80%)"
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        headings: ["Assistant", "sans-serif"]
      }
    }
  },
  plugins: []
};
