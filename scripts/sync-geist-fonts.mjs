import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import process from 'node:process'

const root = process.cwd()
const files = [
  [
    join(root, 'node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2'),
    join(root, 'public/fonts/geist/Geist-Variable.woff2'),
  ],
  [
    join(
      root,
      'node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2',
    ),
    join(root, 'public/fonts/geist/GeistMono-Variable.woff2'),
  ],
]

for (const [from, to] of files) {
  if (!existsSync(from)) throw new Error(`Missing source font file: ${from}`)
  mkdirSync(dirname(to), { recursive: true })
  copyFileSync(from, to)
}
