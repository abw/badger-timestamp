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
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 512 428"><path d="M315 260c4 5 4 15-2 19 0-5-2-12-5-15-1-3-7-8-13-9 5-3 16-1 20 5Zm168 106c1 5-19 2-19 18 0 8 3 13-1 14-5 1-6-4-7-11-2-14 8-19 18-21 8-3 8-2 9 0ZM318 251l-2-1c-15-7-33-3-40 10-5 10-2 22 8 31l-12-6c-20-16-24-44-19-50 4-6 34-10 54 6l11 10ZM297 40c-3 2-11-11-23-9-8 1-12-2-7-5 13-11 37 10 30 14ZM126 74c-12-8-26-12-41-8-11 3-18 10-22 19l-5 1c-10 1-20 4-28 6 23-32 52-43 80-43h2l1-2c1-9-4-18-18-25 31-7 70 0 90 12l3 1 1-3c1-4 1-15-7-25 39 7 69 20 92 36 43 37 66 84 85 130 21 49 38 96 73 123l2 2 54 49 8 7c-6 0-12 2-21 4-28 6-29 18-26 39 2 10 6 15 13 16-25 7-39 12-70 6a535 535 0 0 1-111-35c-18-8-30-18-36-29l7-4a2 2 0 0 0-3-4c-4 2-9 7-19 6a2 2 0 0 0 0 5l11-2c5 12 16 22 32 30-32 11-60 3-85-11-27-16-51-40-72-57-18-14-34-24-49-22-10 1-19 7-27 19-15-31 4-62 23-82l2-2-3-1c-18-12-38-5-52 11-1-13 5-31 14-47 10-17 23-32 37-37 90-17 133 58 178 124 27 38 86 83 199 120-7-19-4-29 1-37-27-13-61-34-83-74-60-109-87-187-174-209-15-4-35-8-56-7Zm0 18c-2 10-31-18-37-3-10 28-20 12-18 4 13-39 56-10 55-1Z" style="fill:#fff"/><path d="m62 90-3 1c-13 1-27 5-34 7l-6 1 3-5c25-36 56-49 86-50 1-8-6-15-21-21l-7-2 7-2c32-10 74-3 98 9 0-6-3-15-11-22l-6-6 8 1c33 5 60 14 82 26 2-5 7-10 17-9 25 2 30 14 31 38 32 27 54 65 71 104 15 34 27 69 38 97l15 29 8 9c10 11 30 27 53 48l12 12c4 2 6 5 7 12a16 16 0 0 1 1 3l1 8c1 12-3 27-21 32a228 228 0 0 1-19 5c-27 11-45 16-81 9-52-10-101-30-112-35-35 14-66 6-94-10-27-16-51-40-72-57-9-7-17-13-24-16-8-4-15-6-22-5-9 1-17 7-26 21l-2 3-2-4c-18-33 0-67 20-89-17-9-35 0-47 16l-3 3-1-4c-4-13 2-35 14-56 7-11 16-23 26-30-15 4-30 10-46 19 16-44 38-70 61-86l1-4Zm253 170c-4-6-15-8-20-5 6 1 12 6 13 9 3 3 5 10 5 15 6-4 6-14 2-19Zm168 106c-1-2-1-3-9 0-10 2-20 7-18 21 1 7 2 12 7 11 4-1 1-6 1-14 0-16 20-13 19-18ZM318 251l-11-10c-20-16-50-12-54-6-5 6-1 34 19 50l12 6c-10-9-13-21-8-31 7-13 25-17 40-10l2 1ZM297 40c7-4-17-25-30-14-5 3-1 6 7 5 12-2 20 11 23 9ZM126 74c21-1 41 3 56 7 87 22 114 100 174 209 22 40 56 61 83 74-5 8-8 18-1 37-113-37-172-82-199-120-45-66-88-141-178-124-14 5-27 20-37 37-9 16-15 34-14 47 14-16 34-23 52-11l3 1-2 2c-19 20-38 51-23 82 8-12 17-18 27-19 15-2 31 8 49 22 21 17 45 41 72 57 25 14 53 22 85 11-16-8-27-18-32-30l-11 2a2 2 0 0 1 0-5c10 1 15-4 19-6a2 2 0 0 1 3 4l-7 4c6 11 18 21 36 29l1 1c14 6 61 25 110 34 31 6 45 1 70-6-7-1-11-6-13-16-3-21-2-33 26-39 9-2 15-4 21-4l-8-7-54-49-2-2c-35-27-52-74-73-123-19-46-42-93-85-130-23-16-53-29-92-36 8 10 8 21 7 25l-1 3-3-1c-20-12-59-19-90-12 14 7 19 16 18 25l-1 2h-2c-28 0-57 11-80 43a248 248 0 0 1 33-7c4-9 11-16 22-19 15-4 29 0 41 8Zm0 18c1-9-42-38-55 1-2 8 8 24 18-4 6-15 35 13 37 3Z" style="fill: #000"/></svg>'
        },
        link: 'https://badgerpower.com/'
      },
      { icon: 'github', link: 'https://github.com/abw/badger-timestamp' }
    ],
    footer: {
      message: '<a href="https://badgerpower.com/" target="_blank" rel="noreferrer">Built by Badgers</a>',
      copyright: '©️ Andy Wardley 2022-2024'
    }
  }
})

