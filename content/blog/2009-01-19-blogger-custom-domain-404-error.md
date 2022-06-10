---
categories:
- 石马 | Code
date: "2009-01-19T12:46:24+08:00"
tags:
- 404
- Blogger
- 域名
title: Blogger绑定自定义域名404错误
url: /blog/2009/01/blogger-custom-domain-404-error.html
---
**问题**：今天下午的时候blogger绑定的域名https://zhu8.net提示：**"The page cannot be found. (Error 404)"**。不知道出现404错误是什么原因，大概搜了一下，发现原来是因为DNS缓存的问题，可能在Godaddy上的设置过2-3天才会生效。
<!--more-->

**解决方法**：将你的Blogger先切换回.blogspot.com，然后再切换回来。一切OK！（明后天再继续观察一下，因为我选中了redirect zhu8.net到 www.zhu8.net）