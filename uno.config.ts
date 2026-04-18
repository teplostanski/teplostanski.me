import { defineConfig, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
  safelist: ['i-simple-icons-rss'],
  presets: [
    presetWind3(),
    presetIcons(),
  ],
  theme: {
    fontFamily: {
      sans: 'Geist, system-ui, sans-serif',
      serif: 'Geist, system-ui, sans-serif',
      mono: '"Geist Mono", ui-monospace, SFMono-Regular, monospace',
    },
  },
})
