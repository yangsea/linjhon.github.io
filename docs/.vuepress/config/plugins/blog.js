module.exports = [
  [
    "@vuepress/plugin-blog",
    {
      directories: [
        {
          id: "post",
          dirname: "_post",
          path: "/post/",
          itemPermalink: "/post/:year/:month/:day/:slug",
        },
        {
          id: "frontend",
          dirname: "learning/frontend",
          path: "/learning/frontend/",
          itemPermalink: "/learning/frontend/:year/:month/:day/:slug",
        },
        {
          id: "servers",
          dirname: "learning/servers",
          path: "/learning/servers/",
          itemPermalink: "/learning/servers/:year/:month/:day/:slug",
        },
      ],
      frontmatters: [
        {
          id: "tags",
          keys: ["tags"],
          path: "/tag/",
          layout: "Tags",
          scopeLayout: "Tag",
        },
        {
          id: "categories",
          keys: ["categories"],
          path: "/categories/",
          layout: "Categories",
          scopeLayout: "Category",
        },
        {
          id: "timeline",
          keys: ["timeline"],
          path: "/timeline/",
          layout: "TimeLines",
          scopeLayout: "TimeLine",
        },
      ],
    },
  ],
];
