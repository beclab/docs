import { defineConfig, type DefaultTheme } from "vitepress";

const side = {
  "/zh/manual/": [
    { text: "文档站首页",
      link: "/zh/manual/docs-home",
      items: [
      { text: "什么是 Olares", link: "/zh/manual/what-is-olares" },
     { text: "架构", link: "/zh/manual/architecture" },
      { text: "为什么选择 Olares", link: "/zh/manual/why-olares" },
      { text: "功能",
            link: "/zh/manual/feature-overview",
      },
      ],
      },
    {
      text: "快速开始",
      collapsed: false,
      link: "/zh/manual/get-started/",
      items: [
        // { text: "Quick start", link: "/zh/manual/get-started/quick-start" },
        {
          text: "创建 Olares ID",
          link: "/zh/manual/get-started/create-olares-id",
        },
        {
          text: "安装",
          link: "/zh/manual/get-started/install-olares",
          activeMatch: "/zh/manual/get-started/install/",
        },
        {
          text: "激活",
          link: "/zh/manual/get-started/activate-olares",
        },
        {
          text: "登录",
          link: "/zh/manual/get-started/log-in-to-olares",
        },
        {
          text: "备份助记词",
          link: "/zh/manual/get-started/back-up-mnemonics",
        },
        {
          text: "探索",
          link: "/zh/manual/get-started/next-steps",
        },
      ],
    },
    {
      text: "应用示例",
      collapsed: true,
      link: "/zh/manual/use-cases/",
      items: [
        {
          text: "Stable Diffusion",
          link: "/zh/manual/use-cases/stable-diffusion",
        },
        {
          text: "ComfyUI",
          link: "/zh/manual/use-cases/comfyui",
        },
        {
          text: "Open WebUI",
          link: "/zh/manual/use-cases/openwebui",
        },
        {
          text: "Perplexica",
          link: "/zh/manual/use-cases/perplexica",
        },
        {
          text: "Dify",
          link: "/zh/manual/use-cases/dify",
        },
        {
          text: "Krita + ComfyUI 实时绘画",
          link: "/zh/manual/use-cases/comfyui-for-krita",
        },
        {
          text: "串流视频",
          link: "/zh/manual/use-cases/stream-media",
        },
      ],
    },
    {
      text: "操作指导",
      collapsed: true,
      link: "/zh/manual/tasks/",
      items: [
        {
          text: "个性化",
          collapsed: true,
          items: [
            {
              text: "设计主页",
              link: "/zh/manual/tasks/profile",
            },
            {
              text: "设置外观和主题",
              link: "/zh/manual/tasks/language-appearance",
            },
            {
              text: "添加集成",
              link: "/zh/manual/tasks/integrations",
            },
            {
              text: "使用 NFT 图像",
              link: "/zh/manual/tasks/nft-image",
            },
          ],
        },
        {
          text: "应用管理",
          collapsed: true,
          items: [
            {
              text: "安装、卸载&升级",
              link: "/zh/manual/tasks/install-uninstall-update",
            },
            {
              text: "自定义应用网址",
              link: "/zh/manual/tasks/access-settings",
            },
            {
              text: "管理 GPU",
              link: "/zh/manual/tasks/gpu-resource",
            },
            {
              text: "设置专用网络",
              link: "/zh/manual/tasks/private-network",
            },
          ],
        },
        {
          text: "文件管理",
          collapsed: true,
          link: "/zh/manual/tasks/files",
          items: [
            {
              text: "添加、编辑&下载",
              link: "/zh/manual/tasks/add-edit-download",
            },
            {
              text: "同步与分享",
              link: "/zh/manual/tasks/sync-share",
            },
            //{
            //  text: "Sharing and collaboration",
            //  link: "/zh/manual/tasks/sharing-collaboration",
            // },
          ],
        },
        {
          text: "密钥管理",
          collapsed: true,
          link: "/zh/manual/tasks/vault",
          items: [
            {
              text: "Vault 基本操作",
              link: "/zh/manual/tasks/vault-items",
            },
            {
              text: "分享 Vault 项目",
              link: "/zh/manual/tasks/share-vault-items",
            },
            //{
            //  text: "Generate strong passwords",
            //  link: "/zh/manual/tasks/strong-passwords",
            //},
            {
              text: "双重验证",
              link: "/zh/manual/tasks/two-factor-verification",
            },
            {
              text: "自动填充",
              link: "/zh/manual/tasks/autofill",
            },
          ],
        },
        {
          text: "智能内容聚合",
          collapsed: true,
          link: "/zh/manual/tasks/wise",
          items: [
            {
              text: "Wise 基本操作",
              link: "/zh/manual/tasks/wise-basics",
            },
            {
              text: "推荐算法",
              link: "/zh/manual/tasks/recommend",
            },
            {
              text: "订阅",
              link: "/zh/manual/tasks/subscribe",
            },
            //{
            //  text: "Subscribe to an RSS feed",
            //  link: "/zh/manual/tasks/subscribe",
            //},
          ],
        },
        {
          text: "团队",
          link: "/zh/manual/tasks/team",
          collapsed: true,
          items: [
            {
              text: "用户角色",
              link: "/zh/manual/tasks/roles-permissions",
            },
            {
              text: "管理团队",
              link: "/zh/manual/tasks/manage-team",
            },
            {
              text: "协作",
              link: "/zh/manual/tasks/collaborate",
            },
          ],
        },
        {
          text: "维护",
          collapsed: true,
          items: [
            {
              text: "监控系统与应用",
              link: "/zh/manual/tasks/resources-usage",
            },
            {
              text: "升级",
              link: "/zh/manual/tasks/update",
            },
            {
               text: "控制面板",
               link: "/zh/manual/tasks/navigate-control-hub",
               collapsed: true,
               items: [
               {
               text: "编辑系统资源",
               link: "/zh/manual/tasks/edit-resource",
               },
               {
               text: "查看数据库状态",
               link: "/zh/manual/tasks/view-database-status",
               },
               ],
            },
          ],
        },
      ],
    },
    {
      text: "Olares Space",
      link: "/zh/manual/space/",
      collapsed: true,
      items: [
        {
          text: "管理账号",
          link: "/zh/manual/space/manage-accounts",
        },
        {
          text: "托管 Olares",
          collapsed: true,
          items: [
            {
              text: "创建 Olares",
              link: "/zh/manual/space/create-olares",
            },
            {
              text: "管理 Olares",
              link: "/zh/manual/space/manage-olares",
            },
          ],
        },
        {
          text: "托管域名",
          collapsed: true,
          items: [
            {
              text: "设置自定义域名",
              link: "/zh/manual/space/host-domain",
            },
            {
              text: "管理域名",
              link: "/zh/manual/space/manage-domain",
            },
          ],
        },
        {
          text: "备份与恢复",
          link: "/zh/manual/space/backup-restore",
        },
        { text: "计费", link: "/zh/manual/space/billing" },
      ],
    },
    {
      text: "概念",
      collapsed: true,
      link: "/zh/manual/concepts/",
      items: [
        { text: "Olares ID", link: "/zh/manual/concepts/olares-id" },
        { text: "账户", link: "/zh/manual/concepts/account" },
        { text: "应用", link: "/zh/manual/concepts/application" },
        { text: "网络", link: "/zh/manual/concepts/network" },
        { text: "数据", link: "/zh/manual/concepts/data" },
        { text: "密钥", link: "/zh/manual/concepts/secrets" },
      ],
    },
    //{
    //  text: "Help and Support",
    //  collapsed: true,
   //   items: [
        { text: "常见问题", link: "/zh/manual/help/faqs" },
   //     {
   //       text: "Troubleshooting Guide",
   //       link: "/zh/manual/help/troubleshooting-guide",
   //     },
   //     {
   //       text: "Request Technical Support",
   //       link: "/zh/manual/help/request-technical-support",
   //     },
   //   ],
   // },
    { text: "术语", link: "/zh/manual/glossary" },
  ],

  "/zh/developer/": [
    {
      text: "开发 Olares 应用",
      items: [
        {
          text: "简介",
          link: "/zh/developer/develop/",
        },
        {
          text: "教程",
          collapsed: true,
          link: "/zh/developer/develop/tutorial/",
          items: [
            {
              text: "了解 DevBox",
              link: "/zh/developer/develop/tutorial/devbox",
            },
            {
              text: "创建首个应用",
              collapsed: true,
              link: "/zh/developer/develop/tutorial/note/",
              items: [
                {
                  text: "1. 创建应用",
                  link: "/zh/developer/develop/tutorial/note/create",
                },
                {
                  text: "2. 开发后端",
                  link: "/zh/developer/develop/tutorial/note/backend",
                },
                {
                  text: "3. 开发前端",
                  link: "/zh/developer/develop/tutorial/note/frontend",
                },
              ],
            },
          ],
        },
        {
          text: "应用包管理",
          collapsed: true,
          items: [
            {
              text: "应用 Chart 包",
              link: "/zh/developer/develop/package/chart",
            },
            {
              text: "OlaresManifest",
              link: "/zh/developer/develop/package/manifest",
            },
            {
              text: "模型",
              link: "/zh/developer/develop/package/model",
            },
            {
              text: "推荐算法",
              link: "/zh/developer/develop/package/recommend",
            },
            {
              text: "Helm 扩展",
              link: "/zh/developer/develop/package/extension",
            },
          ],
        },
        {
          text: "进阶",
          collapsed: true,
          items: [
            {
              text: "terminus-info",
              link: "/zh/developer/develop/advanced/terminus-info",
            },
            {
              text: "Service Provider",
              link: "/zh/developer/develop/advanced/provider",
            },
            {
              text: "AI",
              link: "/zh/developer/develop/advanced/ai",
            },
            { text: "Cookie", link: "/zh/developer/develop/advanced/cookie" },
            { text: "数据库", link: "/zh/developer/develop/advanced/database" },
            {
              text: "账户",
              link: "/zh/developer/develop/advanced/account",
            },
            {
              text: "应用市场",
              link: "/zh/developer/develop/advanced/market",
            },
            // {
            //   text: "Analytic",
            //   link: "/zh/developer/develop/advanced/analytic",
            // },
            {
              text: "Websocket",
              link: "/zh/developer/develop/advanced/websocket",
            },
            {
              text: "文件上传",
              link: "/zh/developer/develop/advanced/file-upload",
            },
            // {
            //   text: "Rss",
            //   link: "/zh/developer/develop/advanced/rss",
            // },
            {
              text: "密钥",
              link: "/zh/developer/develop/advanced/secret",
            },
            // {
            //   text: "Notification",
            //   link: "/zh/developer/develop/advanced/notification",
            // },
            // {
            //   text: "Frontend",
            //   link: "/zh/developer/develop/advanced/frontend",
            // },
            {
              text: "Kubesphere",
              link: "/zh/developer/develop/advanced/kubesphere",
            },
          ],
        },

        {
          text: "提交应用",
          collapsed: true,
          link: "/zh/developer/develop/submit/",
        },
      ],
    },

    {
      text: "参与贡献",
      items: [
        {
          text: "Olares",
          link: "/zh/developer/contribute/olares",
        },
        {
          text: "开发系统应用",
          collapsed: true,

          items: [
            {
              text: "概述",
              link: "/zh/developer/contribute/system-app/overview",
            },
            {
              text: "`deployment.yaml`",
              link: "/zh/developer/contribute/system-app/deployment",
            },
            {
              text: "`OlaresManifest.yaml`",
              link: "/zh/developer/contribute/system-app/olares-manifest",
            },
            {
              text: "安装",
              link: "/zh/developer/contribute/system-app/install",
            },
            {
              text: "其他",
              link: "/zh/developer/contribute/system-app/other",
            },
          ],
        },
      ],
    },
  ],
};

export const zh = defineConfig({
  lang: "zh",
  themeConfig: {
    //logo: "/icon.png",
    socialLinks: [{ icon: "github", link: "https://github.com/beclab/olares" }],

    nav: [
      { text: "使用指南", link: "/zh/manual/docs-home" },
      { text: "开发者", link: "/zh/developer/develop/" },
    ],

    sidebar: side,
  },
});
