## <span class="h2-border-none">系统要求</span>

请确保设备满足以下配置要求：

- CPU：4 核及以上
- 内存：8GB 及以上（可用内存）
- 存储：建议使用 SSD，且可用磁盘空间不少于 64GB
- 支持的系统版本：
    - Ubuntu 20.04 LTS 及以上
    - Debian 11 及以上

::: tip 版本兼容性
虽然以上版本已经过验证，但其他版本也可能正常运行 Olares。根据你的环境可能需要进行调整。如果你在这些平台上安装时遇到任何问题，欢迎在 [GitHub](https://github.com/beclab/Olares/issues/new) 上提问。
:::

## 安装 Olares

在 Linux 命令行中，执行以下命令：

```bash
curl -fsSL https://cn.olares.sh |  bash -
```
:::tip root 用户密码
安装过程中，可能需要输入 root 用户密码。
:::

:::info 安装遇到报错？
如果安装过程中出现错误，请先执行以下命令卸载：

```bash
bash olares-uninstall.sh
```
卸载完成后，重新运行安装命令进行安装。
:::

## 配置 Wizard
在安装 Olares 的核心服务之前，需要输入在 LarePass 中注册的 Olares ID 前缀。如果你的 Olares ID 为 `alice123@olares.cn`，输入 `alice123` 即可。

![Enter domain name and Olares ID](/images/zh/manual/get-started/enter-olares-id.png)

安装完成后，屏幕将显示初始系统信息，包括向导地址和初始一次性密码。这些信息在后续激活步骤中会用到。

![Wizard URL](/images/manual/get-started/wizard-url-and-login-password.png)

## 激活 Olares

使用向导 URL 和初始一次性密码进行激活和 Olares 初始化配置。

1. 在浏览器中输入向导 URL。进入欢迎页面后，按任意键继续。

   ![打开向导](/images/manual/get-started/open-wizard.png)
2. 输入一次性密码，点击**继续**。

   ![输入密码](/images/manual/get-started/wizard-enter-password.png)
3. 选择系统语言。

   ![选择语言](/images/manual/get-started/select-language.png)
4. 使用 LarePass 应用激活 Olares。

   a. 打开 LarePass 应用，点击**扫描二维码**，扫描向导页面上的二维码完成激活。
   :::warning 检查网络连接
   为避免激活失败，请确保你的手机和 Olares 设备连接到同一网络。
   :::
   ![激活 Olares](/images/manual/get-started/activate-olares.png)
   b. 按照 LarePass 上的提示重置 Olares 的登录密码。

设置成功后，LarePass 应用会自动返回主界面，向导页面则会跳转到登录界面。

## 登录流程

1. 在登录页面输入 Olares 登录密码。

   ![登录](/images/manual/get-started/log-in.png)
2. 系统会要求完成双重验证。你可以选择在 LarePass 上确认登录，或手动输入 6 位验证码。
   ::: info
   验证码有时效限制，请在过期前完成输入。如果验证码过期，需要重新生成。
   :::

   ![Confirm login](/images/manual/get-started/confirm-login.png)

登录后你就会看到 Olares 桌面。🎉

## 安全保存 Olares ID
你已经准备好开始使用 Olares！在此之前，请务必确保 Olares ID 已安全备份。如果不备份，你将无法在需要时恢复 Olares ID。

- [备份助记词](./back-up-mnemonics.md)
