---
outline: [2, 3]
description: Olares 的版本管理系统，包括发布类型、分支策略和升级规范。详述语义化版本的实现方式和兼容性要求。
---
# Olares 版本说明

Olares 的版本管理和发布流程旨在提供清晰的版本号定义和稳定的升级路径。本文档介绍了 Olares 的版本号规则、版本类型、分支管理实践以及升级策略。

## 版本号规则

Olares 版本号主要遵循 [语义版本号规范](https://semver.org/lang/zh-CN/)，其格式为`主版本号.次版本号.修订号[-预发布版本号]`。例如，`1.11.0-rc.0` 表示 `1.11.0` 的候选版本。

版本顺序如下：  
  `1.0.0-alpha` < `1.0.0-alpha.1` < `1.0.0-alpha.beta` < `1.0.0-beta` < `1.0.0-beta.2` < `1.0.0-beta.11` < `1.0.0-rc.1` < `1.0.0`

## 发布策略

Olares 提供三种类型的版本：**正式版**、**候选（RC）版**和**每日构建版（Daily Build）**。

### 正式版

正式版是经过全面测试后发布的版本，适用于生产环境。官方的一行安装命令始终默认安装最新发布的正式版。
- **发布节奏**：每月一次  
- **示例**：`v1.10.5`、`v1.11.0`、`v1.11.1`、`v1.12.0`

### RC 版

RC 版是用于测试的预发布版本。在发布正式版之前，RC 版可能会经过多次迭代，最终升级为正式版。
- **发布节奏**：根据测试进度  
- **示例**：`v1.11.0.rc.0`、`v1.11.0.rc.1`

### 每日构建版

每日构建版是每天凌晨 2 点（UTC+8）从 `main` 分支自动生成的版本，版本号中包含生成日期。这些版本反映了最新的代码更改，适用于开发和测试用途。每日构建版通常不稳定，不适合生产使用。
- **发布节奏**：每天  
- **示例**：`v1.12.0-20241201`

## 发布分支管理

在 `1.x` 阶段，Olares 遵循结构化的每月发布节奏：

1. 每月月底，从 `main` 分支创建一个发布分支（例如 `release-1.11`）。
2. 从新建的发布分支中发布第一个候选版本（例如 `v1.11.0.rc.0`）。随着测试推进，可能会发布更多候选版本。
3. `main` 分支切换到下一个版本（例如从 `v1.11` 切换到 `v1.12`）。
4. 正式版发布后，如果发现问题，会通过补丁版本（例如 `v1.11.1`）在对应的发布分支上解决。

开发者可以根据需要将 PR 提交到 `main` 分支或对应的发布分支。

## 升级政策与兼容性

 Olares 正处于快速迭代阶段，新功能和变更频繁发布。为确保系统稳定性并最小化升级风险，我们采取了受控的升级策略：

- **同次版本号内的升级**：  
  同一次版本范围内升级（例如从 `1.4.0` 到 `1.4.2`）完全支持。这些更新通常包括错误修复或小的改进，不影响兼容性。

- **跨次版本号的升级**：  
  从一个次版本升级到另一个次版本（例如从 `1.4.x` 到 `1.5.x`）通常涉及较大的更改，例如新功能或架构更新。由于这些更改可能不向下兼容，因此不支持自动升级。用户需要手动卸载现有版本后安装新版本。

你正在使用的版本类型也会决定可选择的升级路径：
- **正式版**：只能升级到更新的正式版，确保最大可靠性和稳定性。
- **RC 版**：可以升级到较新的 RC 版或正式版。
- **每日构建版**：可以升级到较新的每日构建版、RC 版或正式版。

::: tip 未来升级计划
从下一个主版本起，Olares 计划全面支持相同主版本号内所有版本的无缝自动升级。
:::