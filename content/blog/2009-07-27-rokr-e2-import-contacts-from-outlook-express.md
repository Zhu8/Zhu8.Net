---
categories:
- 黑犬 | Other
date: "2009-07-27T15:04:22+08:00"
tags:
- Hack
- 微软
- 手机
- 摩托罗拉
- 联系人
title: Rokr E2从Outlook Express中导入联系人
url: /blog/2009/07/rokr-e2-import-contacts-from-outlook-express.html
---
最近购入了Moto的Rokr E2，一部已经停产快两年，但我一直想拥有但苦于一直行货缺货的机器。前段时间卓越竟然有货了，毫不犹豫的购入了一台，刷机，很好很强大，用着也挺顺心的。
<!--more-->

就是一直为如何将原来Palm 680的通讯录导过来以及更新烦恼。寻找了如下方法：

1.  装Moto的官方软件Motorola Phone Tools，可以与Outlook Express互相同步，但是不知道什么原因，老是无法连接机器，我想再次更新的时候却没辙了。只好——**放弃**。
2.  使用网上流传的用Google 的Sync，但是我配置了之后一直是更新失败，无法连接到Google的服务器上面。——**放弃**。
3.  研究了一下Moto自带的**导入名片**功能，发现它可以支持vcf格式文件——名片（vCard）文件的！这样就简单了。具体操作步骤如下：

前面如何将你的通讯录导入到Outlook Express（以下简称OE）我就不说了，我只说如何将OE里面的通讯录导入到E2的过程。
<!--more-->

首先，打开你的OE：

<span class="center">![e2_contact_outlook_1](/images/posts/e2_contact_outlook_1_thumb.png "e2_contact_outlook_1") </span>

然后打开“地址”，就到了如下的页面：

<span class="center">![e2_contact_outlook_2](/images/posts/e2_contact_outlook_2_thumb.png "e2_contact_outlook_2") </span>

剩下的就比较简单了，Ctrl+A（全选）——Ctrl+C（复制），连接你的E2到电脑，然后在你的E2储存卡上新建一个文件夹比如*My Contacts*，将这些.vcf文件全部拷进去。断开手机与电脑的连接。接下来就是手机端的操作了，如下图：

进入通讯录——按左键——管理联系人：

<span class="center">![e2_contact_snap_1](/images/posts/e2_contact_snap_1_thumb.png "e2_contact_snap_1")</span>

选择——导入名片：

<span class="center">![e2_contact_snap_2](/images/posts/e2_contact_snap_2_thumb.png "e2_contact_snap_2") </span>

找到你保存.vcf名片文件的文件夹，比如上面的*My Contacts*：

<span class="center">![e2_contact_snap_3](/images/posts/e2_contact_snap_3_thumb.png "e2_contact_snap_3") </span>

全选，导入！

**至此，你的E2已经与你的OE完全一致了！以后你要同步你的通讯录。重复上述步骤即可！**

*此文为响应[King][1]对于我的“[月经][2]”评论，在七月月底放出……哈哈*

 [1]: http://welog.org/
 [2]: https://zhu8.net/blog/2009/05/braid.html#comment-244