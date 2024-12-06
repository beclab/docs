---
outline: [2, 3]
---

# Customize application URLs
You can access Olares applications anytime, anywhere, whether you're accessing from local or remotely. This guide will help you:
- Personalize domain name for your applications
- Allow public access without authentication

## Before you begin
Before you start, it is recommended to familiarize yourself with a few concepts for Olares applications:

- [Endpoints](../concepts/network.md#endpoints)
- [Route ID](../concepts/network.md#route-id)

## Customize domain name for application

Olares provides two methods to optimize application access addresses:
* Custom route ID
* Custom domain name

### Custom route ID
Route ID is a crucial component in accessing your Olares applications. It forms part of the URL you use to reach your applications through a web browser:

`https://{routeID}.{local}.{OlaresDomainName}`

::: info
 `local` in a URL signifies a private access point, typically used by apps offering services for individual users, families, or teams. Public-facing apps hosting external services do not include `local` in their URLs. For more details, see [entrance](../concepts/network.md#entrance).
:::

For convenience, Olares uses easy-to-remember route IDs for pre-installed system applications.
For community applications, you can quickly obtain a simple and memorable URL by changing the route ID. To use Jellyfin as an example:

1. In Olares, open the Settings app from the Dock or Launchpad.
2. Select **Application** from the left sidebar, and click **Jellyfin** on the right to view application details.
3. Go to **Entrances** > **Set up endpoint**. You can see the default Route ID for Jellyfin, which is a combination of numbers and letters.
4. Next to **Set custom Route ID**, click <i class="material-icons">add</i>.
5. Enter a route ID that is more memorable and recognizable. For example, `jellyfin`.
6. Click **Confirm**.

Now, you will be able to access Jellyfin from your new URL: `https://jellyfin.local.bob.olares.com`.

### Custom domain name
Instead of using the default Olares domain, you can use your own domain name to access your applications, making them more professional and easier to remember. To use Affine as an example:

1. Open the Settings app from the Dock or Launchpad.
2. Select **Application** from the left sidebar, and click Affine on the right to view application details.
3. Go to **Entrances** > **Set up endpoint**.
4. Next to **Set custom domain**, click <i class="material-icons">add</i>.
5. Enter your custom domain, and click **Confirm**. For example, `hello.coffee`.
6. Click **Activation**.
7. Follow the prompt to add a CNAME record on your domain hosting website.
8. Wait for DNS propagation, which can take anywhere from a few minutes to 48 hours.

Olares will automatically verify the DNS record activation. Once verified, the custom domain status will change to "Activated". And you will be able to access Affine with the new URL: `hello.coffee`. 

::: tips
To allow public access to your custom domain without login, update the access policies as below:
1. Navigate to **Settings** > **Application**, and click the target application.
2. Under **Create access policies**, set **Authentication level** to **Public**, and click **Submit**.
:::