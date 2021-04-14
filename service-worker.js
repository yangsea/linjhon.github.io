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
    "revision": "682b869f5a8097791811c4f23a14b3bd"
  },
  {
    "url": "assets/css/0.styles.bf974af1.css",
    "revision": "4cea6ece9f1ef723ab6f22ac4621d92d"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f6af2360.js",
    "revision": "2bceeb3752f0cb0ca133728bec3d6dba"
  },
  {
    "url": "assets/js/10.09311b38.js",
    "revision": "3afed6c6045465128fe2a9a8259af0ce"
  },
  {
    "url": "assets/js/11.4b5f4e92.js",
    "revision": "c23b72d79b1e9f0ea965b0275ef8d0f8"
  },
  {
    "url": "assets/js/12.76520f3d.js",
    "revision": "70e3bf12b22a5bc20acbc5d435ed1a6a"
  },
  {
    "url": "assets/js/13.ceec6514.js",
    "revision": "fbcc9dc116b817c72cf0efeed1ceac33"
  },
  {
    "url": "assets/js/3.f6621bed.js",
    "revision": "ca49f90bc2883fe0f6f99c8dff23de06"
  },
  {
    "url": "assets/js/4.38b99e15.js",
    "revision": "62f5a300ca1cbb45fb92c5594a7e0903"
  },
  {
    "url": "assets/js/5.05ae8498.js",
    "revision": "ea2bd43d853d59278eff076c9e2d4df6"
  },
  {
    "url": "assets/js/6.e38b63ab.js",
    "revision": "a5d5f742068ca390ac7effe90d6caf94"
  },
  {
    "url": "assets/js/7.5bdc3528.js",
    "revision": "7a753740196e2b82eeb7723e21a1f6d4"
  },
  {
    "url": "assets/js/8.19a7b28c.js",
    "revision": "467ee354cbf0e7c91d0ddc77b11ce62b"
  },
  {
    "url": "assets/js/9.0f783123.js",
    "revision": "a378035714be4dc9a1719fccab96dc4f"
  },
  {
    "url": "assets/js/app.b4e8a548.js",
    "revision": "aab42efdbfdc7efaadd80da0fa4b6910"
  },
  {
    "url": "categories/index.html",
    "revision": "0df0a3ccf3c26bddad769fd984ed2485"
  },
  {
    "url": "en/index.html",
    "revision": "0fb572c3c5de04f2c733f7be680dbc6a"
  },
  {
    "url": "front-end/interview/topic.html",
    "revision": "413cf64e20947051183a83d2fc69b2d6"
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
    "revision": "506d63a14eb711501f098cd48ed8cf31"
  },
  {
    "url": "tag/index.html",
    "revision": "630e01de5ab5310d64b26417d4e25b30"
  },
  {
    "url": "timeline/index.html",
    "revision": "8643fc15f62359bc62a2d1bc2ee61e33"
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
