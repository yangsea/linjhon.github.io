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
    "url": "assets/js/1.2a390e22.js",
    "revision": "629db0f36eac3b51cc4cff1a90ffae7b"
  },
  {
    "url": "assets/js/10.08157cdb.js",
    "revision": "ee6d794fa197ec8f3b2c50e7e680c70b"
  },
  {
    "url": "assets/js/11.be644fba.js",
    "revision": "f6acde1891b9b6f4aa3481fe0651d9fa"
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
    "url": "assets/js/3.66ee5e66.js",
    "revision": "bdfe3bf809731b4abf62d579a96753f0"
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
    "url": "assets/js/37.8a7e00f3.js",
    "revision": "4b65ec6bd304f972cd4a10cdcb9cf900"
  },
  {
    "url": "assets/js/38.30e3de7f.js",
    "revision": "b0d755033fbeb5de6f4ea28426b16e3d"
  },
  {
    "url": "assets/js/39.f185d61d.js",
    "revision": "df67cecf140097287667e44d78df79d9"
  },
  {
    "url": "assets/js/4.4358c50f.js",
    "revision": "2e3bb21ca072df92b00581059767b28a"
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
    "url": "assets/js/app.34ac214c.js",
    "revision": "473115c49c38c07f96500049f9472403"
  },
  {
    "url": "categories/index.html",
    "revision": "6915852e97ff21ebcee15c3967dfa28b"
  },
  {
    "url": "en/index.html",
    "revision": "c1e12f759e8c3f995dd2cc8a5ebd8b7a"
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
    "revision": "4840fa502d003e28bd95e874466ae4fc"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "dc21307d6386a00ff73b75c637c57644"
  },
  {
    "url": "post/1970/01/01/ji-zhang-app/index.html",
    "revision": "d45c427a60c0240f84ab29a3774faacc"
  },
  {
    "url": "post/1970/01/01/mine/index.html",
    "revision": "165c933e7758181d7cee88fbbeadd0c6"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "646fd6433915807d13155b0eb855d908"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "fb18a4d47456d1a68a767ca6c09dc0d5"
  },
  {
    "url": "post/1970/01/01/vuepress-plugin-vditor/index.html",
    "revision": "f6497d3d9d14a14b660ccb6dcd92ee94"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "da3540db8517d04b9974ef3ebec55e6d"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "a79d307f0abe794d35395d9123044a9c"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "2424e1ea77614a0452a7a2bb0cf49680"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "177e50d864afbc51535d9a7796562423"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "99c274d11e0d31695f4fdaac68613d96"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "d0da5133205aa941e57b9a7219030413"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "556a2aa2437966b886a2145b75bf6f32"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "684864ea1469fe13282df4fd67594c8a"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "230490c46329d56f9330197b4f9bf434"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "d473f0c285782d7617dc524043a323b2"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "152edcd5e5e3707b2beeb703a2786387"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "e1710969e190d145180b624e9df2cb5e"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "559f7660c1c4173a3823070b46b14522"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "e2e02f5d5bc4aea0372af4f66c0e9078"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "9fb52d7c8452f4221845dbb91b743efa"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "5464e6874457ff222edafcd92d1f58af"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "b44f710290f5e53a7fb9a8f54636daec"
  },
  {
    "url": "post/2021/04/26/duo-wei-shu-zu-bian-ping-hua/index.html",
    "revision": "658eff5e077343c818726ea312ab0826"
  },
  {
    "url": "post/2021/04/26/er-cha-shu-zen-me-bian-li/index.html",
    "revision": "faffce6c9d0cab1a69db41533a79a7a6"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "6fe533cc15e0aa0f9b78f365d9248886"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "b455ea8d91bd0f7e68a17ca570bbc933"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "089ede70885738b1f577181be93b96b1"
  },
  {
    "url": "tag/express/index.html",
    "revision": "f806ff25f9a6e196c4f55d381477f571"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8aad3bcdb0f36648adfde35113dd37c5"
  },
  {
    "url": "tag/index.html",
    "revision": "ecd23dd6fbc1f2d8b87d9a2e9207b5b1"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "1f716bfbfbdc8ee3618a134e65a843c4"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "c2f4cc5a1ae4126e5b15b642f53d85ce"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "b4f1bdc4fddbb4ddf0f9d2b53900b3e0"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "b665282954503f9c582865a6fb5191fc"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "372460a0581b760f6e69c70c82fc138b"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "f0b58bf7411e29a5150223e1d86696e4"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "a22f7c5ffbed4a2a8dc0015a656f2b09"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "12198466f2d73354b184dcc575dc3351"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "4b381217c8ad9f4ed45a30659af463cb"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "a7d6b510277f0d336d0641967ed1ca58"
  },
  {
    "url": "timeline/index.html",
    "revision": "db8dbb4cb9da1c974f6aa2986ab151c7"
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
