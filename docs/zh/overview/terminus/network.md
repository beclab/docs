---
outline: [2, 3]
---

# 网络

## 动机

服务器的网络配置一直是一件极为繁琐的事，它体现在：

- 外部而言，需要处理域名、证书、反向代理、内网穿透等问题。
- 内部而言，需要管理各个应用独立的路由、域名和安全策略。

目前，市面上还没有一款产品可以同时兼顾安全和易用性。

Terminus OS 希望提供给个人用户一个没有门槛但足够安全和通用的解决方案。

## Entrance

Entrance 是应用的入口，用户需要通过 Entrance 访问应用。

每个应用有一个或多个 Entrance，Entrance 有 Public 和 Private 两种，例如 WordPress 就包含公开页面（Public Entrance）和管理后台（Private Entrance）两个 Entrances。

### Public Entrance

定位是提供对外公开的服务。例如博客，社交媒体等。

访问 Public Entrance 的流量无需经过[鉴权](./account.md#多因素验证)。我们通过让 Public Entrance 的流量经过 Cloudflare 获得基本的安全保障。

- 当 Terminus 有 public IP，流量经过 Cloudflare 进入 Terminus。
- 当 Terminus 没有 public IP 时，有两种方式：
  - 流量经过 Cloudflare Tunnel 进入 Terminus。
  - 流量经过 Cloudflare 后转发给 FRP 后进入 Terminus。

### Private Entrance

定位是提供只有用户自己访问的服务，例如博客管理后台、[Desktop](../../how-to/terminus/desktop.md) 等。

访问 Private Entrance 的流量需要经过[鉴权](./account.md#多因素验证)。Private Entrance 的流量路由会取决于用户是否在设置中启用了[Only VPN](../../how-to/terminus/settings/home.md#forcing-vpn-access-to-private-entrance-only-vpn-mode)模式：

- **Only VPN 模式未启用**：
  - 如果用户在 TermiPass 中[启用 VPN 连接](../../how-to/termipass/manage-terminus.md#vpn-connection)，所有网络流量将通过 VPN（TailScale）转发。
  - 如果没有启用，网络流量的处理方式与 Public Entrance 相同。
- **Only VPN 模式已启用**：只有通过 VPN (TailScale) 的流量才能访问 Private Entrance。

### Endpoint

用户有两种方式在浏览器里访问应用（应用的 Entrance）：

- 默认可以使用形如`https://[RouteID].[DomainName]`的 URL，例如`https://vault.bob.myterminus.com`。RouteID 也有两种情况：

  - 默认的 RouteID

    - 为了方便记忆，我们给所有预装的系统应用设置了容易记忆的 RouteID。例如`desktop`和`market`。

    - 其它应用采用[应用 ID](./application.md#应用-id) + Entrance Index 的组合。这是一个由小写英文字母和数字组成的 10 位字符串。例如应用 ID为`92d76a11`，Entrance Index 为`1`，则 RouteID 为`92d76a1101`。

  - 用户可以在设置里[自定义 RouteID](../../how-to/terminus/settings/application.md#setup-custom-route-id)。

- 也可以给 Entrance [设置第三方域名](../../how-to/terminus/settings/application.md#setup-custom-domain)。

:::info
DomainName 是由 [Terminus Name 变化而来](../../../developer/contribute/snowinning/terminus-name.md#domainname)。

Entrance Index 是指 Entrance 在 [TerminusManifest.yaml](../../developer/develop/package/manifest.md) 中定义的多个 Entrances 里的位置。
:::

## Setup Domain

Terminus Space 会在 Terminus [激活](../../how-to/terminus/setup/wizard.md)时，协助用户完成 [DomainName](../../developer/contribute/snowinning/terminus-name.md#domainname) 的设置。

### DNS

激活系统时，我们会对域名进行 DNS 配置，以便用户可以在安装完成后通过 URL 访问到 Terminus。

:::info
对 Organization 的 Admin，需要额外参考 [Domain 设置教程](../../how-to/space/domain/index.md)，将域名交由 Terminus Space 托管。
:::

### HTTPS 证书

为了确保用户访问 Terminus 时数据传输的私密性，我们为用户申请了免费的 SSL 证书，该证书由 Google Trust Services LLC 签发，当证书临期时会自动进行更新。

同时为了提升访问 Terminus 的速度及安全性，我们使用 Cloudflare 对 Terminus 进行 7 层加速，对应的 SSL 证书由 Google 签发并由 Cloudflare 进行管理。

### 设置反向代理

对于没有 public IP 的 Terminus 用户，需要在激活时设置反向代理，目前有两种方式：

- 选择 Cloudflare 的 Tunnel。
- 选择 FRP 节点，为了加快访问速度，建议选择距离 Terminus 物理位置较近的 FRP 节点。

## 通过 local 访问

用户会在两种情况下可以通过`https://[RouteID].local.[DomainName]`（例如`https://vault.local.bob.myterminus.com`）访问 Terminus 上的应用：内网或 VPN。

### 内网

当用户的设备和 Terminus 在同一内网，例如连接了相同的 WIFI 时。

### VPN 访问

Terminus 基于 [TailScale](https://tailscale.com/) 和 [HeadScale](https://headscale.net/) 为用户内置了 VPN 服务。

当在 TermiPass 启动 VPN 访问后，装有该 TermiPass 的设备访问 Terminus 的所有流量都会经过 VPN。VPN 访问的优势有：

- 更安全
- 更快的访问速度

我们在设置里提供了 [Only VPN](../../how-to/terminus/settings/home.md#forcing-vpn-access-to-private-entrance-only-vpn-mode) 开关。打开后，系统会要求所有对 Private Entrance 的访问都必须通过 VPN。

## TermiPass 连接状态

你可以通过 [TermiPass 连接状态](../../how-to/termipass/manage-terminus.md#connection-status) 查看当前 TermiPass 和 Terminus 的连接状态。

## Terminus 内部网络

Terminus 系统在网关架构上采用了多层代理路由设计。从`集群` -> `用户` -> `应用` -> `服务组件`，逐层分发流量。

![alt text](/images/overview/terminus/image4.jpeg)

在应用内部，Terminus 做了多层安全防护。

- 每个应用独立一个 namespace，所有的资源都放在一个 namespace 中独享。所有应用的容器配置的`ServiceAccount`不允许绑定`ClusterRole`，也就是说，应用不具有跨 Namespace 访问资源的权限。

- 每个 Namespace 会添加`Network Policy`，除集群的应用和用户自己系统的应用外，不允许其他 APP 的有网络请求可以进入。用户与用户之间的所有应用隔离、网络隔离。每个用户安装的三方应用之间也会网络隔离，避免有恶意 APP 攻击其他应用。

- 应用部署的所有 Pod 不允许有`hostNetwork`或者`NodePort`的 Service。只有申明了 Entrance 的 Service，系统才会提供访问流量的进入代理。而申明为 Entrance 的 Pod 会强制加入 Envoy 的沙盒 Sidecar，对每一个进入的流量进行认证授权。

## 更多

- 用户

  使用设置[管理 Entrance](../../how-to/terminus/settings/index.md)

- 开发者

  通过 [TerminusManifest.yaml](../../developer/develop/package/manifest.md#entrances) 了解更多 Entrance 的属性
