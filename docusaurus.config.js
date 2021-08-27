const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Overchute Docs",
  tagline: "Crowdsale Protocol",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "overchute", // Usually your GitHub org/user name.
  projectName: "docs-overchute", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Overchute Docs",
      logo: {
        alt: "Overchute Logo",
        src: "img/logo_single.svg",
      },
      items: [
        // {
        //   type: "doc",
        //   docId: "intro",
        //   position: "left",
        //   label: "Tutorial",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          // title: "Website",
          // items: [
          //   {
          //     label: "Website",
          //     to: "https://overchute.com/",
          //   },
          // ],
        },
        {
          // title: "Links",
          // items: [
          //   {
          //     label: "Website",
          //     href: "https://overchute.com/",
          //   },
          //   {
          //     label: "Github",
          //     href: "https://github.com/Overchute",
          //   },
          // {
          //   label: "Discord",
          //   href: "https://discordapp.com/invite/docusaurus",
          // },
          // {
          //   label: "Twitter",
          //   href: "https://twitter.com/docusaurus",
          // },
          // ],
        },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Overchute - Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
