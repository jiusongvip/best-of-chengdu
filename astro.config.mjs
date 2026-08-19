import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
  site: 'https://www.best-of-chengdu.com',
  trailingSlash: 'always',
});
