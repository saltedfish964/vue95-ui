module.exports = {
  title: 'Vue95 UI',
  description: 'Windows 95 Style UI!',
  base: '/vue95-ui/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    repo: 'didadi599/vue95-ui',
    repoLabel: 'Github',
    docsRepo: 'didadi599/vue95-ui',
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: true,
        children: [
          'views/guide/install',
          'views/guide/get-start',
        ]
      },
      {
        title: '介绍',
        collapsable: true,
        children: [
          'views/introduction/'
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: [
          'views/component/anchor',
          'views/component/button',
          'views/component/layout',
          'views/component/bar',
          'views/component/list',
          'views/component/listitem',
          'views/component/textfiled',
          'views/component/checkbox',
          'views/component/cutout',
        ]
      },
    ]
  }
}