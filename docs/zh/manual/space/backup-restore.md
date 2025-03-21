---
description: 介绍 Olares Space 的数据备份工具，支持查看备份记录、管理系统快照、恢复云端数据。
---
# 备份与恢复

Olares Space 是为 Olares 实例提供快照备份的官方解决方案。你可以随时将 Olares 恢复到最近的状态。本节介绍如何在 Olares Space 中管理备份和恢复操作。

:::info 注意
每个 Olares 实例可以获得 10GB 的免费备份空间。超出部分将按照云服务商的定价收费。
:::

## 查看备份列表

备份任务列表显示每个备份任务的信息，包括：

- 初始创建时间
- 最近快照时间
- 总体存储用量

![alt text](/images/how-to/space/backup_list.jpg#bordered)

点击任务的**查看详情**可以进入详情页面。详情页面展示了该任务创建以来的存储用量变化，以及所有成功的快照记录。

:::info 注意
目前仅支持从最近一次快照恢复。
:::

## 将备份恢复至 Olares Space

![alt text](/images/how-to/space/restore_backup_to_the_olares_space.jpg#bordered)

将快照恢复到云端的操作流程与新建云端 Olares 类似。

1. 设置相关信息。

   a. 选择云服务商和数据中心位置。

   b. 选择实例的硬件配置。

   c. 确认快照信息并输入备份密码。

2. 了解存储和带宽费用。<br>每个实例都包含一定额度的免费存储和流量配额。超出部分将产生费用。

3. 确认订单并完成支付。之后 Olares 开始安装。

:::info 注意
在安装过程中，Olares 会验证备份密码。如果密码不正确，系统会要求重新输入正确的密码。如果忘记了备份密码，将无法继续恢复流程。此时请销毁实例，重新进行恢复。
:::

:::info 注意
为避免冲突或其他意外问题，在恢复到云端 Olares 之前，必须先销毁使用相同名称的现有 Olares。
:::