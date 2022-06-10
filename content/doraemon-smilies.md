---
layout: page
type: page
title: Doraemon Smilies Plugin For Wordpress
url: /project/doraemon-smilies.html
shares: true
comments: true
enableReadingTime: false
date: "2008-06-11T22:24:33+08:00"
lastmod: "2022-05-20T00:46:59+08:00"
toc: true
keywords: [Doraemon, Smilies, Plugin, Wordpress, 插件, 哆啦A梦, 表情]
---
> *Doraemon Smilies For WordPress:该插件制作于2008年6月11日，并且一直没有继续维护，但是应该没有问题可以正常使用:)*  
> *This Plugin was made AT Wed Jun 11 22:24:33 2008,and not updated anymore,but it should work fine in any vision of WordPress :)*
<!--more-->
### 介绍*Introduction*

WordPress表情插件,来自神奇的哆啦A梦.

*WordPress Smilies plugin with emotions by Doraemon*

### 安装*Installation*

- 1.下载 **[插件](/uploads/doraemon-smilies.zip) 和 [图标](/uploads/smilies.zip)**
- *1.Download **[Plugin](/uploads/doraemon-smilies.zip) & [Smilies](/uploads/smilies.zip) images***
- 2.上传 "doraemon-smilies" 文件夹到 "/wp-content/plugins" 目录. 上传 "smilies" 文件夹到 "/wp-includes/images" 目录;
- *2.Upload the directory "doraemon-smilies" to the "/wp-content/plugins" directory. Upload "smilies" folder to the "/wp-includes/images" directory;*
- 3.激活 "Doraemon Smilies For Wordpress" 在 "管理面板>插件";
- *3.Activate "Doraemon Smilies For Wordpress" in "Admin Panel>plugin";*
- 4.完成!
- *4.All Done!Enjoy!*

### *Smilies For English Users*

------

#### Modify the **init.php** use this **Code** below

```php
<?php
$wpsmiliestrans = array(
		':no_face:' => 'dora_wuyan.png',
		':naughty:' => 'dora_wanpi.png',
		':act_up:' => 'dora_tiaopi.png',
		':delight:' => 'dora_gaoxing.png',
		':envy:' => 'dora_xianmu.png',
		':laugh?:' => 'dora_kuxiao.png',
		':doubt:' => 'dora_yiwen.png',
		':ignorant:' => 'dora_budong.png',
		':evil:' => 'dora_jianxiao.png',
		':satisfaction:' => 'dora_manzu.png',
		':surprise:' => 'dora_jingya.png',
		':pity:' => 'dora_yihan.png',
		':scare:' => 'dora_haipa.png',
		':alarm:' => 'dora_jinghuang.png',
		':glory:' => 'dora_deyi.png',
		':happy:' => 'dora_kuaile.png',
		':angry:' => 'dora_shengqi.png',
		':bye:' => 'dora_zaijian.png',
		':nice:' => 'dora_meihao.png',
		':oo:' => 'dora_oo.png',
		':expect:' => 'dora_qidai.png',
		':duplicity:' => 'dora_jianzha.png',
		':humility:' => 'dora_qianxu.png',
		':scorn:' => 'dora_buxie.png',
		':pain:' => 'dora_tongku.png',
		':trouble:' => 'dora_fannao.png',
		':think:' => 'dora_sikao.png',
);
```

