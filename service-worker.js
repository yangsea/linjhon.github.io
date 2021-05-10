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
    "revision": "158f8572f8998ef5316ab3a9584bce28"
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
    "url": "assets/js/18.50067a77.js",
    "revision": "56d2715bb841bc15193233298f632824"
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
    "url": "assets/js/app.4e6f0db4.js",
    "revision": "5b28bd6e3973b73c9019c588dcdc16e4"
  },
  {
    "url": "categories/index.html",
    "revision": "e835b207fa48794b690272cb10c13494"
  },
  {
    "url": "en/index.html",
    "revision": "7e88ecebabb54442a0c2f66dcf5294fd"
  },
  {
    "url": "front-end/interview/topic.html",
    "revision": "03792f97a5a5275554bab1be5554a325"
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
    "revision": "67252a019658f254b75dc686330a7fee"
  },
  {
    "url": "learning/develop/http/index.html",
    "revision": "398246f04275da6ee1790c4087ae7a16"
  },
  {
    "url": "learning/develop/index.html",
    "revision": "423441c6b76cfd39c57a936f40030a2f"
  },
  {
    "url": "learning/foreign-language/index.html",
    "revision": "d1823b63da3542089f0dde2ec2b9bd2f"
  },
  {
    "url": "learning/frontend/1970/01/01/babel/index.html",
    "revision": "efb6051d04c127cdbc7060a95c9c6f94"
  },
  {
    "url": "learning/frontend/1970/01/01/css/index.html",
    "revision": "9cf46b4e31b33aa8a06da842bebd7fd3"
  },
  {
    "url": "learning/frontend/1970/01/01/html/index.html",
    "revision": "28098d10430ffd7e7c8b3b9543a30f5d"
  },
  {
    "url": "learning/frontend/1970/01/01/javascript/index.html",
    "revision": "1b5f6dfe1d64f5188469609133cbb29c"
  },
  {
    "url": "learning/frontend/1970/01/01/nodejs/index.html",
    "revision": "cadb09111a991cd02184521f4a79a90c"
  },
  {
    "url": "learning/frontend/1970/01/01/object/index.html",
    "revision": "07d95af39f9ebd3c2ed7275f28ab399c"
  },
  {
    "url": "learning/frontend/1970/01/01/react/index.html",
    "revision": "17914f990c876b02d35d7ddc3552296e"
  },
  {
    "url": "learning/frontend/1970/01/01/typescript/index.html",
    "revision": "2a1eaade921ec7dde4010a4bbb39dcc0"
  },
  {
    "url": "learning/frontend/1970/01/01/vue/index.html",
    "revision": "93ca6e9c0a04d00e7872231d6680c459"
  },
  {
    "url": "learning/frontend/1970/01/01/webpack/index.html",
    "revision": "b021d78496d052afec2142625210f65c"
  },
  {
    "url": "learning/frontend/2021/04/26/duo-wei-shu-zu-bian-ping-hua/index.html",
    "revision": "f4cdcf232e30a35f8074a48ec608acbe"
  },
  {
    "url": "learning/frontend/2021/04/26/er-cha-shu-zen-me-bian-li/index.html",
    "revision": "e21ded7e00e08d8caad98cc3812b2a31"
  },
  {
    "url": "learning/frontend/index.html",
    "revision": "9c81ed59cb860e8ecdd874a31639fa0a"
  },
  {
    "url": "learning/frontend/page/2/index.html",
    "revision": "cb0416756c15a903382014008299111d"
  },
  {
    "url": "learning/index.html",
    "revision": "0c7aff586b36aa426ac6477262ad2a93"
  },
  {
    "url": "learning/servers/1970/01/01/database/index.html",
    "revision": "ccc89883702aa9abdebae041eec1226c"
  },
  {
    "url": "learning/servers/2021/05/08/centos-an-zhuang-nginx/index.html",
    "revision": "a125251c58c6d7648cdf94b64949852c"
  },
  {
    "url": "learning/servers/2021/05/08/centos-chang-yong-ming-ling/index.html",
    "revision": "ab88aef3041609b50e3d90dfc2b79bd8"
  },
  {
    "url": "learning/servers/2021/05/09/centos-fang-huo-qiang-she-zhi-yu-duan-kou-kai-fang-de-fang-fa/index.html",
    "revision": "71fce7989fcca977c649d6bac0ca6738"
  },
  {
    "url": "learning/servers/index.html",
    "revision": "ad3edc867babea988983dad822ae408b"
  },
  {
    "url": "mine/index.html",
    "revision": "a06223590041967a5d252fa5fb1e3b10"
  },
  {
    "url": "mine/ji-zhang-app.html",
    "revision": "55657e666535c55ded8e3d631ff38fd8"
  },
  {
    "url": "mine/life/ji-qi-qiang-lie-tui-jian-30-ge-hao-xi-guan.html",
    "revision": "dcc3e5591167b34302638636d59c8c73"
  },
  {
    "url": "post/1970/01/01/vuepress-plugin-vditor/index.html",
    "revision": "a6f42f4b0e577289058c7f9ff4ef8208"
  },
  {
    "url": "post/2017/02/12/tuo-zhuai-han-shu-de-jian-dan-feng-zhuang/index.html",
    "revision": "ef80b4c0bc4cd0ea5534b113106efa8b"
  },
  {
    "url": "post/2017/02/19/js-yun-dong/index.html",
    "revision": "dbefe79b11bc06451c7ca36bdf19bd7b"
  },
  {
    "url": "post/2017/02/25/mo-ni-bai-du-sou-suo-xia-la-ti-shi/index.html",
    "revision": "40271641f4e751798e4bb0339a71915f"
  },
  {
    "url": "post/2017/03/04/jquery-ru-men/index.html",
    "revision": "d57060adee022e29018d7dc8199c2452"
  },
  {
    "url": "post/2017/03/13/sass-ru-men/index.html",
    "revision": "61e34d5ddb9312a97e29163e9d4d2b22"
  },
  {
    "url": "post/2017/03/18/ji-yu-he-mo-xing-de-lan-jia-zai/index.html",
    "revision": "5c16b0b5e5debdbead95c4fd19d568d6"
  },
  {
    "url": "post/2017/03/26/yi-dong-duan-cha-jian-iscroll-js/index.html",
    "revision": "5f38ecf709133c7ffa6eff10b4a7dc83"
  },
  {
    "url": "post/2017/04/02/angular-js-ru-men/index.html",
    "revision": "a84be8eb50d58b1d394dff3c641c6b92"
  },
  {
    "url": "post/2017/04/09/qian-duan-gong-cheng-shi/index.html",
    "revision": "005c53d41077b6f0a975d85e5ab37dbf"
  },
  {
    "url": "post/2017/04/16/react-ru-men/index.html",
    "revision": "913b372517a5e21a44aab9310e59ff38"
  },
  {
    "url": "post/2017/04/30/webpack-ji-chu-pei-zhi/index.html",
    "revision": "7504220779b943e1dbb85ab8cc7bbdcb"
  },
  {
    "url": "post/2017/05/07/wei-xin-xiao-cheng-xu-huo/index.html",
    "revision": "0e49734d5f0474f1c655604b4a6b4100"
  },
  {
    "url": "post/2017/05/14/vue-ru-men-yi/index.html",
    "revision": "8d4c9701eb3b463f7de2ae4a5a8572c5"
  },
  {
    "url": "post/2017/05/20/vue-nodejs-bo-ke-hou-tai-guan-li-xi-tong/index.html",
    "revision": "112d409f844f63dc25cc1777deb2565c"
  },
  {
    "url": "post/2017/06/11/es6-ji-chu-yu-fa/index.html",
    "revision": "0fa691c45c06c3ddee062f3c33e85de1"
  },
  {
    "url": "post/2018/01/05/jenkins-github-shi-xian-qian-duan-zi-dong-hua-gou-jian-centos-xu-ni-ji/index.html",
    "revision": "7423cf1835abda9f5e4cb3f628621534"
  },
  {
    "url": "post/2021/04/21/vuepress-zhong-shi-yong-env-wen-jian-zeng-jia-huan-jing-bian-liang/index.html",
    "revision": "f39e8a1be54a69491b3b19f087a20e41"
  },
  {
    "url": "post/2021/05/10/mysql-wei-shen-me-ke-yi-tong-shi-shi-yong-gpl-kai-yuan-xie-yi-he-shang-yong-shou-quan-xie-yi/index.html",
    "revision": "2f48cbad7b2108701e96ab4e04705d72"
  },
  {
    "url": "post/index.html",
    "revision": "d7bfadbe8e8663fc3a963717e2cdb665"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "01a86a401458b1ec64f5db50da28fa60"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "8cced527cebdf83582de66aca455a452"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "7a601bde81320da9880519fb1304da8f"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "d290ef4eaf3564eea1d850f9457b1253"
  },
  {
    "url": "tag/express/index.html",
    "revision": "9e787958f800ab21b8f8bcc5be30ebda"
  },
  {
    "url": "tag/github/index.html",
    "revision": "84f070bf963dc1174f45d720f67b343f"
  },
  {
    "url": "tag/index.html",
    "revision": "52618cfd346ce5a2ce3ceb5c49c68630"
  },
  {
    "url": "tag/IScroll.js/index.html",
    "revision": "4550f51b2add114e2c70b0b87b018f34"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "e58eb9d966d39eabd802b4b74baa9eb6"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "4754aa2e688e20d6cca03421a0fa0762"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "e9f428483624f31525af71a4ba959b47"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "7e3f815888e2ae8e0453d33b3db24149"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9c8edceb111b3f0739aa9ccce4d8a7db"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "ff3b15b75e972e9db4e0bbe9107b5404"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "98f55278f3063a55cfe0c43b4e070367"
  },
  {
    "url": "tag/前端自动化/index.html",
    "revision": "9f46142c898fa28f1343a12a00a34f36"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "94e86395a9ec598a21140b5a628022fd"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "2ae4cee1abd3f0d303684bab9c0cf3e7"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "36d0836f68a18b06c51e49409480bdcc"
  },
  {
    "url": "tag/防火墙/index.html",
    "revision": "300cade4f9df52d465155851b8d0d010"
  },
  {
    "url": "timeline/index.html",
    "revision": "962111f7b1b62d59b829dd1370d36b28"
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
