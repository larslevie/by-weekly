const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 8001,
    hot: true,
    inline: true,
    publicPath: '/',
    contentBase: './public',
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
