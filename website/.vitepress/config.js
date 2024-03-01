import { defineConfig } from 'vitepress'

const menuItems = [
  { text: 'Getting Started', link: '/getting-started' },
  { text: 'Creating Timestamps', link: '/creating-timestamps' },
  { text: 'Timestamp Components', link: '/timestamp-components' },
  { text: 'Formatting Timestamps', link: '/formatting-timestamps' },
  { text: 'Adjusting Timestamps', link: '/adjusting-timestamps' },
  { text: 'Comparing Timestamps', link: '/comparing-timestamps' },
  { text: 'Utility Functions', link: '/utility-functions' },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Badger Timestamp",
  description: "Date and Time Utilities",
  head: [['link', { rel: 'icon', href: '/badger-timestamp/images/badger3.svg' }]],
  base: '/badger-timestamp/',
  outDir: '../docs',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Badger Timestamp',
    logo: '/images/badger3.svg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Documentation',
        items: menuItems
      },
      { text: 'Reference', link: 'reference' },
    ],
    sidebar: menuItems,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/abw/badger-timestamp' }
    ],
    footer: {
      message: 'Built by Badgers',
      copyright: '©️ Andy Wardley 2022-2024'
    }
  }
})

