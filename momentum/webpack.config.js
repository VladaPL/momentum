const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader", // компилирует ES любой спецификации в тот, который воспринимается всеми браузерами
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
