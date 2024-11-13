# Quick Start

## Directory Structure

```md
.
├─ .vitepress
│ ├─ theme
│ └─ config.ts
├─ public
│ ├─ images
│ ├─ css
│ └─ ...
├─ pages
│ ├─ guide/index.md
│ └─ index.md
├─ theme.config.ts
├─ nav.config.ts
├─ sidebar.config.ts
└─ social.config.ts
```

- `.vitepress/theme` You can configure the theme through this file.
- `.vitepress/config.ts` Vitepress main config
- `public/*` Static Resource Directory
- `pages` If you are familiar with nuxt, you must be familiar with this directory.
- `theme.config.ts` Default theme configuration. [Config](https://vitepress.dev/zh/reference/default-theme-config)
- `nav.config.ts` Navigation bar configuration
- `sidebar.config.ts` Sidebar Configuration
- `social.config.ts` Social Links Configuration. For example: [Github](https://github.com)、 [Twitter](https://x.com)

## Routing

> The routing rules of `vitepress-lite` are basically the same as those of [nuxt](https://nuxt.com/docs/guide/directory-structure/pages)

```
pages/index.md                -->   /
pages/guide/index.md          -->   /guide
pages/guide/quick-start.md    -->   /guide/quick-start
```

**Adhering to the principle of convention over configuration, even if the pages directory exists, it still does not affect the routing mapping of the `.md` file in the root directory**

## Change Site Logo

```ts
// theme.config.ts
export default {
  logo: 'your logo file',
  ...
}
```

<img src="/images/snippet-site-logo.png" alt="snippet-site-logo.png" style="zoom: 80%" />

## Change Site Title

```ts
// theme.config.ts
export default {
  siteTitle: 'your site title',
  ...
}
```

<img src="/images/snippet-site-title.png" alt="snippet-site-title.png" style="zoom: 80%" />

## Article update badge

```ts
// theme.config.ts
export default {
  ...
  lastUpdated: {
    text: 'Show Text',
    formatOptions: {
      dateStyle: 'full' | 'long' | 'medium' | default 'short',
      timeStyle: 'full' | 'long' | 'medium' | default 'short'
    }
  },
  ...
}
```

- `full` yyyy 年 MM 月 dd 日 Week 中国标准时间 HH:mm:ss
- `long` yyyy 年 MM 月 dd 日 GMT+8 HH:mm:ss
- `medium` yyyy 年 MM 月 dd 日 HH:mm:ss
- `short` yyyy/MM/dd HH:mm
