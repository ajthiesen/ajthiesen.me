import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Andrew's Driftwood 📝",
    enableSPA: true,
    enablePopovers: trfalseue,
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
          sand: "#F4D7AF", // Light sandy color for background, resembling the beach.
          sky: "#87CEEB", // Soft sky blue for a calming effect and to represent the daytime sky.
          ocean: "#0077B6", // Deeper blue to represent the ocean.
          waves: "#00B4D8", // Brighter blue for highlights or accents, representing the vibrant ocean waves.
          sunset: "#FFA07A", // Soft, warm tone for accents, mimicking the colors of a beach sunset.
          palm: "#2E8B57", // Rich green, reminiscent of palm trees or coastal vegetation.
          coral: "#FF7F50", // Coral color for call-to-action buttons or highlights, adding a pop of vibrant color.
          highlight: "rgba(255, 224, 130, 0.2)", // Soft, warm highlight color, evoking a gentle sunlight glimmer.
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
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
