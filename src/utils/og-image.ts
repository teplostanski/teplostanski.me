import type { Buffer } from 'node:buffer'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import { Resvg } from '@resvg/resvg-js'
import satori, { type Font } from 'satori'
import { siteCopy, siteMeta } from '../data/site'

interface FontSource extends Pick<Font, 'name' | 'weight' | 'style' | 'lang'> {
  path: string
}

const root = process.cwd()

const FONT_SOURCES: FontSource[] = [
  {
    name: 'Geist',
    weight: 400,
    style: 'normal',
    path: join(
      root,
      'node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf',
    ),
  },
  {
    name: 'Geist',
    weight: 600,
    style: 'normal',
    path: join(
      root,
      'node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf',
    ),
  },
]

let fontsCache: Font[] | undefined
let avatarDataUrl: string | undefined

function ensureFonts() {
  const fonts: Font[] = []
  for (const source of FONT_SOURCES) {
    const path = source.path
    if (!existsSync(path)) throw new Error(`Font file was not found: ${path}`)
    fonts.push({
      name: source.name,
      data: readFileSync(path),
      weight: source.weight,
      style: source.style,
    })
  }
  return fonts
}

function getFonts() {
  if (!fontsCache) {
    fontsCache = ensureFonts()
  }
  return fontsCache
}

function getAvatarDataUrl() {
  if (!avatarDataUrl) {
    const avatarPath = join(root, 'public/avatar.jpg')
    const avatarData = readFileSync(avatarPath)
    avatarDataUrl = `data:image/jpeg;base64,${avatarData.toString('base64')}`
  }
  return avatarDataUrl
}

export async function renderDefaultOgImage(): Promise<Buffer> {
  const fonts = getFonts()

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #fafaf9 0%, #e7e5e4 100%)',
          fontFamily: 'Geist, Noto Sans',
        },
        children: [
          {
            type: 'img',
            props: {
              src: getAvatarDataUrl(),
              width: 168,
              height: 168,
              style: {
                borderRadius: '84px',
                border: '3px solid rgba(168, 162, 158, 0.3)',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                marginTop: '16px',
                fontSize: '68px',
                lineHeight: 1.05,
                fontWeight: 600,
                color: '#1c1917',
                letterSpacing: '-0.02em',
              },
              children: siteCopy.author.canonicalName,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                marginTop: '4px',
                fontSize: '32px',
                lineHeight: 1.2,
                fontWeight: 400,
                color: '#a8a29e',
              },
              children: siteCopy.author.tagline.en,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                marginTop: '8px',
                fontSize: '26px',
                fontWeight: 400,
                color: '#78716c',
                letterSpacing: '0.05em',
              },
              children: siteMeta.domain,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts,
    },
  )

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  })
  const png = resvg.render().asPng()
  return png
}
