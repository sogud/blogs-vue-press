module.exports = {
  base: '/',
  title: '记录',
  theme: 'vuepress-theme-minimalism',
  themeConfig: {
    headerText: {
      index: '主页',
      all: '全部',
      tags: '标签',
      timeline: '时间线',
      seacrh: '搜索'
    },
    footer:false
    footerText:
      '©2020 Power by <a href="https://vuepress.vuejs.org">VuePress</a> <a href="https://github.com/onnezezt/vuepress-theme-minimalism">Theme minimalism</a>',
    homeBackground: {
      //设置主页背景颜色，false title为默认颜色
      show: false,
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
    },
    nav: [
      {
        text: 'blogs',
        link: '/'
      },
      {
        text: 'github',
        link: 'https://github.com/sogud'
      }
    ],
    // sidebar: 'auto',
    sidebar: [
      '/',
      {
        title: 'Element源码分析',
        children: ['Posts/Element/起步']
      },
      {
        title: 'InterView',
        children: ['Posts/InterView/常见面试题']
      },
      {
        title: 'JavaScript',
        children: [
          'Posts/JavaScript/javascript实现简单二叉查找树',
          'Posts/JavaScript/javascript实现排序算法',
          'Posts/JavaScript/javascript实现栈',
          'Posts/JavaScript/javascript实现队列',
          'Posts/JavaScript/javascript实现链表',
          'Posts/JavaScript/javascript实现集合',
          'Posts/JavaScript/javascript实现图'
        ]
      },
      {
        title: 'React',
        children: []
      },
      {
        title: 'Vue',
        children: ['Posts/Vue/Axios基础配置']
      },
      {
        title: 'WeChat',
        children: [
          'Posts/WeChat/使用mpvue开发微信小程序',
          'Posts/WeChat/小程序Canvas'
        ]
      },
      {
        title: 'Python',
        children: []
      },
      {
        title: 'Java',
        children: []
      },

      {
        title: 'Nodejs',
        children: ['Posts/Nodejs/npm与yarn', 'Posts/Nodejs/Sequelize的配置']
      },

      {
        title: 'Git',
        children: ['Posts/Git/常用命令']
      },
      {
        title: 'Life',
        children: ['Posts/Life/2018']
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}
