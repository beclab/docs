# `olares uninstall`

## Synopsis
Uninstall Olares from your machine.

```bash
olares-cli olares uninstall [flags]
```

## Flags

| Name         | Shorthand | Usage                                                                                                                                                                                                                 |
|--------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--all`      |           | Uninstall Olares completely, including dependencies downloaded during the prepare phase.                                                                                                                              |
| `--base-dir` | `-b`      | Set the base directory for the Olares package. Defaults to `$HOME/.olares`.                                                                                                                                           |
| `--help`     | `-h`      | Display help information.                                                                                                                                                                                             |
| `--phase`    |           | Uninstall from a specific phase and revert to the previous one. For example, `--phase install` removes tasks performed during the 'install' stage, reverting the system to the 'prepare' stage. Default is `install`. |
| `--quiet`    |           | Enable quiet mode (suppress output). Defaults to `false`.                                                                                                                                                             |
| `--version`  | `-v`      | Specify the Olares version to uninstall (e.g., `1.10.0`, `1.10.0-20241109`).                                                                                                                                              |