/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0F',
        'cyan-accent': '#00E5FF',
        'orange-accent': '#FF6B35',
        surface: '#12121A',
        'text-primary': '#F0F0F5',
        'text-secondary': '#8888A0',
        'border-cyan': 'rgba(0, 229, 255, 0.15)',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
