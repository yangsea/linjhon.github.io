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
    "url": "assets/js/11.437d3861.js",
    "revision": "021d974732d0d4c05cdaf579637376e5"
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
    "url": "assets/js/37.5fe8b99b.js",
    "revision": "c61cda14c748fe59dc14842c5d3722dc"
  },
  {
    "url": "assets/js/38.fa0d6e84.js",
    "revision": "cc224bbb7ed96224bee7aa41519c967d"
  },
  {
    "url": "assets/js/39.f640b8b0.js",
    "revision": "d986f8ce7dbed1cf395937596d7633fe"
  },
  {
    "url": "assets/js/4.4358c50f.js",
    "revision": "2e3bb21ca072df92b00581059767b28a"
  },
  {
    "url": "assets/js/40.aaaacdfc.js",
    "revision": "b1aa89d9d0ff26b6f397daa2628c3346"
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
    "url": "assets/js/app.1da6be5b.js",
    "revision": "92f658c1ae05f6713102c7479afe22aa"
  },
  {
    "url": "categories/index.html",
    "revision": "df6745a44d60b7184f713527e19f4d6d"
  },
  {
    "url": "en/index.html",
    "revision": "3b9b82ea8afd854443ee9d159eea6d17"
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
    "revision": "ecb01f6817be912eb5fbe3258714e967"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "7d15e503003ce0d5dd8f422a4b1dc5de"
  },
  {
    "url": "post/1970/01/01/centos-an-zhuang-nginx/index.html",
    "revision": "91871ade645ac7a6393f8ecd2f3aca34"
  },
  {
    "url": "post/1970/01/01/ji-zhang-app/index.html",
    "revision": "f1e73616fe269ccabff7cba9f5c99a9b"
  },
  {
    "url": "post/1970/01/01/mine/index.html",
    "revision": "1edd13ebf597368334ebb78f7d661a65"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "6a36e82002c0ea4dca40596079f9f7b6"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "84fc2e6d59ee331db509def41a138603"
  },
  {
    "url": "post/1970/01/01/vuepress-plugin-vditor/index.html",
    "revision": "d6f662e6dba6dbb905e1c9d649a937a6"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "353f687b2f2ae2d3048e6579eddf4786"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "95a1304f9dcf892f2ddaa4fe453a63e4"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "5ea0f683f35eb58a61856266e340c2e6"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "d8ca66806ff53cd4173f0bdf0df68cda"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "a3b1fd906dd488c35c16711224e03bb3"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "ec24098e24b4023acc6384615cfd5ffb"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "471703e28581c9c02065152cc665ef34"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "314532f49db9b38d6a6145e25a3b7e4d"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "6633d0d9f55833d5c6a1116a8586a00f"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "4c8af06a64aeebebf92c0f1d8876eefe"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "81aa35ffe0c33b635e4cadb500000c2f"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "feb0ffcd338c202c8dd72786b896ecec"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "29e96113f11cd4c2ff1cc15749b4cae8"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "fae56c32a580cf66cb82cad45e3a6fe7"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "e021596c0b6a3ea5df65c7bd79487e14"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "69e8c03efa8329a56a5ecc69af9f541f"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "c77dcdd477adcac937c551c14e205899"
  },
  {
    "url": "post/2021/04/26/duo-wei-shu-zu-bian-ping-hua/index.html",
    "revision": "936a376fd6b56c7c5c952d79d6c21c63"
  },
  {
    "url": "post/2021/04/26/er-cha-shu-zen-me-bian-li/index.html",
    "revision": "be595e3405972eed88f216c6fa23a32f"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "5be014ed95e9d71cc180bbbb2625449d"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "093f4c94af8a8b2959793c5ff2705d3b"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "3631a95b99235952f37638d2f5e8458c"
  },
  {
    "url": "tag/express/index.html",
    "revision": "d9a93fa5026981137e0c89b924e56050"
  },
  {
    "url": "tag/github/index.html",
    "revision": "2c8dd16e2542b2209f19e404e69f0b5b"
  },
  {
    "url": "tag/index.html",
    "revision": "337558d4df030158b7062f27f01c7f07"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "ab4690223c6ab402021bde01fad43721"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "872978a9aa6baa91cdb3b27b8a2e3d94"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "8c9227cdfc8cf2d87cae13dacc7da33c"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "f66321bb14e1197a9773e9f9f55803ee"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "21edcdaaa80cbf6e5d027d038436e0af"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "0b228b0f845708fe7d50232d2c8d7777"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "3902ac640b7c7feea1faebf7395182c0"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "5b39cffaa7ec8b74ced63903ea7558bb"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "3498d9289fcadbc27bf164230146eafe"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "0c3cdfe09c8a78dffd3a14af8ca1ef95"
  },
  {
    "url": "timeline/index.html",
    "revision": "6f75806fd10652bfb3d12c1240e77ede"
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
