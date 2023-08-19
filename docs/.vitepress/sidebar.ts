const module = [
  {
    text: '索引',
    items: [
      { text: '导航', link: '/module/' }
    ]
  },
  {
    text: '基础',
    items: [
      { text: '帮助', link: '/module/base/help' },
      { text: '管理', link: '/module/base/manager' },
    ]
  },
  {
    text: '核心',
    items: [
      { text: '签到', link: '/module/core/sign' },
      { text: '跨平台绑定', link: '/module/core/bind' }
    ]
  }
]

const guide = [
  {
    text: '起步',
    items: [
      { text: '介绍', link: '/guide/before/introduction' },
      { text: '准备工作', link: '/guide/before/prepare' }
    ]
  },
  {
    text: '配置',
    items: [
      { text: '配置林汐', link: '/guide/env/sora' },
      { text: '配置 Go-cqhttp', link: '/guide/env/gocq' }
    ]
  },
  {
    text: '部署',
    items: [
      { text: '使用 Docker 部署', link: '/guide/deploy/docker' },
    ]
  },
]

const about = [
  {
    text: '关于我们',
    items: [
      { text: '关于', link: '/about/about' },
      { text: '贡献指南', link: '/about/contribute' },
      { text: '赞助', link: 'https://afdian.net/@netsora' },
    ]
  }
]

export { module, guide, about }
