---
categories:
- 石马 | Code
date: "2008-04-16T22:29:04+08:00"
tags:
- Hack
- Textpattern
- 乱码
- 网站
title: 从wordpress到textpattern
url: /blog/2008/04/from-wordpress-to-textpattern.html
---
其实<span class="right">![Textpattern](/images/posts/txp.gif "Textpattern")</span>很久以前就试用了 [TXP][1] ，但是一直是一头雾水，今天终于 <sup>其实昨天</sup> 就已经弄好了。不过一直wordpress导入有点小问题，所以一直没有换过来。现在折腾好了，做一下小 **记录：**
<!--more-->

* **解决乱码问题**

打开 *import_wp.php* ，找到下面这行：

`mysql_select_db($b2db, $b2link);`

在后面加上：

`mysql_query("SET NAMES 'utf8'", $b2link);`

* **增加 Excerpt 部分**

找到下面这行：

`p.post_content as Body,`

在后面加上：

`p.post_excerpt as Excerpt,`

同样的，找到这行：

`Body_html = '".doSlash($Body_html)."',`

在后面加上：

```php
Excerpt = '".doSlash($Excerpt)."',
Excerpt_html = '".doSlash($Excerpt)."',
```

* **不导入附件生成的页面**

找到下面这行：

`".$wpdbprefix."users as u on u.ID = p.post_author`

在后面加上：

`WHERE p.post_status != 'attachment'`

差不多就这些了，在懒懒喵的 [旧文][2] 中提到的留言关闭问题已经在Textpattern · 4.0.6中得到了解决。 **但是我本人的一个问题，Tag问题还没有搞定，导入会变成Category，我是用的笨办法：直接在WP数据库中先删除它，哈哈！** 还有一个小问题，导入user错误，不过如果是单用户的Blog，大可不必去管这个问题。

*放出修改后的 <del>import_wp.php</del>

*P.S* 初次使用 [Textile][3] ，感觉还要适应好段时间，不过用起来确实是种不同的体验。

 [1]: http://textpattern.com/
 [2]: http://blog.nahoya.com/archives/2006_09/129
 [3]: http://textile.thresholdstate.com/