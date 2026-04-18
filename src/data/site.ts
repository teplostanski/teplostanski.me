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
    { name: 'email', href: 'mailto:migor@teplostanski.me' },
    { name: 'Vue Macros', href: 'https://vue-macros.dev' },
    { name: 'Elk', href: 'https://github.com/elk-zone/elk' },
  ],
  links: [
    { name: 'Email', href: 'mailto:igor@teplostanski.me' },
    { name: 'GitHub', href: 'https://github.com/teplostanski' },
    { name: 'Bluesky', href: 'https://bsky.app/profile/teplostanski.me' },
    { name: 'Telegram', href: 'https://t.me/teplostanski' },
    { name: 'Codepen', href: 'https://codepen.io/teplostanski' },
  ],
};

//export const friends: Friend[] = [
//  {
//    name: 'SXYAZI',
//    bio: 'Creator of Yazi.',
//    avatar: 'https://github.com/sxyazi.png',
//    href: 'https://sxyz.blog',
//  },
//  {
//    name: 'Gizmo',
//    bio: '🐟',
//    avatar: 'https://github.com/GizmoOAO.png',
//    href: 'https://blog.lumina.moe',
//  },
//  {
//    name: 'Cyunrei',
//    bio: '',
//    avatar: 'https://github.com/cyunrei.png',
//    href: 'https://blog.cyunrei.moe',
//  },
//  {
//    name: '云游君',
//    bio: '希望能成为一个有趣的人',
//    avatar: 'https://github.com/YunYouJun.png',
//    href: 'https://www.yunyoujun.cn',
//  },
//  {
//    name: 'Innei',
//    bio: '静かな森',
//    avatar: 'https://github.com/Innei.png',
//    href: 'https://innei.in',
//  },
//  {
//    name: 'XiaoMouz',
//    bio: 'A normal person',
//    avatar: 'https://github.com/XiaoMouz.png',
//    href: 'https://mou.best',
//  },
//  {
//    name: '炸鸡 🍗',
//    bio: '拥抱存在主义危机',
//    avatar: 'https://github.com/zlind0.png',
//    href: 'https://blog.lind0.space',
//  },
//  {
//    name: 'Doctor Wu',
//    bio: 'The Doctor will see you now.',
//    avatar: 'https://github.com/Doctor-wu.png',
//    href: 'https://doctorwu.me',
//  },
//  {
//    name: 'Libra',
//    bio: '你爱吃炒饭吗 我爱吃炒饭',
//    avatar: 'https://libra.wiki/avatar.png',
//    href: 'https://libra.wiki',
//  },
//  {
//    name: 'XCちゃん',
//    bio: '困困困困困困',
//    avatar: 'https://spacexc.net/logo.png',
//    href: 'https://spacexc.net',
//  },
//  {
//    name: '雪糕',
//    bio: '人對愛和永遠 應該有幻覺',
//    avatar: 'https://static.lyc.sh/2022/10/cropped-profile.png',
//    href: 'https://blog.lyc.sh',
//  },
//  {
//    name: 'Patrick.T',
//    bio: 'Patrick碎碎念',
//    avatar: 'https://cdn.tzih.top/avatar.jpg',
//    href: 'https://tzih.top',
//  },
//  {
//    name: { en: 'Angine', ru: 'Анжин' },
//    bio: 'By the power of language.',
//    avatar: 'https://angine.tech/images/avatar.png',
//    href: 'https://angine.tech',
//  },
//  {
//    name: 'SkyWT',
//    bio: '',
//    avatar: 'https://img.skywt.net/avatar.jpg',
//    href: 'https://skywt.net',
//  },
//  {
//    name: { en: 'Citron', ru: 'Citron' },
//    bio: '',
//    avatar: 'https://avatars.githubusercontent.com/u/45784494?v=4',
//    href: 'https://lcandy.me',
//  },
//  {
//    name: '余弦の博客',
//    bio:
//      'FE / ACG / 手工 / 深色模式强迫症 / INFP / 兴趣广泛养两只猫的老宅女 / remote',
//    avatar: 'https://blog.cosine.ren/img/avatar.webp',
//    href: 'https://blog.cosine.ren',
//  },
//  {
//    name: '溴化锂的笔记本',
//    bio: '醉后不知天在水，满船清梦压星河。',
//    avatar:
//      'https://gravatar.com/avatar/29d64df3ca2a9dac5a7fffa5372fb80fb3270ceb223de2af0c33cdc4b2cbe954?v=1687917579000&size=256&d=initials',
//    href: 'https://nvme0n1p.dev',
//  },
//  {
//    name: "Ray's Blog",
//    bio: 'Never say never.',
//    avatar: 'https://img.mk1.io/img/avatar.png',
//    href: 'https://mk1.io',
//  },
//  {
//    name: '愧怍',
//    bio: 'born to differ.',
//    avatar: 'https://kuizuo.me/img/logo.png',
//    href: 'https://kuizuo.me',
//  },
//  {
//    name: { en: "Shilin's Blog", ru: 'Блог Шилиня' },
//    bio: 'Great men are not born great, they grow great.',
//    avatar: 'https://github.com/SASUKE40.png',
//    href: 'https://edward40.com',
//  },
//]
