---
categories:
- 石马 | Code
date: "2009-01-16T17:05:32+08:00"
tags:
- Blogger
- Domain
- Godaddy
title: 看图说话：绑定Godaddy域名到Blogger
url: /blog/2009/01/google-blogger-custom-domain-godaddy.html
---
为了用上已强大的Blogger，同时不闲置自己的域名，觉得绑定到Blogger上来，但是**万恶的土啬作祟**，拼命封我们的ghs.google.com，没有办法，只好曲线救国。 废话少说，以我的域名Zhu8.Net为例，域名位于同样被频繁**土啬**的Godaddy。相信很多域名位于天朝管理之外的朋友都有这样的问题，经过万能的Google和自己的摸索，总结如下：
<!--more-->

**第一步：**绑定域名，在Blogger里很好设置，这里就不赘述了。我使用[http://chenjun.com/](http://chenjun.com/) 绑定了我的Blogger，故而在Godaddy里面如下设置：

![](/images/posts/godaddy-11.png)

请列位看官自行看图说话，如何创造自己的ghs.xxx.com。实在看不懂请留言。ghs.google.com的IP有[这个地方](http://out.zhu8.net/ghs)查很不错

   **第二步：**解决www和non-www制定不同的问题。 由于Google只能绑定子域名（www亦是一种特殊格式的子域名），故我们要让根域名也指向到这里，~~如果你是Host domain在Godaddy，只要使用Forward就可以了。~~（**经反复测试，此方法没有用，只有使用.htaccess解决，详见：[注释][^1]**）如下：

![](/images/posts/godaddy-8.png)  
![](/images/posts/godaddy-9.png)

这样本来就算完了，但是因为无孔不入的**土啬**又来了。封掉了不知道多少Godaddy的IP，所以如果你不幸如果，域名的IP被封了，那你就需要换IP了。Godaddy的域名自带有免费空间，我们可以通过切换域名空间的IP。网上有很多教程，但是目前来说Godaddy把它藏的深了一点，不再是Switch Operating System，换成了**Upgrade/Downgrade Hosting Account**。图解如下：

![](/images/posts/godaddy-1.png)  
![](/images/posts/godaddy-2.png)  
![](/images/posts/godaddy-3.png)  
![](/images/posts/godaddy-4.png)  
![](/images/posts/godaddy-5.png)  
![](/images/posts/godaddy-6.png)  
![](/images/posts/godaddy-7.png)

等待不过十几分钟，虽然Account Details里面的Status还是Pending Account Change，但是IP地址已经换了，Total DNS Control Panel里面的A Records已经变成了新的IP，等待……生效，一切OK！

**P.S:**_Google Apps_等所有**_Google Custom Domain_**都适用此法。有问题，请留言！

 [^1]: 注释：使用编辑器，如EditPlus新建UTF-8的新文件，内容为：

    > RewriteEngine  
    > RewriteCond %{HTTP_HOST} ^zhu8.net  
    > RewriteRule (.*) http://chenjun.com/$1 [R=301,L]  

    请自行更改域名为你的域名即可，将文件保存为**.htaccess**。使用**ASCII**格式上传到你的Godaddy免费空间根目录，文件属性**644**。

至此全部完成。请测试：[https://zhu8.net](https://zhu8.net/ "Zhu8.Net")