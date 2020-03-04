module.exports = {
  theme: 'vuepress-theme-minimalism',
  base: '/',
  title: '记录',
  description: 'description...',
  themeConfig: {
    headerText: {
      index: 'ホーム',
      all: '一覧',
      tags: 'カテゴリー',
      timeline: 'タイムライン',
      seacrh:'探す'
    },
    footerText:
      '©2020 Power by <a href="https://vuepress.vuejs.org">VuePress</a> <a href="https://github.com/onnezezt/vuepress-theme-minimalism">Theme minimalism</a>',
    homeBackground: {
      //设置主页背景颜色，false title为默认颜色
      show: true,
      fileName: '/65231299_p0.jpg'
    },
    PostsListPopover: false, //是否显示文章内容提示
    darkMode: {
      //暗模式配置
      switch: true, //开关
      auto: false, //自动开启
      on: '18', //时间
      off: '6'
    },
    vssue: {
      option: {
        owner: 'onnezezt',
        repo: 'onnezezt.github.io',
        clientId: 'xxxx',
        clientSecret: 'xxxx' // 只有在使用某些平台时需要
      }
    }
    // sidebar: 'auto',
  },
  markdown: {
    lineNumbers: true
  }
}
