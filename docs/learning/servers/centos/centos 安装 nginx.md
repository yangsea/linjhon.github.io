---
date: 2021-05-08 16:28:09
---

本文基于 CentOS 7 下安装配置 Nginx 操作实践记录整理。

## 方式一：使用 yum 安装

### 配置源

#### 配置 EPEL

CentOS 7 64 位安装 EPEL

```sh
wget http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -ivh epel-release-latest-7.noarch.rpm
yum repolist ##检查是否已添加至源列表

```

CentOS 6 64 位安装 EPEL

```sh
wget http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
rpm -ivh epel-release-6-8.noarch.rpm
yum repolist ##检查是否已添加至源列表
```

需要相应的兼容操作系统版本的 epel 包可以直接访问 http://dl.fedoraproject.org/pub/epel 查看，然后使用 wget 下载 RPM 安装出现的错误:

错误：解压压缩文件 在文件/usr/share/doc/epel-release-7/GPL;55d6d507 失败：cpio: read 失败 - 没有该文件名或目录

出现该错误是由于下载的源文件出现错误，重新下载一遍就好了

```sh
sudo yum install -y epel-release
sudo yum -y update
```

#### 配置 nginx

```
rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
yum info nginx
```

### 二、安装 Nginx

为了追加 nginx 的 yum 仓库，需要创建一个文件 /etc/yum.repos.d/nginx.repo，并将下面的内容复制进去：

```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

.编辑并保存/etc/yum.repos.d/nginx.repo 文件后，在命令行下执行

```sh
sudo yum install -y nginx
```

安装成功后，默认的网站目录为： /usr/share/nginx/html

默认的配置文件为：/etc/nginx/nginx.conf

自定义配置文件目录为: /etc/nginx/conf.d/

### Nginx 的配置文件和最佳实践

通过以上方式安装的 Nginx，所有相关的配置文件都在 /etc/nginx/ 目录中。
Nginx 的主配置文件是 /etc/nginx/nginx.conf。
为了使 Nginx 配置更易于维护，建议为每个服务（域名）创建一个单独的配置文件。
每一个独立的 Nginx 服务配置文件都必须以 .conf 结尾，并存储在 /etc/nginx/conf.d 目录中。您可以根据需求，创建任意多个独立的配置文件。
独立的配置文件，建议遵循以下命名约定，比如你的域名是 kaifazhinan.com，那么你的配置文件的应该是这样的 /etc/nginx/conf.d/kaifazhinan.com.conf，如果你在一个服务器中部署多个服务，当然你也可以在文件名中加上 Nginx 转发的端口号，比如 kaifazhinan.com.3000.conf，这样做看起来会更加友好。
如果你的配置中有很多重复的代码，那么建议你创建一个 /etc/nginx/snippets 文件夹，在这里面存放所有会被复用的代码块，然后在各个需要用到的 Nginx 的配置文件中引用进去，这样可以更方便管理和修改。
Nginx 日志文件（access.log 和 error.log ）位于 /var/log/nginx/ 目录中。建议为每个独立的服务配置不同的访问权限和错误日志文件，这样查找错误时，会更加方便快捷。
你可以将要部署的代码文件，存储在任何你想的位置，但是一般推荐存放在下列位置中的其中一个：

```
/home/<user_name>/<site_name>
/var/www/<site_name>
/var/www/html/<site_name>
/opt/<site_name>
/usr/share/nginx/html
```

## 方式二：手动下载安装包

### 安装

1. 下载 nginx 包。

```
[root@localhost ~]# wget http://nginx.org/download/nginx-1.10.1.tar.gz
```

2. 复制包到你的安装目录

```
[root@localhost ~]# cp nginx-1.10.1.tar.gz /usr/local/
```

3. 解压

```
[root@localhost ~]# tar -zxvf nginx-1.10.1.tar.gz
[root@localhost ~]# cd nginx-1.10.1
```

4. 启动 nginx

```
[root@localhost ~]# /usr/local/nginx/sbin/nginx
```

5. 查看版本 s

```
[root@localhost ~]# nginx -v
```

6. url 访问 nginx localhost 或 127.0.0.1

### 设置开机启动

在系统服务目录里创建 nginx.service 文件

```
vim /lib/systemd/system/nginx.service
```

写入内容如下：

```
[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

[unit]: 服务的说明

Description:描述服务
After:描述服务类别
[Service]服务运行参数的设置
Type=forking 是后台运行的形式
ExecStart 为服务的具体运行命令
ExecReload 为重启命令
ExecStop 为停止命令
PrivateTmp=True 表示给服务分配独立的临时空间
注意：[Service]的启动、重启、停止命令全部要求使用绝对路径
[Install]运行级别下服务安装的相关设置，可设置为多用户，即系统运行级别为 3

保存退出。

## 操作 Nginx

1. 启动 Nginx

```
   systemctl start nginx
```

2. 停止 Nginx

```
   systemctl stop nginx
```

3. 重启 Nginx

```
   systemctl restart nginx
```

4. 查看 Nginx 状态

```
   systemctl status nginx
```

5. 启用开机启动 Nginx

```
   systemctl enable nginx
```

6. 禁用开机启动 Nginx

```
   systemctl disable nginx
```

## 防火墙问题

如果你的服务器打开了防火墙，你需要运行下面的命令，打开 80 和 443 端口。

```sh
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```
