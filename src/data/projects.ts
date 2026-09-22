import type { Lang } from '../i18n/utils'

interface Project {
  name: string
  href: string
  description: Record<Lang, string>
}

export const projects: Project[] = [
  {
    name: 'rand',
    href: 'https://github.com/teplostanski/rand',
    description: {
      en: 'A simple API for generating cryptographically secure random data in hex or Base64, with plain text and JSON responses.',
      ru: 'Простой API для генерации криптографически стойких случайных данных в hex или Base64 с ответами в виде текста или JSON.',
    },
  },
  {
    name: '200ok',
    href: 'https://github.com/teplostanski/200ok',
    description: {
      en: 'A test API for development and debugging: inspect your IP address, incoming headers, and the method and body of a request.',
      ru: 'Тестовый API для разработки и отладки: проверка IP-адреса, входящих заголовков, метода и тела запроса.',
    },
  },
  {
    name: 'undevice',
    href: 'https://github.com/teplostanski/undevice',
    description: {
      en: 'Device, OS, and browser detection from User-Agent and CDN headers. Works in Node.js, browsers, and edge runtimes.',
      ru: 'Определение устройства, ОС и браузера по User-Agent и заголовкам CDN. Работает в Node.js, браузерах и edge-средах.',
    },
  },
]
