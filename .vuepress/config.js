var plugins = require("./config/plugins");

var themeConfig = require("./config/theme");

module.exports = {
  title: "叶落秋明",
  theme: "reco",
  themeConfig,
  plugins,
  locales: {
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "叶落秋明",
      description: "见一叶落而知岁之将暮",
    },
    "/en/": {
      lang: "en-US",
      title: "叶落秋明",
      description: "You may know the age by a falling leaf",
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
  ],
};
