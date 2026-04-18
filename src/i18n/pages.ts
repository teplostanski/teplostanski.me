import { siteCopy, siteMeta } from '../data/site'
import { defaultLang } from './ui'
import { getUrlPrefix, type Lang } from './utils'
import type { RSSOptions } from '@astrojs/rss'

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
  paragraphs: string[]
}

interface LinksCopy {
  title: string
  description: string
  heading: string
  subheading: string
}

interface PostsCopy {
  title: string
  description: string
  heading: string
}

interface PostCopy {
  backLabel: string
  titleSuffix: string
}

interface PageCopy {
  home: Record<Lang, HomeCopy>
  about: Record<Lang, AboutCopy>
  links: Record<Lang, LinksCopy>
  posts: Record<Lang, PostsCopy>
  post: Record<Lang, PostCopy>
}

const authorName = siteCopy.author.displayName
const authorTagline = siteCopy.author.tagline
const authorTitleRole = siteCopy.author.titleRole

export const pageCopy: PageCopy = {
  home: {
    en: {
      title: `${authorName.en} - ${authorTitleRole.en}`,
      description:
        `${authorName.en} is an open-source enthusiast exploring front-end development. Creator of tsdown, Vue Macros, and Elk. Core team member of Vue, Vite, and more.`,
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
      description:
        `${authorName.ru} — frontend-разработчик и автор open-source проектов.`,
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
      description:
        `About ${authorName.en}, an open-source enthusiast exploring front-end development.`,
      heading: 'About',
      paragraphs: [
        `Hi, I'm ${siteCopy.author.firstName.en}. An open-source enthusiast exploring front-end development.`,
        //'Creator of repattern, settime.ru, twoip',
      ],
    },
    ru: {
      title: `Обо мне - ${authorName.ru}`,
      description: `О ${authorName.ru}, frontend-разработчике и авторе open-source проектов.`,
      heading: 'Обо мне',
      paragraphs: [
        `Привет, я ${siteCopy.author.firstName.ru}. Frontend-разработчик и автор open-source проектов.`,
        //'Автор проектов repattern, settime.ru, twoip',
      ],
    },
  },
  links: {
    en: {
      title: `Links - ${authorName.en}`,
      description: `Friends and links from ${authorName.en}.`,
      heading: 'Links',
      subheading: 'Friends across the internet.',
    },
    ru: {
      title: `Ссылки - ${authorName.ru}`,
      description: `Друзья и полезные ссылки от ${authorName.ru}.`,
      heading: 'Ссылки',
      subheading: 'Люди и проекты из интернета.',
    },
  },
  posts: {
    en: {
      title: `Posts - ${authorName.en}`,
      description: `Blog posts by ${authorName.en}.`,
      heading: 'Posts',
    },
    ru: {
      title: `Посты - ${authorName.ru}`,
      description: `Блог-посты ${authorName.ru}.`,
      heading: 'Посты',
    },
  },
  post: {
    en: {
      backLabel: 'Back to posts',
      titleSuffix: authorName.en,
    },
    ru: {
      backLabel: 'Назад к постам',
      titleSuffix: authorName.ru,
    },
  },
}

export function getPageCopy<K extends keyof typeof pageCopy>(
  key: K,
  lang: Lang,
): (typeof pageCopy)[K][typeof defaultLang] {
  return (pageCopy[key][lang]
    ?? pageCopy[key][defaultLang]) as (typeof pageCopy)[K][typeof defaultLang]
}

export function getRssOptions(
  lang: Lang,
  site: URL,
): Pick<RSSOptions, 'title' | 'description' | 'site' | 'xmlns' | 'customData'> {
  const rssCopy = siteCopy.rss[lang]
  const prefix = getUrlPrefix(lang)
  const { avatar } = getPageCopy('home', lang)
  return {
    title: rssCopy.title,
    description: rssCopy.description,
    site,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: [
      `<language>${lang}</language>`,
      `<atom:link href="${siteMeta.url}${prefix}/rss.xml" rel="self" type="application/rss+xml"/>`,
      `<image>`,
      `  <url>${siteMeta.url}${avatar.fallback}</url>`,
      `  <title>${rssCopy.title}</title>`,
      `  <link>${siteMeta.url}${prefix}</link>`,
      `</image>`,
    ].join('\n'),
  }
}
