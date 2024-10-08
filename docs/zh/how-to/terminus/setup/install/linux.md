
# 在 Linux 上安装 Terminus

本文档详细介绍了在 Linux 设备上安装 Terminus 的步骤。

## 前提条件

- Linux 设备满足如下要求：
  - CPU：4 核心或以上
  - 内存：8GB 或以上（可用内存）
  - 存储空间：64GB 或以上（可用磁盘空间）
  - 支持的系统：
     - Ubuntu 20.04 LTS 或更高版本
     - Debian 11 或更高版本
- 手机上已安装 [TermiPass](../../../termipass/overview.md#download)
- 已创建 [Terminus Name](../../../termipass/account/index.md#create-terminus-name)

:::info
了解[为什么需要 Terminus Name](../../../../overview/terminus/terminus-name.md#为什么需要-terminus-name)。
:::

## 1. 安装 Terminus

1. 将局域网 IP 地址绑定到 Ubantu 主机名，以确保 DNS 解析稳定：

   ```bash
   sudo apt install net-tools
   ifconfig
   # 查找以 `192.168` 开头的局域网 IP 地址。
   ```
   
   ```bash
   sudo nano /etc/hosts
   # 添加一行
   192.168.xx.xx   Ubuntu 
   # 将 xx 替换为你的实际 IP 地址和主机名。
   ```

2. 重启 Ubuntu 使更改生效。
   
   ```bash
   sudo reboot
   ```

3. 打开终端，运行以下命令来安装 Terminus：

   - **安装 Terminus OS 最新版本**:

       ```bash
       curl -fsSL https://terminus.sh |  bash -
       ```

   - **安装 Terminus OS 指定版本**:

       ```bash       
       curl -sSfL https://github.com/beclab/Terminus/releases/download/${VERSION}/install.sh | bash -
       ```

      :::info
      - 将`${version}`替换为当前每日构建版本号。详见 [Terminus 仓库](https://github.com/beclab/terminus)。
      - 如果安装过程中出现错误，使用以下命令先卸载 Terminus OS：

           ```bash
           bash uninstall_cmd.sh
           ```
           卸载后，重新运行原始安装命令尝试安装。
      :::
 
## 2. 输入 Terminus Name

安装过程结束时，系统会提示输入域名和 Terminus Name：

![alt text](/images/how-to/terminus/enter_terminus_name.png)

- 如果你的 Terminus 名称是 "alice@myterminus.com"，按 **Enter** 或输入 `myterminus.com` 作为域名，然后输入 `alice` 作为 Terminus 名称。

- 如果你的 Terminus 名称是 "alice@helloworld.com"，输入 `helloworld.com` 作为域名，然后输入 `alice` 作为 Terminus 名称。

:::info 信息
若需使用自定义域名，请确保已按照 [创建域名](../../../space/domain/host-domain.md) 中的描述完成域名配置。
:::

## 3. 获取初始系统信息

安装完成后，终端中将显示初始系统信息，包括后续激活所需的配置向导 URL 和初始登录密码。

![alt text](/images/how-to/terminus/one_time_password.png)

### 向导 URL

如截图所示，有两个向导 URL：

- 上面一个用于内部网络访问。
- 下面一个用于公共网络访问。

通常情况下，如果你的计算机和 Terminus 处于同一网络，请使用内部网络 URL。如果不在同一网络，使用公共网络 URL。

:::tip
使用内部网络 URL 时，请注意：
- 在激活过程中，你可能需要设置反向代理。
- 如果你通过扫描 QR 码激活 TermiPass，请确保你的手机和 Terminus 处于同一网络。
:::

### 初始登录密码

请记下下方红色方框内的初始一次性密码。你将在向导页面中需要使用它。

## 下一步

- [激活 Terminus](../wizard.md)
- [登录 Terminus](../login.md)
- [使用 TermiPass 管理账户](../../../termipass/account/index.md)






