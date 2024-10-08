---
outline: [2, 4]
---

# Manage Accounts with TermiPass

Managing Terminus Accounts is a core function of TermiPass. If you are new to Terminus, you can start by creating a Terminus Name. This guide walks you through the process, and other commonly used account operations as well.

## Create a Terminus Name

Before you start, ensure you have downloaded the [TermiPass](../overview.md#download-termipass) app on your phone. You can choose to either create a new Terminus Name or import an existing one.

![Create terminus name](/images/how-to/termipass/create_an_account.png)

In TermiPass app, tap **Create a Terminus Name** to start creating your Terminus account. Depending on your personal preference, you can choose to create a Terminus Name with or without binding a Verifiable Credential (VC).

### Create without VC binding (default mode)

To create a Terminus Name fast without binding VC:

1. Enter your desired Terminus Name. It must be at least 8 characters long and contain only lowercase letters and numbers.
2. Click **Continue** to finish the creation process.

![Fast creation](/images/how-to/termipass/individual_terminus_name_fast.png)

After you get your Terminus Name, wait for [Terminus installation](../../terminus/setup/install/) to complete, then proceed with [activation](../../terminus/setup/wizard.md).

### Create with VC (advanced mode)

To create a unique, unrestricted individual Terminus Name, you need to bind a VC through your preferred social account in advanced mode. Your Terminus Name will be identical to your social account name. To enter this mode:

1. In the TermiPass app, tap **Create a Terminus Name**.
2. Tap the button in the top right corner of the Terminus Name creation page.

![Advanced mode](/images/how-to/termipass/terminus_name_advanced.png)

Depending on how you use Terminus, you can choose to bind an Individual Terminus Name or an Organization Terminus Name to your account.

#### Bind an individual Terminus Name

We currently provide VC via Google Gmail. For details, refer to the [Gmail Issuer Service](../../../developer/contribute/snowinning/terminus-name.md#gmail-issuer-service). To create your individual Terminus Name with Gmail VC:

![Terminus Name VC](/images/how-to/termipass/individual_terminus_name_vc.png)

1. Click the VC card to access your Google account.
2. Log into TermiPass with your Google account and click **Continue**.
3. Wait for the binding to complete, then click **Continue** to view your Terminus Name information.

:::info
If you encounter errors while binding, check if your account is already bound to a Terminus Name.
:::

#### Bind an Organization Terminus Name

To bind an **Organization Terminus Name**:

1. Choose to join an existing organization or create a new one:
   - If your organization doesn't exist yet, scan the QR code to log in to Terminus Space and [bind a custom domain](https://docs.jointerminus.com/how-to/space/domain/#using-a-custom-domain-with-terminus).
   - If your organization already has a verified domain name, you can choose to join an existing organization.

   ![Terminus Name for Org](/images/how-to/termipass/organization_terminus_name.png)


2. Enter your organization's domain name and click **Continue**. Recheck whether your domain name has been verified and configured if an error occurs.

3. Bind your organization email. Currently, only Gmail and Google Workspace email are supported. The binding process is similar with that of [Binding an Individual Terminus Name](#bind-an-individual-terminus-name).

Upon completion, you will receive an **Organization Terminus Name**.

## Import an existing account

You can also set up an account by importing an existing Terminus Name:

1. In TermiPass app, tap **Import a Terminus Name**.
2. Enter the 12-word mnemonic phrase to import your Terminus Name.

::: tip
If your account is bound to a Terminus Name, you can freely import it into any TermiPass device.
:::

## Backup mnemonic phrase

In a decentralized account system, the mnemonic phrase is the **ONLY** way to recover your DID and Terminus Name. **Make sure you store your Terminus Name's mnemonic phrase securely!**

:::info
Each TermiPass will save the mnemonic phrase for all Terminus Names you've imported. The mnemonic phrase is safeguarded by the mobile device's storage. Generally, you will only lose the mnemonic phrase if you lose all your devices installed with Terminus.
:::

To back up your mnemonic phrase:

![alt text](/images/how-to/termipass/mnemonic_phrase.png)

1. Enter your TermiPass local password and click **Export Mnemonic Phrase**. This takes you to a screen with a 12-word mnemonic phrase.
2. Write down the mnemonic phrase and keep it safe.
3. Type your mnemonic phrase in the correct order on the next page. If entered correctly, you have successfully backed up your mnemonic phrase.

:::warning
Clicking the **Copy** button will save the 12 mnemonic phrase to the clipboard. However, this may pose a risk of leakage. For secure storage of the mnemonic phrase, we strongly recommend backing it up **offline**.
:::

## Understand the stage of account

Each account has three stages:

1. **Not bound to a Terminus Name**

   - Account created locally with mnemonic phrase, private key, DID, but no Terminus Name
   - Mnemonic phrase can be exported and backed up
   - Can log into **Terminus Space** to apply for org domain name.
   - Cannot be imported to other TermiPass clients via mnemonic phrase

2. **Bound to a Terminus Name**

   - The mapping between the Terminus Name and DID is recorded on the blockchain.
   - Can apply for a Terminus on **Terminus Space** and activate the Terminus.
   - After the mnemonic phrase is exported, it can be imported to TermiPass on other devices.

3. **Bound to a Terminus**

   If your account is bound to Terminus, you'll have full access to all the features on the TermiPass.

## Account synchronization

Account in TermiPass, Terminus, and Terminus Space stay synchronized as described below:

- Creating a Terminus requires providing the Terminus Name and activate it using the TermiPass logged in with that Terminus Name. For more details, refer to [Activation Wizard](../../terminus/setup/wizard.md).
- To log into Terminus Space, you need to scan a QR code with TermiPass. For more details, refer to [log in to Terminus Space](../../space/account.md).