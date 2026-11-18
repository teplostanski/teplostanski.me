import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import { goatCounter } from 'goat-counter/astro'
import readableClassnames from 'vite-plugin-readable-classnames'

// https://astro.build/config
export default defineConfig({
  site: 'https://teplostanski.me',
  output: 'static',
  prefetch: true,
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: {
    enabled: false,
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
  vite: {
    plugins: [readableClassnames()],
  },
  integrations: [
    sitemap(),
    goatCounter({
      endpoint: 'https://personal-site-stats.teplostanski.me/count',
      allowLocal: import.meta.env.DEV,
      autoPageviews: true,
    }),
  ],
})
