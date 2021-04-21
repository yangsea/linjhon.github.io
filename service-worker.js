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
    "url": "assets/js/1.d4ae3112.js",
    "revision": "f28f0698507e68f62c582f59f71072e7"
  },
  {
    "url": "assets/js/10.8becdfc1.js",
    "revision": "b39ed8d844fbafde7a31354a19ca462c"
  },
  {
    "url": "assets/js/11.e85e3b34.js",
    "revision": "6c0f94eb40acf29c5825ed2b235d83c2"
  },
  {
    "url": "assets/js/12.11b6ec90.js",
    "revision": "d6441724670b89fe9a1fa24f3ba0ccdc"
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
    "url": "assets/js/23.ea3179f9.js",
    "revision": "38513180f6a70ed319aae8088ec69cf5"
  },
  {
    "url": "assets/js/24.ac0383bd.js",
    "revision": "48cdbf41ba406f3017fd2fb56a9a72cf"
  },
  {
    "url": "assets/js/25.98fc3e2b.js",
    "revision": "31863a85888beac1dfaeec60a8c2565f"
  },
  {
    "url": "assets/js/26.d178b58b.js",
    "revision": "6b4ba8ef42409953c5ac7f4e075f70f9"
  },
  {
    "url": "assets/js/27.4535fd5e.js",
    "revision": "583d96aee1e6f864b83395b53e4b050e"
  },
  {
    "url": "assets/js/28.871aa38d.js",
    "revision": "4638a3d4ed926acce01cb39241f0ab1d"
  },
  {
    "url": "assets/js/29.be38505c.js",
    "revision": "d141cc732fbc1eea2a368bfbf9794abe"
  },
  {
    "url": "assets/js/3.ac96b996.js",
    "revision": "9d625b50867afa8e8a1c0fa72deb75fb"
  },
  {
    "url": "assets/js/30.3dddafb8.js",
    "revision": "97c3e1dca8b2c5af51c0354f5c040418"
  },
  {
    "url": "assets/js/31.8e45f1d4.js",
    "revision": "079eeb6fe292d6124c108398b96694fd"
  },
  {
    "url": "assets/js/32.50747c95.js",
    "revision": "c29c11ea3c46e85f0420d38671878ba2"
  },
  {
    "url": "assets/js/33.f4c6770a.js",
    "revision": "6b4edfd28e85cf38a2139a8acd9a1130"
  },
  {
    "url": "assets/js/4.8e9ae997.js",
    "revision": "55b44dc8eb5358f3ec736881e1510156"
  },
  {
    "url": "assets/js/5.91585936.js",
    "revision": "7e3a949d0635b06af9a8888f31ca28a5"
  },
  {
    "url": "assets/js/6.38d1f79f.js",
    "revision": "82351ea8eda80faa87a39d947112c8a0"
  },
  {
    "url": "assets/js/7.d8e6dca3.js",
    "revision": "a84dfc99deed9e9efd9469e0e2229813"
  },
  {
    "url": "assets/js/8.6e93747f.js",
    "revision": "4fd7de054190e8805738ea70ad07e497"
  },
  {
    "url": "assets/js/9.445135ea.js",
    "revision": "861951967cea579fba6c1a52906445bb"
  },
  {
    "url": "assets/js/app.037976a9.js",
    "revision": "70b3441e6a3561941533143e99910fad"
  },
  {
    "url": "categories/index.html",
    "revision": "c80f6917c1666d85b78e2813df4017bb"
  },
  {
    "url": "en/index.html",
    "revision": "9199ded921a97bd63852e5580a9ef4bb"
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
    "revision": "6b6414a6bde4caee3fe78d0a8933c20f"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "d56d22451f32d3ca8f89ad3e1cc4ca73"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "5966557fd0248961247eeddcd9b88e2f"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "911d29bb9ae4fe8334f9924c499740be"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "c059a14c34bc9b30ab679d074b90333c"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "e760365794bf79d658fd71bb7537cda3"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "794cb48e690e416ee0c4ee4ba4a6d511"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "dbac7d2a3295d3e7caa186b6af9b5a57"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "0126845f74407a4d3f6a6c609fb60fd1"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "e6ff3454569a3ebdfe73c025dce801d3"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "366bf8e4556f89ff172c79cbcf3c7400"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "71ee66cdcf3ef22fe642887372562743"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "46790a09528f3c4f34da6021f68a8ac4"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "a18b3a3d0f029e6e12e9cbf4e7ca3de2"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "ec5cb728771a15028741b2af86c16a71"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "1a033c6749662923a271713867f299b1"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "61254bd02fbf2b5a2e492dacf929c774"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "4ccbdca821f3d5134a3992c4bc622eb3"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "b471345c68136d05ab5b37e1b886b39b"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "00ca6b15bc97845be83ebf302ae21b67"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "54332d639a552e230e5c98b64f471250"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "1f16a2e534b23bf90612d11b578f1304"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "293fcc792a3dc35cf6118acb68c67734"
  },
  {
    "url": "tag/express/index.html",
    "revision": "c6e074cc2601894dc7a53a3ad2709d5c"
  },
  {
    "url": "tag/github/index.html",
    "revision": "803c387a758b36247515d8b7ec1581c9"
  },
  {
    "url": "tag/index.html",
    "revision": "c92bd8b5d9e74aa83373424b2c3e7472"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "cc50e6c339ae94cfb57acfa89351091c"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "ed3f6e85740d574c772b3bb6953faf4e"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "5a82c17fe6f34d9bd728d51aade5ef7d"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "6d7f9de256b9281f919aadead38ee254"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a24a4ca702a0f7b8fb977afd762cd28d"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "eebc9efcc5a54c11a8d603299fd4455b"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "f37a1878e7f439d374c3a033409d84fc"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "48adf2a8ac8f0ba622e24c8c86cf8bde"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "7611c90e8580e1c46ff6fa5f14efa80f"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "d76bf5305dcc478d6a63d7455feb74b5"
  },
  {
    "url": "timeline/index.html",
    "revision": "7675952c4802357154ac049de76fe9e0"
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
