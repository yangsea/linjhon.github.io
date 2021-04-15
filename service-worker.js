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
    "revision": "a38d2dc39ae68fff8e203ef61b5d7907"
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
    "url": "assets/js/10.1fea1e8d.js",
    "revision": "7dba681c6f835c27a3f71f26ff4de458"
  },
  {
    "url": "assets/js/11.9d871764.js",
    "revision": "5156ce82ae00a3b78e3f16cabe82a81c"
  },
  {
    "url": "assets/js/12.ceef6890.js",
    "revision": "4000208475d51b3f708e0a82e266ccfa"
  },
  {
    "url": "assets/js/13.311d5e2c.js",
    "revision": "9137bc340bf168944c393d301811cbc6"
  },
  {
    "url": "assets/js/14.373023e3.js",
    "revision": "06d912986e5a3c55602f3973287a0b93"
  },
  {
    "url": "assets/js/15.42698776.js",
    "revision": "0bce27ea68bbe703e1243a532c66c93b"
  },
  {
    "url": "assets/js/3.241b572c.js",
    "revision": "0e83a9144d335798cd80ba75a6f9ed43"
  },
  {
    "url": "assets/js/4.97aa667c.js",
    "revision": "f6a9dd9d1c164cfda13828e597a718f9"
  },
  {
    "url": "assets/js/5.9f38b656.js",
    "revision": "ea34e6e415f936f1818df4f3b8d7e3a4"
  },
  {
    "url": "assets/js/6.132be42a.js",
    "revision": "6c6f93b66f8e532d746fd01bede6f7cb"
  },
  {
    "url": "assets/js/7.062e56db.js",
    "revision": "db61839c4a407b018c364e854115735b"
  },
  {
    "url": "assets/js/8.0f1ecf38.js",
    "revision": "ff7268a25c85dc56a0c0db798783a6d5"
  },
  {
    "url": "assets/js/9.d1586126.js",
    "revision": "c2ff4d12b3a109a2f130833fe1904207"
  },
  {
    "url": "assets/js/app.9c51e917.js",
    "revision": "ac080dd331416670c99a1edf3d64babf"
  },
  {
    "url": "categories/index.html",
    "revision": "397de86ccf904d6f9864a3b983b9bd9e"
  },
  {
    "url": "en/index.html",
    "revision": "4101701d39b2acb843f463a702756c3e"
  },
  {
    "url": "front-end/interview/topic.html",
    "revision": "3277f740f665ad26b55902cf36eb933e"
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
    "revision": "de5e0c17c3a344109dbafe895ff55f30"
  },
  {
    "url": "tag/index.html",
    "revision": "115a97d6472ff20d4b5afdf9622ad057"
  },
  {
    "url": "timeline/index.html",
    "revision": "afe3738b0c241908b1f28744362373c7"
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
