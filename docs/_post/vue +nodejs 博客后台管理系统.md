---
title: vue +nodejs 博客后台管理系统
date: 2017-05-20 20:56:01
tags:
  - Vue
  - express
  - MongoDB
---

:::tip
一个 Vue + nodejs + MongoDB 后台管理系统。到现在大概 5 天的时间，先写个总结。

Vue 负责前端页面的展示，路由功能交给 Vue-router。

Express 不写路由，只负责写 api 接口， 使用 mongoose 与 MongoDB 数据库进行数据交互，实现前后端解耦。
:::

在 UI 框架的选型上还是不太满意，写过之后才发现 Iview 框架有不少的缺陷，比如 menu 菜单中缺少路由跳转功能，需要通过点击事件返回的`name`值，通过编程式导航的方式来进行路由跳转`router.push()`，再来就是文档写得并不是很好，虽然 ui 效果很好。

mongodb 是非关系型数据库，通常我们可以在里面直接存储 json，对象，图片，甚至是函数。这对于前端来说，会更加方便。在操作 mongodb 数据库时，推荐使用 mongoose 的。我们可以通过定义 Schema 来配置一个集合里的数据类型(同 SQL 的表)，再把这个 Schema 发布成 Model，然后我们就可以通过这个 Model 来进行增删改查。

## 技术

**前端**

vue2 + vuex + vue-router + iview + axios/vue-axios + ES6

**后端**

nodejs + express +mongoose

**工具**

webpack

**数据库**

MongoDB

## 项目预览

本地需要安装 mongodb 数据库

## 客户端 client

```sh
# 打开目录
 cd client

# 安装依赖包
 npm i

# 启动本地客户端服务器
npm run dev

# 打包文件
npm run build
```

## 服务端 server

```sh
# 打开目录
 cd server

# 安装依赖包
 npm i

# 开启服务器
 npm run start
```

## 功能

- [x] 用户、文章、评论实现增删改查；
- [x] 基于 JWT 的登陆验证、状态留存；
- [x] 使用 muler 实现上传图片功能；
- [x]  多分类管理（曾删改）；

## 更新计划

- [ ] 优化分类， 与各模块进行交互；
- [ ] 首页模块；
- [ ] 数据统计模块；

## 目录结构

**客户端目录**

```sh
|____client
| |____.babelrc
| |____index.html
| |____package.json
| |____README.md
| |____src
| | |____App.vue
| | |____assets
| | | |____500007055.jpg
| | |____common
| | | |____getdata.js
| | |____components
| | | |____ClassifyTree.vue
| | | |____Form.vue
| | | |____Layout.vue
| | | |____Login.vue
| | |____main.js
| | |____my-theme
| | | |____index.less
| | |____routes.js
| | |____store
| | | |____index.js
| | |____views
| | | |____Ablum.vue
| | | |____Article.vue
| | | |____Classify.vue
| | | |____Comment.vue
| | | |____Home.vue
| | | |____Upload.vue
| | | |____User.vue
| |____webpack.config.js
|____LICENSE
|____README.md
```

** 服务端目录**

```sh
|____server
| |____app.js
| |____bin
| | |____www
| |____controllers
| | |____ArticleCtrl.js
| | |____CateCtrl.js
| | |____CommentCtrl.js
| | |____UploadCtrl.js
| | |____UserCtrl.js
| |____MIME.js
| |____models
| | |____ArticleModel.js
| | |____CateModel.js
| | |____CommentModel.js
| | |____UploadModel.js
| | |____UserModel.js
| |____other.js
| |____package.json
| |____public
| | |____images
| | |____javascripts
| | |____stylesheets
| | | |____style.css
| |____README.md
| |____routes
| | |____article.js
| | |____cate.js
| | |____comment.js
| | |____index.js
| | |____upload.js
| | |____users.js
| |____server.js
| |____upload
| | |____ablums
| | | |____avatar-1495266654995.png
| | | |____avatar-1495266808125.png
| | | |____avatar-1495266970632.jpg
| |____views
| | |____error.ejs
| | |____index.ejs
|____UPDATE.md
```

<!-- ## 项目地址 -->

[Github 地址](https://github.com/linjhon/Back-stage-Management)
