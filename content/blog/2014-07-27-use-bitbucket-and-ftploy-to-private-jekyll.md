---
categories:
- 立占 | Site
- 石马 | Code
date: "2014-07-27T13:23:33+08:00"
lastmod: "2020-05-19T14:24:46+08:00"
tags:
- Jekyll
- Github
- BitBucket
- FTPloy
featured_image: /images/posts/FTPloy.png
title: 使用BitBucket和FTPloy私有Jekyll源码
url: /blog/2014/07/use-bitbucket-and-ftploy-to-private-jekyll.html
description: 网站使用Jekyll建成之后，放置在Github Pages的源码属于公开的访问，处于一些个人安全考虑，放置在自己的空间会相对安全一些。
toc: true
---
### 为何用BitBucket&FTPloy？

网站使用[Jekyll][1]建成之后，放置在[Github Pages][2]的源码属于公开的访问，处于一些个人安全考虑，最重要的是放置在自己的FTP空间会相对安全一些，所以，我采用了支持私有源码的[BitBucket][3]作为Git仓库，并使用[FTPloy][4]作为Deploy方案，实现了自动发布到个人FTP的目的。
![FTPloy][5]
#### 注册并使用BitBucket

Github私有源码的话，是需要美刀的，作为小站长，一个虚拟空间的钱还是要省的，所以，去注册[BitBucket][6]吧：）注册完成之后，创建一个仓库，如 ***下图*** 所示，注意可选 **私人仓库** 选项。当然，也可以按右上角的**import**导入你的Github仓库。
![BitBucket新建仓库][7]
<!--more-->

#### 注册并使用FTPloy

[FTPloy][8]是一个自动监控Git库分支变更并发布到FTP的网站，支持Bitbucket和Github，当然为了简便起见，你也可以直接监控你的Github仓库，能使用的，应该都不用教啦！FTPloy*免费版*仅支持**一**个Project，但是对于小站长来说，监控一个就足够啦！所以，如***下面***两幅图，先新建Server，后新建Project。
![FTPloy新建Server][9]
![FTPloy新建Project][10]

#### 本地生成Jekyll页面并Push

本地安装网上教程太多，不多说啦，直接**CMD**：***jekyll build***
![Jekyll Build in one CMD line][11]
然后就是如何Push，我使用的是[BitBucket][12]，所以，Windows用户请直接下载[SourceTree][13]，自行探索吧，这就不教程了。

### 结语

经过以上部署之后，你的Jekyll网站在本地编辑并Build之后，使用SourceTree提交并推送之后，FTPloy就会自动将你的新网站PUSH到你的FTP，完美，安心！祝你使用愉快！


[1]: http://jekyllrb.com "Jekyll &bull; Simple, blog-aware, static sites"
[2]: https://pages.github.com "Github Pages"
[3]: https://bitbucket.org/ "Bitbucket 由旧金山的Atlassian公司开发"
[4]: https://ftploy.com "FTP Deploy"
[5]: /images/posts/FTPloy.png "FTPloy"
[6]: https://bitbucket.org/ "Bitbucket 由旧金山的Atlassian公司开发"
[7]: /images/posts/Bitbucket.png "BitBucket"
[8]: https://ftploy.com "FTP Deploy"
[9]: /images/posts/Server-FTPloy.png "FTPloy新建Server"
[10]: /images/posts/Project-FTPloy.png "FTPloy新建Project"
[11]: /images/posts/Jekyll-CMD.png "Jekyll Build in one CMD line"
[12]: https://bitbucket.org/ "Bitbucket 由旧金山的Atlassian公司开发"
[13]: http://www.sourcetreeapp.com/?utm_source=bitbucket&utm_medium=link&utm_campaign=chenjun.com "Mac/Windows上的免费Git/Mercurial客户端."