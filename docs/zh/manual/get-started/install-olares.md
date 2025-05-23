---
description: 在 Linux 系统上通过一键脚本，快速上手 Olares。
---
# 安装 Olares

本文介绍如何在 Linux 系统上安装 Olares。我们推荐在 **Linux 系统**（如 Ubuntu 或 Debian）上部署 Olares，以在生产环境中获得最佳的性能与稳定性。

开始安装前，请先[创建 Olares ID](create-olares-id.md)，并确认操作系统与硬件已满足最低要求。

:::info 安装遇到问题？
如果安装过程中遇到问题，[可以提交 GitHub Issue](https://github.com/beclab/Olares/issues/new)。提交时请提供以下信息：
- 使用的平台或环境（如 Ubuntu、Docker、WSL 等）。
- 安装方式（脚本安装或 Docker 镜像）。
- 详细的错误信息（包括日志、错误提示或截图）。
:::

## 系统要求

请确保设备满足以下配置要求：

- CPU：4 核及以上
- 内存：不少于 8GB 可用内存
- 存储：建议使用 SSD，且可用磁盘空间不少于 64GB
- 支持的系统版本：
    - Ubuntu 20.04 LTS 及以上
    - Debian 11 及以上

:::info 版本兼容性
虽然以上版本已经过验证，但其他版本也可能正常运行 Olares。根据你的环境可能需要进行调整。如果你在这些平台上安装时遇到任何问题，欢迎在 [GitHub](https://github.com/beclab/Olares/issues/new) 上提问。
:::

## 安装 Olares

在 Linux 命令行中，执行以下命令：

<!--@include: ./reusables.md{4,28}-->

<!--@include: ./activate-olares.md-->

<!--@include: ./log-in-to-olares.md-->

<!--@include: ./reusables.md{30,34}-->
