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
    "url": "assets/js/11.4d4cab2f.js",
    "revision": "b9e31ee0e035b0aed8414ae67065b54e"
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
    "url": "assets/js/37.0fb1ebb7.js",
    "revision": "09b4c68835e2f7e88b70c6d89ecab8df"
  },
  {
    "url": "assets/js/38.de147c01.js",
    "revision": "07086e1c5b83cba1bfe1079f61e21807"
  },
  {
    "url": "assets/js/39.f03b864a.js",
    "revision": "6340e45bb0f1225efe4094bcbfdf7c9e"
  },
  {
    "url": "assets/js/4.4358c50f.js",
    "revision": "2e3bb21ca072df92b00581059767b28a"
  },
  {
    "url": "assets/js/40.e66e37e9.js",
    "revision": "4d08dc1ee519cdb3fd668ef8c5dc544e"
  },
  {
    "url": "assets/js/41.7074fad3.js",
    "revision": "2d95cfbf042579daaa0a5cf9876d84e6"
  },
  {
    "url": "assets/js/42.5caf1ee7.js",
    "revision": "c23939ceaf5021fb4f426a8dd0ff3ee2"
  },
  {
    "url": "assets/js/43.92162352.js",
    "revision": "63119ba5bac3d2d0e7b6ccdf5e6ce559"
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
    "url": "assets/js/app.1b97b492.js",
    "revision": "989e5d51e89e491aba2220d8bb4be935"
  },
  {
    "url": "categories/index.html",
    "revision": "7ec95bc51f6ef6a1aad671e44d8122c1"
  },
  {
    "url": "en/index.html",
    "revision": "3106fbf6fc4f657d609ab0113eb8a3dd"
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
    "revision": "a90d64adede81052552069c72c0f7dc1"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "dfc8ee8743a2c65d3b575ebf88330a51"
  },
  {
    "url": "post/1970/01/01/ji-zhang-app/index.html",
    "revision": "faa7ebd4859f71dc646917ceb71d4285"
  },
  {
    "url": "post/1970/01/01/mine/index.html",
    "revision": "cc95039e55684ba20bc6bebfb6c36253"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "6890ad31d16ed5e0c73df288f02197e1"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "047d5c4c9fc4639f30c24ba44d8c1845"
  },
  {
    "url": "post/1970/01/01/vuepress-plugin-vditor/index.html",
    "revision": "b5bce1f0c7659c2aa26b17c80d8fcbdb"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "36f9e150da4d5a6f31186adbf7ec64cb"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "4732c8206ccf8cdb068514d0a91831c8"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "e7ae1db56b8ae720acac2f84598f2236"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "3d7d3b6f98fe5d298f8af56152df4a1d"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "ef9d839aea1855bf3d4b95b67c6fa9a3"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "fa5acc28f9fc3589e66021808f19cb54"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "2433c008d5036cf2eb44029baeca5dc2"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "1b3f9d835965f33d472cb05780bed4ab"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "324a4b4cf73f4c261bd6f65aece91029"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "a7c49d00b4f175945f6265f8fd72e42c"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "82250323efc7daf4a52a231a8f3df8d3"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "5b0b863fe1c7a477a8e57c93aeb6d6da"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "8e26dcf7239e81155924e1f47c8ad5ea"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "56bfd9a76aa88cd06c1a8001256a1e01"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "77f077bb22f97ab216ef6f3dbea57580"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "787e445142f9d6a8f062fd5b27681539"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "52aff7a4f5f82f0cef582c18f22e6b4b"
  },
  {
    "url": "post/2021/04/26/duo-wei-shu-zu-bian-ping-hua/index.html",
    "revision": "50d2e3931bec33a665e5336abccc6b1c"
  },
  {
    "url": "post/2021/04/26/er-cha-shu-zen-me-bian-li/index.html",
    "revision": "bcc426ac4b1d867d7eeaf2226a68b8a9"
  },
  {
    "url": "post/2021/05/08/centos-an-zhuang-nginx/index.html",
    "revision": "024aa6a148dbf93debfbdabc08b36fb4"
  },
  {
    "url": "post/2021/05/08/centos-chang-yong-ming-ling/index.html",
    "revision": "5ec754aed75310e89328ae10074ff156"
  },
  {
    "url": "post/2021/05/08/ji-qi-qiang-lie-tui-jian-30-ge-hao-xi-guan/index.html",
    "revision": "d9b45472cdfd854c2c50fab9ea7fcc6e"
  },
  {
    "url": "post/2021/05/09/centos-fang-huo-qiang-she-zhi-yu-duan-kou-kai-fang-de-fang-fa/index.html",
    "revision": "4b897624fa10cb1c3826e2a3ac8643f7"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "4cc2cce441c22cb02642e11b0c5534d4"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "7a1855dffd0f90f7b17309baa3b22ea1"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "c1130c5e0032615cc1391e8fba6d5573"
  },
  {
    "url": "tag/express/index.html",
    "revision": "3894db4bb15ca64fe4f81c9e2fe6ea02"
  },
  {
    "url": "tag/github/index.html",
    "revision": "0df1235a9c974d91027c297967d0f295"
  },
  {
    "url": "tag/index.html",
    "revision": "5313fced20364a88fbf226fd54c006ca"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "6f345fe120760b0bd83a8df2105247ca"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "5b961cb38bb2e6af6bbdb41fbda396e2"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "2fbfb7c0afcf633b741562923c1269df"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "d6c27ae29278a546615d59b902429b7f"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "8aac6fb087e1ac1525e0c3a38d5b056e"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "5e5e09e24c4913296b99aa03ab7e3523"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "d789717ca10b78f413bbd33689398d56"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "eaf59a0fa868717f58a12ed9081898a7"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "00e3be0148766330e59f461dfa63cade"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "0ded261f35a857cdbec635b8a3b7a777"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "5f94fcc8b847b0c879e31cea1aded5d6"
  },
  {
    "url": "tag/防火墙/index.html",
    "revision": "8556cedea64981627c9b951ffaf7f6fd"
  },
  {
    "url": "timeline/index.html",
    "revision": "553b4fb19cdd6137247ea0746de61c94"
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
