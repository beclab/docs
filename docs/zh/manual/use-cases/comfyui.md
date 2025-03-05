---
description: ComfyUI 在 Olares 上的使用指南，通过节点式界面精确控制 AI 图像生成过程，创建可重用的工作流程。
---
# ComfyUI

ComfyUI 是一款基于节点的 Stable Diffusion 图形界面工具。它把 AI 绘图过程变成了可视化编程，让使用者能像搭建积木一样，通过连接各种功能节点来实现完整的绘图流程。从提示词编写、模型选择到后期处理，每个环节都能精确把控。

与 Stable Diffusion WebUI 简单直观的界面不同，ComfyUI 让你通过组合代表不同功能的节点，可以构建出自己的工作流程。这不仅让你能更好地掌控绘图过程，还可以把常用的复杂操作保存下来重复使用，也方便与他人分享。

## ComfyUI 能做什么？
通过 ComfyUI，你可以实现以下功能：

* 用可视化方式搭建和复用工作流
* 对绘图流程进行精细调优
* 自由组合不同模型和技术
* 导出导入工作流，方便分享
* 使用相同配置批量处理图片
* 添加高级图像后期效果

## 安装 ComfyUI

根据你的角色安装相应应用：
* **管理员**：需要同时安装“ComfyUI For Cluster”和“ComfyUI”。
* **团队成员**：仅需安装“ComfyUI”，同时确保管理员已安装“ComfyUI For Cluster”。

![安装 ComfyUI](/images/manual/tutorials/install-comfyui.png){width=40%}

安装完成后，从桌面启动 ComfyUI。

![ComfyUI](/images/manual/use-cases/comfyui.png#bordered)

## 了解更多
- [Krita + ComfyUI 实时绘画](../tutorials/comfyui-for-krita.md)：了解如何利用 ComfyUI 助力 Krita 中的创意工作流。