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
    "url": "assets/css/0.styles.71b03798.css",
    "revision": "5dc5f076d7f00e700b0c815566a57909"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.655b6611.js",
    "revision": "b4d1503f424200506148ad376b89270c"
  },
  {
    "url": "assets/js/10.c5ef25e8.js",
    "revision": "ee6d794fa197ec8f3b2c50e7e680c70b"
  },
  {
    "url": "assets/js/11.2f07c630.js",
    "revision": "e7a39010556119af3747fd137000effb"
  },
  {
    "url": "assets/js/12.827c1327.js",
    "revision": "37b59bc7fcba1ee45cfd1cca02d6866e"
  },
  {
    "url": "assets/js/13.23023c5a.js",
    "revision": "4801ddb5154803752be5b43f1a05ea3e"
  },
  {
    "url": "assets/js/14.eee267b0.js",
    "revision": "63db6d3de251aaf8d63dab03846f03b2"
  },
  {
    "url": "assets/js/15.85ecca39.js",
    "revision": "c709fe72f5cf6714bc34f5d730b3f513"
  },
  {
    "url": "assets/js/16.cbb04c83.js",
    "revision": "d8a92625ded863cac7478d84b1341f27"
  },
  {
    "url": "assets/js/17.ba68a1c9.js",
    "revision": "7cc3a80fb5a5a5b9dd49cd09adbbc740"
  },
  {
    "url": "assets/js/18.adaadcdc.js",
    "revision": "4ca54af17bd537c2cebcb007f52fda2b"
  },
  {
    "url": "assets/js/19.838aa3c7.js",
    "revision": "4999a88fee5d24524362e6de3d908fa0"
  },
  {
    "url": "assets/js/20.5a5d5330.js",
    "revision": "82a62a288b9066a1dca771822f3e9663"
  },
  {
    "url": "assets/js/21.50d7b5b7.js",
    "revision": "8e2bce484b10296c0856da9d5d4cd549"
  },
  {
    "url": "assets/js/22.5ca23def.js",
    "revision": "3e8052188ad6a262b01223eb510d49d0"
  },
  {
    "url": "assets/js/23.422e9b6d.js",
    "revision": "98e8224a7efade22e33fdf2a4bbc8c28"
  },
  {
    "url": "assets/js/24.86c7d559.js",
    "revision": "5971dfe781da380737bec862f20a9746"
  },
  {
    "url": "assets/js/25.113c1d19.js",
    "revision": "7943f9bad9eda9532e08856adf7718b0"
  },
  {
    "url": "assets/js/26.fc501358.js",
    "revision": "e86434419e39fba7f547f05be3072990"
  },
  {
    "url": "assets/js/27.1c786ae1.js",
    "revision": "a298631007f50a743020ade64953f64c"
  },
  {
    "url": "assets/js/28.d7d62428.js",
    "revision": "4f873eb8a7dbe7ed51f5ca77662bc1ea"
  },
  {
    "url": "assets/js/29.22df39d8.js",
    "revision": "93be73c94c241bbf9b99a0c2c54ea8f1"
  },
  {
    "url": "assets/js/3.00730206.js",
    "revision": "439f8702d2c7db33b3c39c01950b990b"
  },
  {
    "url": "assets/js/30.6c1eba64.js",
    "revision": "5588c0710c83bedce639faa27758b3e8"
  },
  {
    "url": "assets/js/31.67055a53.js",
    "revision": "2f8be7f741e66882a6896b42d59dc52f"
  },
  {
    "url": "assets/js/32.00e1fdf8.js",
    "revision": "b2c92a55ac730b896618125b157a7091"
  },
  {
    "url": "assets/js/33.e3eaa978.js",
    "revision": "d6dc2a8991090f8f1feea3ef3137f185"
  },
  {
    "url": "assets/js/34.e4665de8.js",
    "revision": "84294cd3e4731ba2f2bbd03304b63d8e"
  },
  {
    "url": "assets/js/4.b4d5e95d.js",
    "revision": "350a50a4ce7bf9dae6a1e2244b20d996"
  },
  {
    "url": "assets/js/5.7d522846.js",
    "revision": "5dccb35d6c110e62593330ab40471789"
  },
  {
    "url": "assets/js/6.f3b30910.js",
    "revision": "9dedf9982f24d6da9ec61eec7da4ccca"
  },
  {
    "url": "assets/js/7.ed921d51.js",
    "revision": "2fb8c6ae57575641546fec61840185f9"
  },
  {
    "url": "assets/js/8.6e93747f.js",
    "revision": "4fd7de054190e8805738ea70ad07e497"
  },
  {
    "url": "assets/js/9.563842da.js",
    "revision": "eafd7a46a42e497ff2c949dd057e64a4"
  },
  {
    "url": "assets/js/app.aca8abe2.js",
    "revision": "fda0f8bdfa69e690b478cdd4488318a9"
  },
  {
    "url": "categories/index.html",
    "revision": "a0f673f46f0e50c1fa97bf16ef652dbe"
  },
  {
    "url": "en/index.html",
    "revision": "57fa081f39362d4f2d5764e507310d14"
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
    "url": "img/maple_leaf.png",
    "revision": "bb2c7f6e92df021ae07750098a6c50da"
  },
  {
    "url": "img/my_avatar.jpg",
    "revision": "4a435cd6542287ddb7523915523f3991"
  },
  {
    "url": "index.html",
    "revision": "d5565392e7e38600aecfddb5496b312e"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "7508c8060578ad719c0fb568452513a8"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "deeea6f60d2368ba7a616d6aaac6c687"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "63a94fbbc796eb5f0a72c724269c72e4"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "20e749f4db60b6ef4fbb460bc3bd6ef2"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "50c66587124cada97b89088bf84ecb1f"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "7a96d6671bb5394cb263aae5f35a5bf3"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "f32ef14921b637446b3f31fa6821886e"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "48f109fab4408db72f14039d805105b5"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "3e95cd0f96201cb1660acd6f2988dc74"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "ee43d68f96ed4ab33776d9eebc3ea25a"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "12eb28eb79dbdc0429c6f95bafbdb9b9"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "9384925dc73bc661b91c9c5c50f2e29b"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "37202d74de87384c0f8cee26cd9343d9"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "7d92f9bfe3ef788ce8ca4a3c2c2e89f5"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "ff4a37f22ed9a03d7917e29eda480338"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "239909340b125034f33712b8140c1e82"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "3d64b610b43e51733596176b9e14ae64"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "c7e391880818033b88b1024d38026ed3"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "38ac551941a938e83c1bde2d1228c06f"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "6c2694c5dde3e8b892d726b5ea40ca07"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "f1fdd82475a902b5b66fb908142ad285"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "797be4c24612d8cf53ae89bb328e091c"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "44db064a34b4bbdb313b08155edb416b"
  },
  {
    "url": "tag/express/index.html",
    "revision": "a8f2170c7512abd2b921359255c97fc2"
  },
  {
    "url": "tag/github/index.html",
    "revision": "59319f768778b66cac8f600d5188ecf7"
  },
  {
    "url": "tag/index.html",
    "revision": "c2ce995c7e110b9b68db0050be4d8d47"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "726dd4f62db99302692ce081d4fc4198"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "001274f55a5cb083108bf954462de663"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "4664ee1a2a6702e43ac9705c04e0b8ed"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "1267015e0edc127bf1733c4622062170"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "c0219070b4cc77f36227963d6ce02e03"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "e87059a2830ec373eaef21bc45b268f4"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "bdf116c8d3371a1f449026788e4bd331"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "27c3fcc4b9ea2e03830f7abb0a24c081"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "5e8973d38d2b1979486fde0b43d4e319"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "3a28a072e5c13e09461571339d396f89"
  },
  {
    "url": "timeline/index.html",
    "revision": "d884bed735283bc468b99f34e1e85877"
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
