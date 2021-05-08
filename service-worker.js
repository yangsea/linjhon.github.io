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
    "url": "assets/css/0.styles.e557af9e.css",
    "revision": "8deb6280c45336972d34641e4ba1f47e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.78fba1b9.js",
    "revision": "426104915e2929124c06186afe6243cf"
  },
  {
    "url": "assets/js/10.65539d10.js",
    "revision": "99a033177dc6648155e1ee6656e931a9"
  },
  {
    "url": "assets/js/11.bc83b379.js",
    "revision": "ce733e9624b8eb27ddcb65e0743cfc9c"
  },
  {
    "url": "assets/js/12.0a405614.js",
    "revision": "37b59bc7fcba1ee45cfd1cca02d6866e"
  },
  {
    "url": "assets/js/13.6873b354.js",
    "revision": "4801ddb5154803752be5b43f1a05ea3e"
  },
  {
    "url": "assets/js/14.68af2470.js",
    "revision": "63db6d3de251aaf8d63dab03846f03b2"
  },
  {
    "url": "assets/js/15.43b4bca9.js",
    "revision": "162eb529e660168808eb1571f2443f17"
  },
  {
    "url": "assets/js/16.a692dcce.js",
    "revision": "f5ca0fa3b5c9e478d7d3a1dee0625562"
  },
  {
    "url": "assets/js/17.955cc71c.js",
    "revision": "5c0188f521ef11358901b22340c49896"
  },
  {
    "url": "assets/js/18.6c0d1cf8.js",
    "revision": "745846ccbf0d2a405403c533f9a8e50b"
  },
  {
    "url": "assets/js/19.896ae8cb.js",
    "revision": "bab4941f2aede4134a04b4d90d996ada"
  },
  {
    "url": "assets/js/20.c4f777c4.js",
    "revision": "1ff5dee55aa2d14f88523945d42c37c5"
  },
  {
    "url": "assets/js/21.5e386f55.js",
    "revision": "d0918f11e9f4340c5501e68391a6ab61"
  },
  {
    "url": "assets/js/22.c1625299.js",
    "revision": "ae6e7aca29cd2d8c09c8c2252636f615"
  },
  {
    "url": "assets/js/23.8cc9150f.js",
    "revision": "bd24eafb260cad87c41bd83fa4b8539c"
  },
  {
    "url": "assets/js/24.50455f16.js",
    "revision": "eccac2ed52994a76dd91da5f04f88409"
  },
  {
    "url": "assets/js/25.0215580b.js",
    "revision": "2b7e8a79091d1088af6d1d27b35b193a"
  },
  {
    "url": "assets/js/26.4da39e59.js",
    "revision": "0ded3673e14e35afb8b1e40633c113f7"
  },
  {
    "url": "assets/js/27.9c6642a5.js",
    "revision": "e9329566ae946858cea84be958166c80"
  },
  {
    "url": "assets/js/28.906508bf.js",
    "revision": "0daaee3c22425fa47bfec0238c63c81d"
  },
  {
    "url": "assets/js/29.7f4c476e.js",
    "revision": "4c963aca84fd039be45b10bc016690b5"
  },
  {
    "url": "assets/js/3.a3166f81.js",
    "revision": "170ce4328066a09c32264fab794e66a6"
  },
  {
    "url": "assets/js/30.e3a508a5.js",
    "revision": "b60314a95aeb7d8b6a891aa952ceda73"
  },
  {
    "url": "assets/js/31.a793d932.js",
    "revision": "e829a6ee962c5b73de731adc2dd3778a"
  },
  {
    "url": "assets/js/32.b75dda63.js",
    "revision": "0d0cf51b7e0b230d46cdafb8f0d31e0d"
  },
  {
    "url": "assets/js/33.447d15aa.js",
    "revision": "ee7a0beedbdd2fdff18ff82cbdf59419"
  },
  {
    "url": "assets/js/34.38f74423.js",
    "revision": "cc8a51c40963886dfd70a2ac53d83c65"
  },
  {
    "url": "assets/js/35.ab993717.js",
    "revision": "15157f14c2dbb70e8393aa7fe96a48f2"
  },
  {
    "url": "assets/js/36.8a77eb8d.js",
    "revision": "b7eb76da9698687f1ba0604c206ae591"
  },
  {
    "url": "assets/js/37.5fe8b99b.js",
    "revision": "c61cda14c748fe59dc14842c5d3722dc"
  },
  {
    "url": "assets/js/38.d1c8efa0.js",
    "revision": "57de760d223c0342b9e4f17bf6654c98"
  },
  {
    "url": "assets/js/39.123b93bc.js",
    "revision": "c354e96d06554429db3364d16e000b8b"
  },
  {
    "url": "assets/js/4.4358c50f.js",
    "revision": "2e3bb21ca072df92b00581059767b28a"
  },
  {
    "url": "assets/js/40.0ead8f4e.js",
    "revision": "f216c1c3bd06b173b13232f8ffcdcb73"
  },
  {
    "url": "assets/js/41.4ebe9516.js",
    "revision": "e46ab3f5acd199ff609411e799bfa06b"
  },
  {
    "url": "assets/js/42.9bd4992e.js",
    "revision": "86cb3a4b7f8df7050bfcec240a0fd200"
  },
  {
    "url": "assets/js/5.265491be.js",
    "revision": "565dc603c4acd4320fdee2de41cc2f37"
  },
  {
    "url": "assets/js/6.6522cfb1.js",
    "revision": "ecb36aff04eeee720db9322d4d2b801d"
  },
  {
    "url": "assets/js/7.0a6d5b17.js",
    "revision": "0aac05a03cdea518ff50e2bb26de1fc7"
  },
  {
    "url": "assets/js/8.54131fb0.js",
    "revision": "bf0687f077841f38d29a12f229e3c669"
  },
  {
    "url": "assets/js/9.23c48a95.js",
    "revision": "5c3c88a7d5ca52f4bdcd138433c9b223"
  },
  {
    "url": "assets/js/app.de42ca1f.js",
    "revision": "0748082d0df126c38e95ae85d9904b8b"
  },
  {
    "url": "categories/index.html",
    "revision": "dbed46510b23d4e4c93d30ca7e87267a"
  },
  {
    "url": "en/index.html",
    "revision": "af2e4d666b8cc62b0154e8028fbf5688"
  },
  {
    "url": "img/2021-04-21-16-36-04.png",
    "revision": "e56e9c844c58235037fc2e54489035e0"
  },
  {
    "url": "img/2021-04-21-16-40-35.png",
    "revision": "207c5c275a88ef0dd64ea2324bcb8828"
  },
  {
    "url": "img/2021-04-21-16-41-15.png",
    "revision": "1d39e1625c8114125282b19f94c12d73"
  },
  {
    "url": "img/2021-04-21-16-43-16.png",
    "revision": "2caa7bddf298a8468e36072d983c621f"
  },
  {
    "url": "img/2021-04-21-17-45-33.png",
    "revision": "a0200b774cd791cefd3b1893092c27c1"
  },
  {
    "url": "img/2021-04-21-17-45-43.png",
    "revision": "a0200b774cd791cefd3b1893092c27c1"
  },
  {
    "url": "img/2021-04-21-17-45-45.png",
    "revision": "a0200b774cd791cefd3b1893092c27c1"
  },
  {
    "url": "img/2021-04-27-15-25-16.png",
    "revision": "3c30717e702f118257b071b6f25166d2"
  },
  {
    "url": "img/2021-04-27-15-26-20.png",
    "revision": "769bd1d95e22a6380864f30ae387e443"
  },
  {
    "url": "img/maple_leaf.png",
    "revision": "bb2c7f6e92df021ae07750098a6c50da"
  },
  {
    "url": "img/my_avatar.jpg",
    "revision": "4a435cd6542287ddb7523915523f3991"
  },
  {
    "url": "index.html",
    "revision": "8b057861a41bb1db7b6720bd5ec8d8c8"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "27c0f2d61de603366009faa04cd61412"
  },
  {
    "url": "post/1970/01/01/ji-zhang-app/index.html",
    "revision": "bef2148f4d6394d28b0b64f8b61658f2"
  },
  {
    "url": "post/1970/01/01/mine/index.html",
    "revision": "1628d3bc33abedc8bc3622c56fe39738"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "9e5e68b4a6e42f98213f3384be78bd37"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "58b30ff0b7e9c3216736119548a5fd04"
  },
  {
    "url": "post/1970/01/01/vuepress-plugin-vditor/index.html",
    "revision": "d8e92600139ad9976c16fd227c533687"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "fd675337a9b18ab7ec2e12e942a8a41f"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "239cac939b5aa4563a9b8809bce31eef"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "334f239c9035f137366914522244ce1a"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "2fd8f3a370a8689f6c85b56e67b5f526"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "6a4eeaedc224488c2a0c857dadd5499a"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "d8b39cee3ece6257964e4beed7991e4e"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "d5d8303c229ce05136cdc153c06a8a6a"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "21972129b32cbc054e76f8bc0b5bcd15"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "4e28e61e0293a612586515d25a2a88da"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "5fc3daa3d3085461385337801e9256dd"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "3e24c5fcf15b5d0a245dbd0f35cec7c7"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "65d666c1bceb3a916106c0e7a817130c"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "cb41f5ae128e3e0758df487a69fe4684"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "97f52f7f95967ec1952097ea3a7e7cb6"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "30cc17417102a6ce0cab09a5a1d6b37b"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "0bff86ac7ecfe41bca7932fd621b6607"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "55d8a36cb14be02b2e36e8338211f25d"
  },
  {
    "url": "post/2021/04/26/duo-wei-shu-zu-bian-ping-hua/index.html",
    "revision": "b93b9012e39f15c007adea2a2d8933b5"
  },
  {
    "url": "post/2021/04/26/er-cha-shu-zen-me-bian-li/index.html",
    "revision": "0c0e0b1db80f195f93672b134714a704"
  },
  {
    "url": "post/2021/05/08/centos-an-zhuang-nginx/index.html",
    "revision": "cadc82f7c679f0794455e7c5f2769ab5"
  },
  {
    "url": "post/2021/05/08/centos-chang-yong-ming-ling/index.html",
    "revision": "61fc53ae5e6c82cec327a6eb53f82584"
  },
  {
    "url": "post/2021/05/08/ji-qi-qiang-lie-tui-jian-30-ge-hao-xi-guan/index.html",
    "revision": "e35cb791100f47178d4f4924817b2a5e"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "c6ddb0f211d5f03199f07c649e74b3b9"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "7edba9ce036bde5c7c13532720d4c02b"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "5bbdeaad7220192b3f17e88fb1dccc42"
  },
  {
    "url": "tag/express/index.html",
    "revision": "3a85101755d06926d4cd887e96f7cf0a"
  },
  {
    "url": "tag/github/index.html",
    "revision": "116d5b2a397cc48ad5a1618cb4ce262b"
  },
  {
    "url": "tag/index.html",
    "revision": "351926941de54288d9352798503b7978"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "de976c360bbd65985b533ac7ec86d472"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "6ea9de1dc9f3c28197c41583aca486fd"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "5edb6c3415521e47e576516a851b19e7"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "a21e424a1a74e88bbfd93189fa5342b4"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "8ef6d162851ab38d41b6a986d60dd300"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "88e90de80df6983ac979e575d3c393b8"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "cb7166f1a39f0a474334bcb6c4acd02a"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "d58e5969edb0bee0f027f6c8839adb17"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "7d8a5108366b5b4d129f01de5e4d99df"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "f5a331bee0a605efc894488694802137"
  },
  {
    "url": "timeline/index.html",
    "revision": "6e4490c7359dd51302c47c5976cda395"
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
