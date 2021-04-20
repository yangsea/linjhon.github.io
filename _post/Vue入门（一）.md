---
title: Vue入门（一）
date: 2017-05-14 00:09:59
---

> Vue 是一套构建用户界面的渐进式框架，但也可以  说它是 MVC 框架，因为  它也有基本的 View、Control、Model。 相对于其他主流框架，它的优点在于轻量、学习成本较低，当然肯定还有其他优点，但这里只是入门，不细说。

#安装

首先要使用必须引入 Vue.js,这里引入国内的 CDN 使用。

```
<script src="https://cdn.bootcss.com/vue/2.3.2/vue.js"></script>

```

当然，也可以通过 Npm 的方式下载安装

```
npm install vue
```

#hello World
双花括号是 Vue 变量在 HTML 中的差值表达式.

```
<div id="app">
  {{ message }}
</div>
```

这里我们 new 一个 Vue 的实例对象.

```
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  }
})
```

最后，显示成

---

**Hello World!**

---

- `el` 就是获取的元素对象。
- `data` 里包含的就是数据变量，可以直接在 HTML 中使用。

```
app.message="Hello Vue!"
```

我们甚至可以通过修改`app`的 message 属性值，来  改变 HTML 中显示的值；这就是 Vue 的双向数据绑定。

---

**Hello Vue!**

---

#指令

##v-bind

 可以通过绑定属性使  值成为变量

```
<h3 v-bind:title="miniTitle">
    可以显示小标题
</h3>
```

也可以用缩写的方式：

```
<h3 :title="miniTitle">
    可以显示小标题
</h3>
```

在绑定 class 和 style 时，值可以为数组或者对象

##v-model
如果需要绑定 field 值时，使用`v-model`

```
<h5><input type="text" v-model="content" /></h5>

```

##v-on
事件指令。

```
<p v-on:click="handleEvent">
    点击触发事件
</p>
```

同样也有缩写的方式：

```
<p @click="handleEvent">
    点击触发事件
</p>
```

Vue 还给我们增加了修饰符，以`.`为连接符号。

```
<p @click.stop="handleEvent">
    这里的点击事件不会冒泡。
</p>
```

除了`.stop`之外，还有`.prevent`阻止默认事件、`.once`只触发一次回调等等；
在键盘事件中，可以快捷的指定按键，例如：`.enter` 或者`.13`，这两个是同一按键。

```
<input v-on:keyup.13="submit">

```

我们也  可以通过全局属性 `config.keyCodes`来设置按键修饰符的别名

```
Vue.config.keyCodes.f1 = 112
```

##条件指令

###v-if
指令中`ok`，为`true`时，`h1`显示

```
<h1 v-if="ok">Yes</h1>
```

###v-else

就想 js 原生的条件语句  原理是一样的,`v-else`必须在`v-if`或`v-else-if`之后使用；

```
<h1 v-if="ok">Yes</h1>
<h1 v-else>no<h1>
```

###v-else-if

在 Vue2.1.0 新增了`v-else-if`.

```
<h1 v-if="ok">Yes</h1>
<h1 v-else-if="no">Yes</h1>
<h1 v-else>no<h1>
```

##v-show
`v-show`只是通过 css 来隐藏，适合在渲染之后  频繁操作，而`v-if`是在判断后就不在渲染，

```
<h1 v-show="ok">Hello!</h1>
```

##v-for
 循环列表,这里使用`item in list`的方式，与 angular 的使用方式基本相同;
如果需要索引的话，使用`(item,index) in list`的方式来获取。

```
<div v-for="(ingredient,i) in ingredients" :key="i">
    <h1>{{ingredient}}</h1>
    <p>({{i}})</p>
</div>
```

同时，`v-for`也可以通过一个对象来遍历.
value 是键值,key 是键名，index 是索引

```
<span v-for="(value,key,index) in person">
    {{key}}: {{value}}--{{index}}
</span>
```

```
<script>
    new Vue({
		el:"#app",
		data:{
		   ingredients:['meat','fruit','cookies'],
           person:{name:'vane',age:38,color:'red'}
		}
	})
<script>
```
