/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: '#c53030', dark: '#9b2c2c' },
        surface: '#f8f6f3',
        border: '#e5e0db',
        muted: '#6b7280',
      },
      fontFamily: {
        sans: ['Geist Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Geist Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
