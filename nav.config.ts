import { DefaultTheme } from "vitepress";

// #region nav
export default [
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
] as DefaultTheme.NavItem[]
// #endregion nav