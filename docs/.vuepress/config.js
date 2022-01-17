const path = require("path")

module.exports = {
  base: "/",
  title: "记录",
  // permalink: "/:year/:month/:day/:slug",
  theme: "vuepress-theme-minimalism",
  themeConfig: {
    footer: {
      contact: "联系"
    },
    home: {
      background: {
        //设置主页背景颜色，false title为默认颜色
        show: false,
        fileName: "/bg.png"
      }
    },
    CursorSpecialEffects: false, // 鼠标点击特效
    PostsListPopover: false, //是否显示文章内容提示
    darkMode: {
      //暗模式配置
      switch: true, //开关
      auto: false, //自动开启
      on: "18", //时间
      off: "6"
    },
    vssue: {
      //开启vssue评论
      use: false,
      option: {
        owner: "name",
        repo: "name.github.io",
        clientId: "clientId",
        clientSecret: "clientSecret" // 只有在使用某些平台时需要
      }
    },
    disqus: {
      //开启disqus评论
      use: true,
      option: {
        name: "1net-1" // Replace PAGE_URL with your page's canonical URL variable
      }
    },
    nav: [
      {
        text: "文档",
        link: "/list/"
      },
      {
        text: "标签",
        link: "/tags/"
      },
      // {
      //   text: "时间线",
      //   link: "/timeline/"
      // },
      {
        text: "Github",
        link: "https://github.com/sogud"
      }
    ]
  },
  markdown: {
    // lineNumbers: true
  }
}
