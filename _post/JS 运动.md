---
title: JS 运动
date: 2017-02-19 00:29
---


>在CSS3中，我们可以通过新增的过渡效果<code>[transition]</code>来实现运动效果,当然也可以通过js来模拟出来。

##匀速运动

与之前的拖拽不同，拖拽是要跟踪鼠标的位置。而js运动效果主要通过定时器<code>[setInterval]</code>每次增加一个距离来模拟运动效果,但相同的是它们都需要开启定位<code>[position]</code>属性，改变<code>[top]</code>值、以及<code>[left]</code>值进行移动。

![匀速运动.gif](http://upload-images.jianshu.io/upload_images/912092-af2a6abac2837808.gif?imageMogr2/auto-orient/strip)

    oDiv.onclick = function() {
            clearInterval(timer); //每次点击按钮，清除前面的定时器
            timer = setInterval(function() {
                if (oDiv.offsetLeft > 600) {
                    speed = -speed;
                }
                if (oDiv.offsetLeft == 600) {
                    clearInterval(timer);
                } else {
                    oDiv.style.left = oDiv.offsetLeft + speed + 'px';
                }
            }, 30);
        }

定时器有开启，就必须要**关闭**，否则影响的就是内存。
<code>[clearInterval(timer)]//每次点击按钮，清除前面的定时器</code>如果没有这一句，在移动过程中的点击会再叠加一次。

---
![碰撞.gif](http://upload-images.jianshu.io/upload_images/912092-564fc2b7041ad507.gif?imageMogr2/auto-orient/strip)

上个例子中，我们并未限制它的移动范围，所以它会移出页面。
将<code>oDiv.offsetLeft + speed</code>的范围限制在0到页面的可视区的宽度;当然这个碰撞的效果还增加的高度的属性。

在实际的应用中，我们很少用到匀速运动，主要因为它并没有什么变化。

##缓冲运动

![缓冲运动.gif](http://upload-images.jianshu.io/upload_images/912092-9502cb0f3eebb8b5.gif?imageMogr2/auto-orient/strip)
我们可以明显的感觉到它与匀速运动的区别。越靠近目标，速度越小，直到降至0为止；
将匀速运动中的speed变量赋值为<code>600-oDiv.offsetLeft)/7</code>其中600，就是我们的目标位置，而7就是一个比例。

##定点抛物线

![定点抛物线.gif](http://upload-images.jianshu.io/upload_images/912092-693abd50a3a7e7f0.gif?imageMogr2/auto-orient/strip)
主要运用了数学中的公式：
<code>y = ax^2 + bx+c</code>
我们假设x,y都为0;即抛物线在中心点，那么c就为0：
<code>y = ax^2 + bx</code>

因为在页面中我们知道x，y的起始位置，以及定点位置；然后自定义一个a<code>抛物线开口大小</code>最后就可以求得b的值；
<code>b=(y-ax^2)/x</code>
最终位移的距离就是：
<code>oDiv1.style.left=current.x + x+'px';
oDiv1.style.top=current.y+(a*Math.pow(x,2)+b*x)+'px';</code>


##实际案例
![无缝滚动.gif](http://upload-images.jianshu.io/upload_images/912092-93addf0cb0ace353.gif?imageMogr2/auto-orient/strip)


![轮播.gif](http://upload-images.jianshu.io/upload_images/912092-ee0bb16b6cd268f3.gif?imageMogr2/auto-orient/strip)
