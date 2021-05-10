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
    "revision": "80a75706ad75107381da91c2cb999a52"
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
    "url": "assets/js/11.2c1c8a79.js",
    "revision": "9739feb932b7a7bc75e1ec680d52ee36"
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
    "url": "assets/js/3.89ec0355.js",
    "revision": "1d285ad11f997559bb14be3004f9a200"
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
    "url": "assets/js/34.d1dda3ba.js",
    "revision": "a5fe8937e39a8f9742da82261adac51d"
  },
  {
    "url": "assets/js/35.a4f7ef76.js",
    "revision": "d95bada2f3c3cf97164cecf18a15f0d4"
  },
  {
    "url": "assets/js/36.6626986a.js",
    "revision": "b1e23bc96838497b87679437a76f01ab"
  },
  {
    "url": "assets/js/37.931d63ff.js",
    "revision": "4b65ec6bd304f972cd4a10cdcb9cf900"
  },
  {
    "url": "assets/js/38.23255276.js",
    "revision": "86f2f9ed51f2640e2887eff38b2d49d4"
  },
  {
    "url": "assets/js/39.cf7d2f75.js",
    "revision": "58efe7016d7430abe6e0dc9889a03a60"
  },
  {
    "url": "assets/js/4.82ffdbe3.js",
    "revision": "1ad7b088cc9095653c58fda51a7b35ed"
  },
  {
    "url": "assets/js/40.6555ed4f.js",
    "revision": "f216c1c3bd06b173b13232f8ffcdcb73"
  },
  {
    "url": "assets/js/41.4e7d491b.js",
    "revision": "2d95cfbf042579daaa0a5cf9876d84e6"
  },
  {
    "url": "assets/js/42.30c3931a.js",
    "revision": "b0d3e500b193ca47140c2976962d6309"
  },
  {
    "url": "assets/js/43.8b98e2f1.js",
    "revision": "39d6fe63576a4b33d2282905a606144b"
  },
  {
    "url": "assets/js/44.c1795588.js",
    "revision": "880c0f2d67b5776228519df950403be5"
  },
  {
    "url": "assets/js/45.41906e17.js",
    "revision": "d7c8836f4d4a498064e501159343dac4"
  },
  {
    "url": "assets/js/46.1662239d.js",
    "revision": "e53490fdf854d00e8972ecfc292e57bd"
  },
  {
    "url": "assets/js/47.325cf08f.js",
    "revision": "2d372002175e8b27ecc1be4111ec7f85"
  },
  {
    "url": "assets/js/48.68371cbf.js",
    "revision": "970671eba3885cc0ab331bc4f7bd792a"
  },
  {
    "url": "assets/js/49.fbaa14fa.js",
    "revision": "06b7d61a3911f96ecdd9d1ccdcbf73a8"
  },
  {
    "url": "assets/js/5.03df5782.js",
    "revision": "e5a7249b65f0a79067f91150effcadb3"
  },
  {
    "url": "assets/js/50.318df609.js",
    "revision": "ffbc2f8b8fe8660ca590a3aac8308ce7"
  },
  {
    "url": "assets/js/51.2c702bcd.js",
    "revision": "99e54c01c356e15d4ae22624e06f70bc"
  },
  {
    "url": "assets/js/52.75b6f1ed.js",
    "revision": "e68aa1c76020bdac4df9105d770a67f8"
  },
  {
    "url": "assets/js/53.adbc8643.js",
    "revision": "242e4432e7d41dc599d322c3de0fea80"
  },
  {
    "url": "assets/js/54.f1672d75.js",
    "revision": "d8aeb9b688b11a0eee2759ecc772f17b"
  },
  {
    "url": "assets/js/55.47831307.js",
    "revision": "455b87bb8e38e856d2d198dde746f0e9"
  },
  {
    "url": "assets/js/56.d352366c.js",
    "revision": "0bc0cdf4ca516f383925bad2d75ed49e"
  },
  {
    "url": "assets/js/57.c6043717.js",
    "revision": "a260d86b0259066878ac8dcd8a351441"
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
    "url": "assets/js/app.277c42c2.js",
    "revision": "eb98a7f27f8e80c309aa94e056b038e1"
  },
  {
    "url": "categories/index.html",
    "revision": "908ab157fc4ef214e3e8b4ba7de11e0b"
  },
  {
    "url": "en/index.html",
    "revision": "ad22057967989bdeff366eeb935ed170"
  },
  {
    "url": "front-end/interview/topic.html",
    "revision": "46e28fdd7dc5b6df855f3c6ba36522c8"
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
    "revision": "5d18c317b4710923268ec68588ff89f6"
  },
  {
    "url": "learning/develop/http/index.html",
    "revision": "3cd482b0d49b87ac986182d86f40a2e4"
  },
  {
    "url": "learning/develop/index.html",
    "revision": "aeef316f9fc34c263ec1c55cd4ff1041"
  },
  {
    "url": "learning/foreign-language/index.html",
    "revision": "b1414acee09810728d2b3951a5805fc9"
  },
  {
    "url": "learning/frontend/1970/01/01/babel/index.html",
    "revision": "0eddb14ba41f0e619cc65d7851351132"
  },
  {
    "url": "learning/frontend/1970/01/01/css/index.html",
    "revision": "bbae6bc7754401b0e23a3f49cb6c2e48"
  },
  {
    "url": "learning/frontend/1970/01/01/html/index.html",
    "revision": "8419b96be2595234917866e591fe64ea"
  },
  {
    "url": "learning/frontend/1970/01/01/javascript/index.html",
    "revision": "effeee7127a2ca3af2f1ed8460ebc6b8"
  },
  {
    "url": "learning/frontend/1970/01/01/nodejs/index.html",
    "revision": "c0995f08b993645a73fd3d49e01080eb"
  },
  {
    "url": "learning/frontend/1970/01/01/object/index.html",
    "revision": "39c1090c589106f0d5c873b48fb470d5"
  },
  {
    "url": "learning/frontend/1970/01/01/react/index.html",
    "revision": "b088fb7e5395323fb2273609eca0ee64"
  },
  {
    "url": "learning/frontend/1970/01/01/typescript/index.html",
    "revision": "8b161d1d1e6cc5cdef90909fac0683bb"
  },
  {
    "url": "learning/frontend/1970/01/01/vue/index.html",
    "revision": "c3dc95716b060ae6095cb204f7878bd6"
  },
  {
    "url": "learning/frontend/1970/01/01/webpack/index.html",
    "revision": "c9bb104b7223d7afa55696b89f0c97a3"
  },
  {
    "url": "learning/frontend/2021/04/26/duo-wei-shu-zu-bian-ping-hua/index.html",
    "revision": "54dfbd6a4a8987cc9aaa951a60d2d102"
  },
  {
    "url": "learning/frontend/2021/04/26/er-cha-shu-zen-me-bian-li/index.html",
    "revision": "dafd39ee9c88ba1784606ddc15d6c6f2"
  },
  {
    "url": "learning/frontend/index.html",
    "revision": "fa24056d4889677d6f25c5f1b67235b2"
  },
  {
    "url": "learning/frontend/page/2/index.html",
    "revision": "ef2d45e91d3da54dfd355d9f1b028a6f"
  },
  {
    "url": "learning/index.html",
    "revision": "58c8bec856f363e5864694be2f0fb7fc"
  },
  {
    "url": "learning/servers/1970/01/01/database/index.html",
    "revision": "6d24c8083923f4e289b4aebd23233420"
  },
  {
    "url": "learning/servers/2021/05/08/centos-an-zhuang-nginx/index.html",
    "revision": "8da600d74b5be3111b299d48f1d545b7"
  },
  {
    "url": "learning/servers/2021/05/08/centos-chang-yong-ming-ling/index.html",
    "revision": "37940af0aa4105a4ede5fa898a935000"
  },
  {
    "url": "learning/servers/2021/05/09/centos-fang-huo-qiang-she-zhi-yu-duan-kou-kai-fang-de-fang-fa/index.html",
    "revision": "f23d56192f5c27daa7d5975c17d93097"
  },
  {
    "url": "learning/servers/index.html",
    "revision": "3d0ed811d6af628006a74d0ddd74362c"
  },
  {
    "url": "mine/index.html",
    "revision": "9ddd0ef9c7d4ac8437c6717c6116ae30"
  },
  {
    "url": "mine/ji-zhang-app.html",
    "revision": "2f1d4672893b6fdf5e46dd57fd9c149b"
  },
  {
    "url": "mine/life/ji-qi-qiang-lie-tui-jian-30-ge-hao-xi-guan.html",
    "revision": "fc75690d328e9cb8d84566a656d438fb"
  },
  {
    "url": "post/1970/01/01/vuepress-plugin-vditor/index.html",
    "revision": "fa571b72572d25e9c16d4f9826b0152b"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "b631ff2f792468946fd36a07f79f3e0d"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "c5b17f2832179ef80151d9f72a4ff461"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "032d5991e1e5abfff5055d598b9d9fb9"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "f01f4d5be1b015b8e20181a5f79038c8"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "33fdc80801212e0bd8612acdefd0dff3"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "c48b5936f4ab0ea6b23ca4f3976fa53a"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "707081dc3c9dcc48e0e6626fcd0b9554"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "224dc0bab4ffd0576d7d2a6a704dcf79"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "30aa85494ae50f4e59067b7931298d9a"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "f84b028a6d4114f419982e698d295438"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "97590ca3c1c9afc21f8143218b4020c6"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "f39d3f3b438eaa8f65d19626f44c0508"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "ba6da8499fde37978b3ddde65f26135c"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "8de0fca82f5a1847ac2023dcbaf18ea9"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "199fa906775f910883554d15adcf1cca"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "8fd8c7998319c4cdab0a520bcd9fcdbd"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "ff1d8338845fa94f37ba9a08bc5af500"
  },
  {
    "url": "post/index.html",
    "revision": "7803ba6ca904f171e35a3156d1ed07ba"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "9006b2152bf67910566eabd0663c4b9f"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "63ab138b35f3b9a647af4232eebaafaa"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "9a10bedd2bca22af8ff99fb533586657"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "ba9fb522c74b3ebdfd7ad2156bf1dc44"
  },
  {
    "url": "tag/express/index.html",
    "revision": "5a81df9e63fc07aff447b35e87913e26"
  },
  {
    "url": "tag/github/index.html",
    "revision": "42dc5b0efee7e8cd53ed180baa2a9b5a"
  },
  {
    "url": "tag/index.html",
    "revision": "922c06979a3159bb42ebec03932dfe1d"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "06c027444558388f832636e41f07cd1c"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "962453e40079268cbcc140c462ffae07"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "8f0e236d94ca69cd740637022fcba07b"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "193853fa52b5f94261b56388c405e4c9"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9b5496e3131297aaa69f4d76f0b3758a"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "ef9b5424bfd2b192068d980102c8b2ef"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "84835ad620436c0fdabf81b198ca4b11"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "3ffae05162f4686238cde92f2486003e"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "d7a343da114062ec45f7a463b38805cf"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "c582e3e8bb96af6aae87577626053f2e"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "e77fe41510f6ab7d0f4d539ee17ce3f6"
  },
  {
    "url": "tag/防火墙/index.html",
    "revision": "b47436c733c8eb8b29e249d2a238df88"
  },
  {
    "url": "timeline/index.html",
    "revision": "fd887f0f0f4b768283d506725e8bcff7"
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
