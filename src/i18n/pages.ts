import { siteCopy, siteMeta } from '../data/site'
import { defaultLang } from './ui'
import { getUrlPrefix, type Lang } from './utils'

interface HomeCopy {
  title: string
  description: string
  name: string
  avatar: {
    avif: string
    fallback: string
  }
  tagline: string
  taglineCharDelay?: number
  nameSerif: boolean
  schema: {
    name: string
    url: string
  }
}

interface AboutCopy {
  title: string
  description: string
  heading: string
  paragraphs: (string | { text: string; href?: string }[])[]
}

interface PageCopy {
  home: Record<Lang, HomeCopy>
  about: Record<Lang, AboutCopy>
}

const authorName = siteCopy.author.displayName
const authorTagline = siteCopy.author.tagline
const authorTitleRole = siteCopy.author.titleRole

export const pageCopy: PageCopy = {
  home: {
    en: {
      title: `${authorName.en} - ${authorTitleRole.en}`,
      description: `${authorName.en} is an open-source enthusiast exploring front-end development.`,
      name: authorName.en,
      avatar: {
        avif: '/avatar.avif',
        fallback: '/avatar.jpg',
      },
      tagline: authorTagline.en,
      nameSerif: true,
      schema: {
        name: authorName.en,
        url: `${siteMeta.url}${getUrlPrefix('en')}`,
      },
    },
    ru: {
      title: `${authorName.ru} - ${authorTitleRole.ru}`,
      description: `${authorName.ru} — frontend-разработчик и автор open-source проектов.`,
      name: authorName.ru,
      avatar: {
        avif: '/avatar-ru.avif',
        fallback: '/avatar-ru.jpg',
      },
      tagline: authorTagline.ru,
      taglineCharDelay: 160,
      nameSerif: false,
      schema: {
        name: authorName.ru,
        url: `${siteMeta.url}${getUrlPrefix('ru')}`,
      },
    },
  },
  about: {
    en: {
      title: `About - ${authorName.en}`,
      description: `About ${authorName.en}, an open-source enthusiast exploring front-end development.`,
      heading: 'About',
      paragraphs: [
        `Hi, I'm ${siteCopy.author.firstName.en}. An open-source enthusiast exploring front-end development.`,
        [
          { text: 'Creator of ' },
          { text: 'rand', href: 'https://github.com/teplostanski/rand' },
          { text: ', ' },
          { text: '200ok', href: 'https://github.com/teplostanski/200ok' },
          { text: ', and ' },
          { text: 'undevice', href: 'https://github.com/teplostanski/undevice' },
          { text: '.' },
        ],
      ],
    },
    ru: {
      title: `Обо мне - ${authorName.ru}`,
      description: `О ${authorName.ru}, frontend-разработчике и авторе open-source проектов.`,
      heading: 'Обо мне',
      paragraphs: [
        `Привет, я ${siteCopy.author.firstName.ru}. Frontend-разработчик и автор open-source проектов.`,
        [
          { text: 'Автор проектов ' },
          { text: 'rand', href: 'https://github.com/teplostanski/rand' },
          { text: ', ' },
          { text: '200ok', href: 'https://github.com/teplostanski/200ok' },
          { text: ' и ' },
          { text: 'undevice', href: 'https://github.com/teplostanski/undevice' },
          { text: '.' },
        ],
      ],
    },
  },
}

export function getPageCopy<K extends keyof typeof pageCopy>(
  key: K,
  lang: Lang,
): (typeof pageCopy)[K][typeof defaultLang] {
  return (pageCopy[key][lang] ??
    pageCopy[key][defaultLang]) as (typeof pageCopy)[K][typeof defaultLang]
}
