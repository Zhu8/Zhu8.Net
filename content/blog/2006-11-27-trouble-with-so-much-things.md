---
categories:
- 言吾 | Talk
date: "2006-11-27T06:39:54+08:00"
tags:
- Hack
title: 发现自己原来一根筋
url: /blog/2006/11/trouble-with-so-much-things.html
---
**到底出了什么问题？**这句话是我刚才试着看发帖是否能通过的，结果还是给我空白页面，或者是***&#8220;该页无法显示找不到服务器或发生DNS错误&#8221;***。今天一天都在搞新Theme的修改，最后快大功告成的时候，准备发点小文字来，结果又出现了&#8230;

不好意思，到现在还没说具体是哪儿的问题，其他都好的，就是修改或者新撰写文章时，***../wp-admin/post.php***就报上面的错误。但是我又犯了二十多年的老毛病，一根筋往这上面想，把[WordPress Support Forum](http://wordpress.org/support/forum/3 "How-To and Troubleshooting « WordPress Support")几乎翻了个底朝天，发现一些情况和我一样的空白页面的，但是没有一个好好回答的，因为我上午装了Php+Apche+Mysql调试的，在Wordpress支持论坛看到说有***php.ini***配置错误导致此种问题的，于是一根筋的我就正经八百的把这些全都卸载，结果还是不行啊。在WpCN的[Group](http://groups.google.com/group/WordPressCN "WordpressCN Google Group")里问了一下，没人帮我解答，只好继续自己动手。
<!--more-->

千错万错，只怪我弄Theme忘了，其实我是自己新建的一个Theme，怎么也没想到会是我的Plugin出了问题，因为我是在[Kubrick](http://binarybonsai.com/wordpress/kubrick/ "Kubrick at Binary Bonsai")上搞的Theme，所以一下把它的***fuctions.php***什么的都搞来了，再阴差阳错什么时候装了个<del datetime="2006-11-26T11:22:41+00:00">Widgets插件</del>，原来就是**它**的问题！

不八婆了，越来越烦自己如此一根筋到底&#8230;**Sigh&#8230;**，前面也都是这样[（1）][1]、[（2）][2]，看来是做什么事情都要把东西先记下来了，唉。

还没有玩过分页，现在试试，顺便可以玩一下新插件[WordPress Lightbox 2](http://zeo.unic.net.my/notes/lightbox-js-version-20/ "WordPress Lightbox 2")。

 [1]: https://zhu8.net/blog/2006/11/small-cases.html " 二三事"
 [2]: https://zhu8.net/blog/2006/11/wordpress-language-pack-and-utw-permalink-structure-fix.html "解决WP汉化和UTW链接问题"