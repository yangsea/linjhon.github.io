---
title: Jenkins+Github 实现前端自动化构建-Centos 虚拟机
date: 2018-01-05 22:53:28
tags:
  - jenkins
  - github
  - centos
  - 前端自动化
---

在 Centos 中安装 Jenkins 完成后，还需要下载插件

## 插件下载

下载`nodejs plugin`、`github plugin`

## 系统设置

依次打开 系统管理 >> 系统设置

### **Jenkins Location**

```bash
#Jenkins URL
172.16.142.129:8080   #配置Jenkin的地址，在邮件中显示

#管理员邮件地址
xxxxxxxx@email.com
```

![管理员邮件地址](http://upload-images.jianshu.io/upload_images/912092-66d73f32710fde4d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

### **邮件通知**

![邮件通知](http://upload-images.jianshu.io/upload_images/912092-53359e70496d79f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

**注意**：这里的邮箱账号最好与上方填写的系统管理员邮箱相同，密码是生成的授权码；在下方输入另外的邮箱，点击`Test configuration`测试通过即可。

### github

点击右边的问号，展开说明。

![GitHub Servers](http://upload-images.jianshu.io/upload_images/912092-ccc269b3f14b8d66.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

点击  [personal access token](https://github.com/settings/tokens/new),创建一个 token。

![github token](http://upload-images.jianshu.io/upload_images/912092-31754e52a10666a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

复制 token

![生成的token](http://upload-images.jianshu.io/upload_images/912092-fca75ccbac8c3938.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

再返回 JenKins 配置页面，点击 Add 按钮

![添加一个GitHub证书](http://upload-images.jianshu.io/upload_images/912092-04c9180861704f6f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

### Git plugin

![输入你的github用户名以及邮箱](http://upload-images.jianshu.io/upload_images/912092-3055f58d2d0fb136.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 配置 git

系统管理 >> 全局工具配置

### Git installations

![勾选自动安装](http://upload-images.jianshu.io/upload_images/912092-6f3b38f80726b1e8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700)

### NodeJs

![NodeJs](http://upload-images.jianshu.io/upload_images/912092-4def91fd5f6d40b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这里的 Node 版本选择与你项目相同的。

---

## 创建项目

1. 创建一个自由风格的项目
   ![自由风格的项目](http://upload-images.jianshu.io/upload_images/912092-63527b1b41381a3d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

2. 配置 github 项目地址
   ![github项目地址](http://upload-images.jianshu.io/upload_images/912092-2a58d155f76e8c60.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

3. 配置项目 git 地址
   ![git地址](http://upload-images.jianshu.io/upload_images/912092-25d8b247ccacda37.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

4. 点击 Add,添加一个 github 账号
   ![添加一个github账号](http://upload-images.jianshu.io/upload_images/912092-c873ee5112fd89cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

5. 选择 GitHub hook trigger for GITScm polling
   ![构建触发器](http://upload-images.jianshu.io/upload_images/912092-a7ed23817c3f2743.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

6. 配置构建环境，选择一个添加过的 node
   ![构建环境](http://upload-images.jianshu.io/upload_images/912092-176e6c3faa5d8476.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

7. 添加构建步骤：选择 execute shell 来执行 node 命令
   ![image.png](http://upload-images.jianshu.io/upload_images/912092-4034a3c67c62270e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)
   这里的命令跟你项目相同就行，我这里是多了一层目录，所以需要`cd client`
   ![image.png](http://upload-images.jianshu.io/upload_images/912092-bbbae8b8d3d14cb3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)
8. 再添加构建步骤：Set build status to "pending" on GitHub commit
   ![image.png](http://upload-images.jianshu.io/upload_images/912092-e1416b422f17139a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

9. 添加构建后的操作：E-mail Notification 以及 Set build status on GitHub commit [deprecated]
   ![邮箱](http://upload-images.jianshu.io/upload_images/912092-bced30aaf937ea3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)
   保存。End
10. 最后在 github 项目中，打开 settting

![Add service](http://upload-images.jianshu.io/upload_images/912092-6ea9e8475ad657c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

![配置webhook地址](http://upload-images.jianshu.io/upload_images/912092-7b428547bfe0c7af.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

这里的就不得不介绍个软件：[NatApp](https://natapp.cn/)
因为是 Mac 系统装的虚拟机，所以直接填写内网地址，github 肯定 post 不了。
下载这个软件后，在同目录下添加 config.ini 文件

```bash
#将本文件放置于natapp同级目录 程序将读取 [default] 段
#在命令行参数模式如 natapp -authtoken=xxx 等相同参数将会覆盖掉此配置
[default]
authtoken=xxxxxxxxx    #对应一条隧道的authtoken
clienttoken=                #对应客户端的clienttoken,将会忽略authtoken,若无请留空,
logto=none                  #log 日志文件, 可以是 none 代表不记录 或者 stdout 代表直接屏幕输出 ,默认为none
loglevel=DEBUG              #日志等级 DEBUG, INFO, WARNING, ERROR 默认为 DEBUG
http_proxy=                 #代理设置 如 http://http://10.123.10.10:3128
```

authtoken 是你注册后，申请通道得来的，免费的就行。

![image.png](http://upload-images.jianshu.io/upload_images/912092-877e431e1f8706a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

本地地址：输入 centos 的 ip
本地端口：jenkins 默认 8080；

双击 natapp

![内网端口映射到外网域名了](http://upload-images.jianshu.io/upload_images/912092-905479f752bf88d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

最后 push 代码，可以看到触发构建

![构建中](http://upload-images.jianshu.io/upload_images/912092-72d4829390e9043a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000)

如果出现问题，这里也能看到。
根据错误信息解决问题。
