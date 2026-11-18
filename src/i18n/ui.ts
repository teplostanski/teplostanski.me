import type { Lang } from './utils'

export const ui = {
  en: {
    home: {
      greeting: 'Glad you stopped by! My name is Igor.',
      about:
        'I am an open-source enthusiast and mostly write TypeScript, building tools, REST APIs, CLIs, and web apps. You may have come across my projects, including wspie, 200ok, undevice, and others.',
    },
    navigation: {
      projects: 'Projects',
      links: 'Links',
      github: 'GitHub',
      bluesky: 'Bluesky',
    },
    projects: {
      title: 'Projects',
      linksLabel: 'Project links',
      tagsLabel: 'Tags',
      source: 'Source',
      docs: 'Docs',
    },
    notFound: {
      description: 'The page you are looking for could not be found.',
      homeLink: 'Back to home',
    },
  },
  ru: {
    home: {
      greeting: 'Рад, что заглянули! Меня зовут Игорь.',
      about:
        'Я open-source энтузиаст и в основном пишу на TypeScript: создаю tools, REST API, CLI и web apps. Возможно, уже знакомы с моими проектами: wspie, 200ok, undevice и другими.',
    },
    navigation: {
      projects: 'Проекты',
      links: 'Ссылки',
      github: 'GitHub',
      bluesky: 'Bluesky',
    },
    projects: {
      title: 'Проекты',
      linksLabel: 'Ссылки проекта',
      tagsLabel: 'Теги',
      source: 'Исходный код',
      docs: 'Документация',
    },
    notFound: {
      description: 'Похоже, такой страницы нет.',
      homeLink: 'На главную',
    },
  },
} satisfies Record<Lang, object>
