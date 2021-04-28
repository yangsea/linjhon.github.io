---
title: Angular.js入门
date: 2017-04-02 08:37:52
tags:
  - Angular.js
---

> Angular.js 是一款优秀的前端 MVVM（Model View View Model）框架。诞生于 2009 年，后来被谷歌收购。

版本
目前最新的版本是 Angular.js4.0，但本文中使用的为 1.5.3，基本是通用版本。
主要是因为 angularjs 在 2.0 使用 typescript 的语法编写。typescript 也可以说成是 C#语言编写后再通过转编译成 js 代码的一个编译器。

##初始化

- ng-app
  在 html 标签中添加这个属性可以直接初始化 angular.js，当然只是简单的应用。

```html
<div ng-app>
  <p>{{ 2+3 }}</p>
</div>
```

在网页中显示：

> 5
> 花括号中数据会被 angular 识别，进行处理。

如果要进行进一步的操作，就必须要给它取个名字：`ng-app="app"`。
然后，js 中初始化

```js
var app = angular.module("app", []);
```

`[]`中是这个 app 的注入依赖，当需要额外的功能时可以添加，但空数组必须存在。

##作用域
在 angular 中有全局作用域，以及局部作用域；

- 全局作用域通过 run 方法进行声明；

```js
app.run(function($rootScope) {
  $rootScope.box = "我是全局的属性"; //定义一个全局的作用域
});
```

这种写法下传入的形参必须写死：`$rootScope`。
另外一种写法：

```js
app.run("$rootScope", function(root) {
  root.box = "我是全局的属性"; //定义一个全局的作用域
});
```

这种方式下，形参就可以随意书写;

- 局部作用域
  Angular 中的局部作用域需要通过初始化一个控制器来实现；
  先在 html 中绑定控制器;

```html
<div class="wrapper" ng-controller="wrapper"></div>
```

然后在初始化控制器;

```js
app.controller("wrapper", [
  "$scope",
  function(scope) {
    scope.name = "67";
    scope.yui = 890;
    scope.color = "red";
  },
]);
```

也可以写成：

```js
app.controller("wrapper", function($scope) {
  scope.name = "67";
  scope.yui = 890;
  scope.color = "red";
});
```

与函数作用域相同，如果这个局部作用域中找不到这个属性或者方法时，它就会先在父级作用域中查找，然后一级一级往上，在全局作用域中查找；

####ng-model

表单中的变量通过`ng-model`来声明

```html
<input type="text" ng-model="value" />
<p>{{value}}</p>
```

这样改变表单值的同时，P 标签的文本内容同时也改变了

####ng-repeat
可以遍历我们的 dom 结构
首先，写个数组：

```html
<script>
  $scope.list = [
    {
      name: 1,
      age: 18,
    },
    {
      name: 2,
      age: 18,
    },
    {
      name: 3,
      age: 18,
    },
    {
      name: 4,
      age: 18,
    },
  ];
</script>
```

`item`就是这个数组的每一项；

```html
<li ng-repeat="item in list">
  {{item.name}}---{{item.age}}
</li>
```

结果就是这样：

- 1---18
- 2---18
- 3---18
- 4---18

如果数组值都是一样的

```html
<script>
  $scope.arr = [1, 1, 1, 1, 1, 1, 1, 1];
</script>
```

就必须在后面加入`track by $index`

```html
<li ng-repeat="item in arr track by $index">
  {{item}}
</li>
```

结果：

- 1
- 1
- 1
- 1
- 1
- 1
- 1
- 1

####ng-click
绑定点击事件执行的函数

```html
<button ng-click="show()">显示</button>
```

####ng-show
传入布尔值，是否显示元素。

```html
<div ng-show="visible" class="box" style="width: 200px;height: 200px;>
<div></div>
```

最后写个函数

```html
<script>
  $scope.visibel = true;
  $scope.show = function() {
    $scope.visibel = !$scope.visibel;
  };
</script>
```
