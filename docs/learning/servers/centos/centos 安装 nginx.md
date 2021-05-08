本文基于 CentOS 7 下安装配置 Nginx 操作实践记录整理。

## 一、配置 EPEL 源

CentOS 7 64 位安装 EPEL

```
[root@localhost ~]# wget http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
[root@localhost ~]# rpm -ivh epel-release-latest-7.noarch.rpm
[root@localhost ~]# yum repolist ##检查是否已添加至源列表
```

CentOS 6 64 位安装 EPEL

```
[root@localhost ~]# wget http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
[root@localhost ~]# rpm -ivh epel-release-6-8.noarch.rpm
[root@localhost ~]# yum repolist ##检查是否已添加至源列表
```

需要相应的兼容操作系统版本的 epel 包可以直接访问 http://dl.fedoraproject.org/pub/epel 查看，然后使用 wget 下载 RPM 安装出现的错误:

错误：解压压缩文件 在文件/usr/share/doc/epel-release-7/GPL;55d6d507 失败：cpio: read 失败 - 没有该文件名或目录

出现该错误是由于下载的源文件出现错误，重新下载一遍就好了

```
sudo yum install -y epel-release
sudo yum -y update
```

## 二、安装 Nginx

为了追加 nginx 的 yum 仓库，需要创建一个文件 /etc/yum.repos.d/nginx.repo，并将下面的内容复制进去：

```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

.编辑并保存/etc/yum.repos.d/nginx.repo 文件后，在命令行下执行

```
sudo yum install -y nginx
```

安装成功后，默认的网站目录为： /usr/share/nginx/html

默认的配置文件为：/etc/nginx/nginx.conf

自定义配置文件目录为: /etc/nginx/conf.d/

## 三、开启端口 80 和 443

如果你的服务器打开了防火墙，你需要运行下面的命令，打开 80 和 443 端口。

```
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```

## 四、操作 Nginx

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

## Nginx 的配置文件和最佳实践

通过以上方式安装的 Nginx，所有相关的配置文件都在 /etc/nginx/ 目录中。
Nginx 的主配置文件是 /etc/nginx/nginx.conf。
为了使 Nginx 配置更易于维护，建议为每个服务（域名）创建一个单独的配置文件。
每一个独立的 Nginx 服务配置文件都必须以 .conf 结尾，并存储在 /etc/nginx/conf.d 目录中。您可以根据需求，创建任意多个独立的配置文件。
独立的配置文件，建议遵循以下命名约定，比如你的域名是 kaifazhinan.com，那么你的配置文件的应该是这样的 /etc/nginx/conf.d/kaifazhinan.com.conf，如果你在一个服务器中部署多个服务，当然你也可以在文件名中加上 Nginx 转发的端口号，比如 kaifazhinan.com.3000.conf，这样做看起来会更加友好。
如果你的配置中有很多重复的代码，那么建议你创建一个 /etc/nginx/snippets 文件夹，在这里面存放所有会被复用的代码块，然后在各个需要用到的 Nginx 的配置文件中引用进去，这样可以更方便管理和修改。
Nginx 日志文件（access.log 和 error.log ）位于 /var/log/nginx/ 目录中。建议为每个独立的服务配置不同的访问权限和错误日志文件，这样查找错误时，会更加方便快捷。
你可以将要部署的代码文件，存储在任何你想的位置，但是一般推荐存放在下列位置中的其中一个：

/home/<user_name>/<site_name>
/var/www/<site_name>
/var/www/html/<site_name>
/opt/<site_name>
/usr/share/nginx/html
