export const languages = {
  en: 'English',
  ru: 'Русский',
} as const;

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
  en: {
    'nav.posts': 'Posts',
    'nav.links': 'Links',
    'nav.about': 'About',
    'lang.en': 'EN',
    'lang.ru': 'RU',
    'lang.switch': 'Switch language',
    'toggle.theme': 'Toggle dark mode',
    'toc.title': 'On this page',
    'notFound.title': 'Page Not Found',
    'notFound.description': 'The page you are looking for does not exist.',
    'notFound.backHome': 'Back to Home',
  },
  ru: {
    'nav.posts': 'Посты',
    'nav.links': 'Ссылки',
    'nav.about': 'Обо мне',
    'lang.en': 'EN',
    'lang.ru': 'RU',
    'lang.switch': 'Сменить язык',
    'toggle.theme': 'Переключить тему',
    'toc.title': 'Содержание',
    'notFound.title': 'Страница не найдена',
    'notFound.description': 'Страница, которую вы ищете, не существует.',
    'notFound.backHome': 'На главную',
  },
} as const;

export const localeByLang = {
  en: 'en-US',
  ru: 'ru-RU',
} as const;

export const nav: ReadonlyArray<{
  key: keyof (typeof ui)[keyof typeof ui];
  href: string;
  langs?: readonly string[];
}> = [
  { key: 'nav.posts', href: '/posts/' },
  { key: 'nav.about', href: '/about/' },
];

/* @unocss-include */
export const social: ReadonlyArray<{
  icon: string;
  href: string;
  label: string;
  localeHref?: Partial<Record<string, string>>;
}> = [
  {
    icon: 'i-simple-icons-github',
    href: 'https://github.com/teplostanski',
    label: 'GitHub',
  },
  {
    icon: 'i-simple-icons-bluesky',
    href: 'https://bsky.app/profile/teplostanski.me',
    label: 'Bluesky',
  },
  {
    icon: 'i-simple-icons-gnuprivacyguard',
    href: 'https://keys.openpgp.org/search?q=5628A324816DF3C202799215ABE46FF36CB6A99B',
    label: 'GPG 5628A324816DF3C202799215ABE46FF36CB6A99B',
  },
];
