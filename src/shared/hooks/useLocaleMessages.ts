'use client'

import { useCurrentLocale } from '@/shared/hooks/useCurrentLocale'

const messagesRu = {
  Header: {
    title: 'игорь теплостанский',
    links: {
      back: 'назад',
      home: 'на главную',
      projects: 'проекты',
      portfolio: 'портфолио',
    },
  },
  Home: {
    disclaimer: 'Всё в порядке! Css стили подгрузились ;3',
    about: {
      messages: {
        first:
          'Всем привет 👋 Меня зовут Игорь, я frontend developer. В свободное время разрабатываю <vite_plugin>vite-plugin-pretty-module-classnames</vite_plugin> и <moonbloom_theme>Moonbloom Theme</moonbloom_theme>.',
        second:
          'Мне нравится создавать приложения и проекты с открытым исходным кодом. Ниже я оставлю все необходимые ссылочки 👇',
      },
    },
  },

  ProjectsPage: {
    title: 'проекты',
    description:
      'Здесь собраны мои пет-проекты и эксперименты, не ограниченные только фронтендом',
  },

  PortfolioPage: {
    title: 'портфолио',
    description: 'Здесь собраны мои демонстрационные работы',
  },

  Common: {
    language: 'Язык',
    links: 'ссылки',
    more: 'подробнее...',
  },
}

const messagesEn = {
  Header: {
    title: 'igor teplostanski',
    links: {
      back: 'back',
      home: 'home',
      projects: 'projects',
      portfolio: 'portfolio',
    },
  },
  Home: {
    disclaimer: 'All good! CSS styles have loaded successfully ;3',
    about: {
      messages: {
        first:
          'Hi everyone 👋 My name is Igor, and I’m a frontend developer. In my free time, I develop <vite_plugin>vite-plugin-pretty-module-classnames</vite_plugin>, and work on <moonbloom_theme>Moonbloom Theme</moonbloom_theme>.',
        second:
          'I enjoy creating applications and open-source projects. Below, I’ve left all the necessary links for you 👇',
      },
    },
  },

  ProjectsPage: {
    title: 'projects',
    description:
      'A collection of my side projects and experiments beyond just frontend',
  },

  PortfolioPage: {
    title: 'portfolio',
    description: 'A collection of my demo projects',
  },

  Common: {
    language: 'Language',
    links: 'links',
    more: 'more...',
  },
}

const MESSAGE_MAP = {
  en: messagesEn,
  ru: messagesRu,
} as const

export const useLocaleMessages = () => {
  const { locale } = useCurrentLocale()
  return MESSAGE_MAP[locale]
}
