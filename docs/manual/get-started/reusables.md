---
search: false
---
```bash
curl -fsSL https://olares.sh |  bash -
```
:::tip Root user password
During the installation, you may be prompted to enter your root password.
:::

:::info Errors during installation?
If an error occurs during installation, use the following command to uninstall first:

```bash
bash olares-uninstall.sh
```
After uninstalling, retry the installation by running the original installation command.
:::

## Prepare Wizard URL

At the end of the installation process, you will be prompted to enter your domain name and Olares ID.

![Enter domain name and Olares ID](/images/manual/get-started/enter-olares-id.png)

For example, if your full Olares ID is `alice123@olares.com`:

- **Domain name**: Press `Enter` to use the default domain name or type `olares.com`.
- **Olares ID**: Enter the prefix of your Olares ID. In this example, enter `alice123`.

Upon completion of the installation, the initial system information, including the Wizard URL and the initial login password, will appear on the screen. You will need them later in the activation stage.

![Wizard URL](/images/manual/get-started/wizard-url-and-login-password.png)

## Next step: Protect your Olares ID

You're almost ready to start using Olares! Before diving in, it's crucial to ensure your Olares ID is securely backed up. Without this step, you won't be able to recover Olares ID if needed.

- [Back up your mnemonic phrase](back-up-mnemonics.md)