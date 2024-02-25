import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Andrew's Driftwood 📝",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      plausible
    },
    locale: "en-US",
    baseUrl: "www.ajthiesen.me",
    ignorePatterns: ["private", "templates", ".obsidian", "draft"],
    defaultDateType: "modified",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Open Sans",
        body: "Open Sans",
        code: "Open Sans",
      },
      colors: {
        lightMode: {
          light: "#f8f4ec", // Creamy sand - Unchanged, good neutral base
          lightgray: "#e8eef1", // Slightly warmer gray, less cool 
          gray: "#c0c8d0", // Neutral gray, more balanced
          darkgray: "#546d78", // Ocean blue-gray - Unchanged, pleasant color
          dark: "#262E36", // Softer, deeper dark background
          secondary: "#007ACC", // Classic, vibrant blue for links/emphasis
          tertiary: "#9ec1a3", // Muted seafoam green - Unchanged, nice contrast
          highlight: "rgba(0, 122, 204, 0.15)", // Slightly deeper blue highlight
        },
        darkMode: {
          light: "#262E36", // Slightly warmer/lighter dark background
          lightgray: "#373d4a", // Unchanged, works well for contrast
          gray: "#5a6370", // Unchanged, works well for contrast
          darkgray: "#858F99", // Lighter, slightly warmer gray 
          dark: "#e8eef1", // Warmer light color, easier on the eyes
          secondary: "#577399", // Unchanged, complements dark mode well
          tertiary: "#a79c7f", // Unchanged, good muted tone
          highlight: "rgba(87, 115, 153, 0.3)", // Increased opacity for better visibility
        }
      }
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        // uses themes bundled with Shikiji, see https://shikiji.netlify.app/themes
        theme: {
          light: "synthwave-84",
          dark: "synthwave-84",
        },
        // set this to 'true' to use the background color of the Shikiji theme
        // if set to 'false', will use Quartz theme colors for background
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
