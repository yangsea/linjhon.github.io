const fs = require("fs");
const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

let plugins = [["pinyin-urls"]];

// 自动添加当前目录下其他plugin
fs.readdirSync(resolve("./")).forEach((key) => {
  if (key == "index.js") return;
  const pluginModule = require(resolve(key));
  plugins = plugins.concat(pluginModule);
});

module.exports = plugins;
