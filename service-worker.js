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
    "revision": "895971a76ee223e53ebcb6bd1022f85f"
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
    "url": "assets/js/10.de5d9819.js",
    "revision": "8cee3c9fdac5c9f2467d6221b6affbc8"
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
    "url": "assets/js/15.bf86eabc.js",
    "revision": "a08a5f754439e88f14ac73372529288d"
  },
  {
    "url": "assets/js/16.a50a29d9.js",
    "revision": "f572391c182d22e3b5a44d20b5b07ec2"
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
    "url": "assets/js/9.d628e268.js",
    "revision": "9230fce41ebb90915fec0b0e554185f4"
  },
  {
    "url": "assets/js/app.845d0528.js",
    "revision": "256d86d7454cff4e0215fc490f0fba08"
  },
  {
    "url": "categories/index.html",
    "revision": "7561d1443bd1a1d1e6e208df87b249e7"
  },
  {
    "url": "en/index.html",
    "revision": "f9a664edb70d168a59bea4ff2b1ff058"
  },
  {
    "url": "front-end/interview/topic.html",
    "revision": "725d9f274c62e1e67bb326c2a35dd312"
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
    "revision": "e859e7f93082cc5d14194fc53334e833"
  },
  {
    "url": "post/test.html",
    "revision": "d7b703416ac765a23e1179287e827b0d"
  },
  {
    "url": "tag/index.html",
    "revision": "627eec5637ce2252eea5d6f87c82dbbb"
  },
  {
    "url": "timeline/index.html",
    "revision": "3aa1322726ae66a7d16f46739f617b31"
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
