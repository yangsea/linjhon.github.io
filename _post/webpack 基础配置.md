---
title: webpack 基础配置
date: 2017-04-30 23:02:40
---

> webpack 虽然是 Facebook 专门为了它的 React 框架而开发的前端自动化工具。但并不是没有了 React，它就无法使用。它提出了“一切皆模块的理念”，因此我们可以把所需要的框架、类库、插件甚至是图片、CSS、字体等等都引入。它的引入规范基本符合模块化规范：AMD、CMD、UMD、CommonJS 等等。所以即使你之前从未使用过 WebPack，但它也可以很好的兼容你之前的项目。

##安装

既然要使用，那就必须要安装它,前提是你已经安装了 nodejs。

```
npm i webpack -g
```

之后，我们就需要在项目文件夹下创建一个文件：`webpack.config.js`。
这是默认名字,当然我们也可以使用修改的文件名，

##基本使用
下面是一段非常简单使用：

```
var webpack = require('webpack');
module.exports = {
	entry: './src/index.js', // 入口文件
	output: { // 出口文件
		path: './build',
		publicPath: '/build/',
		filename: 'bundle.js' //输出文件
	},
	module: { // 操作模块
		loaders: [ //加载器
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react'
			}
    }
```

这段配置实现的功能就是将 js 文件中 ES6、JSX 的语法编译成 es3；

##基础配置
1.webpack 的配置文件会暴露出一个对象，格式如下：

```
module.exports = {
　　//配置项
}
```

这里使用的就是 CommonJS 的规范来暴露接口。

2.基本属性

- **entry**:打包的入口文件,通过 html 中的 script 标签直接引入。

- **output**:配置打包文件名、路径。

```
output: { // 出口文件
    path: './build',
    publicPath: '/build/',
    filename: 'bundle.js' //输出文件
}
```

- **fileName**:定义输出文件名，

- **path**:定义输出文件路径

- **module**:定义对模块的处理逻辑

```
module: { // 操作模块
    loaders: [ //加载器
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }
}
```

- **loaders**:所有引入的模块都是通过这个配置属性来解析

- **resolve**:影响对模块的解析

- **extensions**:识别文件后缀名

- **plugins**:配置插件。

  3.loader

- **babel-loader**:js 语法解析的加载器；需要配合安装
  “babel-core”:babel 的核心
  "babel-preset-es2015":按需下载自己需要的解析器
  "babel-preset-react":JSx 语法解析
- test 属性是使用正则来匹配文件.
- exclude:可以将不需要编译的文件排除在外;

```
{   test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader?presets[]=es2015&presets[]=react'
}
```

- **sass-loader**、**css-loader**、**style-loader**：
  这三个配合使用可以将 sass 文件编译成 css 文件并且加载在 HTML 文件的 style 标签中。需要注意的是 loader 加载器是从右到左的顺序加载的。

```
{
    test: /\.scss$/,
    loader: ['style-loader', 'css-loader', 'sass-loader']
}
```

其中的 loader 可以缩写成：`'style-loader!css-loader!sass-loader'`

- **url-loader**:
  将图片文件转换成 base64 引入;大于限制的自动使用 file-loader 迁入到./images/目录下，文件名后面追加了 8 位的 hash 值;
  {
  test: /\.(png|jpg|gif)\$/,
  loader: 'url-loader?limit=12000&name=./images/[name].[hash:8].[ext]'
  }

- **file-loader**:配置后可以将引入的字体文件打包到 font 文件下,;

```
{
    // 匹配字体文件;打包到build文件下
    test: /\.(woff|woff2|svg|eot|ttf)$/, //
    loader: 'file-loader?name=./fonts/[name].[ext]'
}
```

**注意**：这里的相对路径都是在出口文件的目录下生成的。

**基本配置文件**:

```
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js', // 入口文件
	output: { // 出口文件
		path: path.resolve(__dirname, './build'),
		publicPath: '/build/',
		filename: 'bundle.js' //输出文件
	},
	module: { // 操作模块
		loaders: [ //加载器
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react'
			},
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=12000&name=./images/[name].[hash:8].[ext]'
				//将小于12k的图片转换到base64引入;大于的使用file-loader迁入到./build/images/目录下;
			},
			{　　　　　　
				test: /\.html$/, //处理html里的文件资源
				loader: 'html-withimg-loader'　　　　
			},
			{
				// 匹配字体文件;打包到build文件下
				test: /\.(woff|woff2|svg|eot|ttf)$/, //
				loader: 'file-loader?name=./fonts/[name].[ext]'
			},
			{
				//打包到build文件下
				test: /\.php$/, //
				loader: 'file-loader?name=./php/[name].[ext]'
			}
		]
	}
}

```
