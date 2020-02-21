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
    },
    nav: [
      {
        text: 'blogs',
        link: '/'
      },
      {
        text: 'github',
        link: 'https://github.com/lwwtotod'
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
