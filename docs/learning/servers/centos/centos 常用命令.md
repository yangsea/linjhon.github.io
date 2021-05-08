---
date: 2021-05-08 16:29:01
---



### 防火墙

关闭防火墙

```
sudo systemctl stop firewalld.service
```



关闭开机启动

```
sudo systemctl disable firewalld.service 
```

开启开机启动

```
sudo systemctl enable firewalld.service 
```

查看是否开机启动

```
sudo systemctl list-unit-files | grep firewalld 
```



### yum

查找 yum 软件包

```
yum search XXX 
```

列出所有可安装的软件包


```
yum list XXX 
```

列出所有已安装的软件包

```
yum list installed 
```

列出安装的 tomcat 的位置  

```
rpm -ql tomcat 
```

yum 是否安装 tomcat 及版本

```
rpm -qa| grep tomcat 
```

删除安装的软件包

```
rpm -e--nodeps XXX 
```



### 通用

关机

```
shutdown -h now 
```

重启

```
reboot 
```

