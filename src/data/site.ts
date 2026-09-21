import type { Lang } from '../i18n/utils'

type Localized<T> = Record<Lang, T>

interface AuthorSchema {
  '@type': 'Person'
  name: string
  url: string
  alternateName?: string
  sameAs?: readonly string[]
}

export const siteMeta = {
  domain: 'teplostanski.me',
  url: 'https://teplostanski.me',
} as const

export const siteCopy = {
  author: {
    canonicalName: 'Teplostanski Igor',
    alternateName: 'Игорь Теплостанский',
    displayName: {
      en: 'Teplostanski Igor',
      ru: 'Игорь Теплостанский',
    },
    firstName: {
      en: 'Igor',
      ru: 'Игорь',
    },
    tagline: {
      en: 'Open-source enthusiast',
      ru: 'Frontend-разработчик',
    },
    titleRole: {
      en: 'Open Source Enthusiast',
      ru: 'Frontend-разработчик',
    },
    sameAs: {
      en: [
        'https://github.com/teplostanski',
        'https://bsky.app/profile/teplostanski.me',
      ],
      ru: [
        'https://github.com/teplostanski',
        'https://bsky.app/profile/teplostanski.me',
      ],
    },
  },
} as const satisfies {
  author: {
    canonicalName: string
    alternateName: string
    displayName: Localized<string>
    firstName: Localized<string>
    tagline: Localized<string>
    titleRole: Localized<string>
    sameAs: Localized<readonly string[]>
  }
}

export function getAuthorSchema(
  lang: Lang,
  options: { includeAlternate?: boolean; includeSameAs?: boolean } = {},
): AuthorSchema {
  const includeAlternate = options.includeAlternate ?? lang === 'ru'
  const schema: AuthorSchema = {
    '@type': 'Person',
    name: siteCopy.author.canonicalName,
    url: siteMeta.url,
    ...(includeAlternate && { alternateName: siteCopy.author.alternateName }),
    ...(options.includeSameAs && { sameAs: siteCopy.author.sameAs[lang] }),
  }
  return schema
}

interface Link {
  name: string
  href: string
}

interface HomeLinks {
  links: Link[]
}

export const homeLinks: HomeLinks = {
  links: [
    { name: 'Email', href: 'mailto:contact@teplostanski.me' },
    { name: 'GitHub', href: 'https://github.com/teplostanski' },
    { name: 'Bluesky', href: 'https://bsky.app/profile/teplostanski.me' },
    { name: 'Telegram', href: 'https://t.me/teplostanski' },
    { name: 'Codepen', href: 'https://codepen.io/teplostanski' },
  ],
}
