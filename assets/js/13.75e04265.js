(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{510:function(a,e,t){"use strict";t.r(e);var s=t(6),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("blockquote",[t("p",[a._v("Angular.js 是一款优秀的前端 MVVM（Model View View Model）框架。诞生于 2009 年，后来被谷歌收购。")])]),a._v(" "),t("p",[a._v("版本\n目前最新的版本是 Angular.js4.0，但本文中使用的为 1.5.3，基本是通用版本。\n主要是因为 angularjs 在 2.0 使用 typescript 的语法编写。typescript 也可以说成是 C#语言编写后再通过转编译成 js 代码的一个编译器。")]),a._v(" "),t("p",[a._v("##初始化")]),a._v(" "),t("ul",[t("li",[a._v("ng-app\n在 html 标签中添加这个属性可以直接初始化 angular.js，当然只是简单的应用。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<div ng-app>\n    <p>{{ 2+3 }}</p>\n</div>\n")])])]),t("p",[a._v("在网页中显示：")]),a._v(" "),t("blockquote",[t("p",[a._v("5\n花括号中数据会被 angular 识别，进行处理。")])]),a._v(" "),t("p",[a._v("如果要进行进一步的操作，就必须要给它取个名字："),t("code",[a._v('ng-app="app"')]),a._v("。\n然后，js 中初始化")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    var app=angular.module('app',[]);\n")])])]),t("p",[t("code",[a._v("[]")]),a._v("中是这个 app 的注入依赖，当需要额外的功能时可以添加，但空数组必须存在。")]),a._v(" "),t("p",[a._v("##作用域\n在 angular 中有全局作用域，以及局部作用域；")]),a._v(" "),t("ul",[t("li",[a._v("全局作用域通过 run 方法进行声明；")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("app.run(function($rootScope){\n\t$rootScope.box = '我是全局的属性'; //定义一个全局的作用域\n})\n")])])]),t("p",[a._v("这种写法下传入的形参必须写死："),t("code",[a._v("$rootScope")]),a._v("。\n另外一种写法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("app.run('$rootScope',function(root){\n\troot.box = '我是全局的属性'; //定义一个全局的作用域\n})\n")])])]),t("p",[a._v("这种方式下，形参就可以随意书写;")]),a._v(" "),t("ul",[t("li",[a._v("局部作用域\nAngular 中的局部作用域需要通过初始化一个控制器来实现；\n先在 html 中绑定控制器;")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<div class="wrapper" ng-controller="wrapper">\n')])])]),t("p",[a._v("然后在初始化控制器;")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("app.controller('wrapper', ['$scope',function(scope){\n\tscope.name = '67';\n\tscope.yui = 890;\n\tscope.color = 'red';\n}])\n")])])]),t("p",[a._v("也可以写成：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("app.controller('wrapper',function($scope){\n\tscope.name = '67';\n\tscope.yui = 890;\n\tscope.color = 'red';\n})\n")])])]),t("p",[a._v("与函数作用域相同，如果这个局部作用域中找不到这个属性或者方法时，它就会先在父级作用域中查找，然后一级一级往上，在全局作用域中查找；")]),a._v(" "),t("p",[a._v("####ng-model")]),a._v(" "),t("p",[a._v("表单中的变量通过"),t("code",[a._v("ng-model")]),a._v("来声明")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<input type="text" ng-model="value">\n<p>{{value}}</p>\n')])])]),t("p",[a._v("这样改变表单值的同时，P 标签的文本内容同时也改变了")]),a._v(" "),t("p",[a._v("####ng-repeat\n可以遍历我们的 dom 结构\n首先，写个数组：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<script>\n    $scope.list = [{\n\tname: 1,\n\tage: 18\n},{\n\tname: 2,\n\tage: 18\n},{\n\tname: 3,\n\tage: 18\n},{\n\tname: 4,\n\tage: 18\n}]\n<\/script>\n")])])]),t("p",[t("code",[a._v("item")]),a._v("就是这个数组的每一项；")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<li ng-repeat="item in list">\n\t{{item.name}}---{{item.age}}\n</li>\n')])])]),t("p",[a._v("结果就是这样：")]),a._v(" "),t("ul",[t("li",[a._v("1---18")]),a._v(" "),t("li",[a._v("2---18")]),a._v(" "),t("li",[a._v("3---18")]),a._v(" "),t("li",[a._v("4---18")])]),a._v(" "),t("p",[a._v("如果数组值都是一样的")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<script>\n   $scope.arr = [1,1,1,1,1,1,1,1]\n<\/script>\n")])])]),t("p",[a._v("就必须在后面加入"),t("code",[a._v("track by $index")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<li ng-repeat="item in arr track by $index">\n\t{{item}}\n</li>\n')])])]),t("p",[a._v("结果：")]),a._v(" "),t("ul",[t("li",[a._v("1")]),a._v(" "),t("li",[a._v("1")]),a._v(" "),t("li",[a._v("1")]),a._v(" "),t("li",[a._v("1")]),a._v(" "),t("li",[a._v("1")]),a._v(" "),t("li",[a._v("1")]),a._v(" "),t("li",[a._v("1")]),a._v(" "),t("li",[a._v("1")])]),a._v(" "),t("p",[a._v("####ng-click\n绑定点击事件执行的函数")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<button ng-click="show()">显示</button >\n')])])]),t("p",[a._v("####ng-show\n传入布尔值，是否显示元素。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<div ng-show="visible"  class="box" style="width: 200px;height: 200px;><div>\n')])])]),t("p",[a._v("最后写个函数")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<script>\n        $scope.visibel=true;\n        $scope.show=function(){\n            $scope.visibel=!$scope.visibel;\n        }\n<\/script>\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);