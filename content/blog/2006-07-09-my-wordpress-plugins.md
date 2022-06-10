---
categories:
- 石马 | Code
date: "2006-07-09T01:18:20+08:00"
tags:
- 下载
- 汉化
- Wordpress
title: 我的WordPress插件列表
url: /blog/2006/07/my-wordpress-plugins.html
toc: true
---
![Wordpress Logo](/images/posts/wordpress-logo.png "WordpressLogo")[WordPress](http://wordpress.org/)是个好东西，虽然使用各种各样的插件调试的时候有时会为了某几段代码怎么修改都不成焦头烂额，但弄好了，就可以好好享受啦！

在开始的时候先是拼命寻找Theme，在alexking和wordpress.net里找了好久，最后选择了现在的[Greenery](http://www.ilemoned.com/wordpress/theme-greenery)，出自国人之手哦！初始的对FF下的中文显示效果不太好，不过简单修改了下CSS就好了。 好了不多说了，下面就是我的插件列表：（其中某些我做了一些简单的汉化，可以到我的永硕硬盘去下载，地址和详细修改在最下边在最下边。）
<!--more-->

### 后台管理类：

- [**WordPress Database Backup**](http://www.skippy.net/blog/plugins/ "访问插件主页")： 通过邮件没有发送的起来，其他都可以。
- [**Meta-SE**](http://vzho.ru/wordpress-related-stuff/meta-se "Visit plugin homepage")：自动生成每篇文章的meta信息。**作用不大，已停用**
- [**wp-cache**](http://mnm.uib.es/gallir/wp-cache-2/) ：非wp自带 将wordpress静态化 有效减少载入时间 加快访问速度。
- [**Google Sitemaps**](http://www.arnebrachhold.de/2005/06/05/google-sitemaps-generator-v2-final "访问插件主页") ：让google更快的收录你的blog。<del datetime="2006-06-21T14:57:25+00:00">常常在useronline里看到google来抓了，不过到现在还没收录。不会是因为我这个旧域名的缘故？</del>**已恢复正常**
- [**Real IP**](http://axgle.com/?p=60 "Real IP")：显示发表帖子者的真实IP，后台观看。*Update:2006/08/17*

### 文章效果类：

- [**Quote Comment**](http://www.viper007bond.com/wordpress-plugins/quote-comment/) ：在留言中加入”引用” 有针对性地回复留言。
- [**CoolPlayer**](http://www.coolcode.cn/?p=100) ：国人制作，强大方便的媒体播放插件。几乎所有格式都可以播放。支持[ ]标签，异步调用媒体文件，不影响页面载入速度。**已停用，改用**：[DewMP3](http://www.caboulot.org/dewmp3.html "DewMP3")
- [**coolcode**](http://www.coolcode.cn/?p=26) ：在帖子里高亮显示代码。**已停用，我不怎么使用代码**
- [**WP-PostRatings**](http://www.lesterchan.net/portfolio/programming.php "访问插件主页") ：每篇帖子打分的插件，5颗星，呵呵，纯粹娱乐。
- [**WP Grins**](http://www.alexking.org/software/wordpress/ "访问插件主页") ：给wp加入表情 By [alexking](http://alexking.org/)。由于此插件并不是针对2.0开发，因此要先修改一下。找到wp-grins.php中的下面这句（大约在34行）：`$grins .=`将其中的”/wp-images/smilies/”修改为”/wp-includes/images/posts/smilies/”。自行添加自定义表情：编辑/wp-includes/vars.php，搜索`‘:mrgreen:’ => ‘icon_mrgreen.gif’,`（大致在91行），在其下方添加如下代码：`‘:emXX:’ => ‘em01.gif’,`

- [**WP-EMail**](http://www.lesterchan.net/portfolio/programming.php "Visit plugin homepage")：通过邮件把文章分享给好友。
- [**Gravatar**](http://www.gravatar.com/implement.php#section_2_2 "访问插件主页") ：显示Gravatar头像的插件，如果你已经在Gravatar注册过，那么填上你的email就会显示你的头像。（[gravatar](http://tinn.writestyle.cn/?p=97)?）
- [**del.icio.us – Bookmark this!**](http://www.arnebrachhold.de/2005/06/05/delicious-bookmark-this-wordpress-plugin "访问插件主页") ：给你的帖子加上”收藏到美味书签”的链接，方便别人收藏你的blog。我把它放到**single.php**。
- [**Acronym Replacer**](http://www.huddledmasses.org/2004/04/19/wordpress-plugin-acronym-replacer/)：自动识别缩写，比如XHTML CSS 等等。
- [**Dagon Design – This Day**](http://www.dagondesign.com/articles/wordpress-plugin-this-day/ "Visit plugin homepage")：显示某年的今天你写过的日子，估计写得越久越好玩。
- [**Related Posts**](http://lifesinger.3322.org/blog/?p=88 "Visit plugin homepage")：不用说了吧，相关文章。**已停用，有了随机再用这个显得页面太繁冗**
- [**WP-RelativeDate**](http://www.lesterchan.net/portfolio/programming.php "Visit plugin homepage")：显示文章和评论是多久之前的，<del datetime="2006-07-08T15:40:47+00:00">我的好象只有评论里有效</del>。*Update*：原来要在这个插件使用之后发表的文章才行。**已停用，娱乐性太强-_-#*****Update:2006/9/9***
- [**Akismet Spam Count**](http://cavemonkey50.com/code/akismet-spam-count/ "Visit plugin homepage")：输出被Akismet挡住的Spam有多少，惊人的数字啊。*—-我的还好，不算惊人（见页面底部）*
- [**Math Comment Spam Protection**](http://sw-guide.de/wordpress/math-comment-spam-protection-plugin/ "Visit plugin homepage")：利用简单的数学题阻止垃圾留言，留言之前必须要回答一些简单的加法题。这个插件根Do you pass match相似，但是不同，作者创作的灵感来源于Do you pass match，效果就在下面：）

### 站点优化类：

- [**Extended Live Archives**](http://www.sonsofskadi.net/extended-live-archive/ "访问插件主页") ：看我的 [归档](https://zhu8.net/blog/?page_id=36)。效果不错，ajax的归档页，使用简单，后台可以设置显示效果。可以自己定制CSS。
- [**wap插件pk修改版**](http://www.pkevil.com/?p=35)  
 ：WordPress WAP plugin hacked by pk 推荐！ pk修改版本WP WAP插件，整合WP-Wap与WAP-page  
 ，通过在后台Options – Writing – Writing by e-mail的账号密码进行WAP方式文章发布，同时支持WAP评论功能。**Last Modified:2006/8/17**
- [**WP-UserOnline**](http://www.lesterchan.net/portfolio/programming.php "访问插件主页") ：一个统计你当前时刻在线人员的插件，显示他的身份（如已登陆）、Ip 、正在看的页面、还能分辨出搜索引擎的bot 相当具体。
- [**WP-PageNavi**](http://www.lesterchan.net/portfolio/programming.php "访问插件主页") ：在页面最下边的分页导航。
- [**WP-Stats**](http://www.lesterchan.net/) ：相当全面的网站统计，可以列出总贴数、总留言数、总留言人数、10个最近的帖子、留言、10个留言最多的帖子、留言人的详细信息等，感谢[GaMerZ](http://www.lesterchan.net/)，非常热心，而且他做的plugin都很不错，在他论坛里面一问问题就很热情的帮我解答了。 （与中文wp工具箱冲突，所以我就没用中文工具箱，而只用了旧的[**Random Posts For Chinese**](http://yanfeng.org/blog/373/)。）
- [**Ultimate Tag Warrior**](http://www.neato.co.nz/ultimate-tag-warrior/ "访问插件主页") ：在编辑器中加入tag区域，且可以按照你的想法通过tag存档，且可以自定义样式，比如标签云，柱状等。详细看后台选项中的详细帮助（英文）（强烈建议更新到3.14.1，请参见：[这里](http://blog.tinyau.net/archives/2006/08/10/please-upgrade-ultimate-tag-warrior-to-3141/ "請更新 Ultimate Tag Warrior 3.141 @ 天佑的自由天地")）
- [**Random Posts For Chinese**](http://yanfeng.org/blog/373/)：随机显示几条帖子，有了它，一些陈年老贴也可以不时的出来晒晒太阳。问题就是在IE下blog源代码为乱码（**加上了修改过的中文工具箱中的关于中文乱码的修复，已正常显示**）。不过还不至于影响使用。
- [**Recent Comments**](http://mtdewvirus.com/code/wordpress-plugins/ "Visit plugin homepage")：显示最近留言，在大头的源文件的帮助下做了一些小小的修改，主要是将链接放到了留言主体上，并在title属性里加入了文章的标题。 ***Update@2006/7/17***
- [**WP-ShortStat**](http://blog.happyarts.de/wp-shortstat/ "访问插件主页") ：内建后台统计插件，可以统计浏览次数，点击次数，浏览器，浏览页面，搜索引擎，国家，语言等等。原文件我不知道为什么用起来很乱，后来搜到一个写中文的马来西亚朋友修改过的，还不错（要下载该修改过的[见此](http://thevoidnotes.org/blog/2006/02/13/my-first-ever-wordpress-plugin-mod/)）。
- [**Bad Behavior**](http://www.homelandstupidity.us/software/bad-behavior/ "访问插件主页") ：反垃圾留言插件，一个有效防止Spam的Plugin，它通过对Spambot的行为分析和约束来达到目的，而且安装后不需要什么特别的设置就开始默默的工作了。**已停用**，改用WP自带的[Akismet](http://akismet.com/ "Akismet")。
- [**Editing Manager**](http://www.terenzani.it/29/editing-manager-plugin-wordpress "访问插件主页") ：在日志中显示你对此文的更新时间。**已停用，我的不起作用？**
- [**Twilight AutoSave**](http://twilightuniverse.com/2005/04/twilight-autosave/ "访问插件主页") ：原来在WP1.5的时候用过，很不错，后来看作者说似乎不对2.0支持，但是几次不小心浏览器或网络垮了之后，还是来试用一下，好象是可以继续发挥作用的。 ***Update@2006/8/17***
- [**Browser Sniff**](http://priyadi.net/archives/2005/03/29/wordpress-browser-detection-plugin/ "Browser Sniff") 这个插件似乎很少人用，可以用来在显示留言者所使用的操作系统和浏览器，特别值得称赞的是对于linux系统它居然能区分出ubuntu,gentoo,fedora这类，trackback的blog系统也不放过。
- [**Kill Preview**](http://redalt.com/wiki/Kill+Preview+Plugin "Kill Preview") 取消Wordpress的日志预览功能，有利于加快日志编辑后台的浏览速度。 ***Update@2006/9/3***
- [**WordPress插件:Add Bookmarks**](https://zhu8.net/blog/2006/09/wordpress-plugin-add-bookmarks.html) 在你的文章下加入添加到书签或网摘的代码，参考Thomas McMahon的插件[Social Bookmark Links](http://www.twistermc.com/shake/wordpress-social.php)修改，可选择文字链接或图标链接，若喜欢还可以自己添加。*哈哈，自己弄的，也要写上来啊！*

#### ***我修改及简单汉化过的有***：

[WP-EMail](http://www.lesterchan.net/portfolio/programming.php "Visit plugin homepage")，[Dagon Design – This Day](http://www.dagondesign.com/articles/wordpress-plugin-this-day/ "Visit plugin homepage")，[WP-UserOnline](http://www.lesterchan.net/portfolio/programming.php "访问插件主页") ，[WP-RelativeDate](http://www.lesterchan.net/portfolio/programming.php "Visit plugin homepage")  
[WP-PageNavi](http://www.lesterchan.net/portfolio/programming.php "访问插件主页") ，[WP-Stats](http://www.lesterchan.net/)，[wp-wap](http://dev.wp-plugins.org/wiki/wp-wap)，[Recent Comments](http://mtdewvirus.com/code/wordpress-plugins/ "Visit plugin homepage") 。

**我的永硕硬盘地址**：[http://zhu8.ys168.com](http://zhu8.ys168.com/) 。
