import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import { goatCounter } from 'goat-counter/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://teplostanski.me',
  output: 'static',
  prefetch: true,
  integrations: [
    sitemap(),
    goatCounter({
      endpoint: 'https://personal-site-stats.teplostanski.me/count',
      allowLocal: import.meta.env.DEV,
      autoPageviews: true,
    }),
  ],
})
