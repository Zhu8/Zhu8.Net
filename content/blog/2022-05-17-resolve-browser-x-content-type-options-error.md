---
categories:
- 立占 | Site
- 石马 | Code
date: "2022-05-17T23:40:10+08:00"
lastmod: "2022-05-18T19:20:10+08:00"
tags:
- Hugo
- Gitlab
- HTTP
- Vercel
featured_image: /images/posts/http-error.png
title: 解决浏览器X-Content-Type-Options报错
url: /blog/2022/05/resolve-browser-x-content-type-options-error.html
description: 今天无意用Edge的开发人员调试工具，就出现了错误：Response should include 'x-content-type-options' header.
toc: true
---

![HTTP-ERROR RESPONSE](/images/posts/http-error.png)

今天无意用Edge的开发人员调试工具，就出现了如上图的<mark>错误</mark>：`Response should include 'x-content-type-options' header.`
<!--more-->

### 错误提示：

| 请求                        | FURTHER READING                                                  |
|---------------------------|------------------------------------------------------------------|
| https://zhu8.net/project/ | Learn why this is important and how to fix it on [webhint.io][1] |

研究了一下，发现是HTTP响应头的问题，需要从我的托管网站Vercel着手。
> The ***X-Content-Type-Options*** response **HTTP** header is a marker used by the server to indicate that the <abbr title="Multipurpose Internet Mail Extensions">**MIME**</abbr> types advertised in the **Content-Type** headers should be followed and not be changed. The header allows you to avoid **MIME type** sniffing by saying that the MIME types are deliberately configured.
>
> <cite>— via **MDN** [^2]</cite>

### 解决方法：

在你的Github或者Gitlab的库首页，增加文件：`vercel.json` [^4]

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers" : [
        {
          "key" : "X-Content-Type-Options",
          "value" : "nosniff"
        }
      ]
    }
  ]
}
```

然后，继续按照我[上一篇文字][6]的方法，去更新和发布就好啦！

### 最终成果：

最后，得到如下的响应头，可以看到，已经有了`X-Content-Type-Options: nosniff`：

```http
   请求 URL: https://zhu8.net/
   请求方法: GET
   状态码: 200 / 
 - 请求标头
   Accept: text/html, application/xhtml+xml, image/jxr, */*
   Accept-Encoding: gzip, deflate
   Accept-Language: zh-Hans-CN, zh-Hans; q=0.5
   Cookie: sc_is_visitor_unique=rx941480.1652872755.EAD78422C20F4F676DCA42A2A9F74305.1.1.1.1.1.1.1.1.1
   Host: zhu8.net
   User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko
 - 响应标头
   access-control-allow-origin: *
   age: 5023
   cache-control: public, max-age=0, must-revalidate
   content-disposition: inline; filename="index.html"
   content-encoding: gzip
   content-type: text/html; charset=utf-8
   date: Wed, 18 May 2022 11:19:55 GMT
   etag: W/"d27d9072e3714bb866e04f44ebf3cd4ee43b7766c40dc6b8ed30ea127a945ce3"
   server: Vercel
   strict-transport-security: max-age=63072000
   x-content-type-options: nosniff
   x-vercel-cache: HIT
   x-vercel-id: hnd1:hnd1::pkqmc-1652872795296-e898f56a2777
```

[1]: https://webhint.io/docs/user-guide/hints/hint-x-content-type-options/	"Use `X-Content-Type-Options` header | webhint documentation"
[^2]: [X-Content-Type-Options - HTTP | MDN][3] - Mozilla Developer Network

[3]:https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options	"MDN Web Docs"

[^4]: [Setting up Security Headers with Vercel][5] - Dave Blakey

[5]: https://blakey.co/blog/setting-up-security-headers-with-vercel	"Setting up Security Headers with Vercel | Dave Blakey"
[6]: https://zhu8.net/blog/2022/04/make-a-whole-cloud-site-with-hugo.html	"Hugo搭建完全云托管个人网站"