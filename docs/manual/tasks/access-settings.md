# Customize application URLs
You can access Terminus applications anytime, anywhere, whether you're accessing from home or remotely. This guide will help you:
- Personalize domain name for your applications
- Allow public access without authentication

## Customize domain name for application
Terminus provides two methods to optimize application access addresses:
* Custom Route ID
* Custom Domain Name

### Custom Route ID
Route ID is a crucial component in accessing your Terminus applications. It forms part of the URL you use to reach your applications through a web browser:

`https://{routeID}.{TerminusDomainName}`

For convenience, Terminus uses easy-to-remember Route IDs for pre-installed system applications. For instance, you might access the desktop application using "desktop" as the RouteID, or the marketplace using "market".

For community applications, you can quickly obtain a simple and memorable access address by changing the route ID. To use Jellyfin as an example:

1. Open the Settings app from the Dock or Launchpad.
2. Select **Application** from the left sidebar, and click Jellyfin on the right to view application details.
3. Go to **Entrances** > **Set up endpoint**. You can see the default Route ID for Jellyfin, a combination of numbers and letters.
4. Next to **Set custom Route ID**, click <i class="material-icons">add</i>.
5. Enter a route ID that is more memorable and recognizable. For example, `jellyfin`.
6. Click **Confirm**.

Now, you will be able to access Jellyfin from your new URL: `https://jellyfin.bob.myterminus.com`.

### Custom domain name
Instead of using the default Terminus domain, you can use your own domain name to access your applications, making them more professional and easier to remember. To use Affine as an example:

1. Open the Settings app from the Dock or Launchpad.
2. Select **Application** from the left sidebar, and click Affine on the right to view application details.
3. Go to **Entrances** > **Set up endpoint**.
4. Next to **Set custom domain**, click <i class="material-icons">add</i>.
5. Enter your custom domain, and click **Confirm**. For example, `hello.coffee`.
6. Click **Activation**.
7. Follow the prompt to add a CNAME record on your domain hosting website.
8. Wait for DNS propagation, which can take anywhere from a few minutes to 48 hours.

Terminus will automatically verify the DNS record activation. Once verified, the custom domain status will change to "Activated". And you will be able to access Affine with the new URL: `hello.coffee`. 

## Allow public access
If you want to allow public access to your custom domain without requiring login, update the access policies:

1. Open the Settings app from the Dock or Launchpad.
2. Select **Application** from the left sidebar, and click the target application on the right to view details.
3. Under **Create access policies**, set **Authentication level** to **Public**.
4. Click **Submit** to apply the change.