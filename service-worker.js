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
    "url": "assets/css/0.styles.2188bc08.css",
    "revision": "5425a9eefd8f221b11f96ddf6360f434"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.d9424b70.js",
    "revision": "5e29aa3a73743f119a54bce90900ee50"
  },
  {
    "url": "assets/js/10.6e21a014.js",
    "revision": "cd9f22f5a61df826a0d8552dda0b4ea3"
  },
  {
    "url": "assets/js/11.d2656cc9.js",
    "revision": "80b40a451ee69ae5cce5a43210a76f74"
  },
  {
    "url": "assets/js/12.6441924a.js",
    "revision": "653360f9492af5121baf4a8ef3f24a77"
  },
  {
    "url": "assets/js/13.8f3b19c1.js",
    "revision": "e18e81eaee48275c635f61f36056057c"
  },
  {
    "url": "assets/js/14.67c5171a.js",
    "revision": "a17d6fa1d06ca0aa26f5c9f06a539a9f"
  },
  {
    "url": "assets/js/15.4687e5de.js",
    "revision": "35593bc9301d0e7ee57b0dfef73b4099"
  },
  {
    "url": "assets/js/16.940b046c.js",
    "revision": "77a7ed245c2bec9344132975031256c7"
  },
  {
    "url": "assets/js/17.b9ae5d3f.js",
    "revision": "d7bb5248f65c42e0891937a32c0eef1f"
  },
  {
    "url": "assets/js/18.363b2dc4.js",
    "revision": "2bb717156aa8ce0bc2ab57dfd6cf3b0b"
  },
  {
    "url": "assets/js/19.6b770da5.js",
    "revision": "3f492f9d7a5db02d336df6690b5934b0"
  },
  {
    "url": "assets/js/3.241b572c.js",
    "revision": "0e83a9144d335798cd80ba75a6f9ed43"
  },
  {
    "url": "assets/js/4.f287a95f.js",
    "revision": "9f1afdd294bca93f8baa4fdaa3d740f9"
  },
  {
    "url": "assets/js/5.eab64ae4.js",
    "revision": "d84b8b8b548c4d9951f0f262885fbb57"
  },
  {
    "url": "assets/js/6.1b9d70a1.js",
    "revision": "89da9646f2f8d310e58b88f2c363f78a"
  },
  {
    "url": "assets/js/7.180d60b3.js",
    "revision": "838ffae73d31957caf22d01a5bb9de4b"
  },
  {
    "url": "assets/js/8.2c05f7de.js",
    "revision": "a9ead14ec9aa07fb850c67c94c8f773a"
  },
  {
    "url": "assets/js/9.d1e3ad7e.js",
    "revision": "6c577c1ff34eb620a2fe8273de319f59"
  },
  {
    "url": "assets/js/app.060ca1d5.js",
    "revision": "1d43fbd1f3de1be45c073127759d0836"
  },
  {
    "url": "categories/index.html",
    "revision": "7b3bc4368f0f47ba0ce863a26ee295b4"
  },
  {
    "url": "en/index.html",
    "revision": "73e367fe1f39da7ee9457e87df9ec214"
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
    "revision": "e3aa4a7bbac4e3f797047b7afec9d107"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "0027cd9f0b7bad55cbc2f18131156fae"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "4d11c70b4f6a85c65310cafc4274ffe9"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "d6e4608c5b8cef132dd5ec92fbb22837"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "ca359d7304af726910e4833f9b974db0"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "0d7f1afb8e595b80c8e2c8e29522cb10"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "1b540e2d74d2728a5198bb93baeb537e"
  },
  {
    "url": "tag/index.html",
    "revision": "c3f6e6bc9994ab050f9a73878fcaea2e"
  },
  {
    "url": "timeline/index.html",
    "revision": "3a547fc1826a5d09a48544b48f8c6cca"
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
