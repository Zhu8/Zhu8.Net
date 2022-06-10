---
categories:
- 立占 | Site
- 石马 | Code
date: "2022-04-26T23:00:10+08:00"
lastmod: "2022-04-26T23:00:10+08:00"
tags:
- Hugo
- Gitlab
- Gitpod
- Vercel
featured_image: /images/posts/Vercel.png
title: Hugo搭建完全云托管个人网站
url: /blog/2022/04/make-a-entire-cloud-site-with-hugo.html
description: 我的网站搭建，通过GitHub（源码存储）、Gitpod（Web IDE）、Vercel（站点发布与域名）、Waline（评论系统），构建了完整的生态链。也就是，我只需要出域名的钱，所有东西就全部呈现出来啦！
toc: true
---
### 为何用Hugo

网站使用[Hugo][1]搭建，教程就不写了，网上太多了，放置在[Github][2]上储存源码属于公开的访问，而且经常被 ~~**土啬**~~ ，因此，处于安全考虑，还是放到私有或者小众一些的地方吧。

### 为何使用~~Gitlab~~ / **GitHub**

Github私有源码的话，是需要**美刀的**，作为小站长，一个虚拟空间的钱还是要省的，所以，去注册[Gitlab][3]吧：）注册完成之后，创建一个仓库，上传你所有的Hugo源代码。当然，也可以按右上角的**import**导入你的Github仓库。———— _Updated on 2022/06/09:在[GitHub](https://github.com/zhu8)完全可以访问的情况下，我又默默的换回了GitHub。就是这么 **出尔反尔** 。_
<!--more-->

### 使用Gitpod

[Gitpod][6]是一个Web IDE的云工具，可以在线编辑和同步你的源码，包括在线安装Hugo程序，我的安装包如下：

```bash
sudo apt-get update
wget https://github.com/gohugoio/hugo/releases/download/v0.97.3/hugo_extended_0.97.3_Linux-64bit.deb
sudo dpkg -i hugo_extended_0.97.3_Linux-64bit.deb
```
之后就可以在线编辑，增加，上传，发布 `Hugo`命令，然后直接用 Gitlab 自带的Push，就可以了。当然，前提是你得绑定下面说的 [Vercel][4]

### 使用Vercel

网上教程太多，不多说啦，绑定你的 [Gitlab][3] 即可。支持 **“HTTPS”** ，支持 **“Hugo”** 指定版本，支持 **多域名绑定** ，支持 **域名跳转** ，谁用谁知道。
![Vervel 界面][5]

### 结语

经过以上部署之后，你只需要购买域名，其他的，**全部交给云** 吧，而且，**全免费** 哦！完美，安心！祝你使用愉快！

[1]: https://gohugo.io/ "Hugo is one of the most popular open-source static site generators."
[2]: https://github.com/ "Github"
[3]: https://gitlab.com/ "Gitlab"
[4]: https://vercel.com "Develop. Preview. Ship. For the best frontend teams – Vercel"
[5]: /images/posts/Vercel.png "Vercel 界面"
[6]: https://gitpod.io/ "Gitpod Web IDE"
