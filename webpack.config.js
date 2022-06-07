const path = require("path");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./index.js",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./public/favicon.ico", to: "" },
        { from: "./public/manifest.json", to: "" },
        { from: "./public/android-chrome-192x192.png", to: "" },
        { from: "./public/android-chrome-512x512.png", to: "" }
      ]
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js"
    })
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  target: "web",
  devServer: {
    port: "9500",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader?name=./images/[name].[ext]"
      }
    ]
  }
};
