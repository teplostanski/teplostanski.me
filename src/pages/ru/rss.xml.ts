import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { getRssOptions } from '../../i18n/pages'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts'))
    .filter((post) => post.id.startsWith('ru/'))
    .map((post) => {
      const slug = post.id.split('/').slice(1).join('/')
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/ru/posts/${slug}/`,
      }
    })

  const items = posts.toSorted(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime(),
  )

  return rss({
    ...getRssOptions('ru', context.site!),
    items,
  })
}
