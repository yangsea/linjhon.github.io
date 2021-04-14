module.exports = {
  type: "blog",
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
    // notify: true, //
    recordIP: true,
    showComment: true,
  },
  // 首页博客配置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: "Category", // 默认文案 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: "Tag", // 默认文案 “标签”
    },
    socialLinks: [
      // 信息栏展示社交信息
      { icon: "reco-github", link: "https://github.com/linjhon" },
    ],
  },
  // 头像
  authorAvatar: "/img/my_avatar.jpg",
};
