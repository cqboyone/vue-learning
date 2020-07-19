const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    //动态获取文件路径后再拼接
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责加载css文件
        // style-loader负责将样式添加到dom中
        // 使用多个loader时，从右向左，所以css-loader放右边
        use: ['style-loader','css-loader']
      }
    ]
  }

}