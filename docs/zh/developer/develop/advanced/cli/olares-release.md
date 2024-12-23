# `olares release`

## 命令说明
基于本地 Olares 代码仓库构建发布版本。此命令需要在 Olares 代码仓库的根目录下运行。

```bash
olares-cli olares release [option]
```

## 选项

| 名称                         | 简写   | 用途                                                                                                                                                 |
|----------------------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`               | `-b` | 设置 Olares 的基础目录。<br>默认为 `$HOME/.olares`。                                                                                                           |
| `--download-cdn-url`       |      | 设置用于下载依赖项和镜像校验和的 CDN URL。<br> 默认为 `https://dc3p1870nn3cj.cloudfront.net`。                                                                          |
| `--extract`                | `-e` | 构建完成后是否将发布包解压到 `--base-dir` 目录下。<br> 如果只需要发布包文件本身，可设为 `false`。<br> 默认为 `true`。                                                                     |
| `--help`                   | `-h` | 显示帮助信息。                                                                                                                                            |
| `---ignore-missing-images` |      | 从 CDN 下载校验和时是否忽略缺失的镜像。<br> 仅当确定没有新增镜像时才建议禁用此选项，因为新镜像可能尚未上传到 CDN 导致构建失败。<br> 默认为 `true`。                                                            |
| `--version`                | `-v` | 指定 Olares 版本。<br>版本号格式为 `x.y.z`（如 `1.10.0`）或包含构建日期（如 `1.10.0-20241109`）。<br> 可用版本请参考 [GitHub Releases](https://github.com/beclab/Olares/releases)。 |
