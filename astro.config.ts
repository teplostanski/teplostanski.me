import sitemap from '@astrojs/sitemap'
import UnoCSS from '@unocss/astro'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'
import remarkGithubBlockquoteAlert from 'remark-github-blockquote-alert'
import { goatCounterIntegration } from './src/integrations/goat-counter'

// https://astro.build/config
export default defineConfig({
  site: 'https://teplostanski.me',
  output: 'static',
  prefetch: true,
  integrations: [
    UnoCSS(),
    sitemap(),
    goatCounterIntegration({
      endpoint: 'https://stats.teplostanski.me/count',
      allowLocal: import.meta.env.DEV,
      autoPageviews: true,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkGithubBlockquoteAlert],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
    ],
  },
})
