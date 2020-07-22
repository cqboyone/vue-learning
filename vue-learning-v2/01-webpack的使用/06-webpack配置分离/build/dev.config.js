const WebpackMerge = require('webpack-merge');
const BaseConfig = require('./base.config');

module.exports = WebpackMerge(BaseConfig,{
  // 生产环境不需要
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 8087
  },

})