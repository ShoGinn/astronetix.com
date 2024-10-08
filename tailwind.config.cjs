import tailwindcssFluidType from 'tailwindcss-fluid-type';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        custom: ['var(--font-ethnocentric)', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      textColor: {
        default: 'var(--color-text)',
        offset: 'var(--color-text-offset)',
      },
      backgroundColor: {
        default: 'var(--color-background)',
        offset: 'var(--color-background-offset)',
      },
      borderColor: {
        default: 'var(--color-border)',
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [tailwindcssFluidType],
};
