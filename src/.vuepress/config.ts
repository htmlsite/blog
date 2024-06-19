import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "博客",
      description: "俩天的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "Blog",
      description: "Hell Blog",
    },
    
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
