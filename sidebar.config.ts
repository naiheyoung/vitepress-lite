import { DefaultTheme } from "vitepress";

export default {
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
} as DefaultTheme.Sidebar