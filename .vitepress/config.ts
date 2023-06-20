// import third-party modules
import { defineConfig } from 'vitepress';


export default defineConfig({
  description: 'Vite & Vue powered static site generator.',
  lang: 'en-US',
  lastUpdated: true,
  title: 'VitePress',
  themeConfig: {
    nav: nav(),
    outline: [2, 3],
    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference()
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/vuejs/vitepress'
      }
    ],
    footer: {
      copyright: `Copyright © 2019-${new Date().getFullYear()} My Project, Inc. Built with VitePress`
    },
  },
})

function nav() {
  return [
    {
      activeMatch: '/guide/',
      link: '/guide/what-is-vitepress',
      text: 'Guide',
    },
    {
      activeMatch: '/reference/',
      link: '/reference/site-config',
      text: 'Reference',
    }
  ]
}

function sidebarGuide() {
  return [
    {
      link: '/guide/intro',
      text: 'Intro',
    },
    {
      collapsed: false,
      text: 'Introduction',
      items: [
        {
          link: '/guide/what-is-vitepress',
          text: 'What is VitePress?',
        },
        {
          link: '/guide/getting-started',
          text: 'Getting Started',
        },
        {
          link: '/guide/routing',
          text: 'Routing',
        },
        {
          link: '/guide/deploy',
          text: 'Deploy',
        }
      ]
    },
    {
      collapsed: false,
      text: 'Writing',
      items: [
        {
          link: '/guide/markdown',
          text: 'Markdown Extensions',
        },
        {
          link: '/guide/asset-handling',
          text: 'Asset Handling',
        },
        {
          link: '/guide/frontmatter',
          text: 'Frontmatter',
        },
        {
          link: '/guide/using-vue',
          text: 'Using Vue in Markdown',
        },
        {
          link: '/guide/i18n',
          text: 'Internationalization',
        }
      ]
    },
    {
      collapsed: false,
      text: 'Customization',
      items: [
        {
          link: '/guide/custom-theme',
          text: 'Using a Custom Theme',
        },
        {
          link: '/guide/extending-default-theme',
          text: 'Extending the Default Theme',
        },
        {
          link: '/guide/data-loading',
          text: 'Build-Time Data Loading',
        },
        {
          link: '/guide/ssr-compat',
          text: 'SSR Compatibility',
        },
        {
          link: '/guide/cms',
          text: 'Connecting to a CMS',
        }
      ]
    },
    {
      collapsed: false,
      text: 'Experimental',
      items: [
        {
          link: '/guide/mpa-mode',
          text: 'MPA Mode',
        }
      ]
    },
    {
      link: '/reference/site-config',
      text: 'Config & API Reference',
    }
  ]
}

function sidebarReference() {
  return [
    {
      text: 'Reference',
      items: [
        {
          link: '/reference/site-config',
          text: 'Site Config',
        },
        {
          link: '/reference/frontmatter-config',
          text: 'Frontmatter Config',
        },
        {
          link: '/reference/runtime-api',
          text: 'Runtime API',
        },
        {
          link: '/reference/cli',
          text: 'CLI',
        },
        {
          text: 'Default Theme',
          items: [
            {
              link: '/reference/default-theme-config',
              text: 'Overview',
            },
            {
              link: '/reference/default-theme-nav',
              text: 'Nav',
            },
            {
              link: '/reference/default-theme-sidebar',
              text: 'Sidebar',
            },
            {
              link: '/reference/default-theme-home-page',
              text: 'Home Page',
            },
            {
              link: '/reference/default-theme-footer',
              text: 'Footer',
            },
            {
              link: '/reference/default-theme-layout',
              text: 'Layout',
            },
            {
              link: '/reference/default-theme-badge',
              text: 'Badge',
            },
            {
              link: '/reference/default-theme-team-page',
              text: 'Team Page',
            },
            {
              link: '/reference/default-theme-prev-next-links',
              text: 'Prev / Next Links',
            },
            {
              link: '/reference/default-theme-edit-link',
              text: 'Edit Link',
            },
            {
              link: '/reference/default-theme-last-updated',
              text: 'Last Updated Timestamp',
            },
            {
              link: '/reference/default-theme-search',
              text: 'Search',
            },
            {
              link: '/reference/default-theme-carbon-ads',
              text: 'Carbon Ads',
            }
          ]
        }
      ]
    }
  ]
}
