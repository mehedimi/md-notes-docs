import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MD Notes",
  description: "A note taking apps",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Features',
        items: [
          { text: 'Connections', link: '/connections' },
          { text: 'Notes', link: '/notes' },
          { text: 'Tags', link: '/tags' },
          { text: 'Export/Import', link: '/export-import' },
          { text: 'Dark Mode', link: '/dark-mode' }
        ]
      }
    ],
  }
})
