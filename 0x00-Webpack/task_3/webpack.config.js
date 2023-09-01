const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    header: "./modules/header/header.js",
    body: "./modules/body/body.js",
    footer: "./modules/footer/footer.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devtool: "inline-source-map",
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
    },
  },
  performance: { maxAssetSize: 500000 },
  devServer: { port: 8564, open: true },
  plugins: [
    new HtmlWebpackPlugin({ title: "Dev servers, modules, and tree shaking " }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(?:jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: "development",
};
