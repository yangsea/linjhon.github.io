---
title: 移动端插件IScroll.js
date: 2017-03-26 00:05
tags:
  - javascript
  - IScroll.js
  - 移动端
---

> IScroll.js 插件是兼容所有移动端滚动条事件的插件，在某些安卓机中，我们无法通过`overflo:scroll`这个 css 属性来出现滚动条；它也可以非常好的在一个容器元素中处理滚动;

## 注意

在使用 IScroll.js 必须要有 3 层元素嵌套，如：

```html
<div class="food-left">
  <ul class="food-nav">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

最外层的`food-left`必须要有两个 css 样式：`position:relative;`和`overflow:hidden`。

## 初始化

IScroll.js 给我们暴露了一个 IScroll 构造函数;
如下，我们进行了初始化

```html
<script type="text/javascript">
  leftScroll = new IScroll(".food-left");
</script>
```

构造函数中传入的实参，与 ES6 新增的`querySelector`参数一致；其实`querySelector`就与我们的 jQuery 选择器使用方式是一样的；
**注意**：我们必须在 DOM 结构加载完毕后才能初始化，否则会无效。

## 设置

IScroll.js 允许我们传入第二个参数来配置滚动事件的属性;

```js
var leftScroll = new IScroll(".food-left", {
  scrollbars: true,
  bounce: false,
  mouseWheel: true,
  click: true,
});
```

## 滚动条

- **scrollbars: true**  
  是否显示滚动条。`默认为false;`
- **fadeScrollbars:true**
  滚动条淡入淡出效果,当然前提是你滚动条显示了。`默认为false;`
- **interactiveScrollbars**
  是否拖动滚动条。`默认为false;`
- **resizeScrollbars**
  滚动条的长度是按照比例设置的，如果想要固定尺寸，可以设置为 flase;`默认为true;`

- **bounce: false**  
  滚动到达容器边界时是否执行反弹动画。`默认为true;`
- **mouseWheel:true**  
  是否显示启用鼠标滚动;`默认为false;`
- **invertWheelDirection**
  激活鼠标滚动后是否启用反向滚动;`默认为false;`
- **click:true**  
  iScroll 禁止默认鼠标的点击行为，如果要使用设置 true;`默认为false;`
- **disableMouse**、**disablePointer**、**options.disableTouch**
  IScrol 默认监听所有的指针事件，如果确认项目定位的平台，可以将不使用的效果禁用，减少资源占用；`默认为false;`
- **startX**、**startY**
  设置滚动条初始偏移位置；`默认为无;`

## 方法

IScroll.js 也给我们提供一些方便的方法,当然都是实例对象下的；

- rightScroll.scrollToElement(el, time, offsetX, offsetY, easing)
  滚动到传入元素的位置，必须是原生 DOM 对象；然后是滚动的时间；

- scrollTo(x, y, time, easing)
  可以滚动到任意的位置，默认位置是 0，如果要移动需要设置负数；

事例：

![IScroll.gif](http://upload-images.jianshu.io/upload_images/912092-37edf6eeffa24dea.gif?imageMogr2/auto-orient/strip)
