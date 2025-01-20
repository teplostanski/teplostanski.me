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

  Console: {
    welcome: {
      title: 'Привет, мир!',
      description: 'Ценю твоё любопытство! 🌟',
      contribute:
        'Если тобой были найдены баги, пожалуйста, создай issue или напиши мне на почту.',
      donate:
        'Если есть возможность поддержать финансово, то это будет здорово! Ссылочка внизу 👇',
      issueTitle: 'Ишью',
      emailTitle: 'Почта',
      donateTitle: 'Поддержать',
      happyHacking: 'Happy hacking! 🚀',
    },
    piDay: {
      title: 'С днём числа π! 🥧',
      message:
        'Сегодня 14 марта, и это значит, что сегодня — Международный день числа π!\nПочему именно сегодня? Потому что 3.14 — это начало числа π!',
    },
    programmersDay: {
      title: 'С днём программиста! 💻',
      message:
        'Сегодня 256-й день года, и это значит, что сегодня — Международный день программиста!\n\nКоторый ты, как всегда, проводишь за компьютером! Выйди на улицу, подыши свежим воздухом! Твоя бледная кожа подсказывает, что тебе это очень нужно!\n\nА если ты не разработчик, а простой пользователь, то что ты тут делаешь? 🤨 В любом случае, теперь ты знаешь, какой сегодня день! Поздравь своего знакомого разработчика с его профессиональным праздником!',
    },
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

  Console: {
    welcome: {
      title: 'Hello, world!',
      description: 'I appreciate your curiosity! 🌟',
      contribute:
        'If you found any bugs, please create an issue or send me an email.',
      donate:
        'If you can support financially, that would be great! Link below 👇',
      issueTitle: 'Issue',
      emailTitle: 'Email',
      donateTitle: 'Donate',
      happyHacking: 'Happy hacking! 🚀',
    },
    piDay: {
      title: 'Happy π day! 🥧',
      message:
        'Today is March 14th, which means it’s International π Day!\nWhy exactly today? Because 3.14 — is the beginning of the number π!',
    },
    programmersDay: {
      title: 'Happy Programmer’s Day! 💻',
      message:
        'Today is the 256th day of the year, which means it’s International Programmer’s Day!\n\nWhich you, as always, spend at the computer! Go outside, get some fresh air! Your pale skin suggests you really need it!\n\nAnd if you’re not a developer but a regular user, what are you doing here? 🤨 Anyway, now you know what day it is! Congratulate your developer friend on their professional holiday!',
    },
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
