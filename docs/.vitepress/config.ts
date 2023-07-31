import { defineConfig } from 'vitepress'

import mdEnhance from './mdEnhance/index'

export default defineConfig({
  lang: 'zh-CN',
  title: '林汐の文档',
  description: '基于 Nonebot2 和 go-cqhttp 开发，超可爱的林汐酱',

  lastUpdated: true,

  head: [
    ['link', { rel: 'shortcut icon', href: 'https://raw.githubusercontent.com/netsora/SoraBot/master/resources/logo.jpg' }],
    ['script', { src: 'https://cdn.bootcdn.net/ajax/libs/mermaid/9.1.7/mermaid.min.js' }],
  ],

  themeConfig: {
    logo: './logo.jpg',
    nav: [
      { text: '首页', link: '/home' },
      { text: '模块列表', link: '/module/' },
      { text: '开发指南', link: '/develop/forward/prepare' },
      {
        text: '关于我们',
        items: [
            { text: '关于', link: '/about/about'},
            { text: '贡献指南', link: '/about/contribute'},
            { text: '赞助', link: 'https://afdian.net/@netsora', target: '_blank'}
        ]
      }
    ],
    sidebar: {
      '/module/': [
          {
            text: '索引',
            items: [
              { text: '导航', link: '/module/' },
            ]
          },
          {
              text: '基础',
              collapsed: true,
              items: [
                { text: '更新', link: '/module/' },
              ]
            },
        ],
      '/develop/': [
          {
              text: '起步',
              items: [
                  { text: '介绍', link:'/develop/forward/introduction' },
                  { text: '准备工作', link:'/develop/forward/prepare' },
              ]
          },
          {
              text: '配置',
              items: [
                  { text: '配置林汐', link: '/develop/setting/set-sora' },
                  { text: '配置Go-cqhttp', link: '/develop/setting/set-gocq'}
              ]
          }
      ],
      '/about/': [
          {
              text: '关于我们',
              items: [
                  { text: '关于', link:'/about/about' },
                  { text: '贡献指南', link:'/about/contribute' },
                  { text: '赞助', link: 'https://afdian.net/@netsora'}
              ]
          }
      ],
  },
    editLink: {
      pattern: 'https://github.com/netsora/SoraBot-website/edit/vitepress/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/YRVwvYt58X'},
      { icon: 'github', link: 'https://github.com/netsora/SoraBot' },
    ],
    // footer: {
    //   message: 'AGPL-3.0 License',
    //   copyright: 'Copyright © 2023 Sora Netwrok',
    // },
    // algolia: {
    //   appId: 'VA229YZAO1',
    //   apiKey: '91fa3eb8adfd68b9adda9a7495c45944',
    //   indexName: 'graiax'
    // },
  },

  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true,
    config: mdEnhance,
  },
})
