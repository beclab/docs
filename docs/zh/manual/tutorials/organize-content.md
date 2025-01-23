
# 使用 Wise 打造你的知识中枢

信息时代，在不同来源和设备之间管理信息是一项挑战。大家往往使用多个工具来收藏文章、订阅 RSS 或管理文档，需要面对各种割裂的信息处理流程。

Wise 是 Olares 中的内置应用，可以帮你集中组织管理个人信息和知识。它可以从网络和不同设备中收集信息，利用本地推荐算法帮助你发现有意义的内容，保证隐私并避免算法偏见。

本教程将指导你如何利用 Wise 和 LarePass 收集、组织并访问跨平台的内容。

## 学习目标

通过本教程，你将学会如何：
- 使用 LarePass 浏览器扩展或移动客户端在浏览网页时直接收集内容。
- 通过上传 PDF 和 EPUB 等现有文件到 Wise，同一管理你的内容。
- 通过订阅 RSS 订阅源，即时获取你喜爱的博客、播客或视频播放列表的更新。
- 快速定位并检索你在个人信息中枢中整理的任何内容。

:::tip 注意
基于 RSS 的视频下载功能仅支持 1.11.3 及后续版本。
:::

## 开始之前

开始以前，请确保满足以下条件：

- 你的 Olares 设备已激活并正在正常运行。
- 你的 Olares ID 已[备份助记词](../get-started/back-up-mnemonics.md)。
- LarePass 应用已安装在你的手机上。

## 安装 LarePass 浏览器扩展

LarePass 浏览器扩展是内容发现和内容收集的核心应用。

::: tip 注意
LarePass 扩展目前仅支持 Chrome 浏览器。
:::

### 安装 LarePass 扩展

使用以下任一方式安装 LarePass 扩展：

<tabs>
<template #从-Chrome-网页应用商店>
a. 在 Chrome 网上应用店中搜索 LarePass。

b. 打开详情页面，点击 **添加到 Chrome** 进行安装。

</template>
<template #离线安装>

a. 访问 https://olares.cn/larepass 手动下载 LarePass 扩展的安装文件并解压。

b. 在 URL 地址栏中输入 `chrome://extensions/` 以进入扩展管理页面。

c. 在右上角启用 **开发者模式**。

d. 点击 **加载已解压的扩展程序** 选项，选择解压后的 LarePass 扩展文件夹完成安装。
</template>
</tabs>

:::tip 快捷访问
安装完成后，可在 Chrome 扩展菜单栏里将 LarePass 扩展固定到 Chrome 扩展菜单中，以便快捷访问。
:::

## 收集在线内容 
Wise 提供了灵活高效的在线内容收集方式，包括网页文章、在线视频、播客等。

### 通过 LarePass 扩展收集

::: tip 上传 Cookie 以优化体验
一些网站会限制匿名用户的访问权限。这种情况下，你可以将 Cookie 上传到 Olares 以优化体验。
1. 登录该网站。
2. 打开 LarePass 扩展，进入**收集**> **Cookie** 页面，并点击**上传**。如果不想上传某个 Cookie 项，可以点击 **X** 按钮取消选择。
:::

通过 LarePass 扩展收集网页内容步骤如下： 

1. 打开内容页面，如一个 B 站的视频。
2. 打开 LarePass 扩展。扩展会自动检测并获取当前页面的可收集内容。
3. 在**网页**页签下，点击内容标题旁的 <i class="material-symbols-outlined">add_box</i> 按钮，将该页面添加到 Wise 库中。
   ![收集在线内容](/images/zh/manual/tutorials/wise-collect-web-content.png)

收集成功后，你可以在 Wise 的**库** > **文章**中找到对应内容。页面上音频、视频和图片等媒体文件也会被下载到 Olares 本地的 `/download/Wise/Article` 文件夹。

![查看文章](/images/zh/manual/tutorials/wise-view-article.png)


### 通过 LarePass 移动端

你可以将网页链接分享到 LarePass 移动客户端以收集相应内容。此处以 iOS 上收藏微信公众号文章为例：
![LarePass 分享](/images/zh/manual/tutorials/wise-larepass-share.png)
1. 打开公众号文章，点击公众号文章右上角的 <i class="material-symbols-outlined">more_horiz</i> 按钮，选择在**默认浏览器中打开**。
2. 点击浏览器的分享按钮 <i class="material-symbols-outlined">ios_share</i>，选择 LarePass 为分享对象。
3. LarePass 会自动检测待分享页面的内容，并提示是否要添加至 Wise。点击**确认**。

::: tip 复制 URL 分享
你也可以直接复制网页 URL 并打开 LarePass。LarePass 会自动检测剪贴板中的 URL 并识别内容。
:::

收集完成后，可以在 Wise 的**库** > **文章**中阅读收集的微信文章。

## 上传 PDF 及电子书内容

你可以将本地的 PDF 或 EPUB 电子书内容上传到 Wise 进行统一管理，帮助你高效组织、搜索、随时访问需要的阅读材料、笔记和相关内容。
1. 打开 Wise, 点击菜单栏下方的 <i class="material-symbols-outlined">add_circle</i> 按钮，选择**上传**。
2. 选择要上传的文件，指定上传的目录，点击**确认**以完成上传。

你可以在 **库** > **PDF** 下查看上传的 PDF，在**库** > **图书**下查看 EPUB 电子书。

![View and manage PDF](/images/zh/manual/tutorials/wise-pdf.png)

::: tip 
您可以通过标签高效地分类和关联相关内容，或者通过笔记直接在内容旁记录洞见和想法。详细用法请参考[组织你的阅读](../tasks/wise-basics.md#组织你的阅读)。
:::

## 订阅 RSS 内容

您可以在 Wise 中订阅各类内容：播客、博客和喜爱的视频播放列表。系统会自动下载更新的剧集和内容，让你轻松追更，同时也无需担心原内容已被删除或无法访问。另外，对于那些往往不提供 RSS 订阅源的视频网站，Wise 也能自动下载你收藏的节目。

### 通过浏览器扩展订阅

通过 LarePass 扩展订阅 RSS 步骤如下：

1. 在浏览器中打开要订阅的 RSS 页面，例如 “加州101”的播客：`https://www.xiaoyuzhoufm.com/podcast/5e280faf418a84a0461fbd0d`。
2. 打开 LarePass 扩展。扩展会自动识别页面的 RSS 订阅源，并显示 **RSS** 页签。
3. 在 **RSS** 页签下，找到正确的订阅源，点击 <i class="material-symbols-outlined">bookmark_add</i> 按钮以完成订阅。
![订阅播客](/images/manual/tutorials/wise-sub-podcast.png)

### 手动添加 RSS 源

通过以下步骤手动添加 RSS 源至 Wise：

1. 获取目标 RSS 订阅链接，如 HackerNews 头条订阅源： `https://hnrss.org/frontpage`。
2. 打开 Wise，在菜单栏点击 <i class="material-symbols-outlined">add_circle</i> 按钮，并选择 **RSS 源**。
3. 输入网址后，Wise 将自动识别出可用的 RSS 订阅源。
   ![手动添加 RSS](/images/zh/manual/tutorials/wise-add-rss.png)
4. 点击 **添加** 完成订阅。

### 自动下载收藏视频

除了常规的 RSS 订阅，你可以通过 LarePass 扩展和 Wise 实现自动下载收藏的视频。以 B 站为例：

1. 在浏览器里打开并登陆 B 站。
2. 打开 LarePass 扩展，在 Cookie 页签下点击**上传**按钮以完成 Cookie 上传。Olares 需要使用视频网站的 Cookie 来访问你的收藏夹并下载视频。 
   
   ::: tip 打开自动同步 Cookie 功能
   Cookie 信息可能会过期。建议你在 Cookie 页面启用**自动同步**功能，以确保每次访问网站时，Cookie 会自动更新。
   :::
3. 进入你的 B 站收藏夹管理页面，新建一个收藏夹并打开。此处，我们创建了一个“保存到 Olares” 的收藏夹。
4. 打开 LarePass 扩展。扩展会自动获取当前页面的订阅源并显示 **RSS** 页签
    ![订阅 B 站收藏夹](/images/zh/manual/tutorials/wise-bilibili-rss.png)
5. 选择正确的订阅源。此处我们选择 **RSS** 页签下第二个源：“UP主非默认收藏夹”。点击 <i class="material-symbols-outlined">bookmark_add</i> 以完成订阅。

订阅完成后，任何添加到此收藏夹的视频都会被 Olares 自动下载至本地。

::: tip 自动下载点赞投币视频
你也可以通过 RSS 订阅方式自动下载 B 站点赞或投币的视频：
1. 在 B 站的**个人空间** > **个人资料**里获取你的 UID，通常是一串 8 位的数字。
2. 手动添加以下 RSS 订阅源至 Wise：
   - 点赞视频：`rsshub://bilibili/user/like/你的uid/`
   - 投币视频：`rsshub://bilibili/user/coin/你的uid/`
:::

### 访问 RSS 内容

要访问所有通过 RSS 方式订阅的内容：
1. 从左侧菜单栏，进入**订阅** > **订阅源**。
2. 选择一个未读的 RSS 项目，进入即可观看视频、收听播客或阅读文章。

::: tip 智能内容推荐
除了常规的 RSS 订阅，Wise 还提供了完全本地运行、100% 保护隐私的智能内容推荐系统，为你提供个性化内容推送。详情请参考[本地推荐算法](../tasks/recommend.md) 。
:::

## 搜索知识库内容

将你的内容收集到 Wise 后，你可以通过 Olares 的聚合搜索功能进行全文搜索。

![搜索 Wise](/images/zh/manual/tutorials/wise-search.png)

::: info 搜索格式
目前，只有文档类型的内容（PDF、网页文章和 ePUB）可以进行搜索。其他格式将在后续版本中支持。
:::
1. 点击 Dock 中的 <i class="material-symbols-outlined">search</i> 打开搜索窗口。
2. 指定搜索范围为 Wise，并输入关键词进行搜索。

## 了解更多

- [Wise 基本操作](../tasks/wise-basics.md)
- [本地推荐算法](../tasks/recommend.md)
- [订阅和管理订阅源](../tasks/subscribe.md)