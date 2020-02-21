module.exports = {
  // theme: 'vuepress-theme-minimalism',
  base: '/',
  title: '记录',
  description: 'description...',
  themeConfig: {
    home: true,
    actionText: '开始Start reading...',
    actionLink: '/list',
    homeBackground: {
      //设置主页背景颜色，false title为默认颜色
      show: true,
      fileName: '/GetImage.jpeg'
    },
    PostsListPopover: false, //是否显示文章内容提示
    darkMode: {
      //暗模式配置
      switch: true, //开关
      auto: false, //自动开启
      on: '', //时间
      off: ''
    },
    vssue: {
      option: {
        owner: 'onnezezt',
        repo: 'onnezezt.github.io',
        clientId: '3f78ce485d06bd79d223',
        clientSecret: 'bf0795a8364c2e403d6a377b636384bf92a81385' // 只有在使用某些平台时需要
      }
    }
    // sidebar: 'auto',
  
  },
  markdown: {
    lineNumbers: true
  }
}
