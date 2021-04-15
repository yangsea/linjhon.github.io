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
    "url": "404.html",
    "revision": "031ffbc1dc9088bd1b3ae523d6ad9953"
  },
  {
    "url": "assets/css/0.styles.a18cd95b.css",
    "revision": "f52505de97a8bfffd8c7690298486fb7"
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
    "url": "assets/js/10.5ce84121.js",
    "revision": "662fa507aafcddeaa42abb4c47181dcf"
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
    "url": "assets/js/13.820e1a29.js",
    "revision": "ae698c6f2a6431efcc98e5ed4c5c3860"
  },
  {
    "url": "assets/js/14.c2dbefcc.js",
    "revision": "cc3bcc3cecef4113427ff7711d423c67"
  },
  {
    "url": "assets/js/15.c98c9f83.js",
    "revision": "28ec23c6c3b84c38095b7eb27e50f6c3"
  },
  {
    "url": "assets/js/16.9c6ccf80.js",
    "revision": "a26c202bf1382ba3b0fb9d367418eebf"
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
    "url": "assets/js/app.8381bf45.js",
    "revision": "f6a564422735a394bd73c7ba63f1229c"
  },
  {
    "url": "categories/index.html",
    "revision": "200de94ef6c7968caf500c9bb4b8f26a"
  },
  {
    "url": "en/index.html",
    "revision": "40b0b8846a65c5643c75309161af24a0"
  },
  {
    "url": "front-end/interview/topic.html",
    "revision": "fa1f5deadb011cd41e298481323e0179"
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
    "revision": "09e5413df36157ae767fe5da2c417289"
  },
  {
    "url": "post/test.html",
    "revision": "5ba7d7e3d0aeebbe351db99cb0130706"
  },
  {
    "url": "tag/index.html",
    "revision": "26e423058f80afa63a5e901c80ac8ff6"
  },
  {
    "url": "timeline/index.html",
    "revision": "93491142cd53c8bdb1f0df37b60dba25"
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
