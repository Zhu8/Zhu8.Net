---
categories:
- 立占 | Site
- 石马 | Code
date: "2022-06-14T14:56:10+08:00"
tags:
- Hugo
- Github
- GitInfo
featured_image:
title: 为Hugo站点模板添加GitInfo信息
url: /blog/2022/06/add-gitinfo-to-hugo-theme.html
description: 为本站的Hugo的模板添加GitInfo信息，方便编辑，并能够显示最后编辑时间，对应的Commit以及托管在GitHub上面的MarkDown文件的源码。
toc: true
---

为本站的**Hugo**的模板添加`GitInfo`信息，方便编辑，并能够显示最后编辑时间**LastMod**，对应的`Commit`以及托管在`GitHub`上面的`MarkDown`文件的源码。主要的变动，需要在以下几个文件着手：

## 设置`config.toml`

在`config.toml`文件里面，有两处需要编辑的地方:

1. 启用`GitInfo`:

    ```toml
    enableGitInfo = true
    ```

2. 在 params 里面增加以下要素备用：

    ```toml
    [params]
      enableGitInfo = true
      gitRepo = "https://github.com/zhu8/zhu8.net"
      # 是否开启
      enablePostGitInfo = true
      displayPostGitInfo = true
      # 说明：文章的 Front Matter 中的 `gitinfo`
      repoURL = "https://github.com/YOUR-USER-NAME/YOUR-REPO-NAME/blob/master"
      repoEditURL = "https://github.com/YOUR-USER-NAME/YOUR-REPO-NAME/edit/master"
      displayRAW = true
      RAWText = "MkDn"
      displayEditLink = true
      editText = "Edit Me?"
    ```


## 更新`Themes`文件夹

### 修改`HTML`模版

首先需要在你的`Themes`文件夹里面，增加专属模版：`post-gitinfo.html`:

```html
{{- $path := "" -}}
{{- with .File -}}
    {{- $path = .Path -}}
{{- else -}}
    {{- $path = .Path -}}
{{- end -}}
{{ if .GitInfo }}
    {{ if and .Site.Params.enablePostGitInfo (.Params.gitinfo | default .Site.Params.displayPostGitInfo) }}
      {{ if .Site.Params.displayEditLink }}
        {{ if not .Lastmod.IsZero }}
          <div id="gitinfo" class="a-gray text-sm text-gray-500 leading-tight pb-6">
            {{ with .Site.Params.repoEditURL }}{{ $contentDir := (cond $.Site.IsMultiLingual (printf `/%s/` $.Site.Params.contentDir) "/content/") }}
            <a href="{{ . }}{{ $contentDir }}{{ replace $path "\\" "/" }}" target="_blank" rel="nofollow noopener noreferrer" title="Edit Markdown File (Self Use Only!)"><i class="fas fa-pencil-alt"></i></a>{{ end }}LastMod:<em>{{ .Page.Lastmod.Format "2006-01-02" }}</em>&nbsp; {{ if .Site.Params.displayRAW }}{{ with .Site.Params.repoURL }}{{ $contentDir := (cond $.Site.IsMultiLingual (printf `/%s/` $.Site.Params.contentDir) "/content/") }}[<a href="{{ . }}{{ $contentDir }}{{ replace $path "\\" "/" }}" target="_blank" rel="nofollow noopener noreferrer" title="RAW Post in Markdown File.">{{- $.Site.Params.RAWText -}}</a>]{{ end }}{{ end }}{{- if $.Site.Params.gitRepo -}}{{- with $.GitInfo -}}[<a class="git-hash" href="{{ printf `%v/commit/%v` $.Site.Params.gitRepo .Hash }}" target="_blank" title="Commit by {{ .AuthorName }}: {{ .Subject }}"><i class="fas fa-hashtag fa-fw"></i>{{- .AbbreviatedHash -}}</a>]{{- end -}}{{- end -}}
          </div>
        {{ end }}
      {{ end }}
    {{ end }}
{{ end }}
```

在你需要的地方，调用它出来，可能是`single.html`，也可能是其他的分模版，比如我的在 **partials** 下的`page-footer.html`模版里：

```html
{{ partial "post-gitinfo.html" . }}
```

### 增加`CSS`标记`ID`

为了更好的自定义，在上述 HTML 文档中，增加了一个 **DIV** 的 **ID** 叫做`gitinfo`，你需要在`CSS`文件里面定义一下：

```css
#gitinfo {
  padding-top: 3px;
  float: right;
  display: inline-block;
}
```

## 呈现

最后，就呈现出如我文章末尾右侧所现的**效果**啦！Enjoy~~
