import { DefaultTheme } from 'vitepress'
interface ThemeConfig extends DefaultTheme.Config { }

export default {
  logo: '/logo.svg',
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/guide' },
    {
      text: 'Other', items: [
        {
          text: 'MarkdownExamples',
          link: '/markdown-examples'
        }
      ]
    },
  ],
  sidebar: {
    '/guide': [
      {
        text: 'Example',
        items: [
          {
            text: 'Item 1',
          },
          {
            text: 'Item 2'
          }
        ]
      }
    ],
    'markdown-examples': [
      {
        text: 'Other🚀',
        items: [
          {
            text: 'Guide',
            link: '/guide/'
          }
        ]
      }
    ]
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/naiheyoung/vitepress-lite'
    }
  ],
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