// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ore-codes.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.graphassets.com',
    }],
  },
  env: {
    schema: {
      HYGRAPH_ENDPOINT: envField.string({ context: "server", access: "public" }),
      SITE_URL: envField.string({ context: "server", access: "public", default: "https://ore-codes.github.io" }),
    }
  }
});
