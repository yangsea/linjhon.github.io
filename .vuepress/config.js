
var plugins = require('./config/plugins')

var themeConfig = require('./config/theme')


module.exports = {
  theme: 'reco',
  themeConfig,
  head: [
    // 移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  plugins
}