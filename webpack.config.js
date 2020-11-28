const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: ["@babel/polyfill", "./demo/index.js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    host: "127.0.0.1",
    contentBase: path.join(__dirname, "/dist"),
    compress: true,
    hot: true,
    inline: true,
    port: 9000,
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "index",
      hash: true,
      chunks: ["index"],
      filename: "index.html",
      template: "./demo/html/index.html",
    }),
  ],
};
