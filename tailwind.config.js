/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffc229",
        lightgray: "#f8f9fa",
        darkgray: "#343a40",
      },
    },
  },
  plugins: [],
};
