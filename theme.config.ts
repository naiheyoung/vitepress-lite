import { DefaultTheme } from 'vitepress'
interface ThemeConfig extends DefaultTheme.Config { }
import nav from './nav.config'
import sidebar from './sidebar.config'
import socialLinks from './social.config'

export default {
  logo: '/logo.svg',
  nav,
  sidebar,
  socialLinks,
  footer: {
    copyright: `
    Copyright &copy; 2024
    <a href="https://github.com/naiheyoung">Naihe</a>
    All Rights Reserved.`
  },
  lastUpdated: {
    text: 'Updated at',
  },
  externalLinkIcon: true,
  search: {
    provider: 'local'
  },
  outline: {
    level: [2, 4],
    label: 'Table of contents😊'
  }
} as ThemeConfig