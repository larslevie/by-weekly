const merge = require('webpack-merge');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-source-map',
  // plugins: [new UglifyJSPlugin()],
});
