const Ugliflyjs = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config')
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseConfig,{
  plugins: [
    new Ugliflyjs(), //开发阶段不用丑化代码
  ],

})