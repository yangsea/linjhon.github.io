---
title: Sass入门
date: 2017-03-13 23:00
---

:::tip
Sass 是用 ruby 语言写的，但跟 ruby 没有什么关系，可以说它是 css 的拓展，它让 css 实现了变量，函数，条件语句，循环等效果。
:::

## sass 的安装

要使用 sass，前提是要安装 ruby 环境。
下载地址：http://rubyinstaller.org/downloads
安装 ruby 完成后，cmd 命令行中执行以下指令安装 sass：

```sh
gem install sass
```

我们可以通过 nodejs 的 npm 包来下载。
但 npm 服务器是在国外，不太稳定，可以用下面的方法改变为国内镜像。

```sh
npm install cnpm -g --registry=https://registry.npm.taobao.org
```

然后所有的 npm 指令都可以改为 cnpm 来执行。

## 编译

拓展名为`*.sass`用的就是 ruby 语法，格式非常严格，不适合习惯了 css 书写的人群，而另外`*.scss`可以直接使用 css 的语法，但如果仅仅是这样，就没有必要使用 sass。
sass 文件浏览器是无法直接识别的，这里需要使用一些指令。
在命令行中：

```sh
1.  cd //打开文件的目录
```

```sh
2.  sass --no-cache --watch sass/.:css --style expanded
```

- `sass` 是必须存在的
- `--no-cache` 不出现临时文件
- `--watch` 监听文件夹
- `sass/.:css` 这里冒号之前代表的是选择 sass 文件夹下所有的文件。`.`（点）代表所有文件，css 代表新建一个 css 文件夹；
- nested：嵌套缩进的 css 代码，它是默认值。

  expanded：没有缩进的、扩展的 css 代码。

  compact：简洁格式的 css 代码。

  compressed：压缩后的 css 代码。

### 变量

在 sass 中,所有的变量都以\$开头，

```css
$bgcolor: #f9f9f9;
.box {
  background-color: $bgcolor;
}
```

### 特殊变量

如果要将变量当做属性来写必须用`#{}`，包裹它；

```css
$decra:left
border-#{$decra}:0;
//border-left:0;
```

### 嵌套

它允许我们做选择器嵌套

```css
#top {
  background: $bgcolor;
  height: 34px;
  line-height: 32px;
  border-bottom: 1px solid #f2f2f2;
  a:hover {
    color: $ddcolor;
  }
}
```

属性嵌套

```
.shopcart{
      margin:{
          top:20px;
      }
    //margin-top:20px;
}
```

在嵌套中使用&符号可以代表上级父元素;

```css
.link {
  margin-right: 15px;
  color: #999;
  &.first {
    margin: 0;
  }
  &:hover {
    color: $ddcolor;
    text-decoration: underline;
  }
}
```

### mixin 函数

混合函数用@mixin 来定义一段重复使用的语句。

```css
@mixin border($w, $c, $decra) {
  border: $w + px solid $c;
  border-#{$decra}: 0;
}
```

然后通过@include 来调用它。

```css
@include border(2, $ddcolor, right);
```

、
