
# Build your knowledge hub with Wise

Managing information across different sources and devices can be a challenge. You might find yourself using multiple tools to bookmark articles, track RSS feeds, or manage documents, only to end up with fragmented workflows.
	
Wise, a built-in app in Olares, is designed to centralize and organize your knowledge. It collects information from the web and your devices, using local recommendation algorithms to help you discover meaningful content privately and free from algorithmic bias.
	
This tutorial guides you on how to leverage Wise and LarePass to collect, organize, and access content across platforms.

## Learning objectives

By the end of this tutorial, you will learn how to:

- Use LarePass Chrome browser extension or mobile client to collect content directly from the web while you browse.
- Organize your existing files, such as PDFs and EPUBs, by uploading them into Wise.
- Stay up-to-date with your favorite blogs, podcasts, or video playlists by subscribing to RSS feeds.
- Quickly locate and retrieve any piece of content from your curated information hub.

:::tip Note
RSS-based video downloading is available for 1.11.3 or later releases.
:::

## Before you begin

Before you begin, make sure that:
	
- Your Olares device is activated and actively running.
- Your Olares ID is [secured with mnemonic phrases](../get-started/back-up-mnemonics.md).
- The LarePass app is installed on your phone.

## Install the LarePass browser extension

The LarePass browser extension is the core tool for content discovery and collection. 

::: tip Note
The LarePass extension is currently only available for Chrome.
:::

### Install the LarePass extension 

1. Install the LarePass extension using one of the following ways:

<tabs>
<template #Install-from-Chrome-Web-Store>
a. Search for LarePass in the Chrome Web Store.

b. Open the details page, and click **Add to Chrome** to install.

</template>
<template #Install-offline>
a. Visit https://www.olares.xyz/larepass to manually download the installation file of the LarePass extension and unzip it.

b. In the URL bar, enter `chrome://extensions/` to access the extension management page.

c. Enable **Developer mode** in the upper right corner.

d. Click the **Load unpacked** option, and select the unzipped LarePass extension folder to finish installing.
</template>
</tabs>

:::tip
After installation, pin the LarePass extension in Chrome extension menu for quick and easy access.
:::

2. Log into the LarePass extension by importing your Olares account:

    a. Open the LarePass extension, and click **Import an account**.
  
    b. Import your Olares ID using the corresponding mnemonics.
  
    c. Enter your Olares password to complete the login.

Once logged in, your LarePass browser extension and your Olares device are synced. This means that any content you collect via LarePass extension will automatically be added to your Wise library.

## Collect web content

LarePass provides flexible and efficient ways to collect online content, including web articles, videos, podcasts, and more. 

### Collect via the LarePass extension

::: tip Uploading cookies for better experience
Some websites restrict access for anonymous users. In such cases, you can upload your cookies to Olares for better experience.

1. Log into the website.
2. Open the LarePass extension, go to **Collect** > **Cookie**, and click **Upload**. You can hover over cookies to view details. If you don't want to upload a specific cookie item, click **X** to unselect it.
:::

To collect web content using the LarePass extension:

1. Open the content page, for example, a CNN article.
2. Open the LarePass extension. The extension will automatically detect the collectable content on the page.
   ![Collect web content](/images/manual/tutorials/wise-collect-web-content.png)
3. In **Collect** > **Page**, click <i class="material-symbols-outlined">add_box</i> next to the title to add the page to the Wise library.

Once collected, you can find the content in **Library** > **Articles** in Wise. All media files, including audios, videos, and images on the page, will also be downloaded locally to the `/download/Wise/Article` directory. 

### Collect via the LarePass mobile client

You can share web links to the LarePass mobile client for content collection. For example, to save an article from the Chrome browser on your phone:

1. Tap the share button <i class="material-symbols-outlined">ios_share</i> in the browser, then select **LarePass** as the sharing destination.
2. Open the LarePass app. LarePass will automatically detect the collectable content on the shared page and prompt whether to add it to Wise.
3. Tap **Confirm** to add it to the Wise library.

![LarePass share](/images/manual/tutorials/wise-share-to-larepass.png)

::: tip 
Alternatively, you can copy the URL directly and open LarePass. LarePass will automatically detect the URL in the clipboard and the collectable content as well.
:::

Once added, you can find the content in **Library** > **Articles** in Wise.

## Upload PDF/E-book content to Wise

You can upload local PDF or EPUB e-books to Wise for centralized knowledge management. This allows you to keep your reading materials, notes, and related content in one place, making it easier to organize, search, and reference them whenever needed.

1. Open **Wise**, click <i class="material-symbols-outlined">add_circle</i> in the menu bar, and select **Upload**.
2. Choose the file you wish to upload, specify the upload directory, and click **Confirm**.

View your PDFs under **Library** > **PDFs** and EPUBs under **Library** > **Books**.

![View and manage PDF](/images/manual/tutorials/wise-pdf.png)

::: tip
You can efficiently categorize and connect related content instantly with tags, or capture insights and ideas directly alongside the content using notes.
:::

## Subscribe to RSS feeds
You can subscribe to podcasts, blogs, and your video playlists in Wise. New episodes or updates are automatically downloaded, ensuring you stay up-to-date without worrying about content being deleted or becoming inaccessible. Additionally, Wise can automatically download your favorite videos from platforms like YouTube, even for sources that aren't RSS-supported natively.

### Subscribe via the LarePass extension

To subscribe an RSS feed using the LarePass extension:

1. Open the RSS page you want to subscribe to, for example, the "Paranormal Mysteries" podcast: `https://www.spreaker.com/podcast/paranormal-mysteries--2321086`
2. Open the LarePass extension. It will automatically detect the RSS source on the page and show the **RSS** tab.
   ![Subscribe to podcast](/images/manual/tutorials/wise-sub-podcast.png)
3. In the **RSS** tab, find the correct subscription source and click <i class="material-symbols-outlined">bookmark_add</i> to subscribe.


### Manually add an RSS source

To manually add an RSS source to Wise:

1. Copy the RSS subscription link, such as [https://hnrss.org/frontpage](https://hnrss.org/frontpage), an RSS feed for HackerNews frontliners.
2. In Wise, click <i class="material-symbols-outlined">add_circle</i> in the menu bar, and select **RSS feed**. 
3. Paste the URL. Wise will automatically detect the available RSS source.
   ![Manually add RSS](/images/manual/tutorials/wise-add-rss.png)
4. Click **Add** to subscribe.

### Automatically download videos

In addition to regular RSS subscriptions, you can use the LarePass extension and Wise to automatically download videos from your playlist on video platforms. Here's how to do it on YouTube:

1. Log into your YouTube account.
2. In LarePass extension, go to **Collect** > **Cookie**, and click **Upload** to upload the cookies to Olares. Olares needs the cookies of the site to access your subscription and download videos.
   
   ::: tip Enable Auto-Sync
   Cookie data may expire. It is recommended that you enable the **Auto-Sync** feature in the Cookies page to ensure your cookies are updated automatically each time you visit the site.
   :::
3. Under the video you want to watch, click <i class="material-symbols-outlined">more_horiz</i> the button, select **Save**, and then click **Create New Playlist**. For example, `Save to Wise`.
4. Enter your playlist. The LarePass extension will automatically detect the available RSS feeds and show the **RSS** tab.
5. In the **RSS** tab, select the RSS feed link starting with `https://www.youtube.com/feeds/` and click <i class="material-symbols-outlined">bookmark_add</i> to subscribe.
    ![Subscribe to YouTube playlist](/images/manual/tutorials/wise-youtube-rss.png)

Wise will automatically download all the videos saved to this playlist.

::: tip Download videos from a specific channel
You can use LarePass extension similarly on your favorite YouTuber's channel. Once you get the corresponding RSS feed and subscribe to it, Wise will automatically download all the videos in the channel.
:::

### Access your RSS content

To access your RSS content in Wise:
1. From the left-hand menu bar, navigate to **Subscriptions** > **Feeds**.
2. Select an unread RSS item and enter it to watch the video, listen to the podcast, or simply read the article. 

![Access RSS](/images/manual/tutorials/wise-access-rss.png)

::: tip Smart content recommendations
In addition to regular RSS subscriptions, Wise offers a fully local, 100% privacy-protected intelligent content recommendation system. You can download the recommended algorithms from the Olares app market. Learn more in [Discover themed content](../tasks/recommend.md).
:::

## Search through collected content

Once you've collected your content in Wise, you can search for particular content themes or entries using aggregated search in Olares.

![Seach in Wise](/images/manual/tutorials/wise-search.png)

::: info Search formats
Currently, only document-type content (PDF, web articles, and ePUB) is searchable. Other formats will be supported in the future.
:::

1. Click <i class="material-symbols-outlined">search</i>in the Dock to open the search window.
2. Specifies the search scope to Wise, and enter the keywords to search.

## Learn more

- [Wise basics](../tasks/wise-basics.md)
- [Discover themed content](../tasks/recommend.md)
- [Subscribe and manage feeds](../tasks/subscribe.md)
