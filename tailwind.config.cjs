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
          light: "hsl(var(--tertiary-light))"
        },
        input: "hsl(var(--input))"
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        headings: ["Assistant", "sans-serif"]
      },
      fontSize: {
        /* "fluid-0": "clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)",
        "fluid-1": "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
        "fluid-2": "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)",
        "fluid-3": "clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)",
        "fluid-4": "clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)",
        "fluid-5": "clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)",
        "fluid-6": "clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)",
        "fluid-7": "clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)",
        "fluid-8": "clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem)" */
        "fluid-1": "clamp(1.89rem, calc(1.48rem + 2.03vw), 2.93rem)",
        "fluid-2": "clamp(3.27rem, calc(2.31rem + 4.79vw), 5.72rem)"
      },
      spacing: {
        "fluid-1": "clamp(1.31rem, calc(0.65rem + 3.29vw), 3.00rem)",
        "fluid-2": "clamp(1.31rem, calc(0.07rem + 6.22vw), 4.50rem)"
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
