const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

const webpackConfig = require('../config/webpack.config');

function build(configs) {
  // 遍历执行配置项
  webpack(webpackConfig(config), (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(
      stats.toString({
        chunks: false,
        colors: true,
      })
    );
    if (stats.hasErrors()) {
      return;
    }
    console.log(`${config.name} build successed!`);
  });
}

console.log('\n===> running build');

// 执行所有配置
build(Object.values(mapPackages()));
