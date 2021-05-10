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
    "revision": "1dcbd03cc9c17840667c3a6be1811a8b"
  },
  {
    "url": "assets/css/0.styles.e557af9e.css",
    "revision": "8deb6280c45336972d34641e4ba1f47e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.d97138ed.js",
    "revision": "27c06ea0d78f5ca2a16dbe8096ca8e43"
  },
  {
    "url": "assets/js/10.65539d10.js",
    "revision": "99a033177dc6648155e1ee6656e931a9"
  },
  {
    "url": "assets/js/11.88b7452e.js",
    "revision": "d35f32aabbd2e56eed6bdf3fd21910d5"
  },
  {
    "url": "assets/js/12.5d975e24.js",
    "revision": "7c104c61fd9fc93e34457469eb3eb1e2"
  },
  {
    "url": "assets/js/13.6873b354.js",
    "revision": "4801ddb5154803752be5b43f1a05ea3e"
  },
  {
    "url": "assets/js/14.68af2470.js",
    "revision": "63db6d3de251aaf8d63dab03846f03b2"
  },
  {
    "url": "assets/js/15.43b4bca9.js",
    "revision": "162eb529e660168808eb1571f2443f17"
  },
  {
    "url": "assets/js/16.a692dcce.js",
    "revision": "f5ca0fa3b5c9e478d7d3a1dee0625562"
  },
  {
    "url": "assets/js/17.955cc71c.js",
    "revision": "5c0188f521ef11358901b22340c49896"
  },
  {
    "url": "assets/js/18.921b68d7.js",
    "revision": "574c6c073f532a6e7dea32f311b5880a"
  },
  {
    "url": "assets/js/19.92e0d154.js",
    "revision": "1e14cdf39fb4ec138e229bf9e4d16652"
  },
  {
    "url": "assets/js/20.1b900edb.js",
    "revision": "e2462fa8181e18f769f93a63f37d806e"
  },
  {
    "url": "assets/js/21.bfe15ee7.js",
    "revision": "efe7c80a5c506db45e950e07825fc2f1"
  },
  {
    "url": "assets/js/22.842efb40.js",
    "revision": "30648f97d056a466c1356b4eb9d1557d"
  },
  {
    "url": "assets/js/23.2eb22c18.js",
    "revision": "98ea461848a265a722918a7af38cf2b7"
  },
  {
    "url": "assets/js/24.b38d2fcc.js",
    "revision": "1259fa77b31680a46e8ef2e1aa169d95"
  },
  {
    "url": "assets/js/25.0d29d4f8.js",
    "revision": "59f900bd1ff1f3bd5cfaf1df10f46308"
  },
  {
    "url": "assets/js/26.8c7bbcfc.js",
    "revision": "4177eb84d5b6e442f885698b95ff01f5"
  },
  {
    "url": "assets/js/27.feadba70.js",
    "revision": "cb34b1a7d05b765735364ba252d4a81e"
  },
  {
    "url": "assets/js/28.758d65e5.js",
    "revision": "53fe067ddc934e78cc023c424a5667ac"
  },
  {
    "url": "assets/js/29.e1641da3.js",
    "revision": "63e2c625f379afbbfb544d20b0337777"
  },
  {
    "url": "assets/js/3.89ec0355.js",
    "revision": "1d285ad11f997559bb14be3004f9a200"
  },
  {
    "url": "assets/js/30.0ad7b6a8.js",
    "revision": "5663c683009a1448d1396518a29167f1"
  },
  {
    "url": "assets/js/31.fc2b2b8f.js",
    "revision": "6e9e3e47a0fdaeb4101a914c4e306f96"
  },
  {
    "url": "assets/js/32.1a6e3d91.js",
    "revision": "80dd0b66e640d54a640715dc5ea051bb"
  },
  {
    "url": "assets/js/33.19f1cbd0.js",
    "revision": "a4820c9fe9df23ff0052b032977fd935"
  },
  {
    "url": "assets/js/34.17da1e48.js",
    "revision": "1759c3494e0c7bf56b37a62d23399aec"
  },
  {
    "url": "assets/js/35.b1f5d34f.js",
    "revision": "2f983450b57d1a26c6bf7f2b5747aa33"
  },
  {
    "url": "assets/js/36.ea74364a.js",
    "revision": "b7eb76da9698687f1ba0604c206ae591"
  },
  {
    "url": "assets/js/37.a380cc27.js",
    "revision": "01bae294d6dbee6032db262c16d4f27c"
  },
  {
    "url": "assets/js/38.bad7419c.js",
    "revision": "cc224bbb7ed96224bee7aa41519c967d"
  },
  {
    "url": "assets/js/39.93fef5ed.js",
    "revision": "98d2480041fae2c25a2d98e3a3540636"
  },
  {
    "url": "assets/js/4.82ffdbe3.js",
    "revision": "1ad7b088cc9095653c58fda51a7b35ed"
  },
  {
    "url": "assets/js/40.ef3bfd6e.js",
    "revision": "8a2f1ea9736280d3eba86b0d493c6d05"
  },
  {
    "url": "assets/js/41.54e7f08a.js",
    "revision": "2d95cfbf042579daaa0a5cf9876d84e6"
  },
  {
    "url": "assets/js/42.9478510a.js",
    "revision": "b0d3e500b193ca47140c2976962d6309"
  },
  {
    "url": "assets/js/43.d8218c28.js",
    "revision": "39d6fe63576a4b33d2282905a606144b"
  },
  {
    "url": "assets/js/44.76fab924.js",
    "revision": "880c0f2d67b5776228519df950403be5"
  },
  {
    "url": "assets/js/45.95390b14.js",
    "revision": "d7c8836f4d4a498064e501159343dac4"
  },
  {
    "url": "assets/js/46.759faea5.js",
    "revision": "e53490fdf854d00e8972ecfc292e57bd"
  },
  {
    "url": "assets/js/47.90f97f68.js",
    "revision": "2d372002175e8b27ecc1be4111ec7f85"
  },
  {
    "url": "assets/js/48.84a17f3f.js",
    "revision": "970671eba3885cc0ab331bc4f7bd792a"
  },
  {
    "url": "assets/js/49.b83c0041.js",
    "revision": "06b7d61a3911f96ecdd9d1ccdcbf73a8"
  },
  {
    "url": "assets/js/5.03df5782.js",
    "revision": "e5a7249b65f0a79067f91150effcadb3"
  },
  {
    "url": "assets/js/50.39a9dfc5.js",
    "revision": "5325aa917c10481220c97acb433e350a"
  },
  {
    "url": "assets/js/51.aa3e8657.js",
    "revision": "77340afbeba9f3c57107a83e2a90a266"
  },
  {
    "url": "assets/js/52.89e59965.js",
    "revision": "1ca8a4dd3c72ce88ff2d6fbba5fe7309"
  },
  {
    "url": "assets/js/53.c13ee1a6.js",
    "revision": "76f0d7d5aa1a09f0c0abc66265411295"
  },
  {
    "url": "assets/js/54.ab20d3a2.js",
    "revision": "689ef1680f58f361ce019f6babf50a64"
  },
  {
    "url": "assets/js/55.8df7452e.js",
    "revision": "25ef2ff7acae710194800be7464e033c"
  },
  {
    "url": "assets/js/56.0554ea40.js",
    "revision": "2a9c456b9e0fcef504a4a717a20e4d06"
  },
  {
    "url": "assets/js/57.28c012ec.js",
    "revision": "9e03e05f65520c58919d16dde498c667"
  },
  {
    "url": "assets/js/58.f23d486d.js",
    "revision": "b214fa36ca8c935ef1ba54ec768cc0a1"
  },
  {
    "url": "assets/js/6.9e5998be.js",
    "revision": "c94b161aeeb229695a5ae2557b51095c"
  },
  {
    "url": "assets/js/7.6646fd7b.js",
    "revision": "e438a3528e7426a3b322d8231fe4b354"
  },
  {
    "url": "assets/js/8.f5614cfe.js",
    "revision": "5d84d3c78765acb10a03d321794862cc"
  },
  {
    "url": "assets/js/9.b8d5cc47.js",
    "revision": "58ce99ea3095a238968bc313dbb6b078"
  },
  {
    "url": "assets/js/app.9e9c9e22.js",
    "revision": "a58c9027e8f7b3a8f047d8e94b23e8c2"
  },
  {
    "url": "categories/index.html",
    "revision": "82711ea3cf5325575566bbaa86386eba"
  },
  {
    "url": "en/index.html",
    "revision": "d1d6f9d183eb3337d6a74928da1a3e70"
  },
  {
    "url": "front-end/interview/topic.html",
    "revision": "a090c4e3dfdf3ad0da56193459a91ac9"
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
    "url": "img/2021-04-27-15-25-16.png",
    "revision": "3c30717e702f118257b071b6f25166d2"
  },
  {
    "url": "img/2021-04-27-15-26-20.png",
    "revision": "769bd1d95e22a6380864f30ae387e443"
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
    "revision": "d31edc6f37aee73485ad1e8bd9f018f2"
  },
  {
    "url": "learning/develop/http/index.html",
    "revision": "28aa2e4ed35cf94087e3adaa2e822480"
  },
  {
    "url": "learning/develop/index.html",
    "revision": "c914b83bacc8c795c4a9b1b6161765bb"
  },
  {
    "url": "learning/foreign-language/index.html",
    "revision": "f25a1633dcab234a7260eec537c381f5"
  },
  {
    "url": "learning/frontend/1970/01/01/babel/index.html",
    "revision": "119a1694309d52fc17aac5e2a70f500f"
  },
  {
    "url": "learning/frontend/1970/01/01/css/index.html",
    "revision": "c4ffdd1949f0748160136a488f6afa42"
  },
  {
    "url": "learning/frontend/1970/01/01/html/index.html",
    "revision": "c2865bc1624bced00a3c6133baa9b479"
  },
  {
    "url": "learning/frontend/1970/01/01/javascript/index.html",
    "revision": "239627eff82f471f14541c185d9f5bca"
  },
  {
    "url": "learning/frontend/1970/01/01/nodejs/index.html",
    "revision": "6beed14a462c31e0e4dc883141b66a88"
  },
  {
    "url": "learning/frontend/1970/01/01/object/index.html",
    "revision": "7ecc8114be11e6928e6ebc54caf61368"
  },
  {
    "url": "learning/frontend/1970/01/01/react/index.html",
    "revision": "d2f8dd09ee464388fbfc0be888abe699"
  },
  {
    "url": "learning/frontend/1970/01/01/typescript/index.html",
    "revision": "d2228728c0867ad72fb6ecd73fe6e274"
  },
  {
    "url": "learning/frontend/1970/01/01/vue/index.html",
    "revision": "3b3f6b05a897a61394ce3f0d88133d80"
  },
  {
    "url": "learning/frontend/1970/01/01/webpack/index.html",
    "revision": "383af1c84ac0d6a9edac20a5ea2f36b5"
  },
  {
    "url": "learning/frontend/2021/04/26/duo-wei-shu-zu-bian-ping-hua/index.html",
    "revision": "d1e320b30cbd4dd6aec058357f37ca01"
  },
  {
    "url": "learning/frontend/2021/04/26/er-cha-shu-zen-me-bian-li/index.html",
    "revision": "ab22655e7421b658108bacf2108db5f8"
  },
  {
    "url": "learning/frontend/index.html",
    "revision": "5866d011385a3ac2dcbf134bf1d2843f"
  },
  {
    "url": "learning/frontend/page/2/index.html",
    "revision": "d59d911bb025e132d48224fca7513db3"
  },
  {
    "url": "learning/index.html",
    "revision": "14b96e2ec20ce681eaa08a690f03a294"
  },
  {
    "url": "learning/servers/1970/01/01/database/index.html",
    "revision": "dab73066f1b1b4e1071ac9219cdb346b"
  },
  {
    "url": "learning/servers/2021/05/08/centos-an-zhuang-nginx/index.html",
    "revision": "6c9dbdaec956f7142d67b8410a6e7fc9"
  },
  {
    "url": "learning/servers/2021/05/08/centos-chang-yong-ming-ling/index.html",
    "revision": "d54c0f8940912993ba79c88dfda392e9"
  },
  {
    "url": "learning/servers/2021/05/09/centos-fang-huo-qiang-she-zhi-yu-duan-kou-kai-fang-de-fang-fa/index.html",
    "revision": "95354b28700f954bd37851194555381b"
  },
  {
    "url": "learning/servers/index.html",
    "revision": "4ea51611f782b5b6acc3fe56f8cf38f3"
  },
  {
    "url": "mine/index.html",
    "revision": "5394816757e1972fd48fd1972689c404"
  },
  {
    "url": "mine/ji-zhang-app.html",
    "revision": "f2bfa060aa4a2fc8cb706e083dd91b49"
  },
  {
    "url": "mine/life/ji-qi-qiang-lie-tui-jian-30-ge-hao-xi-guan.html",
    "revision": "bacd8d783e306c2c94137b5015733449"
  },
  {
    "url": "post/1970/01/01/vuepress-plugin-vditor/index.html",
    "revision": "46b33f5e199c8c8ebc99da1e3fd7f235"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "451bbaa4b35c4890b9612560b5f70bf7"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "aa42edec37f4aeeefef250c39c58f6ed"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "13d3390ece9d9b15f86943e1cd69e591"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "6b4d90ceed896d01e7c808a3c3a96a63"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "7074500ef53799dc1d45fb944c4c8d20"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "b82d74af35fba8e358ebaf364a5e1638"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "3a83d471fcf5b0bb050d3a5fad63b609"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "e4148efb63943fcfe0542ab76fa5f1e0"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "872182f425a9c83f661d9cdcf2e90315"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "11e770cd853c9a60ba98861c8765715f"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "f5c74377d9af074f48dc65c4cf04c3be"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "758fb3edb8e14e606c40aaf3918f0382"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "c151d1cf4c1e0516d724f3a0d5afb6f4"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "5af64c44e9e0e537c3701c1629a014b4"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "cdbea0d07b264ab1499e0e4fd3a55056"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "4f3ecfc66172849f1d6ea23f3ea1bb38"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "5aeebcbdf9a7b2cbc5652bbb2ee042e1"
  },
  {
    "url": "post/2021/05/10/mysql-wei-shen-me-ke-yi-tong-shi-shi-yong-gpl-kai-yuan-xie-yi-he-shang-yong-shou-quan-xie-yi/index.html",
    "revision": "c0d147e8c8cdf07ade4b1e4122edfcba"
  },
  {
    "url": "post/index.html",
    "revision": "d92999cb4052a648126017383936c34a"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "5c35b47301f41dbb35cb1857d694df25"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "d5e79dc233a95f7596c3dff8b634843e"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "18e43757d13e92555b6afc412f97bcd1"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "34e8b4b41202fe579e771bfc6951f79f"
  },
  {
    "url": "tag/express/index.html",
    "revision": "49798ca448d51a95ad75c42ad387e11d"
  },
  {
    "url": "tag/github/index.html",
    "revision": "50ada154f74e70745bcd588c74e66c35"
  },
  {
    "url": "tag/index.html",
    "revision": "8c84e0aa4efed1f023d9a26d3520d056"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "188fadf660081a8b34fded370d5af6ad"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "d858ce8967e89ab90f434fc7fcdbfdfb"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "0ee10de5d0eff1106d3513f0623e5135"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "79c46279cda05b741fbc88809f86e556"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "e80a671b3ffdb01184d9f0887b1dee45"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ff337d5bbd7be44db2f920bcb8bc7635"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "8f872a858b9e8b060e68559265c93378"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "a50973df22aaf3a2a9015cad43190466"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "94d9f3bbb7c6208163b984ec4c844494"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "908c926c36ee6e5fea124ea15c33343a"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "60b3790e3f73cdc253545e74af789a64"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "48e21328e25413364841bf0c23b5e97d"
  },
  {
    "url": "tag/防火墙/index.html",
    "revision": "1550c51f08aaa354f10926ccdc7771d7"
  },
  {
    "url": "timeline/index.html",
    "revision": "bdb03f24b339420a03bf9181b4e712da"
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
