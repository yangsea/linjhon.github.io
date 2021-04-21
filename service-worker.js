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
    "url": "assets/js/11.2f07c630.js",
    "revision": "e7a39010556119af3747fd137000effb"
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
    "url": "assets/js/23.422e9b6d.js",
    "revision": "98e8224a7efade22e33fdf2a4bbc8c28"
  },
  {
    "url": "assets/js/24.86c7d559.js",
    "revision": "5971dfe781da380737bec862f20a9746"
  },
  {
    "url": "assets/js/25.113c1d19.js",
    "revision": "7943f9bad9eda9532e08856adf7718b0"
  },
  {
    "url": "assets/js/26.fc501358.js",
    "revision": "e86434419e39fba7f547f05be3072990"
  },
  {
    "url": "assets/js/27.1c786ae1.js",
    "revision": "a298631007f50a743020ade64953f64c"
  },
  {
    "url": "assets/js/28.d7d62428.js",
    "revision": "4f873eb8a7dbe7ed51f5ca77662bc1ea"
  },
  {
    "url": "assets/js/29.22df39d8.js",
    "revision": "93be73c94c241bbf9b99a0c2c54ea8f1"
  },
  {
    "url": "assets/js/3.ac96b996.js",
    "revision": "9d625b50867afa8e8a1c0fa72deb75fb"
  },
  {
    "url": "assets/js/30.6c1eba64.js",
    "revision": "5588c0710c83bedce639faa27758b3e8"
  },
  {
    "url": "assets/js/31.67055a53.js",
    "revision": "2f8be7f741e66882a6896b42d59dc52f"
  },
  {
    "url": "assets/js/32.00e1fdf8.js",
    "revision": "b2c92a55ac730b896618125b157a7091"
  },
  {
    "url": "assets/js/33.e3eaa978.js",
    "revision": "d6dc2a8991090f8f1feea3ef3137f185"
  },
  {
    "url": "assets/js/34.e4665de8.js",
    "revision": "84294cd3e4731ba2f2bbd03304b63d8e"
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
    "url": "assets/js/9.441f35a6.js",
    "revision": "861951967cea579fba6c1a52906445bb"
  },
  {
    "url": "assets/js/app.42a1f8ef.js",
    "revision": "c636c56d1629df904bb193ca5ffebaaf"
  },
  {
    "url": "categories/index.html",
    "revision": "4966337b22b0c709b836aa1a13ba46f5"
  },
  {
    "url": "en/index.html",
    "revision": "7e55c033ed0818ee1b1a49acf807d953"
  },
  {
    "url": "img/2021-04-21-16-36-04.png",
    "revision": "e56e9c844c58235037fc2e54489035e0"
  },
  {
    "url": "img/2021-04-21-16-40-35.png",
    "revision": "207c5c275a88ef0dd64ea2324bcb8828"
  },
  {
    "url": "img/2021-04-21-16-41-15.png",
    "revision": "1d39e1625c8114125282b19f94c12d73"
  },
  {
    "url": "img/2021-04-21-16-43-16.png",
    "revision": "2caa7bddf298a8468e36072d983c621f"
  },
  {
    "url": "img/2021-04-21-17-45-33.png",
    "revision": "a0200b774cd791cefd3b1893092c27c1"
  },
  {
    "url": "img/2021-04-21-17-45-43.png",
    "revision": "a0200b774cd791cefd3b1893092c27c1"
  },
  {
    "url": "img/2021-04-21-17-45-45.png",
    "revision": "a0200b774cd791cefd3b1893092c27c1"
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
    "revision": "ee78d484ecb407a1ad88d4576489ff9b"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "1a1e648c067eccde97caf1aa0a16ef13"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "b2425e9ce7868bfa8dfd21dfd459518c"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "ecf62d65c4a68a7dbc9812fbff2051dc"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "c99cf9bd8bf573d1ee3229959da0d05f"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "e1e35c68434a9c8831201b9c1ae32a0e"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "b00981e5d7e637176e07a61ce6cc1c2a"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "dbea7651a6f1947bddfcef632f1f29aa"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "4205270c4ac6e641f977bff099e8e1b9"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "8386604b1fef98009071ab2db5434f2f"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "fe4079ccbf02e0ec4927023765da9999"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "9c8e44bb2344ef6f4d36ebff6446b924"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "0636a0a0cac2f6894da8d42cbf96c611"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "63e8b48952bcc190064a2a1cd9cac82d"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "4bb4a61b223358e5ed7d2143fae3416e"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "df59e3fb7115ea74258729ace2f9c26e"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "a98516a4d2de76b2b35eee0ed658af5c"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "079d7342eea443ad17a26182fe52a5ef"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "d69f39f1c4beed98d0368c25bc2347a4"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "0e10d30a0341c5762f86b4a996d7a913"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "40fbdfdca28a29bd4d6c1120ebf080c7"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "51a5ba9fd1be9c56dc0fa5532ce643a7"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "7c0115598c04802849e1027c8338f2c4"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "78e8911d2b8780a5528176e52ce44a2b"
  },
  {
    "url": "tag/express/index.html",
    "revision": "18a4191943c419b24ab35d3ad6e6f2b4"
  },
  {
    "url": "tag/github/index.html",
    "revision": "5f43295dd3e9ee216e33f1f47102e5e9"
  },
  {
    "url": "tag/index.html",
    "revision": "9a54172a28d1bcb9d2bf0324df5fdef2"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "d695c2ef4c1b3928dbab4fec44b3adf1"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "72cbdc7d8bc7169eff43a3e0172f0ada"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "35e14a327f35862e7d21ba9d7418021e"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "5efd293f5e9760885e9808ef3b42b58d"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "fd038d203b404043d7d1efe2b07575ad"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "db779f31fa9e18f3267e98c63a811625"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "4229dc5abb52b4da10cf58da59fafae6"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "ca21e16eae153fd02369291e6682c304"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "6dd8f63b1594aaaa7f9f8cf3bf7d792d"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "0fb46cdcc8e773e5726e8dfecdfad171"
  },
  {
    "url": "timeline/index.html",
    "revision": "386acf9e287d0e00eb42165fa200bd0f"
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
