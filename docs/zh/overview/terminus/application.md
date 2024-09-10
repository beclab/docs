---
outline: [2, 3]
---

# Application

## Motivation

我们希望为 Terminus OS 的 Application 设计一种类似于 Android 和 iOS 系统一样的沙盒，这样可以做到：

- 用户应用和系统应用的隔离
- 不同应用间的网络和存储可以做到隔离
- 对应用的资源使用情况进行控制

由于沙盒机制，恶意程序作恶的范围被有效控制，所以让无许可的 Community Application 生态成为可能。

在 Kubernetes 中，namespace 是一种将集群资源划分为多个独立的部分的机制。

我们在`每个 Community Application 都属于一个独立的 namespace`的基础概念上，扩展了：

- Community Application 和 系统间的 [调用机制](#service-provider)
- Community Application 间的 [通讯机制](#service-provider)
- 不同用户使用同一个 Community Application 时的 [协作机制](#cluster-application)

## 应用标识符

Terminus OS 里的应用有应用名和应用 ID 两种标识符。

### Application Name

在 [Market Protocol](../protocol/market.md) 下，应用名由 Indexer 分配。

例如 Terminus 官方团队维护的 Indexer 的地址是 [apps](https://github.com/beclab/apps)，它规定应用在 repository 下的目录名就是应用名。

### Application ID

应用 ID 是应用名 `MD5` 后取前 8 位，例如一个应用的应用名是“hello”，则应用 ID 是“b1946ac9”。

应用 ID 会在 [Endpoint](./network.md#endpoint) 中出现。

由于应用名是由开发者自己提交，Indexer 主要解决冲突问题，所以这会造成潜在的公平性和欺诈性，所以我们考虑引入无语义的应用 ID 解决这个问题。

## 应用分类

您可以通过 [ControlHub](../../how-to/terminus/controlhub/browse.md) 查看系统中存在的应用，并根据 `namespace` 区分应用类型：

### System Application

System Application 包含了 Kubernetes，Kubesphere 和 Terminus OS 自身的组件，以及必要的硬件驱动。以下`namespace`属于系统应用：

```
os-system
kubesphere-monitoring-federated
kubesphere-controls-system
kubesphere-system
kubesphere-monitoring-system
kubekey-system
default
kube-system
kube-public
kube-node-lease
gpu-system
```

`os-system`是 Terminus OS 开发的组件。集群级的应用以及系统提供的各种数据库中间件都安装在这个`namespace`下。

它只允许被用户的 `user-space` 下的应用访问，不允许任何 Community Application 有访问权限。

### User System Application

Terminus OS 是多用户的系统，不管是 Admin 还是 Member, 都有两个 User System Application Namespace，分别是：

```
user-system-'Local Name'
user-space-'Local Name'
```

:::info
可以通过查看 [Terminus Name](../snowinning/terminus-name.md)，查看 Local Name 的定义
:::

**user-space**

安装了用户日常使用的系统应用，例如：[Files](../../how-to/terminus/files/)，[Settings](../../how-to/terminus/settings/)，[Control Hub](../../how-to/terminus/controlhub/)，[Dashboard](../../how-to/terminus/dashboard/)，[Market](../../how-to/terminus/market/)，[Profile](../../how-to/terminus/profile.md)，[Vault](../../how-to/terminus/vault/)

我们把这些应用放到一个特殊 namespace 里的原因是：

- 需要有一部分对系统底层接口的调用权限。比如，调用 Kubernetes 的 `api-server` 接口。
- 应用之间存在很多互相调用。
- 在沙盒机制下，保护这些应用不受恶意程序的攻击。

**user-system**

系统应用以及用户的内置应用是不允许三方 APP 直接访问的。但数据库集群，以及内置 APP 如果提供某些接口的 [Provider](../../developer/develop/advanced/provider.md)。那么 Community Application，[申明需要获得这些访问权限](../../developer/develop/package/manifest.md#sysdata)之后，就可以访问到这些资源。

这种情况下，系统在`user-system`的 `namespace`下，提供了这些资源的网络代理，并对这些来自三方的 Application 网络请求调用进行鉴权。

### Community Application

Community Application 的 namespace 由两部分组成，[Application Name](#application-name) 和用户的 [Local Name](../snowinning/terminus-name.md)，例如：

```
n8n-alice
gitlab-client-bob
```

Terminus OS 选择了对现有 Web 软件生态完整的继承：开发应用所需的技术栈和传统 Web 软件完全一致，不仅可以开发全新的应用，还可以将现有的 Web 软件稍加修改集成进 Terminus OS

开发者可以参考 [文档](../../developer/develop/index.md) 开发应用，在按照 [协议](../protocol/market.md) 制定的标准 [提交](../../developer/develop/submit/index.md) 后，其它用户就可以通过 [Market](../../how-to/terminus/market/) 查看并安装。

同开发者一起打造 Terminus 生态，会一直是我们最重要的事。

### Cluster Scoped Application

`Cluster Scoped Application`是一种特殊类型的 Community Application。这个类型的 Application 会有一些不同之处

- 只有 Admin 可以安装
- 每个 `Cluster Scoped Application`, 整个集群只能安装一个实例。
- 用户需要通过被 `Cluster Scoped Application` 授权的 `Reference Application` 来使用 `Cluster Scoped Application`

通常`Cluster Scoped Application` 会：

1. 监听 [用户事件回调](../../developer/develop/advanced/account.md)，来同步系统中的用户
2. 实现 [Auth Server](./account.md#unified-account)，让用户不用额外登录

您可以参考 Terminus 团队做的一些移植：[Gitlab Fusion Client](https://github.com/beclab/apps/tree/main/gitlabfusionclient)，[Gitlab Fusion](https://github.com/beclab/apps/tree/main/gitlabfusion)

## 应用间调用

### Service Provider

我们提供了一套 `Service Provider`[] 机制，供 Community Application 调用系统应用或其它 Community Application 提供的服务。

![alt text](/images/overview/terminus/image3.jpeg)

如图所示:

- 开发者需要将 Application 的一个服务接口 [申明为 Provider](../../developer/develop/advanced/provider.md#申明-provider)，同时系统也内置了一些 Provider
- 其它 Application 想要调用这个接口时，需要 [申请 Provider 的权限](../../developer/develop/advanced/provider.md#申请-privder-的访问权限)
- 调用实际发生时， `user-system` 下的 `system-server` 服务会服务负责请求的代理并进行权限的检查

### Intent

(TODO)

## Market

在 Terminus 的 [Market](../../how-to/terminus/market/) 中，不仅可以安装应用，同时也包含了丰富的`智能推荐`、`AI 模型` 供用户选择安装。

在 Market 中，无论是安装`应用` `智能推荐` `AI 模型`，其安装体验完全一致。用户都只需要在 Market 中，点击`Get`,等待系统完成安装，就可以打开使用。而系统在处理这些安装，都基于 Helm 的安装 [Chart](../../developer/develop/package/chart.md) 包进行扩展，实现完全统一的安装流程。

对于开发者来说，提交三方的`应用` `智能推荐` `AI 模型`到 Terminus 的 Market，也都采用相同的[提交审核流程](../../developer/develop/submit/index.md)

对于系统的深度用户，Market 还提供了`自定义安装` 的入口。用户完全可以参照我们的`TAC`格式，自行打包任意一个应用手动上传到系统中。

## 应用状态

一个应用的生命周期会有以下的状态：

- `pending` 表示在排队等待
- `installing` 正在安装
- `running` 应用安装完成
- `suspend` 应用被暂停，副本数被设置为 0
- `uninstalling` 正在卸载
- `upgrading` 正在升级

声明周期的变化流程图如下：

```
+---------+     +------------+     +--------------+     +---------+     +----------+
| pending | --> | installing | --> |              | --> | suspend | --> | resuming |
+---------+     +------------+     |              |     +---------+     +----------+
                                   |              |                       |
                  +--------------> |   running    | <---------------------+
                  |                |              |
                +------------+     |              |
                | upgrading  | <-- |              |
                +------------+     +--------------+
                                     |
                                     |
                                     v
                                   +--------------+
                                   | uninstalling |
                                   +--------------+

```

## Resource Limit

应用开发者应在 TAC 的 [TerminusManifest.yaml](../../developer/develop/package/manifest.md#spec) 中填写应用合理的资源消耗限制。

- requiredMemory: 内存最低要求，单位 Mi / Gi
- limitedMemory: 内存上限，单位 Mi / Gi
- requiredDisk: 硬盘最低占用量, 单位 Mi / Gi
- limitedDisk: 硬盘占用上限，单位 Mi / Gi
- requiredCpu: CPU 最低核数要求，可用小数
- limitedCpu: CPU 核数上限，可用小数

开发者提交应用审核时，会审核 TAC 模版中配置的所有容器的资源占用总和不能超过 TerminusManifest.yaml 中的申明。

用户在安装应用时，会检查当前 Terminus OS 剩余的资源是否满足应用申明的资源需求。如果不满足，将会拒绝安装。

## Learn More

- 用户

  [使用 Market 管理应用](../../how-to/termipass/account/index.md)<br>
  [使用 Settings 管理应用](../../how-to/terminus/settings/application.md)<br>

- 开发者

  [学习在 Terminus 上开发应用](../../developer/develop/index.md)<br>