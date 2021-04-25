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
    "url": "assets/css/0.styles.e557af9e.css",
    "revision": "8deb6280c45336972d34641e4ba1f47e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.3fcc277f.js",
    "revision": "b4d1503f424200506148ad376b89270c"
  },
  {
    "url": "assets/js/10.08157cdb.js",
    "revision": "ee6d794fa197ec8f3b2c50e7e680c70b"
  },
  {
    "url": "assets/js/11.2f07c630.js",
    "revision": "e7a39010556119af3747fd137000effb"
  },
  {
    "url": "assets/js/12.38d2ac31.js",
    "revision": "37b59bc7fcba1ee45cfd1cca02d6866e"
  },
  {
    "url": "assets/js/13.aa568438.js",
    "revision": "4801ddb5154803752be5b43f1a05ea3e"
  },
  {
    "url": "assets/js/14.e7630a70.js",
    "revision": "63db6d3de251aaf8d63dab03846f03b2"
  },
  {
    "url": "assets/js/15.7253eec6.js",
    "revision": "c709fe72f5cf6714bc34f5d730b3f513"
  },
  {
    "url": "assets/js/16.1654b287.js",
    "revision": "d8a92625ded863cac7478d84b1341f27"
  },
  {
    "url": "assets/js/17.8a103638.js",
    "revision": "7cc3a80fb5a5a5b9dd49cd09adbbc740"
  },
  {
    "url": "assets/js/18.c64a7a06.js",
    "revision": "4ca54af17bd537c2cebcb007f52fda2b"
  },
  {
    "url": "assets/js/19.d48de989.js",
    "revision": "4999a88fee5d24524362e6de3d908fa0"
  },
  {
    "url": "assets/js/20.efccad10.js",
    "revision": "82a62a288b9066a1dca771822f3e9663"
  },
  {
    "url": "assets/js/21.5d3855dc.js",
    "revision": "8e2bce484b10296c0856da9d5d4cd549"
  },
  {
    "url": "assets/js/22.d1cc47b5.js",
    "revision": "6625f25fdfe83c78abf06774849d30b3"
  },
  {
    "url": "assets/js/23.d0e8bbb2.js",
    "revision": "98e8224a7efade22e33fdf2a4bbc8c28"
  },
  {
    "url": "assets/js/24.e0d59aed.js",
    "revision": "5971dfe781da380737bec862f20a9746"
  },
  {
    "url": "assets/js/25.1eee6967.js",
    "revision": "7943f9bad9eda9532e08856adf7718b0"
  },
  {
    "url": "assets/js/26.4d02b6a3.js",
    "revision": "e86434419e39fba7f547f05be3072990"
  },
  {
    "url": "assets/js/27.3007a6ec.js",
    "revision": "a298631007f50a743020ade64953f64c"
  },
  {
    "url": "assets/js/28.8f238f8f.js",
    "revision": "4f873eb8a7dbe7ed51f5ca77662bc1ea"
  },
  {
    "url": "assets/js/29.5e4ab89b.js",
    "revision": "93be73c94c241bbf9b99a0c2c54ea8f1"
  },
  {
    "url": "assets/js/3.58d629aa.js",
    "revision": "439f8702d2c7db33b3c39c01950b990b"
  },
  {
    "url": "assets/js/30.dcd5f11e.js",
    "revision": "5588c0710c83bedce639faa27758b3e8"
  },
  {
    "url": "assets/js/31.6804ba39.js",
    "revision": "2f8be7f741e66882a6896b42d59dc52f"
  },
  {
    "url": "assets/js/32.b442e1c6.js",
    "revision": "b2c92a55ac730b896618125b157a7091"
  },
  {
    "url": "assets/js/33.67ca38d0.js",
    "revision": "d6dc2a8991090f8f1feea3ef3137f185"
  },
  {
    "url": "assets/js/34.e4665de8.js",
    "revision": "84294cd3e4731ba2f2bbd03304b63d8e"
  },
  {
    "url": "assets/js/4.21ba9467.js",
    "revision": "350a50a4ce7bf9dae6a1e2244b20d996"
  },
  {
    "url": "assets/js/5.71c9d340.js",
    "revision": "5dccb35d6c110e62593330ab40471789"
  },
  {
    "url": "assets/js/6.b7ceda0d.js",
    "revision": "9dedf9982f24d6da9ec61eec7da4ccca"
  },
  {
    "url": "assets/js/7.e5006e13.js",
    "revision": "2fb8c6ae57575641546fec61840185f9"
  },
  {
    "url": "assets/js/8.60884a74.js",
    "revision": "4fd7de054190e8805738ea70ad07e497"
  },
  {
    "url": "assets/js/9.3f35a5f3.js",
    "revision": "eafd7a46a42e497ff2c949dd057e64a4"
  },
  {
    "url": "assets/js/app.2b1c3e68.js",
    "revision": "7bf3c2d75bdf91bda95f8cf878bd7b7f"
  },
  {
    "url": "categories/index.html",
    "revision": "fdf0fac9958cae7a7d1da8fd39162319"
  },
  {
    "url": "en/index.html",
    "revision": "7fcd447209593ff004e1528c8547b84d"
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
    "revision": "7e45deefa5bb95e61ed63233422d9cfc"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "f17ec20a813c18e4003319a10fb32eaf"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "4ea6d2bed70efbb7c48fabdf36d86f74"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "099599328b008e2c007e7b6e26f7c130"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "6032b5f2ac1936b16ace3ed47a0db441"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "a5bde0f691f19b09634b65eb8fef8da1"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "9c4b1105a7102f7cccd8e4fb14555666"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "d663f8fe32d90114c62fd4e2322b212d"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "5571120e21dff59198e5726348e6ca67"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "b84524b95d6b5e591aa4cb6193ee8e9e"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "f5cc08da7d707ba60eddbaae53552e06"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "ea290d225a37a56b1f702115728081d5"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "2aa931a18c2d2b3cdc431ef42231320a"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "823d3247d8184cab524640e2d3bd5a97"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "8f13860f7b36cc92afe304da68ac5ec8"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "4e47632c0b041b753d37791cc6dc2517"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "2101ace1c60116dcb7f8b3ae95c931fa"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "9d50395bb7daff549f85f42b119d6970"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "adbc70cedc1cebd2ce737835651c9d45"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "811fb8526250dd6faee49edb33afd277"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "18a0140ccfd0c36edf13822c827deb17"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "cdcfdfb90cca29ad97682375217cf6e3"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "c9d435824096d18b3a567e1172446c83"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "ea69809fa54524879ff709b26061130d"
  },
  {
    "url": "tag/express/index.html",
    "revision": "a6b8a59b13f91b002f5026ac427d07f0"
  },
  {
    "url": "tag/github/index.html",
    "revision": "037e588374c67e5b761d7b3042e3e8d1"
  },
  {
    "url": "tag/index.html",
    "revision": "a1918a8120b82a98fb343214f65a84fd"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "904dad18e749b3ec1d27da39477a403d"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "4aff325f24ae9ba41cfd6014df5c02a5"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "30dfc7fed2f9f2c4bc01d2f661790236"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "790931289561d98db8f14ee8ffa53fce"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "1c4230b747c615cc66d609e77fda747c"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "2a478b5270bb108b08aa90e457afe4d7"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "bceda2fe1bb1b0922fac0765c7c4a031"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "ab1eb98990996867b8303afb266885b5"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "45326b3194517825b2cb65ad809830b4"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "67c935077aa8f40127ee2084ea241ef9"
  },
  {
    "url": "timeline/index.html",
    "revision": "df70f165e66680eda85ef4f314ed7860"
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
