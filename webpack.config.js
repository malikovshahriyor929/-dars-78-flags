const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("src", "index.js"),
    admin: path.resolve("src", "admin.js"),
  },
  output: {
    filename: "[name].bandle.js",
    path: path.resolve("dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve("dist"),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
};
