---
outline: [2, 3]
---

# 远程看 Olares 中下载的视频

想在任何地方观看自己的电影和电视剧？通过 Olares 远程访问你的私人媒体库，轻松实现这一目标。

## 打开 Olares 专用网络
为了在外部网络中实现流畅的流媒体播放，需要在 LarePass 中启用 Olares 专用网络。这可以确保安装了 LarePass 的设备通过专用网络传输所有流量，从而提供类似局域网的速度和性能。

:::tip
如需下载不同版本的 LarePass，请访问[官方页面](https://www.olares.xyz/larepass)。
:::

### LarePass 移动端
1. 打开 LarePass，进入**设置** > **账户**。
2. 打开专用网络开关。

   ![在 LarePass 移动端启用专用网络](/images/zh/manual/use-cases/vpn-mobile.png#bordered){width=45%}
### LarePass 桌面端
1. 打开 LarePass，点击主界面左上角头像区域。
2. 在弹出的面板中打开专用网络开关。

   ![在 LarePass 桌面端启用专用网络](/images/zh/manual/use-cases/vpn-desktop.png#bordered){width=60%}

开启后，你还可以通过以下格式访问应用：`https://[RouteID].local.[OlaresDomainName]`。

启用专用网络的设备无论是通过 LarePass 客户端还是浏览器访问 Olares，都会使用专用网络连接。

:::info 添加配置文件
在 iOS 或 macOS 系统中启用专用网络时，需要将 VPN 配置文件添加到系统中。按照提示完成设置即可。
:::

## 在 LarePass 中访问媒体文件
启用专用网络后，你可以浏览存储在 Olares 上的媒体文件。

### 通过 LarePass 客户端访问
1. 打开 LarePass，点击**文件**，进入包含电影和电视剧的媒体目录。
2. 点击任意视频文件，即可在电脑或移动设备上开始播放。

![在 LarePass 客户端中播放视频](/images/zh/manual/use-cases/view-video-from-larepass-desktop.png)

### 通过浏览器访问
1. 以网页模式打开文件管理器，或者直接使用本地地址：`https://files.local.[OlaresDomainName]`。

   ![打开文件管理器](/images/zh/manual/use-cases/view-video-from-files.png#bordered)
2. 找到你的媒体目录，点击视频文件即可开始播放。

   ![从文件管理器播放视频](/images/zh/manual/use-cases/view-video-from-files-2.png)

## 使用 Jellyfin 访问媒体文件
如果需要高级媒体管理功能，例如字幕支持和多声道音频，可以安装 Jellyfin。

1. 打开应用市场，进入**娱乐**分类。
2. 找到并下载 Jellyfin。
3. 启动 Jellyfin，并完成首次设置：
   - 设置管理员密码。

   ![设置管理员密码](/images/zh/manual/use-cases/jellyfin-set-admin.png)
   - 配置媒体库目录。

   ![设置管理员密码](/images/zh/manual/use-cases/jellyfin-set-media-library.png)
4. 等待 Jellyfin 扫描并索引你的媒体库。它会自动获取以下元数据：
   - 电影海报
   - 描述信息
   - 演职员表

   ![Jellyfin](/images/zh/manual/use-cases/jellyfin-details.png)

## 通过 Jellyfin 客户端访问你的媒体库
要在多种设备上流式播放媒体文件：

1. 配置 Jellyfin 认证。

   a. 打开设置，进入**应用** > **Jellyfin** > **入口**。

   b. 将**认证级别**设置为**内部**。

    ![设置认证级别](/images/zh/manual/use-cases/jellyfin-auth-level.png#bordered)
2. 下载并安装 [Jellyfin 官方客户端](https://jellyfin.org/downloads/)。
3. 将客户端连接到 Olares 中的 Jellyfin 服务器。

   a. 在 Jellyfin 客户端中，自动发现功能会定位到同一网络中的服务器。

   b. 如果自动发现失败，可手动输入 Olares 提供的服务器地址。

4. 使用你的凭据登录 Jellyfin 客户端。

:::tip
远程访问媒体库时，请保持专用网络连接处于激活状态，以获得最佳流媒体播放效果。
:::