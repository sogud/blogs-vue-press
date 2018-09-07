/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.eb98f43b.css",
    "revision": "89c429be6bae7fc26a10b895f98cfc50"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/iconfont.a5d11a0b.svg",
    "revision": "a5d11a0b839107259b8740e4657868f2"
  },
  {
    "url": "assets/js/10.449a4849.js",
    "revision": "62e8e42c45fec0f39d83959ea4d8f7c8"
  },
  {
    "url": "assets/js/11.2e82fe05.js",
    "revision": "b26e841fed17df89063e6b76d164d1cf"
  },
  {
    "url": "assets/js/12.4a469b6a.js",
    "revision": "da054246967d5125bd9ac55cf47d2d86"
  },
  {
    "url": "assets/js/13.690f4fe9.js",
    "revision": "1e613fbf8cf3079e7b8d03dd5110b751"
  },
  {
    "url": "assets/js/14.7f1479b6.js",
    "revision": "7904bdc03768561edc1ee0502094b2ef"
  },
  {
    "url": "assets/js/15.7966ce20.js",
    "revision": "cc8881bde041bf1a6bc4cf36214dd536"
  },
  {
    "url": "assets/js/16.0b196bdd.js",
    "revision": "42d5ec9a2b92853c38d26118d11d3e6f"
  },
  {
    "url": "assets/js/17.3729147f.js",
    "revision": "3c5193fbc0a22a6bd7845be02803a901"
  },
  {
    "url": "assets/js/18.276f0212.js",
    "revision": "0e6844a0255f6d918a15bc99a457c1af"
  },
  {
    "url": "assets/js/19.2975fbe9.js",
    "revision": "0039de3e08c74a316f3dafe581422a4f"
  },
  {
    "url": "assets/js/2.009ef494.js",
    "revision": "1fe8e78c7ca2c7648468360af2f9e17e"
  },
  {
    "url": "assets/js/20.f61fdf62.js",
    "revision": "027eba93e220042bd3682ca26286ef98"
  },
  {
    "url": "assets/js/21.01bd7d53.js",
    "revision": "0c94d8902f1bfb9d233646ceac641712"
  },
  {
    "url": "assets/js/22.78df4800.js",
    "revision": "9eddbd9778e47c0b0a6ddbd850548109"
  },
  {
    "url": "assets/js/23.1dd94067.js",
    "revision": "d079c008108f0f44a568fe87ccc05c33"
  },
  {
    "url": "assets/js/24.f8543124.js",
    "revision": "1221fb20a6ddacb83c8d98556beb6713"
  },
  {
    "url": "assets/js/25.4e034b65.js",
    "revision": "1e9d12ebcde059db618ce5c09911b368"
  },
  {
    "url": "assets/js/26.79a11d5e.js",
    "revision": "ac5dc2f1ef04bdfd7be6b42a36815087"
  },
  {
    "url": "assets/js/27.ab3619d9.js",
    "revision": "23f58bedc1dab3eb32d69df635b5dc64"
  },
  {
    "url": "assets/js/28.0d7e264d.js",
    "revision": "590c05add5ba2acdcf3b9c3246c9aa2b"
  },
  {
    "url": "assets/js/29.31eb946d.js",
    "revision": "480acae423bc5a0d83d37a9893958d99"
  },
  {
    "url": "assets/js/3.702c1930.js",
    "revision": "e727c37dbebaaf3c2c6fd75a0c1b755e"
  },
  {
    "url": "assets/js/4.c359f021.js",
    "revision": "9dab80ca769f6f2d53de061ed581e168"
  },
  {
    "url": "assets/js/5.946ab4f3.js",
    "revision": "feafa00df2945334fa5c4adeb042831d"
  },
  {
    "url": "assets/js/6.3200b46b.js",
    "revision": "1539b9b034af47b588e8910fbc143754"
  },
  {
    "url": "assets/js/7.88705b62.js",
    "revision": "a86d27f2505108f44826a936d5862da9"
  },
  {
    "url": "assets/js/8.ced9c02f.js",
    "revision": "b745871134f61abde49803e1f24b8519"
  },
  {
    "url": "assets/js/9.0d9a82c9.js",
    "revision": "10d5905cf65771984858e430c037e763"
  },
  {
    "url": "assets/js/app.059ad3ec.js",
    "revision": "965b6a39989af7995796f3b101be946d"
  },
  {
    "url": "bg.png",
    "revision": "05f2112302be13fd1ff0ef5cde26b554"
  },
  {
    "url": "index.html",
    "revision": "80e33ddf9dd86621d5525b194fc01570"
  },
  {
    "url": "list/index.html",
    "revision": "0c51f564eb88ab3ae7a44f1e75c194c0"
  },
  {
    "url": "posts/InterView/常见面试题.html",
    "revision": "1e10ac9537f38a71790b829a662c53a4"
  },
  {
    "url": "posts/leetcode/LeetCode.html",
    "revision": "adbd372ab0d9d8c4258870fbe21289fb"
  },
  {
    "url": "posts/Nginx/mac下配置ngxin.html",
    "revision": "c9e8f6ab18d85bd506aa5b7859ec420e"
  },
  {
    "url": "posts/Nodejs/npm与yarn.html",
    "revision": "a2a83346042de77e795c635fa24b952e"
  },
  {
    "url": "posts/Nodejs/Sequelize的配置.html",
    "revision": "75e9cc4c86e4a197031678c359fce721"
  },
  {
    "url": "posts/Terminal/GIt常用命令.html",
    "revision": "c5d358b519498a2c7be1594460c326a0"
  },
  {
    "url": "posts/Terminal/mac下使用homebrew.html",
    "revision": "d1ee978ad803f9665188ffd73816c03d"
  },
  {
    "url": "posts/Terminal/mac下修改hosts文件.html",
    "revision": "2815355d9626cac4d02f2718b3530baf"
  },
  {
    "url": "posts/Vue/Axios基础配置.html",
    "revision": "fe50a08ce738067a8b16a64fc9c304b2"
  },
  {
    "url": "posts/Vue/layout.html",
    "revision": "3c151bf6527fcf07eb689991b160cc8e"
  },
  {
    "url": "posts/Vue/vuepress主题配置.html",
    "revision": "9b0d4990dcc3299052067a4f489db7de"
  },
  {
    "url": "posts/Windows/autohotkey.html",
    "revision": "6958ba163c85ae5a0a1411fe3cee2b52"
  },
  {
    "url": "posts/数据结构与算法/javascript实现图.html",
    "revision": "79f6adb0a708c01570bb2c7e0b7bc78f"
  },
  {
    "url": "posts/数据结构与算法/javascript实现字典散列表.html",
    "revision": "11c8635adbd9c41c4e1c22a0461c84cd"
  },
  {
    "url": "posts/数据结构与算法/javascript实现排序算法.html",
    "revision": "29f759537fc2a6ae7e36698a3af3a677"
  },
  {
    "url": "posts/数据结构与算法/javascript实现栈.html",
    "revision": "3d8db4227dc9c08d26ba663561711865"
  },
  {
    "url": "posts/数据结构与算法/javascript实现简单二叉查找树.html",
    "revision": "5ec5119602e0519abfc3d19d3c8af0b6"
  },
  {
    "url": "posts/数据结构与算法/javascript实现链表.html",
    "revision": "bb9d78f9b4e5dd3f0411d6f6931760c4"
  },
  {
    "url": "posts/数据结构与算法/javascript实现队列.html",
    "revision": "5594f521416821d4c45f86cacdc7f9aa"
  },
  {
    "url": "posts/数据结构与算法/javascript实现集合.html",
    "revision": "27124c1a83f396eb1c6488decbb4fa8f"
  },
  {
    "url": "tags/index.html",
    "revision": "01073736c9639b64d8e1230f460fd02c"
  },
  {
    "url": "timeline/index.html",
    "revision": "633953f54a969a4dda9ddd891db07c61"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
