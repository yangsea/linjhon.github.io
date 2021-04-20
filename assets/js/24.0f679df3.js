(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{521:function(t,a,o){"use strict";o.r(a);var e=o(6),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("blockquote",[o("p",[t._v("懒加载，是对网页浏览时的优化，提升网页的加载速度，增加用户的体验友好度。像淘宝、京东这些大型商城首页，图片内容都非常多，如果一次性就加载完，肯定会花费很多时间，增加用户的等待时间。懒加载的原理就是未进入屏幕的盒模型不加载数据，用统一的一张图片来替代，等到用户屏幕移入后，再将获取数据。")])]),t._v(" "),o("p",[t._v("原理图：\n"),o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/912092-84ca29a1b9f224b2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"懒加载.jpg"}})]),t._v(" "),o("p",[t._v("这是模仿当当网写的页面。\n加载数据只在浏览页面时发生一次，所以必须要给每个盒子加个开关，当数据加载时，这个盒子就 false，不加载。")]),t._v(" "),o("p",[t._v("下面先放效果图：\n"),o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/912092-998d71f421d0d72d.gif?imageMogr2/auto-orient/strip",alt:"懒加载效果.gif"}})]),t._v(" "),o("p",[t._v("在获取数据时，是来至于不同的接口，如果给每个盒子单独写一个事件，肯定会造成代码冗余，也增加了工作。\n最后想到给每个获取数据的 ajax 单独封装函数。\n在 js 中，所有的"),o("code",[t._v(".(点)")]),t._v("都可以写成"),o("code",[t._v("[]")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v(" this.getdata.guesslike()\n")])])]),o("p",[t._v("所以这个函数可以写成这用;")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v(" this.getdata[guesslike]()\n")])])]),o("p",[t._v("而"),o("code",[t._v("[]")]),t._v("中，我们可以写入变量。\n最后就成了这样：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("this.getdata[id]();\n")])])]),o("p",[t._v("函数名跟盒模型的 id 名是相同的，在滚动过程中，当屏幕进入相应的盒模型时，就会执行相对应的函数，获取数据，同时再将盒子显示就行。")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("var bstop=[];\nfor(var i=0;i<oBox.size();i++){//添加开关\n    oBox.eq(i).attr('inx',i);\n    bstop[i]=true;\n}\n//$(window).scrollTop+box.height()>=box.offset().top>=$(window).scrollTop;\n$(window).on('scroll load',function(){//滚轮事件\n    var mintop=$(window).scrollTop()+$(window).height();\n    oBox.each(function(i){//循环每个盒子,获取top值;\n        var maxtop=oBox.eq(i).offset().top+oBox.height();\n        if(oBox.eq(i).offset().top<=mintop && $(window).scrollTop()<=maxtop){\n            var id=oBox.eq(i).parent().attr('id');//获取id，即函数名;\n            if(bstop[i]){\n                that.getdata[id](i);//当盒模型进入屏幕时，执行相应的函数;\n                bstop[i]=false;//只获取一次数据\n            }\n        }\n    })\n})\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);