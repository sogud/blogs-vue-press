module.exports = {
  base: '/',
  title: '记录',
  theme: 'vuepress-theme-minimalism',
  themeConfig: {
    headerText: {
      index: 'ホーム',
      all: '一覧',
      tags: 'カテゴリー',
      timeline: 'タイムライン',
      seacrh: '探す'
    },
    footerText:
      '©2020 Power by <a href="https://vuepress.vuejs.org">VuePress</a> <a href="https://github.com/onnezezt/vuepress-theme-minimalism">Theme minimalism</a>',
    homeBackground: {
      //设置主页背景颜色，false title为默认颜色
      show: true,
      fileName: '/bg.png'
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
      //开启vssue评论
      use: false,
      option: {
        owner: 'onnezezt',
        repo: 'onnezezt.github.io',
        clientId: 'xxxx',
        clientSecret: 'xxxx' // 只有在使用某些平台时需要
      }
    },
    disqus: {
      //开启disqus评论
      use: true,
      option: {
        name: '1net-1' // Replace PAGE_URL with your page's canonical URL variable
      }
    }
    // sidebar: 'auto',
  },
  markdown: {
    lineNumbers: true
  }
}
