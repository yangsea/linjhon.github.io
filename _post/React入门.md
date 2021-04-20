---
title: React 入门
date: 2017-04-16 13:15:32
---

> React 是由 Facebook 前端工程师团队开发的一个框架，是因为 Facebook 对那时已经存在的框架都不太满意，所以就内部开启这个项目，然后在 2013 年开源。因为 React 大部分的操作，都是虚拟 DOM 上发生，所以许多人都认为它仅仅是 MVC 中的 View 层，并不算完整的 MVC 框架。

##安装
**本地引入**
下载链接： http://reactjs.cn/react/downloads/react-15.3.1.zip
因为 React 使用的是 JSX 语法，即在 Js 中直接插入 HTML 标签。所以还需要一个编译器`browser.min.js`(这种方式只适合在开发模式下，影响性能以及增加请求次数),然后通过标签引入

**通过 npm 安装**

```
npm i react react-dom --save
```

引入方式：

```
var React = require('React');
var ReactDOM = require('React-dom');
```

##组件
在 React 中，我们可以将每一个功能模块当作是一个组件；
首先，让我们先创建一个组件

```
var Header = React.createClass({
    render:function(){
        return (
            <div className="header">
                <h2 className="title">操作区只有图标的头部</h2>
                <span className="regret yo-ico"></span>
                <span className="affirm">设置</span>
            </div>
        )
    }
})
```

注意：每个组件首字母必须大写;类名必须写成`className`;

```
module.exports=Header;
```

然后，再将接口暴露出来。

在这种前提下，其它组件就可以引入并调用;

```
var Header = require('./module/header.js');
```

在 React 中，每个组件只允许有一个根节点。

```
var App = React.createClass({
    render:function(){
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
})
```

最后，在 Dom 中渲染出来。

```
ReactDOM.render(<App/>,document.getElementById('app'));
```

##生命周期

React 中有 3 个阶段的生命周期：
**加载阶段**

1.  getDefaultProps
    设置默认属性
2.  getInitialState
    设置初始状态值
3.  componentWillMount
    组件将要进行加载
4.  render
    渲染阶段
5.  componentDidMount
    组件加载完成

**更新阶段**

1.  componentWillReceiveProps
    组件即将接收属性时
2.  shouldComponentUpdate
    组件是否要更新（必须返回 Boolean 值，否则报错）
3.  componentWillUpdate
    组件将要进行加载
4.  render
    必不可少的渲染阶段
5.  componentDidUpdate
    组件更新完成

**卸载阶段**

1.  componentWillUnmount
    组件卸载前

##单向数据流
React 中每次改变数据，都在重新渲染整个 DOM。但 React 中有 Diff 算法，它将不更新的组件排除；

根据 React 写的一个小 Demo：

![1.gif](http://upload-images.jianshu.io/upload_images/912092-7695488910372832.gif?imageMogr2/auto-orient/strip)
