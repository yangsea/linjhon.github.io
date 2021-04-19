var plugins = require("./config/plugins");

var themeConfig = require("./config/theme");

module.exports = {
  title: "叶落秋明",
  extraWatchFiles: [
    ".vuepress/config/**/**", // 使用相对路径
  ],
  permalink: "/post/:year/:month/:day/:slug",
  theme: "reco",
  themeConfig,
  plugins,
  locales: {
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "叶落秋明",
      description: "见一叶落而知岁之将暮，观千树红才晓秋之已深。",
    },
    "/en/": {
      lang: "en-US",
      title: "叶落秋明",
      description:
        "Seeing the leaves of the tree fall, you know that the year is almost over.\n View thousands of trees red dawn autumn has been deep.",
    },
  },
  head: [
    // 移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", href: "favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/img/maple_leaf.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/img/maple_leaf.png",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/img/maple_leaf.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
};
