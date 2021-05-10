const fs = require("fs");
const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

const isProd = process.env.NODE_ENV == "production";

let plugins = [];

// 自动添加当前目录下其他plugin
fs.readdirSync(resolve("./")).forEach((key) => {
  if (key == "index.js") return;
  const pluginModule = require(resolve(key));
  plugins = plugins.concat(pluginModule);
});

if (isProd) {
  plugins.push(["git"]);
}

plugins.push(["pinyin-urls"]);

module.exports = plugins;
