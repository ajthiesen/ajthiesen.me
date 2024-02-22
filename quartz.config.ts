import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Andrew's Driftwood 📝",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
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
          light: "#f8f4ec", // Creamy sand color
          lightgray: "#d5dbe2", // Soft, cool gray like seafoam
          gray: "#b0c2c4", // Slightly deeper gray, like wet sand
          darkgray: "#546d78", //  Ocean blue-gray 
          dark: "#31414f", //  Deep ocean blue
          secondary: "#4299e1", // Vibrant ocean blue
          tertiary: "#9ec1a3", // Muted seafoam green
          highlight: "rgba(66, 153, 225, 0.15)", // Light blue highlight like shallow water
        },
        darkMode: {
          light: "#1e2029", // Deep midnight blue 
          lightgray: "#373d4a", // Muted cool gray with a hint of blue
          gray: "#5a6370", // Slightly lighter cool gray
          darkgray: "#969da9", // Desaturated gray-blue, like twilight water
          dark: "#c4c9d3", // A soft, sandy beige
          secondary: "#577399", // Deep muted blue, like the evening ocean
          tertiary: "#a79c7f", // Desaturated sandy brown 
          highlight: "rgba(87, 115, 153, 0.2)", // Deeper blue for highlights
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        // uses themes bundled with Shikiji, see https://shikiji.netlify.app/themes
        theme: {
          light: "github-light",
          dark: "github-dark",
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
