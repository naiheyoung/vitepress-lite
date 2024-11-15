import { defineConfig } from 'vitepress'
import themeConfig from '../theme.config'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  title: "vitepress-lite",
  description: "the document template",
  head: [
    [
      'link', {
        rel: 'icon',
        href: '/logo.svg'
      }
    ]
  ],
  themeConfig,
  metaChunk: true,
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    image: {
      lazyLoading: true
    },
    lineNumbers: true
  },
  rewrites: {
    'pages/(.*).md': '(.*).md',
    'pages/:dir/(.*).md': ':dir/(.*).md'
  },
  vite: {
    plugins: [
      UnoCSS()
    ]
  }
})
