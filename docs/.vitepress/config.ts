import { defineConfig } from 'vitepress'

import { module, guide, about } from './sidebar'

import mdEnhance from './mdEnhance/index'

export default defineConfig({
  lang: 'zh-CN',

  title: 'SoraBot 文档',
  description: '林汐食用文档',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.png' }],
    ['script', { src: 'https://cdn.bootcdn.net/ajax/libs/mermaid/10.3.0/mermaid.min.js' }]
  ],

  themeConfig: {
    i18nRouting: true,
    logo: '/logo.jpg',
    nav: nav(),
    sidebar: {
      '/module/': module,
      '/guide/': guide,
      '/about/': about
    },
    editLink: {
      pattern: 'https://github.com/netsora/SoraBot-website/edit/remake/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/netsora/SoraBot-website' }],
    footer: {
      message: 'AGPL-3.0 License',
      copyright: 'Copyright © 2023 Sora Network'
    },
    lastUpdatedText: '上次更新',
    // algolia: {
    //   appId: 'VA229YZAO1',
    //   apiKey: '91fa3eb8adfd68b9adda9a7495c45944',
    //   indexName: 'graiax'
    // },
    outlineTitle: 'On this page',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '黑暗模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部 ▲'
  },

  transformHead({ assets }) {
    // adjust the regex accordingly to match your font
    const HarmonySansFile = assets.find(() => /HarmonyOS_Sans_SC\.woff2/)
    if (HarmonySansFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: HarmonySansFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }
  },

  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true,
    config: mdEnhance
  }
})

function nav() {
  return [
    { text: '首页', link: '/home', activeMatch: '/home' },
    { text: '模块列表', link: '/module/index', activeMatch: '/module/index' },
    { text: '开发指南', link: '/guide/before/prepare', activeMatch: '/guide/before/prepare' },
    {
      text: '关于我们',
      items: [
        { text: '关于', link: '/about/about'},
        { text: '贡献指南', link: '/about/contribute'},
        { text: '赞助', link: 'https://afdian.net/@netsora', target: '_blank'}
    ]
    }
  ]
}
