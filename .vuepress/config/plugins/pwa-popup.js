module.exports = [
  '@vuepress/plugin-pwa-popup',
  {
    locales: {
      '/': {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
      '/zh/': {
        message: '发现新内容可用',
        buttonText: '刷新',
      },
    },
  },
]