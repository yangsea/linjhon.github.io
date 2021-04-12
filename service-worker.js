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
    "revision": "4130188d2a825a686a5a99fd2941ab38"
  },
  {
    "url": "assets/css/0.styles.cf1d2abd.css",
    "revision": "8f37b7751f02203daf73843f761d4eb1"
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
    "url": "assets/js/11.e47fca4b.js",
    "revision": "0993fbf224d80fec98a34693aadf5c91"
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
    "url": "assets/js/app.f8b0c113.js",
    "revision": "9367ddfa2fc55ce18c4b07f684ce3f35"
  },
  {
    "url": "categories/index.html",
    "revision": "1d6799e4a30f591eeadc3ebdc214cfbc"
  },
  {
    "url": "front-end/interview/topic.html",
    "revision": "2a90f73ae62d85bcc899677c6e1dfff0"
  },
  {
    "url": "img/my_avatar.jpg",
    "revision": "4a435cd6542287ddb7523915523f3991"
  },
  {
    "url": "index.html",
    "revision": "4c9a8abb85492a7396eb7cfb4bcd66dd"
  },
  {
    "url": "tag/index.html",
    "revision": "197530c03f5b12b975dad3c3bb657f52"
  },
  {
    "url": "timeline/index.html",
    "revision": "af1b1e13e90b8646d1d2854ca6e60354"
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
