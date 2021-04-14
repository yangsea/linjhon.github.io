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
    "revision": "820513928616473cc4a88ea0d61e7001"
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
    "url": "assets/js/11.83ab7fe0.js",
    "revision": "adff48df67dfd69829f5270b9de569f7"
  },
  {
    "url": "assets/js/12.6960ab7a.js",
    "revision": "6a90a2573e3bb99f39c8dceffa7b5f7b"
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
    "url": "assets/js/8.28cb8d30.js",
    "revision": "553631ecc8f8f51df09a833df2c91c3e"
  },
  {
    "url": "assets/js/9.0f783123.js",
    "revision": "a378035714be4dc9a1719fccab96dc4f"
  },
  {
    "url": "assets/js/app.00ab06a1.js",
    "revision": "d220fda8a6474ef319cef0ce90bc4e67"
  },
  {
    "url": "categories/index.html",
    "revision": "4fa2e347f1ef8d03270638c1684a9065"
  },
  {
    "url": "front-end/interview/topic.html",
    "revision": "0392360b9460d3a050dac96f62c1dbd6"
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
    "revision": "ff835c76e759d41b0df3563ea6176b70"
  },
  {
    "url": "tag/index.html",
    "revision": "8266143b65c6e2205aa46eca43cd43de"
  },
  {
    "url": "timeline/index.html",
    "revision": "63b0423f018665a6c507224124613044"
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
