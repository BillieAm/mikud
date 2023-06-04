const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        text: {
          DEFAULT: "hsl(var(--text))",
          offset: "hsl(var(--text-offset))"
        },
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          light: "hsl(var(--accent-light))"
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          bg: "hsl(var(--tertiary-bg))"
        },
        input: "hsl(var(--input))"
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        headings: ["Assistant", "sans-serif"]
      },
      keyframes: {
        pageLoad: {
          from: {
            opacity: 0,
            transform: "rotateX(-10deg)"
          },
          to: {
            opacity: 1,
            transform: "rotateX(0)"
          }
        }
      },
      animation: {
        pageLoad: "pageLoad 0.75s"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};
