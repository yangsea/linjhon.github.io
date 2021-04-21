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
    "url": "assets/js/app.d5a811ab.js",
    "revision": "de678a175fe536a8a8e7e6ebbfd654dd"
  },
  {
    "url": "categories/index.html",
    "revision": "f0e5c2237797d683a66f0319f2d0806e"
  },
  {
    "url": "en/index.html",
    "revision": "32b9855d5e1a57d5e502c2a01b7f6f3e"
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
    "revision": "ae8120f54ce0d21d6627b9bf25ed8614"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "585d070019c8f7cf0a6d16561b375ae8"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "75b496299f7829acc367db0058e47cab"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "7f3244886f344d9fbdefd959aafd9dff"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "5200b99e2bad1a5282a8473afc567f5c"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "8d688211fe809e6c83ba5041a8426394"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "9cb6eccb8ff065133f8451aaa91bae05"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "f497ed3d0bf661c16b0287882fbef806"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "731ed4a268836aa473ff185989fd1d08"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "94cf504be7477a0ff3455a7ca32014d4"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "04546a232207b5abbfb626c7d1bb00ab"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "cbe5ce622c6eacf475aaffa06d8e8f33"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "983b9a8f34a77490f62d60f1d7e4aafe"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "db52e97472c758b8821dca087d177c4f"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "dea4faffd46b82c8ba17e153973c0b9c"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "d9bce41f970ae1eea0fd928c4f6285db"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "bac4f01cad159515bbbfdd2f476e60fa"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "14f388daaadd9426a1cb6ae03b5f7684"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "6c20ddd4d83f47380f01423ec12e04ee"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "66c282b2ff72feafd44966e37cd97a3e"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "d7db013edeae4b76681cf757636773f0"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "84eaeb2a24ff4626abb2def6272feefe"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "eb5c56a62b24f683a0c93583d325e984"
  },
  {
    "url": "tag/express/index.html",
    "revision": "9b4e11c468cbef6dca63a1be1ea10ebe"
  },
  {
    "url": "tag/github/index.html",
    "revision": "ace85aed4564ec2e30b333bb423bb817"
  },
  {
    "url": "tag/index.html",
    "revision": "ecca1e46df9d13b890b6d43623e2aa92"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "deeb271cc25b41bcadd8523f368ae6e0"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "cd30d8c9c8e42170517045f426d642d5"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "f27839124c3bdc3e210158777b4d4814"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "214170665c31a0cad9abd5a224d0543a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "bf507d74e83986594340145c0aeda0f6"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "27c11073a23988b1f2fade02494893f6"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "9e54778a5f484935a494065b301c3b6b"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "fd0c0dfd0ed4a216b9bab9f3953914ea"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "d7cf071c2e2ee917848b0aae8ee1acf5"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "bcb1a08c04f543dfa705024abd91629d"
  },
  {
    "url": "timeline/index.html",
    "revision": "222eb48834f793150f27b832e8caee24"
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
