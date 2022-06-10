---
categories:
- 石马 | Code
date: "2006-09-04T12:23:28+08:00"
tags:
- Bookmarks
- Plugin
- Wordpress
title: WordPress插件:Add Bookmarks
url: /blog/2006/09/wordpress-plugin-add-bookmarks.html
---
First plugin for WordPress:[English vision][1] (2008/03/18)

这是我第一次做的插件，虽然是东参考西参考，也整整折腾了我半天的工夫，呼……闲话少说，入正题。(现在想再做一个，但是发现却是是水平有限。在瞎折腾两三个小时之后，发现自己只是稍长于修改，真正要做确实不是我等门外汉能力所及。)

-   **插件名称**：Add Bookmarks

-   **插件版本**：0.1（0.4 ***Updated on 2008.03.18***）

-   **插件描述**：

在你的文章下加入添加到书签或网摘的代码，参考*Thomas McMahon*插件[*Social Bookmark Links*](http://www.twistermc.com/shake/wordpress-social.php)修改，可选择文字链接或图标链接，若喜欢还可以自己添加。

***Update On 2006/9/27***：更新了图片的链接问题，使用`“.get_settings(‘siteurl’).”`使链接在更新Blog地址的时候不会出错。
<!--more-->

*   **插件安装**：1) 下载插件：<a title="下载插件" href="https://zhu8.net/uploads/add-bookmarks.rar">add-bookmarks.rar</a>

*   2) 打开 *add-bookmarks.php* 并在文本编辑器中配置好。

*   3) 你不想使用的书签请将 0 改成 1，反之亦然。

例子：`$a4 = “1″; //365key&天天网摘` – 这就是说你已经设置成使用365key了。

*   4) 设置书签的显示方式

`$createKind = “icon”; // links : 文字链接 – icon : 图标链接  `
文字链接示例：*Null*
图标链接示例：*Null*

```html
$beforeall = “<strong>收藏</strong> “; // 你想显示在所有书签前面的  
$beforeeach = ” [ "; // 你想显示在每个书签前面的  
$aftereach = " ] “; // 你想显示在每个书签后面的  
$afterall = “”; // 你想显示在所有书签后面的  
// 可以使用HTML标签，但不能使用(“)哦！
```

*   5) 上传**文件夹***add-bookmarks*到你的插件目录（注意：包括icon文件夹和add-bookmarks.php）。

*   6) 在管理页面**激活**插件。

*   7) 将下面的代码放到你想显示加入书签或网摘的位置：

```php
<?php if(function_exists('add_bookmarks')) { add_bookmarks(); } ?>
```

- 我是放置在*single.php*中例如 *postmetadata* 前面的，仅供参考。  
- 如果你**停用**了该插件，可以将该代码移除。（因为使用了if语句，所以不移出也不会影响其他正常功能的）

***-Update On 2006.12.22***

*   **Tips(小提示)**：

Yahoo!我已经修改成[Yahoo!中国](http://cn.yahoo.com/ "雅虎中国")的[Yahoo!收藏](http://myweb.cn.yahoo.com/ "雅虎收藏+")<sup>+</sup>，更符合国人习惯；你如果想修改图标内容，图标均在icon目录下，增加或修改的图标请注意在*add-bookmarks.php*中也要记得修改图标的源文件地址。  
***Update@2006/09/05***  
将所使用的五个书签的代码做了一次更新，确保每个对中文正确识别。其中Furl对中文的支持最不好，我使用其他人所最常使用的代码均会使中文标题变成乱码，所以我最后还是选择了一个弹出窗口的，可能使用**窗口block**的会有一定影响。  
更多书签网站请参考：[网摘大全1016最新整理版　(rss8.net 木木牛牛整理) ](http://blog.donews.com/rss/archive/2005/10/16/590504.aspx "网摘大全1016最新整理版　(rss8.net 木木牛牛整理) ")  
另一种方式请参考：[无需插件 给你的BLOG手动添加 网摘 代码　图标下载](http://www.dustlonely.com/2006/08/24/blog-rss/ "无需插件 给你的BLOG手动添加 网摘 代码　图标下载")。  
欢迎你使用Trackback告知我你使用了该插件 ***Updated on 2006.11.28***  
加入 [百度搜藏](http://cang.baidu.com/ "百度搜藏")  
***Updated on 2008.03.18***  
加入 [Diglog!奇客发现](http://www.diglog.com/ "奇客发现 有趣新鲜")  
加入 [饭否](http://fanfou.com/ "饭否&迷你博客 随时随地发消息")  
加入 [QQ书签](http://shuqian.qq.com/ "QQ书签")  
加入 [Technorati Favorites](http://technorati.com/faves/ "Technorati Favorites")

<a id="Eng">*English Vision:*</a>

**Add Bookmarks for WordPress**  
**Plugin Name**: Add Bookmarks  
**Version**: 0.4 *(Last update:2008/03/18)*  
**Description**: Help your visitors to add your entry to Social Bookmark like Blogmarks,delicious,Furl,Yahoo,Google,Baidu,QQ,Techmorati and so on.. (You can add by your self **very simply**,You can choice either **TEXT** or **ICON**)  
**Requires at least**: WordPress 1.5  
**Tested up to**: WordPress 2.5  
**Author**: Zhu8  
**Plugin URI**: https://zhu8.net/blog/2006/09/wordpress-plugin-add-bookmarks.html  
**Download**:[add-bookmarks.zip][2]  
**Usage**:1) Upload the **folder** to the */wp-content/plugins/*.  
2) Active it .Add

```php
<?php if(function_exists('add_bookmarks')) { add_bookmarks(); } ?>
```

 to where you want to put (I put it in *single.php* **before** *postmetadata*).  
 DONE!  
3)If you want to Add Your Bookmarks,open **add-bookmarks.php** and config it in your Editor(as Editplus,Notepad++) in **UTF-8**.  
Fell free to [Contact][3] me and Trackback here!

 [1]: #Eng
 [2]: /uploads/add-bookmarks.zip "Download This Plugin"
 [3]: https://zhu8.net/about/