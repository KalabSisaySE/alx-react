const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "js/dashboard_main.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  performance: { maxAssetSize: 500000 },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: "production",
};
