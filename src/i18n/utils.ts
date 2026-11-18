export type Lang = 'en' | 'ru'

export const getLangFromUrl = (url: URL): Lang => {
  return url.pathname.split('/')[1] === 'ru' ? 'ru' : 'en'
}
