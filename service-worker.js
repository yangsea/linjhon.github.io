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
    "url": "assets/css/0.styles.8fd8b6fc.css",
    "revision": "aae5cb70c3604243520a49ed8ebe53a9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.05dccab0.js",
    "revision": "cd5cdd91686cd6298f25a2c3bac33670"
  },
  {
    "url": "assets/js/10.8c568710.js",
    "revision": "f0dbfe30add20d56d0c44e97e50a60ef"
  },
  {
    "url": "assets/js/11.fba4f209.js",
    "revision": "459762dbca339c01eccf69025ac4d759"
  },
  {
    "url": "assets/js/12.3a9b5b11.js",
    "revision": "b163868e3a2e1594723d1e7558661bd8"
  },
  {
    "url": "assets/js/13.5db948a4.js",
    "revision": "6c9fe1c1b91b568e602d347ff0f85617"
  },
  {
    "url": "assets/js/14.7bd2614e.js",
    "revision": "b1d0b44190fe20ce45b6fa2a60cb403c"
  },
  {
    "url": "assets/js/15.6be52942.js",
    "revision": "f33911d4fdb4fa8a12862eaa7ea22283"
  },
  {
    "url": "assets/js/16.6d721e90.js",
    "revision": "a0601c94c5d26e60da2989410e97de40"
  },
  {
    "url": "assets/js/17.c094b606.js",
    "revision": "f595530826ce81b9984702e2866a0a17"
  },
  {
    "url": "assets/js/18.fbb18bcb.js",
    "revision": "44d9e49d2988a0369f2f3c94cf463be7"
  },
  {
    "url": "assets/js/19.e66ce12b.js",
    "revision": "e0f66e2d5ab190c9c8a8cc3fb4e905f7"
  },
  {
    "url": "assets/js/20.11ce3506.js",
    "revision": "34d7d38e774bb0d8fb644d9563d58a4a"
  },
  {
    "url": "assets/js/21.7ffb6a6f.js",
    "revision": "c3d8fb08f7466800337d337da4a3146b"
  },
  {
    "url": "assets/js/22.274717b6.js",
    "revision": "055f9889b298416eb80017f4e630d712"
  },
  {
    "url": "assets/js/23.4df1dd2e.js",
    "revision": "2b5862de0a73689b2dadfe64dd23881b"
  },
  {
    "url": "assets/js/24.4915ac7f.js",
    "revision": "838f45eace337c57d20f8e38a01ae079"
  },
  {
    "url": "assets/js/25.6c9f3b16.js",
    "revision": "fd3153aa732aa3d61b52de430c970ead"
  },
  {
    "url": "assets/js/26.149a0df9.js",
    "revision": "ad60d8a61b3b84aea9842f701d1412f5"
  },
  {
    "url": "assets/js/27.5238aef9.js",
    "revision": "d7592284db8938510415cbe0944155f6"
  },
  {
    "url": "assets/js/28.999960c7.js",
    "revision": "d2b684c243b2ea1d4e7bfc818f9556e2"
  },
  {
    "url": "assets/js/29.c716f34a.js",
    "revision": "12d00afc6a41ec4ff077a0d7f5af425f"
  },
  {
    "url": "assets/js/3.b4a6dd00.js",
    "revision": "b2b5505c3b2998f820455cef2d1e0fd9"
  },
  {
    "url": "assets/js/30.6a43b4ea.js",
    "revision": "1e1a7caec27e9a006fa1976ff8e436a5"
  },
  {
    "url": "assets/js/31.afdd6ddf.js",
    "revision": "2d170bb3601474bf5594ba4a0f41f3bd"
  },
  {
    "url": "assets/js/32.41798fb7.js",
    "revision": "463d0b2c7c39c9c81cb9a47b101ec9c4"
  },
  {
    "url": "assets/js/4.de9fa041.js",
    "revision": "b3c94448a9f0bb19f3349267d53875f6"
  },
  {
    "url": "assets/js/5.6e33df19.js",
    "revision": "d7a193f39c43768b19938e7a82990aa8"
  },
  {
    "url": "assets/js/6.99f2aba3.js",
    "revision": "244c8768a1d60aafdd274acf47ca1b4e"
  },
  {
    "url": "assets/js/7.1012b385.js",
    "revision": "a0f82ade53de184c222bb4c3f1afc982"
  },
  {
    "url": "assets/js/8.546277a1.js",
    "revision": "22171b3e32bfd8979d235a044de0c9a1"
  },
  {
    "url": "assets/js/9.cd6dde8d.js",
    "revision": "36a73f630dbb76d30c8f899be2ab7975"
  },
  {
    "url": "assets/js/app.ceb91949.js",
    "revision": "00e2e9f5043e5cac966f461cd32599bd"
  },
  {
    "url": "categories/index.html",
    "revision": "cdc75a0c7157b86b9bfb3f34f93a6090"
  },
  {
    "url": "en/index.html",
    "revision": "09b0b1ed4536de47b08ee44e70ebcba3"
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
    "revision": "c0ea9e149a4e3f70582d5d7cdebeb19b"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "e41508cc51e0c4da46f2e148b5ef2d37"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "c5afe5c00443bc5029ceba31c36b72cc"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "343f13353d2cd8027a4cf8a1d5754d7f"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "b0db9e204b417855727e5609309cb089"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "53c98c1d632aed106441dfa4886a3867"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "879d05f6fdbdbc2cd1310ae8e667ed5a"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "984f660ad46fc9271507fdc8a2ec2557"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "9b5f680d9c99943e6a9f65e3291212e4"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "572dbd589eb1c380192e0d6cac74d867"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "075c82a542c19404e3779a476d6d029f"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "c6c4d2e193dbb5c0409c39b9271e69b5"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "a9958ae2119e4a6ae21f91ffadf29b54"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "a920c0d9258916de683c56cfcc8252e3"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "77f78fc903ed88e5f08a450313bde419"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "5f55378325d89cb9d1a0fc3492b69e4e"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "8fe42a89bcdac1e6f11cf31d6e1fff31"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "c4fda004cb5221cb7d68a7cb9c7f915f"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "e9b18b6ff070640e1258812a07608217"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "cfcdbabced0d82d531554f3d7c1da95d"
  },
  {
    "url": "tag/index.html",
    "revision": "c29758f087d78980432a860100405190"
  },
  {
    "url": "timeline/index.html",
    "revision": "1976837e1fe671dfa92d285e0ea1edff"
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
