---
categories:
- 黑犬 | Other
date: "2009-06-16T20:58:44+08:00"
tags:
- Bookmarks
- Plugin
- 汉化
- 程序
title: Movable Type中文化书签插件-Bookmarks Chinese
url: /blog/2009/06/bookmarks-chinese.html
toc: true
---
### **描述：**

***Bookmarks Chinese*** 是我在使用了一些如[addthis.com](http://www.addthis.com/ "AddThis")的按钮之后，发现对中文支持很差，所以弄的一个中文化的书签插件如果你还需要其他的按钮，请自行参考开发即可。  
作者信息：Zhu8 ([https://zhu8.net](https://zhu8.net "Zhu8"))  
插件地址：[https://zhu8.net/blog/2009/06/bookmarks-chinese.html](https://zhu8.net/blog/2009/06/bookmarks-chinese.html "Zhu8")  
插件版本：1.0 Final (2009.6.4)
<!--more-->

### **插件结构：**</font>

> mt-static/  
> 　　　　plugins/  
> 　　　　　　　　BookmarksChinese/  
> 　　　　　　　　　　　　style.css  
> 　　　　　　　　　　　　images/  
> 　　　　　　　　　　　　　　addtoany.png  
> 　　　　　　　　　　　　　　google.png  
> 　　　　　　　　　　　　　　digg.png  
> 　　　　　　　　　　　　　　technorati.png  
> 　　　　　　　　　　　　　　delicious.png  
> 　　　　　　　　　　　　　　friendfeed.png  
> 　　　　　　　　　　　　　　twitter.png

> cgi-bin/mt/  
> 　　　　plugins/  
> 　　　　　　　　BookmarksChinese/  
> 　　　　　　　　　　　　BookmarksChinese.pl  
> 　　　　　　　　　　　　php/  
> 　　　　　　　　　　　　　　function.mtaddtoanyurl.php  
> 　　　　　　　　　　　　　　function.mtgoogleurl.php  
> 　　　　　　　　　　　　　　function.mtdiggurl.php  
> 　　　　　　　　　　　　　　function.mttechnoratiurl.php  
> 　　　　　　　　　　　　　　function.mtdeliciousurl.php  
> 　　　　　　　　　　　　　　function.mtfriendfeedurl.php  
> 　　　　　　　　　　　　　　function.mttwitterurl.php

### **模板标签：**</font>

> <$MTAddToAnyURL$>  
> <$MTDiggURL$>  
> <$MTDeliciousURL$>  
> <$MTFriendFeedURL$>  
> <$MTGoogleURL$>  
> <$MTTechnoratiURL$>  
> <$MTTwitterURL$>

### **例子：**

![Bookmarks Chinese Screenshot](/images/posts/BookmarksChinese.png "Bookmarks Chinese Screenshot")

```html
<a class="delicious" href="<$MTDeliciousURL$>" title="收藏到美味书签" target="_blank"></a>
```

### **如何使用：**

1.  下载插件：｛[**这里下载**](https://zhu8.net/uploads/BookMarksChinese.zip "Bookmarks Chinese 下载地址")｝  
2. 参照文件目录，上传插件。  
3. 修改Index Templates中的Stylesheet（Style.css），在最后一行加上

    ```css
    @import url(<$mt:StaticWebPath$>plugins/BookmarksChinese/style.css);
    ```

4. 比如小站，我修改了Template Modules中的Entry Metadata，在其中找到：

    ```html
    <mt:ifpingsactive>
    <span class="separator">¦</span>
    <a href="<$mt:entrypermalink$>#trackbacks"><$mt:entrytrackbackcount plural="# Trackbacks" singular="1 Trackback"$></a>
    </mt:ifpingsactive>
    ```

    在后面加上引用代码，示例：

    ```html
    <span class="separator">¦</span>
    <a class="delicious" href="<$MTDeliciousURL$>" title="收藏到Delicious" target="_blank"></a>
    <a class="twitter" href="<$MTTwitterURL$>" title="收藏到Twitter" target="_blank"></a>
    <a class="friendfeed" href="<$MTFriendFeedURL$>" title="收藏到FriendFeed" target="_blank"></a>
    <a class="google" href="<$MTGoogleURL$>" title="收藏到Google Bookmarks" target="_blank"></a>
    <a class="digg" href="<$MTDiggURL$>" title="Digg This!" target="_blank"></a>
    <a class="technorati" href="<$MTTechnoratiURL$>" title="收藏到Technorati" target="_blank"></a>
    <a class="addtoany" href="<$MTAddToAnyURL$>" title="更多..." target="_blank">More!</a>
    ```

    请注意，代码需在之前，以免破坏网页格式。

5. 如果你需要加入其他的社会化网络按钮，请自己研究下源代码，参数很简单 :)

#### **结束语：**

以上，是我在Movable Type的**最后一篇帖子**。经过和Wordpress的对比，MT在可定制性和易用性方面，在资源**特别是中文资源**方面，远远**落后**于WP，而且我从06年开始就使用WP，也有一定的感情，所以决定，今天：2009年6月16日，再次回到WordPress的怀抱，使用WordPress 2.8重新搭建站点。

不过说实话，不知道是我用的*Webhostingbuzz*很不错还是我的日志比较少的原因，没有出现过CPU超限被警告的问题。而且，说实话，我很热爱静态化的MT，在访问速度上，静态化确实很是舒爽。

唉，废话少说，准备更新数据库，换WP。

***Bye-Bye，活字印刷......（抱歉，在十二小时之后，我又回来了......）***

**-=The End=-**