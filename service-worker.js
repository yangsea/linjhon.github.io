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
    "url": "assets/js/1.78fba1b9.js",
    "revision": "426104915e2929124c06186afe6243cf"
  },
  {
    "url": "assets/js/10.65539d10.js",
    "revision": "99a033177dc6648155e1ee6656e931a9"
  },
  {
    "url": "assets/js/11.bc83b379.js",
    "revision": "ce733e9624b8eb27ddcb65e0743cfc9c"
  },
  {
    "url": "assets/js/12.0a405614.js",
    "revision": "37b59bc7fcba1ee45cfd1cca02d6866e"
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
    "url": "assets/js/18.6c0d1cf8.js",
    "revision": "745846ccbf0d2a405403c533f9a8e50b"
  },
  {
    "url": "assets/js/19.896ae8cb.js",
    "revision": "bab4941f2aede4134a04b4d90d996ada"
  },
  {
    "url": "assets/js/20.c4f777c4.js",
    "revision": "1ff5dee55aa2d14f88523945d42c37c5"
  },
  {
    "url": "assets/js/21.5e386f55.js",
    "revision": "d0918f11e9f4340c5501e68391a6ab61"
  },
  {
    "url": "assets/js/22.c1625299.js",
    "revision": "ae6e7aca29cd2d8c09c8c2252636f615"
  },
  {
    "url": "assets/js/23.8cc9150f.js",
    "revision": "bd24eafb260cad87c41bd83fa4b8539c"
  },
  {
    "url": "assets/js/24.50455f16.js",
    "revision": "eccac2ed52994a76dd91da5f04f88409"
  },
  {
    "url": "assets/js/25.0215580b.js",
    "revision": "2b7e8a79091d1088af6d1d27b35b193a"
  },
  {
    "url": "assets/js/26.4da39e59.js",
    "revision": "0ded3673e14e35afb8b1e40633c113f7"
  },
  {
    "url": "assets/js/27.9c6642a5.js",
    "revision": "e9329566ae946858cea84be958166c80"
  },
  {
    "url": "assets/js/28.906508bf.js",
    "revision": "0daaee3c22425fa47bfec0238c63c81d"
  },
  {
    "url": "assets/js/29.7f4c476e.js",
    "revision": "4c963aca84fd039be45b10bc016690b5"
  },
  {
    "url": "assets/js/3.a3166f81.js",
    "revision": "170ce4328066a09c32264fab794e66a6"
  },
  {
    "url": "assets/js/30.e3a508a5.js",
    "revision": "b60314a95aeb7d8b6a891aa952ceda73"
  },
  {
    "url": "assets/js/31.a793d932.js",
    "revision": "e829a6ee962c5b73de731adc2dd3778a"
  },
  {
    "url": "assets/js/32.b75dda63.js",
    "revision": "0d0cf51b7e0b230d46cdafb8f0d31e0d"
  },
  {
    "url": "assets/js/33.447d15aa.js",
    "revision": "ee7a0beedbdd2fdff18ff82cbdf59419"
  },
  {
    "url": "assets/js/34.38f74423.js",
    "revision": "cc8a51c40963886dfd70a2ac53d83c65"
  },
  {
    "url": "assets/js/35.ab993717.js",
    "revision": "15157f14c2dbb70e8393aa7fe96a48f2"
  },
  {
    "url": "assets/js/36.8a77eb8d.js",
    "revision": "b7eb76da9698687f1ba0604c206ae591"
  },
  {
    "url": "assets/js/37.5fe8b99b.js",
    "revision": "c61cda14c748fe59dc14842c5d3722dc"
  },
  {
    "url": "assets/js/38.d1c8efa0.js",
    "revision": "57de760d223c0342b9e4f17bf6654c98"
  },
  {
    "url": "assets/js/39.123b93bc.js",
    "revision": "c354e96d06554429db3364d16e000b8b"
  },
  {
    "url": "assets/js/4.4358c50f.js",
    "revision": "2e3bb21ca072df92b00581059767b28a"
  },
  {
    "url": "assets/js/40.0ead8f4e.js",
    "revision": "f216c1c3bd06b173b13232f8ffcdcb73"
  },
  {
    "url": "assets/js/41.4ebe9516.js",
    "revision": "e46ab3f5acd199ff609411e799bfa06b"
  },
  {
    "url": "assets/js/42.9bd4992e.js",
    "revision": "86cb3a4b7f8df7050bfcec240a0fd200"
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
    "url": "assets/js/9.23c48a95.js",
    "revision": "5c3c88a7d5ca52f4bdcd138433c9b223"
  },
  {
    "url": "assets/js/app.8bb4c3a6.js",
    "revision": "826ef7d311e5c3654165fd3736b528e5"
  },
  {
    "url": "categories/index.html",
    "revision": "a2130783d0466a67554ec1172b8d3671"
  },
  {
    "url": "en/index.html",
    "revision": "edc8db58b6c855316a618615a9f162ba"
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
    "revision": "4fd1bc6323d1fdfa4a099bf805824ac9"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "b9dc259751abae0251f633670e97fb44"
  },
  {
    "url": "post/1970/01/01/ji-zhang-app/index.html",
    "revision": "b06710cf90dac721f558c3212c47827d"
  },
  {
    "url": "post/1970/01/01/mine/index.html",
    "revision": "a2155aed0a455c44c8094ad05f89d3b2"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "e5c46ee286841370fca3a34ea27eaf2b"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "c79894915f192809381affe8a8722d22"
  },
  {
    "url": "post/1970/01/01/vuepress-plugin-vditor/index.html",
    "revision": "169db5a36e20d17d297b2461ec7f3d39"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "20ff9f0c9aabf052178d3e4ee1c5b229"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "d98e04f6921b15cc2de769eefbb80a71"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "bfddf86b6a492bdcad0ee6e79115be39"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "dec9a7e12aaa37304b6dad020e9f5100"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "b71fea9a8b93841ab95c695f7cc57a0a"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "cb9a08a41c608403ada8486dfe8f48c3"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "f883073ac85eb9d5cb63d3b51ec105cb"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "bec06a1ba67b7895c5471f3cb6e607d6"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "a1ada3b89503e821d27dff8dcccf38c9"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "b4111e919f75c55428c2770132f5fda4"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "c4ead3f0045f4325102e52f9e76c71cf"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "1b28a769d3b2281cd0d6bcccc86db259"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "276b311c751a418d16a3abbbe5f5f2d5"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "7d982a0ef804d65e0eb637cddfa7ba91"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "b3e2180b8f2fe4c84aca86b6daaaf723"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "389430532b96884f15653dfb19bb5c2d"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "8df9dfc82aa19f6e89bb82fa88354656"
  },
  {
    "url": "post/2021/04/26/duo-wei-shu-zu-bian-ping-hua/index.html",
    "revision": "0fdb7d1c08dee211446a710b43e274e6"
  },
  {
    "url": "post/2021/04/26/er-cha-shu-zen-me-bian-li/index.html",
    "revision": "6d76486c38bfa3a92a42185d711290a5"
  },
  {
    "url": "post/2021/05/08/centos-an-zhuang-nginx/index.html",
    "revision": "78cd6f1fef422c8a9ace603a13e4e4d1"
  },
  {
    "url": "post/2021/05/08/centos-chang-yong-ming-ling/index.html",
    "revision": "f65111e7973e8116dc3db88145a170bf"
  },
  {
    "url": "post/2021/05/08/ji-qi-qiang-lie-tui-jian-30-ge-hao-xi-guan/index.html",
    "revision": "2342fbd695d558f34214206d5d686fe0"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "ad71963d2d1cf940ce83f640569bbe0d"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "2bedb52a7c175f8e3f8816fd73f20d2f"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "8587e9587fb31baf0a00f1604b0af6cb"
  },
  {
    "url": "tag/express/index.html",
    "revision": "3c233689efb222ceb4b15acdda66c82d"
  },
  {
    "url": "tag/github/index.html",
    "revision": "b978325ec531b4f68f1b49efdf9560d7"
  },
  {
    "url": "tag/index.html",
    "revision": "620c62d0b412111b317c2290843ecb56"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "b29288c27013ed38b14153d359641476"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "004c86661d2c770f8a5845ecc7aec7ed"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "0b6c884d8cb3d96c81a43bc21173583c"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "2b68e57a37b55994de2990d9d622ade4"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "db8afba2bb0ab79511c0f0b32651755f"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "b394f78ab57c8bd59534a9daeab083d0"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "2cbdead78ac63b5f4a5177a0963dd05c"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "35afc2dde1e060b1689cd5486ec38d66"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "583bd08b1a61487853c1d5bdc0b4209d"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "963f3a9bcfd0fab7d1e36abfe4304f58"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "0dd103df532f9fc999734422b18cf917"
  },
  {
    "url": "timeline/index.html",
    "revision": "ae5bb4ae0132de4dfdcd401c48be38a7"
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
