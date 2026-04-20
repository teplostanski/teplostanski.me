import type { Lang } from '../i18n/utils';

type Localized<T> = Record<Lang, T>;
export type LocalizedString = string | Localized<string>;

interface AuthorSchema {
  '@type': 'Person';
  name: string;
  url: string;
  alternateName?: string;
  sameAs?: readonly string[];
}

export const siteMeta = {
  domain: 'teplostanski.me',
  url: 'https://teplostanski.me',
  //analytics: {
  //  domain: 'teplostanski.me',
  //  scriptSrc: 'https://analytics.teplostanski.me/js/script.js',
  //},
} as const;

export const siteCopy = {
  author: {
    canonicalName: 'Igor Teplostanski',
    alternateName: 'Игорь Теплостанский',
    displayName: {
      en: 'Igor Teplostanski',
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
  rss: {
    en: {
      title: 'Igor Teplostanski',
      description:
        'Blog posts by Igor Teplostanski, an open-source enthusiast.',
    },
    ru: {
      title: 'Igor Teplostanski',
      description: 'Блог Игоря Теплостанского.',
    },
  },
} as const satisfies {
  author: {
    canonicalName: string;
    alternateName: string;
    displayName: Localized<string>;
    firstName: Localized<string>;
    tagline: Localized<string>;
    titleRole: Localized<string>;
    sameAs: Localized<readonly string[]>;
  };
  rss: Localized<{ title: string; description: string }>;
};

export function getAuthorSchema(
  lang: Lang,
  options: { includeAlternate?: boolean; includeSameAs?: boolean } = {},
): AuthorSchema {
  const includeAlternate = options.includeAlternate ?? lang === 'ru';
  const schema: AuthorSchema = {
    '@type': 'Person',
    name: siteCopy.author.canonicalName,
    url: siteMeta.url,
    ...(includeAlternate && { alternateName: siteCopy.author.alternateName }),
    ...(options.includeSameAs && { sameAs: siteCopy.author.sameAs[lang] }),
  };
  return schema;
}

interface Link {
  name: string;
  href: string;
}

export interface Friend {
  name: LocalizedString;
  bio: LocalizedString;
  avatar: LocalizedString;
  href: LocalizedString;
}

interface HomeLinks {
  creator: Link[];
  links: Link[];
}

export const homeLinks: HomeLinks = {
  creator: [
    //{ name: 'Vue Macros', href: 'https://vue-macros.dev' },
    //{ name: 'Elk', href: 'https://github.com/elk-zone/elk' },
  ],
  links: [
    { name: 'Email', href: 'mailto:igor@teplostanski.me' },
    { name: 'GitHub', href: 'https://github.com/teplostanski' },
    { name: 'Bluesky', href: 'https://bsky.app/profile/teplostanski.me' },
    { name: 'Telegram', href: 'https://t.me/teplostanski' },
    { name: 'Codepen', href: 'https://codepen.io/teplostanski' },
  ],
};
