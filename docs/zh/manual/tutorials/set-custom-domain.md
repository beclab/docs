---
outline: [2, 3]
---

# 为 Olares 设置自定义域名

默认情况下，当你在 LarePass 中创建账户时，系统会为你提供一个带有 `olares.cn` 域名的 Olares ID。这意味着，你可以通过类似 `desktop.{your-username}.olares.cn` 的 URL 来访问自己的 Olares 服务。虽然这种默认设置能够省去常见的网络和域名配置烦恼，但在以下情形中，你可能更希望使用自己的域名：

- **作为组织**：为所有团队成员使用与企业邮箱类似的公司域名，例如 `employee@company.com`。
- **作为个人**：使用自己的域名，以获得更个性化的使用体验。

本教程将介绍如何为 Olares 设置自定义域名。

## 目标
通过本教程，你将学习：
- 在 Olares Space 中添加并验证你的自定义域名
- 创建一个组织来管理自定义域名
- 为组织配置成员访问方式
- 在自定义域名下创建 Olares ID
- 使用你的 Olares ID 安装并激活 Olares

## 理解 Olares 自定义域名机制
在 Olares 中，自定义域名通过“组织”进行管理。无论你是个人用户还是代表公司，都需要先创建一个组织。该组织将作为自定义域名配置的载体。

下表列出了设置自定义域名所需的步骤，以及针对个人用户、组织管理员及组织成员的责任分工。根据你自身的角色不同，实际需要执行的操作也会有所差异。

| 步骤                                        | 个人用户 | 组织管理员 | 组织成员 |
|---------------------------------------------|:-------:|:--------:|:-------:|
| 创建 DID                                    | ✅       | ✅        | ✅       |
| 将域名添加到 Olares Space                   | ✅       | ✅        |         |
| 为该域名创建组织                             | ✅       | ✅        |         |
| 向组织添加邮箱                               | ✅       | ✅        |         |
| 加入组织并创建 Olares ID                    | ✅       | ✅        | ✅       |
| 设置 Olares                                  | ✅       | ✅        | ✅       |

## 开始之前

请确保你已具备以下条件：
- 已向域名注册商购买并注册了一个可用的域名。
- 拥有一个 Gmail 或 G-Suite 账号。目前仅支持这两种格式的账号用于加入组织域名。
- 已在手机上安装 LarePass 应用。<br>
  你将在后续步骤中使用 LarePass 登录 Olares Space，并将自定义域名与 Olares ID 进行绑定。

## 第 1 步：创建 DID

DID（Decentralized Identifier，去中心化标识符）是在获得最终的 Olares ID 前，账户所处的临时状态。只有当账户处于 DID 阶段时，才能绑定自定义域名。创建方式如下：

1. 在 LarePass 应用中，打开账户创建页面。

2. 点击**创建账户**以触发 DID 创建。
   
  ![create DID](/images/manual/tutorials/create-a-did.png)

   此操作将为你创建一个 DID 阶段的 Olares 账户。

  ![DID stage](/images/manual/tutorials/did-stage.png)

## 第 2 步：将域名添加到 Olares Space

在绑定域名之前，你需要先在 Olares Space 中添加并验证域名。

1. 在浏览器中访问 [Olares Space](https://space.olares.xyz/)。
2. 在手机端的 LarePass 应用中，点击右上角的扫码按钮，并扫描登录页面的二维码以登录 Olares Space。

    ![scan QR](/images/manual/tutorials/scan-qr-code.png)

3. 在 Olares Space 中，进入**域名管理**>**域名设置**，输入你的域名并点击**确认**。

    ![add domain](/images/manual/tutorials/add-domain.png)

4. 验证你域名的 TXT 记录。此步骤会验证你对该域名的所有权。

   a. 在操作列中，点击**引导**。  
   b. 按照屏幕提示，将 TXT 记录添加到你的 DNS 服务商配置中。

    ![verify TXT](/images/manual/tutorials/verify-txt.png)

   完成验证后，域名状态会自动更新为**等待添加域名 NS 记录**。

5. 验证域名的名称服务器（Name Server，或 NS）记录。此操作将把你域名的 DNS 解析委托给 Olares 的 Cloudflare。

   a. 在操作列中，点击**引导**。  
   b. 按照屏幕提示，将 NS 记录添加到你的 DNS 服务商配置中。

   一旦通过验证，域名状态将更新为**等待为域名申请可验证凭证**。

   ![domain added](/images/manual/tutorials/domain-added.png)

:::tip 注意
TXT 验证通常在 30 分钟内完成。NS 记录验证可能需要长达 2 小时。如果整个过程超过 3 小时，请联系你的 DNS 服务商进行排查。
:::

完成 TXT 和 NS 记录的验证后，你的域名将成功添加至 Olares Space。

## 第 3 步：为域名创建组织

此步骤将在 Olares 中为你的域名创建一个组织，并请求该域名的可验证凭证（Verifiable Credential，或 VC）。

::: tip 可验证凭证
可验证凭证是一种数字格式的证明，用于在不披露额外个人信息的情况下，验证持有者的某些属性或资格。
:::

1. 在 LarePass 应用中创建新组织。

   a. 在账户创建页面，点击右上角的 <i class="material-icons">display_settings</i>，进入**高级账户创建**页面。

   b. 前往**组织 Olares ID** >**创建新组织**。与你域名对应的组织会自动显示在列表中。

   ![Create org](/images/manual/tutorials/create-org.png)

   c. 点击该组织名称以申请 VC。完成后，你将看到待绑定的域名。

   d. 点击**确定**完成在 LarePass 中的组织域名绑定。

   ![Bind org](/images/manual/tutorials/bind-domain-with-org.png)

2. 在 Olares Space 中，进入**域名管理**页面。此时，域名状态应变为**等待规则配置**。

至此，你已成功将自定义域名与某个组织绑定，接下来可以在 Olares Space 中配置域名规则。

## 第 4 步：添加新成员

域名规则决定了如何向组织添加成员。只有组织成员才能在组织域名（即你的自定义域名）下申请 Olares ID。要配置域名规则，请执行以下步骤：

1. 在 Olares Space 中，进入**域名管理**，然后在目标域名右侧点击**查看**。
2. 在**域名邀请规则**下，选择**指定邮箱地址**（指定邮箱地址），并点击**保存**。

   :::tip 邀请规则
    目前提供两种邀请规则：
     - **固定邮箱后缀**：适用于使用统一公司邮箱域名（例如 `@company.com`）的大型团队。任何符合指定后缀的邮箱地址都可以申请在组织下的 Olares ID。目前仅支持添加单个邮箱后缀。账户必须符合 G-Suite 格式。
     - **指定邮箱地址**：允许你通过指定成员的邮箱地址来添加成员。如果你没有公司邮箱域名且仅需邀请少数成员加入组织，建议使用此选项。支持 Gmail 和 G-Suite 账号。
   :::

3. 点击**添加新用户**并输入成员的 Gmail 地址，例如 `justtest193@gmail.com`。

   ![Configure domain rules](/images/manual/tutorials/set-domain-rule.png)

4. 点击**提交**完成成员添加。如果需要添加多个用户，请重复第 3 步和第 4 步。

:::tip 维护成员列表
作为组织管理员，你可以随时在**域名管理**页面管理组织成员列表。
:::

## 第 5 步：使用自定义域名创建 Olares ID

要使用该域名，需要在组织下申请一个 Olares ID。

1. 在 LarePass 应用的账户创建页面，点击右上角的 <i class="material-icons">display_settings</i> 进入**高级账户创建**页面。
2. 点击**组织 Olares ID** >**加入已有组织**。
3. 输入组织域名（即已验证的自定义域名），然后点击**继续**。如果出现错误，请检查域名拼写是否正确，并确认在 Olares Space 中的域名规则已正确配置。
4. 为成员申请 VC。
   
   a. 在系统提示时，选择 Google 作为你的 VC 凭证提供商。  
   b. 使用之前添加的 Gmail 帐号登录，并授权 VC 验证。

   ![Join the org](/images/manual/tutorials/join-org.png)

  授权成功后，就会自动创建一个使用自定义域名的 Olares ID，例如 `justtest1953@xxxx.cloud`。

## 第 6 步：安装并激活 Olares
最后，你只需安装并激活 Olares，即可通过自定义域名进行访问。

::: tip 注意
以下示例展示了如何在安装脚本中通过环境变量预先设置域名和用户名。你也可以不配置环境变量，直接使用单行脚本进行安装；这种情况下，你需要在安装过程中手动填写域名和用户名。关于所有支持平台的详细安装说明，请参阅[安装指南](../get-started/install-olares.md)。
:::

1. 在终端中，通过带有指定环境变量的安装脚本来启动安装：

    ```bash
    export TERMINUS_OS_DOMAINNAME=xxxx.cloud \
      && export TERMINUS_OS_USERNAME=justtest1953 \ 
      && curl -sSfL https://olares.sh | bash -
    ```
    - `export TERMINUS_OS_DOMAINNAME=xxxx.cloud`: 指定你的自定义域名，请将 `xxxx.cloud` 替换为实际的域名。
    - `export TERMINUS_OS_USERNAME=justtest1953`: 指定你的用户名（本地名称），请将 `justtest1953` 替换为你的 Olares ID 前缀。

2. 等待安装完成。根据你的网络情况，安装可能需要 20–30 分钟。安装完成后，终端会显示向导地址和登录凭证，例如：
    ```bash
    2024-12-17T21:00:58.086+0800        Olares is running at:
    2024-12-17T21:00:58.086+0800        http://192.168.1.16:30180

    2024-12-17T21:00:58.086+0800        Open your browser and visit the above address
    2024-12-17T21:00:58.086+0800        with the following credentials:

    2024-12-17T21:00:58.086+0800        Username: justtest1953
    2024-12-17T21:00:58.086+0800        Password: 2uO5PZ2X
    ```

3. 在浏览器中打开上述向导地址，并按照屏幕提示完成激活。

完成上述步骤后，你即可通过自定义域名访问安装好的 Olares。

## 了解更多

- [Olares 账户](../concepts/account.md)
- [安装 Olares](../get-started/install-olares.md)
- [设置域名规则](../space/manage-domain.md)