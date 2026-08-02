// @ts-check
import { defineConfig } from 'astro/config'

// Static output. Deploys to Cloudflare Pages with zero config:
//   Build command:  npm run build
//   Output dir:     dist
// No adapter needed; every route is prerendered to HTML.
export default defineConfig({
  output: 'static',
  site: 'https://bishalhona.nuraheals.com',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
})
