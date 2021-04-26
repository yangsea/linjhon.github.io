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
    "url": "assets/js/1.2a390e22.js",
    "revision": "629db0f36eac3b51cc4cff1a90ffae7b"
  },
  {
    "url": "assets/js/10.08157cdb.js",
    "revision": "ee6d794fa197ec8f3b2c50e7e680c70b"
  },
  {
    "url": "assets/js/11.95dbd414.js",
    "revision": "e7a39010556119af3747fd137000effb"
  },
  {
    "url": "assets/js/12.0a405614.js",
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
    "url": "assets/js/15.047d8e15.js",
    "revision": "162eb529e660168808eb1571f2443f17"
  },
  {
    "url": "assets/js/16.9e7fe1f2.js",
    "revision": "f5ca0fa3b5c9e478d7d3a1dee0625562"
  },
  {
    "url": "assets/js/17.91cce16f.js",
    "revision": "5c0188f521ef11358901b22340c49896"
  },
  {
    "url": "assets/js/18.52e38558.js",
    "revision": "745846ccbf0d2a405403c533f9a8e50b"
  },
  {
    "url": "assets/js/19.95630285.js",
    "revision": "bab4941f2aede4134a04b4d90d996ada"
  },
  {
    "url": "assets/js/20.eed13fc8.js",
    "revision": "1ff5dee55aa2d14f88523945d42c37c5"
  },
  {
    "url": "assets/js/21.e26af6bc.js",
    "revision": "d0918f11e9f4340c5501e68391a6ab61"
  },
  {
    "url": "assets/js/22.373f5e67.js",
    "revision": "5264175666102eeb4331be46998bd2e9"
  },
  {
    "url": "assets/js/23.ab0c1b4f.js",
    "revision": "bd24eafb260cad87c41bd83fa4b8539c"
  },
  {
    "url": "assets/js/24.921ff568.js",
    "revision": "eccac2ed52994a76dd91da5f04f88409"
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
    "url": "assets/js/28.0c4928f0.js",
    "revision": "9c620d23f5401ab421c030abbdac7ccd"
  },
  {
    "url": "assets/js/29.250be7ad.js",
    "revision": "1fe6b2c582830e4afeb8509bb08bab20"
  },
  {
    "url": "assets/js/3.66ee5e66.js",
    "revision": "bdfe3bf809731b4abf62d579a96753f0"
  },
  {
    "url": "assets/js/30.03e7530a.js",
    "revision": "bbde90d07d869c9e5fea84922ce47dec"
  },
  {
    "url": "assets/js/31.6804ba39.js",
    "revision": "2f8be7f741e66882a6896b42d59dc52f"
  },
  {
    "url": "assets/js/32.6dddfefd.js",
    "revision": "0bf9d5ea09b274f52ac02cca319a78d2"
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
    "url": "assets/js/4.4358c50f.js",
    "revision": "2e3bb21ca072df92b00581059767b28a"
  },
  {
    "url": "assets/js/5.265491be.js",
    "revision": "565dc603c4acd4320fdee2de41cc2f37"
  },
  {
    "url": "assets/js/6.6522cfb1.js",
    "revision": "ecb36aff04eeee720db9322d4d2b801d"
  },
  {
    "url": "assets/js/7.0a6d5b17.js",
    "revision": "0aac05a03cdea518ff50e2bb26de1fc7"
  },
  {
    "url": "assets/js/8.54131fb0.js",
    "revision": "bf0687f077841f38d29a12f229e3c669"
  },
  {
    "url": "assets/js/9.5cf96086.js",
    "revision": "5c3c88a7d5ca52f4bdcd138433c9b223"
  },
  {
    "url": "assets/js/app.13a5ccae.js",
    "revision": "ba6e255fdae16104c1458f7661f354d3"
  },
  {
    "url": "categories/index.html",
    "revision": "4301b93258a75e8a4bdb6d5a5f745a9e"
  },
  {
    "url": "en/index.html",
    "revision": "ab1ee77e5c60154817cca07f8a5c0864"
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
    "revision": "9e7d08a64bdba0e3e57344b1a78e592d"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "db5a4a362364509874d4b9725707835e"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "f014ea4e9ebf4924bc4a53e81dfb44fa"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "695b72f5ec1909bc50739e9b02d83211"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "a31eb54bfcb109eaac08a16d2fd43a78"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "b4dca01726457ba764826c6246b8b504"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "02f3890016e95b530f36e1f0d4d5929e"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "ebe96da2e6b60099e6da82e4609e49f8"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "c8f8e6ecc656383a5e651f6e65c4f8c7"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "0b78074173a3f11d5f34452131098278"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "0dfa2c319f3de76b690e616f681d9408"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "f937d0b83de12c2e7f3edf1b6d5e2ef7"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "0393383002057ab50f1c703bbe9c8196"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "8f8520f23fdf7913c92ce8b5b8cd177f"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "04c72bff5b95cfa71d3c5c2f7171728e"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "3dc5eb63c6844b69dd4cbc598d55623d"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "888b36cb449ff3beddb233b51d60cb27"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "1c16a73d30a919a9e7d15dd6dae1dfbb"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "b526f532c7320e5ae22e18e020877170"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "8f3121106d619e24fd919ff14d55f122"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "268d77d803d57b8e146bf6bf69511cd1"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "038bd84025cc6f65bc56e7eb4a9434e4"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "1453393f0b927f55c3e01aa11c44f6ba"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "35ad61de54f1f57736ff40726dff6ed7"
  },
  {
    "url": "tag/express/index.html",
    "revision": "bb0578ff23f09fe38c841e6fddd39561"
  },
  {
    "url": "tag/github/index.html",
    "revision": "ce32acae3b1155d7d4e886d8f9da55d0"
  },
  {
    "url": "tag/index.html",
    "revision": "162baa06d8fbe260b588783eb36be25b"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "5a5993130f667dc30dc4c6416403c9c7"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "e1e34fb850da4de1a3862d1b4f0ce383"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "715f13487b1cc159aa1dd9ad808e00ec"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "aa85ac22aaa2ad9b9ea6eca25e2127c8"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "35767c569ddac1e714aa2a0f72c39c04"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a9bb48bddc346ddfb8d729408113b6f5"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "854e6c99550d375d0a8f4e4bcc1c9a5b"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "988e72fa0e55d50861d2b4124a463887"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "a2b851785803f0ad4cbb402f61784053"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "4961f68b65227cd715d7f4a426132146"
  },
  {
    "url": "timeline/index.html",
    "revision": "b20ed8bd1fa167cb04f82015cb6274f4"
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
