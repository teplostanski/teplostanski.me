import { init } from 'goat-counter'
import type { ResolvedGoatCounterOptions } from './types'

export function setupGoatCounter(config: ResolvedGoatCounterOptions) {
  if (!config.enabled) return

  const gc = init({
    endpoint: config.endpoint,
    allowLocal: config.allowLocal,
    allowFrame: config.allowFrame,
    params: config.params as any, // сериализация params
  })

  // аналог $goatCounter в Nuxt
  ;(window as any).goatCounter = gc

  if (config.autoPageviews) {
    gc.pageview()

    document.addEventListener('astro:page-load', () => {
      gc.pageview()
    })

    // Кнопки браузера назад/вперёд
    window.addEventListener('popstate', () => {
      gc.pageview()
    })

    // Hash-навигация
    if (config.hashMode) {
      window.addEventListener('hashchange', () => {
        gc.pageview()
      })
    }
  }

  console.info('[astro-goat-counter] Initialized:', config.endpoint)
  console.info('hi!!')
}
