/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader"', 'serif'],
      },
      colors: {
        'off-white': '#e8e8e8',
        'dark-gray': '#333333'
      },
    },
  },
  plugins: [],
}

