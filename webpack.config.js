const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    host: "0.0.0.0",
    disableHostCheck: true,
    port: 8001,
    hot: true,
    inline: true,
    publicPath: "/",
    contentBase: "./public",
    historyApiFallback: true
  },
  entry: "./src/index.js",
  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader"
      // },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CopyPlugin([
      {
        from: "public",
        to: "public"
      }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ]
};
