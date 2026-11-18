import type { Lang } from '../i18n/utils'

type Project = {
  name: string
  source: string
  description: Record<Lang, string>
  tags: string[]
}

type ProjectCategory = {
  name: Record<Lang, string>
  projects: Project[]
}

export const projectCategories: ProjectCategory[] = [
  {
    name: { en: 'Libraries', ru: 'Библиотеки' },
    projects: [
      {
        name: 'undevice',
        source: 'https://github.com/teplostanski/undevice',
        description: {
          en: 'Device, OS, and browser detection from User-Agent and CDN headers. Works in Node.js, browsers, and edge runtimes.',
          ru: 'Определение устройства, ОС и браузера по User-Agent и заголовкам CDN. Работает в Node.js, браузерах и edge-средах.',
        },
        tags: ['TypeScript', 'Node.js', 'Browser'],
      },
    ],
  },
  {
    name: { en: 'CLI', ru: 'CLI' },
    projects: [
      {
        name: 'wspie',
        source: 'https://github.com/teplostanski/wspie',
        description: {
          en: 'A WebSocket client and server toolkit for Node.js.',
          ru: 'Набор инструментов для создания WebSocket-клиентов и серверов на Node.js.',
        },
        tags: ['TypeScript', 'Node.js', 'WebSocket'],
      },
      {
        name: 'localbadge',
        source: 'https://github.com/teplostanski/localbadge',
        description: {
          en: 'A CLI for generating project badges locally.',
          ru: 'CLI для локальной генерации бейджей проекта.',
        },
        tags: ['TypeScript', 'CLI', 'Node.js'],
      },
    ],
  },
  {
    name: { en: 'REST APIs', ru: 'REST API' },
    projects: [
      {
        name: '200ok',
        source: 'https://github.com/teplostanski/200ok',
        description: {
          en: 'A test API for development and debugging: inspect your IP address, incoming headers, and the method and body of a request.',
          ru: 'Тестовый API для разработки и отладки: проверка IP-адреса, входящих заголовков, метода и тела запроса.',
        },
        tags: ['API', 'Node.js'],
      },
      {
        name: 'rand',
        source: 'https://github.com/teplostanski/rand',
        description: {
          en: 'A simple API for generating cryptographically secure random data in hex or Base64, with plain text and JSON responses.',
          ru: 'Простой API для генерации криптографически стойких случайных данных в hex или Base64 с ответами в виде текста или JSON.',
        },
        tags: ['API', 'Node.js'],
      },
    ],
  },
]
