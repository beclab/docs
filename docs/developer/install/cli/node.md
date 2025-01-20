# `node`

## Synopsis

The `node` command manages node-related operations.

```bash
olares-cli node subcommand [options]
```

## Subcommands

| Subcommand   | Description                                                                                                                   |
|--------------|-------------------------------------------------------------------------------------------------------------------------------|
| `masterinfo` | Retrieves system information about a target master node and checks whether the current node can join the cluster as a worker. |
| `add`        | Adds the current node to an existing Olares cluster. The node's environment must already meet all prerequisites for Olares.   |

## Options

| Name                          | Short | Description                                                                                                                                                                                                                                                                            |
|-------------------------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`                  | `-b`  | Sets the base directory for Olares.<br> Defaults to `$HOME/.olares`.                                                                                                                                                                                                                   |
| `master-host`                 |       | Defines the IP address of the master node.<br> This option is required.                                                                                                                                                                                                                |
| `master-node-name`            |       | Specifies the Kubernetes node name of the master node.                                                                                                                                                                                                                                 |
| `master-ssh-user`             |       | Sets the remote Linux user name for SSH login to the master node.<br> Defaults to root.                                                                                                                                                                                                |
| `master-ssh-password`         |       | Provides the password for the Linux user.<br> Required if a non-root `master-ssh-user` is specified.                                                                                                                                                                                   |
| `master-ssh-private-key-path` |       | Specifies the path to the private SSH key for authenticating as the Linux user.<br> Defaults to `/root/.ssh/id_rsa`.                                                                                                                                                                   |
| `master-ssh-port`             |       | Sets the SSH service's listening port on the master node.<br> Defaults to `22`.                                                                                                                                                                                                           |
| `--version`                   | `-v`  | Specifies the Olares version. <br>Version values follow the format `x.y.z` (e.g., `1.10.0`) or include a build date (e.g., `1.10.0-20241109`).<br> Refer to the [GitHub Releases page](https://github.com/beclab/Olares/releases) for available versions. |
| `--help`                      | `-h`  | Displays help information.                                                                                                                                                                                                                                                             |

## Example

```bash
# Retrieve system information from a master node at IP 192.168.1.15
olares-cli node masterinfo master-host 192.168.1.15

# If a specific SSH key is required for authentication
olares-cli node masterinfo master-host 192.168.1.15 master-ssh-private-key-path /home/olares/.ssh/id_rsa

# For non-root SSH users, specify the username and password
olares-cli node masterinfo master-host 192.168.1.15 master-ssh-user olares master-ssh-password password123

# Add the current node to a cluster with the master node at IP 192.168.1.15
olares-cli node add master-host 192.168.1.15

# Specify a custom base directory for the installation
olares-cli node add --base-dir /custom/path master-host 192.168.1.15
```

