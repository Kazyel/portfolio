/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      mont: "Montserrat, sans-serif",
    },
    extend: {
      colors: {
        "off-w": "#f3e5d7",
        "acc-yellow": "#d58430",
        "acc-yellow-2": "#f09e46",
      },
    },
  },
  plugins: [],
};
