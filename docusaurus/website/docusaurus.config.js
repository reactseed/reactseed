/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: "Reactseed",
  tagline: "Set up a best practice react app by running one command.",
  url: "https://reactseed.surge.sh",
  baseUrl: "/",
  projectName: "reactseed",
  organizationName: "reactseed",
  favicon: "img/favicon.ico",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          sidebarPath: require.resolve("./sidebars.json"),
          editUrl:
            "https://github.com/reactseed/reactseed/edit/master/docusaurus/website",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/logo-og.png",
    algolia: {
      apiKey: "284684dc3b7ac083badeae4b008692d6",
      indexName: "reactseed",
      appId: "EQ0VKW0MTR",
    },
    scrollToTop:true,
    colors: {
      primaryColor: '#006eff'
    },
    navbar: {
      title: "Reactseed",
      logo: {
        alt: "Reactseed Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "docs/getting-started", label: "Documentation", position: "right" },
        {
          href: "https://www.github.com/reactseed/reactseed",
          label: "GitHub",
          position: "right",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Get Started",
              to: "docs/getting-started",
            },
            {
              label: "Learn React",
              href: "https://reactjs.org/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Discussions",
              href: "https://github.com/reactseed/reactseed/discussions",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://www.github.com/reactseed/creactseed",
            },
          ],
        },
      ],
      logo: {
        alt: "Facebook Open Source Logo",
        src: "img/oss_logo.png",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Reactseed.`,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-cn': {
        label: '简体中文',
      },
    },
  },
};

module.exports = siteConfig;
