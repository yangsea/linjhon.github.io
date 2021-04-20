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
    "url": "assets/css/0.styles.2188bc08.css",
    "revision": "5425a9eefd8f221b11f96ddf6360f434"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.d9424b70.js",
    "revision": "5e29aa3a73743f119a54bce90900ee50"
  },
  {
    "url": "assets/js/10.2eb4e950.js",
    "revision": "ffddf6eb2f8caf1bbac6c6a560807daf"
  },
  {
    "url": "assets/js/11.d2656cc9.js",
    "revision": "80b40a451ee69ae5cce5a43210a76f74"
  },
  {
    "url": "assets/js/12.6441924a.js",
    "revision": "653360f9492af5121baf4a8ef3f24a77"
  },
  {
    "url": "assets/js/13.75e04265.js",
    "revision": "e6e771bbd1161289adb6298b97d7c3b7"
  },
  {
    "url": "assets/js/14.b2927a2f.js",
    "revision": "eafb8adcd2d2e8f52c850725432e53ce"
  },
  {
    "url": "assets/js/15.b22df9f1.js",
    "revision": "db3c463333f13529897db62d24c31cc8"
  },
  {
    "url": "assets/js/16.784a3d1d.js",
    "revision": "08a009537b392103265e19231980634e"
  },
  {
    "url": "assets/js/17.3d507a86.js",
    "revision": "e398519311ab9b6558d7cb8a3d1c5b31"
  },
  {
    "url": "assets/js/18.4eac4255.js",
    "revision": "da4a3ee5b5a5f62886e4f5bf52bd567c"
  },
  {
    "url": "assets/js/19.ae0c9c47.js",
    "revision": "4921478dd58b165389f24bd1d7e443e2"
  },
  {
    "url": "assets/js/20.8e97cb1a.js",
    "revision": "99d89f579e7d7a79c76c28cf5f4d1b6f"
  },
  {
    "url": "assets/js/21.4d9ed55c.js",
    "revision": "1f4f0e8ca89b69bfc2f7820f8558cc6b"
  },
  {
    "url": "assets/js/22.24797963.js",
    "revision": "9860004fbad07c85db81d9ce7756adad"
  },
  {
    "url": "assets/js/23.073a6979.js",
    "revision": "e1e62b8edc2fc8ccf24ffc0fa0fdf741"
  },
  {
    "url": "assets/js/24.0f679df3.js",
    "revision": "2aaed9db681da0e290624152d8b1e3b8"
  },
  {
    "url": "assets/js/25.d2792ea7.js",
    "revision": "5f180d5dd43194a7eff7e8d3899dc592"
  },
  {
    "url": "assets/js/26.e5570130.js",
    "revision": "82871907c4a79a0916aae58d923f376a"
  },
  {
    "url": "assets/js/27.f155313a.js",
    "revision": "aef6592702162d135d5f6fa123fe2369"
  },
  {
    "url": "assets/js/28.efc0be11.js",
    "revision": "386f66012fe3b7ebb4500a56a3cbe862"
  },
  {
    "url": "assets/js/29.c865086a.js",
    "revision": "1e59b9453dcb5282e1ae112e59c17720"
  },
  {
    "url": "assets/js/3.241b572c.js",
    "revision": "0e83a9144d335798cd80ba75a6f9ed43"
  },
  {
    "url": "assets/js/30.6a2e00e8.js",
    "revision": "f36d9f34c9280888b41d56827d48ad1f"
  },
  {
    "url": "assets/js/31.334b7a26.js",
    "revision": "c862e10c14f228598d1aa05db3b15b1b"
  },
  {
    "url": "assets/js/32.947d6d77.js",
    "revision": "bd6ee68699e6895bf7ca1e97ec162534"
  },
  {
    "url": "assets/js/4.f287a95f.js",
    "revision": "9f1afdd294bca93f8baa4fdaa3d740f9"
  },
  {
    "url": "assets/js/5.eab64ae4.js",
    "revision": "d84b8b8b548c4d9951f0f262885fbb57"
  },
  {
    "url": "assets/js/6.1b9d70a1.js",
    "revision": "89da9646f2f8d310e58b88f2c363f78a"
  },
  {
    "url": "assets/js/7.180d60b3.js",
    "revision": "838ffae73d31957caf22d01a5bb9de4b"
  },
  {
    "url": "assets/js/8.2c05f7de.js",
    "revision": "a9ead14ec9aa07fb850c67c94c8f773a"
  },
  {
    "url": "assets/js/9.d1e3ad7e.js",
    "revision": "6c577c1ff34eb620a2fe8273de319f59"
  },
  {
    "url": "assets/js/app.6ff0263c.js",
    "revision": "26fc4147f0999e89e2b0d45cfef9ec78"
  },
  {
    "url": "categories/index.html",
    "revision": "00b4ee1f54f114715af8279815818652"
  },
  {
    "url": "en/index.html",
    "revision": "9f1be11098f368ca4e0e5c21d7336b84"
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
    "revision": "e092ab556689aa04a0fa18ce6b523978"
  },
  {
    "url": "post/1970/01/01/_404/index.html",
    "revision": "a3a1a07a34e12204be4243709165fd69"
  },
  {
    "url": "post/1970/01/01/other/index.html",
    "revision": "5337bd98f885eb9d0c57e0ed900e900f"
  },
  {
    "url": "post/1970/01/01/topic/index.html",
    "revision": "85bfee24b4836e693b54191749bd3ade"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "3b7f374e6fda6783afd12dbf482a0027"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "95b408f92cc9f40caea216a30dcfab64"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "3abe4f657e84ac3b2f52f7aa6a6f7434"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "22b9264161906428ca2d986b8738569c"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "c2d211bc618bc3c4caaaf8a113bdde5e"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "c6f7f71ec8cfd0e928fb296054c6ce12"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "da87027e76cdbda7261cea65366f5d34"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "013208229b9432a55fa14b2f6c268f36"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "a98949165742009224304477c2af0992"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "6d32ec87044a51e96287317ad38f4682"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "bfdf54c377dd0deb68a20d36943556d7"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "a2023760acf508bcbf55708aa1cdf13d"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "3adff059f75ab69d39c9e321dec8eb90"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "680f23a82b2898f2d7f72ca293470304"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "2938429e5f11dd926e33490889e3a16f"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "b1ddae4c57f918f6065e817ef41e425d"
  },
  {
    "url": "tag/index.html",
    "revision": "9e82990fea65ca4d2dc69b87f7fc940e"
  },
  {
    "url": "timeline/index.html",
    "revision": "d2e5498651ae69742e9c25ac67eede6d"
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
