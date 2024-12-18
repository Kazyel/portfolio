/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "off-w": "#f3e5d7",
        "acc-yellow": "#d58430",
        "acc-yellow-2": "#f09e46",
        "darkest": "#1f1a15",
      },
      fontFamily: {
        mont: "Montserrat Variable, sans-serif",
        exo: "Exo 2 Variable, sans-serif",
        jp: "Noto Sans JP, sans-serif",
      },
      screens: {
        "3xl": "1921px",
        "xs": "420px",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}