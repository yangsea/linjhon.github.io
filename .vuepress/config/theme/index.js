const locales = require("./locales");
const sidebar = require("./sidebar");

module.exports = {
  type: "customHome",
  mode: "light", // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
  modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
  locales,
  sidebar,
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,

  // 备案
  // record: 'ICP 备案文案',
  // recordLink: 'ICP 备案指向链接',
  // cyberSecurityRecord: '公安部备案文案',
  // cyberSecurityLink: '公安部备案指向链接',

  // 项目开始时间，只填写年份
  startYear: "2021",
  author: "linjhon",
  logo: "/img/maple_leaf.png",
  // valine 设置
  valineConfig: {
    appId: "YL6Q6eac5NNclQuOm0giKqn0-9Nh9j0Va",
    appKey: "qJTXGWmCSWg6O5WdsDS4nTXq",
    placeholder: "填写邮箱可以收到回复提醒哦！",
    verify: true, // 验证码服务
    recordIP: true,
    showComment: true,
  },
  // 首页博客配置
  blogConfig: {
    socialLinks: [
      // 信息栏展示社交信息
      { icon: "reco-github", link: "https://github.com/linjhon" },
    ],
  },
  // 头像
  authorAvatar: "/img/my_avatar.jpg",
};
