---
categories:
- 石马 | Code
date: "2006-12-23T12:06:50+08:00"
tags:
- Hack
- Trackback
- 网站
title: 定制Trackback特定样式
url: /blog/2006/12/style-wordpress-trackback.html
---
首先要自我打击一下，在产生这个想法之后，本来我是**异想天开**地想编成一个插件的，但研究半天发现自己其实对PHP语言还是个大菜鸟，远没有我想的那么简单，只好用笨办法了：手动添加代码到模板中去。

本来想用的来自这里：[WordPress &#8211; Comment styling](http://www.tamba2.org.uk/wordpress/commentstyling/ "Making Comments stand out")，确实是一篇不错的文章，里面不仅介绍了为Trackback和Pingback增加独特样式，也有为特定评论的与众不同的显示提供了解决方案。而且作者Podz所写的[The Temba2 WordPress Guides](http://www.tamba2.org.uk/wordpress/ "WordPress Help&Podz @ Tamba2")是一篇不错的基础教程。评论姑且不谈，我需要的是第一个。
<!--more-->

首先是在你的Blog模版的评论页面（一般为**comments.php**）找到这句：

```php
<?php foreach ($comments as $comment) : ?>
```

在后面加上（**1**）：

```php
<?php $istback = false; if($comment->comment_type == 'trackback') { $istback = true; } ?>
<?php $ispingb = false; if($comment->comment_type == 'pingback') { $ispingb = true; } ?>
```

随后再找到这句：

```php
<?php comment_text() ?>
```

在前后加上东西之后变成这个样子（**2**）：

```php
<?php if($istback ) { echo '<div class="tbcomment">';} ?>
<?php if($ispingb ) { echo '<div class="pbcomment">';} ?>
<?php comment_text() ?>
<?php if($istback ) { echo '</div>';} ?>
<?php if($ispingb ) { echo '</div>';} ?>
```

当然，为了不那么打击自己而全部照抄，我做了点小小的修改：将（**1**）更改为：

```php
<?php $istb = false; if(get_comment_type() != "comment") { $istb = true; } ?>
```

这里就是图个简单，逆向思维，不是comment的当然就是Trackback和Pingback了。后面的（**2**）也就一起简单了。

```php
<?php if($istb ) { echo '<div class="tbcomment">';} ?>
<?php comment_text() ?>
<?php if($istb ) { echo '</div>';} ?>
```

最后，在样式表中添加这个CSS样式，就大功告成了：

```css
.tbcomment {
font:italic 1em/140% Georgia,sans-serif;
color:gray;
}
```

> 勉强以此安慰下自己，还能有一小小的创新，不过我并没有彻底的将Comment和Trackback区分开来，单独显示。因为我的TB不算多，所以没有再去弄个插件影响速度，如果你有需要，可以看看这些地方，希望能对你有所帮助：

*   [Trackping Separator](http://mk.netgenes.org/wiki/Trackping_Separator "Trackping Separator")

*   [Separating Trackbacks &#038; Pingbacks in WordPress 1.5 &#038; Above](http://www.noscope.com/journal/2005/01/wp-separating-trackbacks-pingbacks "Noscope&Separating Trackbacks &#038; Pingbacks in WordPress 1.5 &#038; Above")

*   [Trackback List Plugin](http://jackosh.com/wpplugins/trackbacklist/ "Trackback List Plugin")