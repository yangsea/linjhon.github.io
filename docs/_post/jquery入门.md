---
title: jquery入门
date: 2017-03-04 15:48
---

> jQuery 是在全世界都非常流行的 javascript 代码库，以一款快速、简洁的 js 框架。它的宗旨就是"write less,do more"；写的少，做的多。

<!-- more -->

## 例子

```js
$(function() {
  //手风琴效果
  $("#main li").hover(
    function() {
      $(this)
        .stop(true)
        .animate({
          width: "400px",
        })
        .siblings()
        .stop(true)
        .animate({
          width: "160px",
        });
    },
    function() {
      $(this)
        .stop(true)
        .animate({
          width: "200px",
        })
        .siblings()
        .stop(true)
        .animate({
          width: "200px",
        });
    }
  );
});
```

这是用`jQuery`写的代码，仅仅十行不到，就可以写出一个简单的手风琴效果。这是用原生 js 无法做到，但不是说原生 js 就没用了，只是 jQuery 把我们常用的效果和一些重复的操作封装在一起。

![手风琴.gif](http://upload-images.jianshu.io/upload_images/912092-66e4c6e43a9c7b4e.gif?imageMogr2/auto-orient/strip)

## jQuery 选择器

### css 选择符

在 jQuery 中，它给我们提供了强大的 DOM 元素查找方式。

```js
$("#main li"); //这里我们用了ID选择器和后代选择器，找到了#mian的子元素li
```

当然，并不只有以上这种方式，它允许我们直接使用 css 的所有选择器来找到你所要的元素。

### 自定义选择符

jQuery 独有的自定义选择符，进一步增强已经十分强大的 css 选择符。它的语法与 css 的伪类选择符非常相似。

- 例如，我们要找一堆 li 元素中的第二个元素，可以这样：

```js
$("li:eq(1)"); //在js中索引都是从0开始。
```

- 如果用 css 选择符的方式，就是这样：

```js
$("li:nth-child(2)"); //同样能选择到第二个li。因为使用的是css的方式，所以是从1开始。
```

- :even 选择符

选择元素中的奇数元素，因为在 js 中是 0 开头，虽然翻译为偶数，但实际上选择的是奇数元素。

:odd 选择符

````

同理，这个选择的是偶数元素

```

 - :contain选择符
```

\$('p:contain(abc)')//选中所有包含文本 abc 的元素，区分大小写。

### 表单选择符

- :input 选择符

选中所有的 input 元素

```

 - :button选择符
```

选中按钮元素

```

 - :checked选择符
```

选中被选取的元素

通过判断选中的元素个数，我们可以很方便的做全选效果。

![全选.gif](http://upload-images.jianshu.io/upload_images/912092-0d711c85ec213132.gif?imageMogr2/auto-orient/strip)

## jQuery 方法

```js
hasClass();
```

选中含有 class 类名的元素。

```js
addClass();
```

给选中的元素添加一个 class 样式。

```js
removeClass();
```

给选中的元素删除一个 class 样式。

```js
toggleClass();
```

切换 class 样式，没有就添加，有就移除。

```js
css();
```

一个参数时获取选中元素的 css 样式，两个时为设置样式。

<small>以上仅仅是一点点。</small>

## jQuery 连缀

大部分 jQuery 方法都能返回 jQuery 对象，所以我们可以连续使用多个方式。

```js
//在每个方法后再继续添加方法.
$(this)
  .addClass("active")
  .siblings()
  .removeClass("active");
```

以下是完整的事例：

```js
$(function() {
  //1.楼梯什么时候显示，scroll--->scrollTop
  $(window).on("scroll", function() {
    var $scroll = $(this).scrollTop();
    if ($scroll > 800) {
      $("#loutinav").show();
    } else {
      $("#loutinav").hide();
    }
    $(".louti").each(function(index) {
      var $loutitop =
        $(".louti")
          .eq(index)
          .offset().top - 400;
      //console.log(loutitop)
      if ($loutitop < $scroll) {
        $("#loutinav li")
          .eq(index)
          .addClass("active")
          .siblings()
          .removeClass("active");
        //return false;
      }
    });
  });
  $("#loutinav li")
    .not(".last")
    .on("click", function() {
      //除了类名为 last 的 li 添加点击事件。
      $(this)
        .addClass("active")
        //给点击的li添加一个class，
        .siblings() //其它所有的兄弟元素
        .removeClass("active"); //移除class；
      var $loutitop = $(".louti")
        .eq($(this).index())
        .offset().top;
      $("body,html")
        .stop(true)
        .animate({
          scrollTop: $loutitop,
        });
    });
  $(".last").on("click", function() {
    $("body,html")
      .stop(true)
      .animate({
        scrollTop: 0,
      });
  });
});
```

![楼层效果.gif](http://upload-images.jianshu.io/upload_images/912092-992b35c084d33010.gif?imageMogr2/auto-orient/strip)
````
