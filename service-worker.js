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
    "url": "assets/js/1.6c61c08e.js",
    "revision": "a926c60f89d182df03b2dd8af9ea0045"
  },
  {
    "url": "assets/js/10.c939a655.js",
    "revision": "0f7d20ace9fe703bd918472adc40a246"
  },
  {
    "url": "assets/js/11.8a2e20fd.js",
    "revision": "94ece8bc099b0fdca8291c5b19b38fdf"
  },
  {
    "url": "assets/js/12.51b857b8.js",
    "revision": "60e0b0a44c1fa01afb9f2092ee94397d"
  },
  {
    "url": "assets/js/13.9d2aa61f.js",
    "revision": "024961298d5153d3098b85f6c2ec99b7"
  },
  {
    "url": "assets/js/14.7bd2614e.js",
    "revision": "b1d0b44190fe20ce45b6fa2a60cb403c"
  },
  {
    "url": "assets/js/15.a05f527e.js",
    "revision": "fcdcc768474e09c96952a6da3610d2d4"
  },
  {
    "url": "assets/js/16.6d721e90.js",
    "revision": "a0601c94c5d26e60da2989410e97de40"
  },
  {
    "url": "assets/js/17.38d4fa22.js",
    "revision": "2e6c46d311bcffc64d5a9b95157288ce"
  },
  {
    "url": "assets/js/18.31dcb107.js",
    "revision": "98cc58ff6abfe2839d9a0d678d4c1447"
  },
  {
    "url": "assets/js/19.28d24e76.js",
    "revision": "69fc37956bcf8422f41e3917ac5d8150"
  },
  {
    "url": "assets/js/20.f4386335.js",
    "revision": "b29692318ccc0507024d68a9ceb2f64b"
  },
  {
    "url": "assets/js/21.fa36aa95.js",
    "revision": "2b1768c49eab86ba16d1a6388bc779f4"
  },
  {
    "url": "assets/js/22.5c9a7364.js",
    "revision": "0613640e7fa6044eee9547507514e2c3"
  },
  {
    "url": "assets/js/23.5f2b16eb.js",
    "revision": "590a4bbdf889bcc0c4b411e849e8c6f6"
  },
  {
    "url": "assets/js/24.bb5be72d.js",
    "revision": "e11a8ba20213c85b38dcd467a65a8596"
  },
  {
    "url": "assets/js/25.7d87b5da.js",
    "revision": "bf2c2104b880fe85993605f5d918f485"
  },
  {
    "url": "assets/js/26.bcac59b6.js",
    "revision": "e409ca70e4cd1f1c341294f5c58c8fc9"
  },
  {
    "url": "assets/js/27.f2518305.js",
    "revision": "3465f4dd5a46dbfed9d8da466eaefce6"
  },
  {
    "url": "assets/js/28.4553538c.js",
    "revision": "9a96adf83e4067d401961d25cf9c325f"
  },
  {
    "url": "assets/js/29.900095f3.js",
    "revision": "306708c923761e449d944d3904e7f92c"
  },
  {
    "url": "assets/js/3.bb16c4fa.js",
    "revision": "a1ea8fcb8ac198b228298f68bcd6b224"
  },
  {
    "url": "assets/js/30.84128987.js",
    "revision": "8be9157d001481f92b43c1401ebb5bc9"
  },
  {
    "url": "assets/js/31.57f0e81f.js",
    "revision": "5834f5dfa2812872163d7ef7387e9c14"
  },
  {
    "url": "assets/js/32.ad7ddcec.js",
    "revision": "0e60172e1e51131ab4cc301a2a1c1e58"
  },
  {
    "url": "assets/js/33.e834f6c0.js",
    "revision": "f220905432dbd5d509731754d6434c93"
  },
  {
    "url": "assets/js/4.5385568c.js",
    "revision": "508477fa4dc6d6c33d51565b84b80b4d"
  },
  {
    "url": "assets/js/5.e6d6b8c4.js",
    "revision": "721ac7266c77cf361062c4342261dd3e"
  },
  {
    "url": "assets/js/6.3d198c4e.js",
    "revision": "9ae18f773d81451102392c25ebf1c875"
  },
  {
    "url": "assets/js/7.e82b5cb1.js",
    "revision": "90f23d2fabb8444410490eefffb5fbef"
  },
  {
    "url": "assets/js/8.f0e3f87a.js",
    "revision": "e94a1e6ab19947b254e2b12850ee1451"
  },
  {
    "url": "assets/js/9.63db4d91.js",
    "revision": "5a4d338138d441e8b5f7ee747e4e06a1"
  },
  {
    "url": "assets/js/app.2734db75.js",
    "revision": "0faf80c906a7c907c0b2b82fe42b02f8"
  },
  {
    "url": "categories/index.html",
    "revision": "d3997d295046b1694fb16817164bf2e9"
  },
  {
    "url": "en/index.html",
    "revision": "e02e38ea97696b3c04bf72b565cd5778"
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
    "revision": "436421af635f4b0e2d4788f146bd8259"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "f53bc50b7aa795180b11182697e3266c"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "922d7807d5019fe07d295cf824c14e0b"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "26f5900cb5cd391f72460b87fda3bee7"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "22d0c44cec79492d3dcefea580c55326"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "22944ea960b1b7d4369e15138ee0e46e"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "cd581c4fa993244b8f5b3bf080c25ac0"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "a4633ec1209565f2f56231521b93b75a"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "5199c314e846eafddb89a81dc35dda2f"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "6635a66393bfd64136b4b45d99353bc9"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "7f7d0b81ca73b661d43d00b309ae0a24"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "c3cbbf10825b05209aeddb96dd98dde4"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "1f698f906057ff0c3acbef5e7f2b4cb3"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "99d88148b568560929e0c38b2463e658"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "abba1a40ed7096c96da0d3a66f80f300"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "dcdf9055558c22c642b3737a986f0a0e"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "5830d35e753cb9f06b840f21347dc748"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "759b866159baf0128d4d85b1a29bde84"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "86fca3966aaebee71ca0d330edc3ab37"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "5c9348df4780b8a2eb5766ff14ab571f"
  },
  {
    "url": "tag/index.html",
    "revision": "e67bc0588b5f9a411bbfd290a2a208a1"
  },
  {
    "url": "timeline/index.html",
    "revision": "bb0bee54fef091cb8f0312577ba5dd65"
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
