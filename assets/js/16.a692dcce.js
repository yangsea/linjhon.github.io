(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{519:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("在 CSS3 中，我们可以通过新增的过渡效果"),s("code",[t._v("[transition]")]),t._v("来实现运动效果,当然也可以通过 js 来模拟出来。")])]),t._v(" "),s("h2",{attrs:{id:"匀速运动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匀速运动"}},[t._v("#")]),t._v(" 匀速运动")]),t._v(" "),s("p",[t._v("与之前的拖拽不同，拖拽是要跟踪鼠标的位置。而 js 运动效果主要通过定时器"),s("code",[t._v("[setInterval]")]),t._v("每次增加一个距离来模拟运动效果,但相同的是它们都需要开启定位"),s("code",[t._v("[position]")]),t._v("属性，改变"),s("code",[t._v("[top]")]),t._v("值、以及"),s("code",[t._v("[left]")]),t._v("值进行移动。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/912092-af2a6abac2837808.gif?imageMogr2/auto-orient/strip",alt:"匀速运动.gif"}})]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("oDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每次点击按钮，清除前面的定时器")]),t._v("\n  timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      speed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("speed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      oDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" speed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("定时器有开启，就必须要"),s("strong",[t._v("关闭")]),t._v("，否则影响的就是内存。\n"),s("code",[t._v("[clearInterval(timer)]//每次点击按钮，清除前面的定时器")]),t._v("如果没有这一句，在移动过程中的点击会再叠加一次。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/912092-564fc2b7041ad507.gif?imageMogr2/auto-orient/strip",alt:"碰撞.gif"}})]),t._v(" "),s("p",[t._v("上个例子中，我们并未限制它的移动范围，所以它会移出页面。\n将"),s("code",[t._v("oDiv.offsetLeft + speed")]),t._v("的范围限制在 0 到页面的可视区的宽度;当然这个碰撞的效果还增加的高度的属性。")]),t._v(" "),s("p",[t._v("在实际的应用中，我们很少用到匀速运动，主要因为它并没有什么变化。")]),t._v(" "),s("p",[t._v("##缓冲运动")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/912092-9502cb0f3eebb8b5.gif?imageMogr2/auto-orient/strip",alt:"缓冲运动.gif"}}),t._v("\n我们可以明显的感觉到它与匀速运动的区别。越靠近目标，速度越小，直到降至 0 为止；\n将匀速运动中的 speed 变量赋值为"),s("code",[t._v("600-oDiv.offsetLeft)/7")]),t._v("其中 600，就是我们的目标位置，而 7 就是一个比例。")]),t._v(" "),s("h2",{attrs:{id:"定点抛物线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定点抛物线"}},[t._v("#")]),t._v(" 定点抛物线")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/912092-693abd50a3a7e7f0.gif?imageMogr2/auto-orient/strip",alt:"定点抛物线.gif"}}),t._v("\n主要运用了数学中的公式：\n"),s("code",[t._v("y = ax^2 + bx+c")]),t._v("\n我们假设 x,y 都为 0;即抛物线在中心点，那么 c 就为 0：\n"),s("code",[t._v("y = ax^2 + bx")])]),t._v(" "),s("p",[t._v("因为在页面中我们知道 x，y 的起始位置，以及定点位置；然后自定义一个 a"),s("code",[t._v("抛物线开口大小")]),t._v("最后就可以求得 b 的值；\n"),s("code",[t._v("b=(y-ax^2)/x")]),t._v("\n最终位移的距离就是：\n"),s("code",[t._v("oDiv1.style.left=current.x + x+'px';\noDiv1.style.top=current.y+(a"),s("em",[t._v("Math.pow(x,2)+b")]),t._v("x)+'px';")])]),t._v(" "),s("h2",{attrs:{id:"实际案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实际案例"}},[t._v("#")]),t._v(" 实际案例")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/912092-93addf0cb0ace353.gif?imageMogr2/auto-orient/strip",alt:"无缝滚动.gif"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/912092-ee0bb16b6cd268f3.gif?imageMogr2/auto-orient/strip",alt:"轮播.gif"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);