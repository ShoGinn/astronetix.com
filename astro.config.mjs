import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://astronetix.com',
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});