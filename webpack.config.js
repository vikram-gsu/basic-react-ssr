const path = require("path");

const javascripts = {
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: [
          [
            "@babel/preset-env"
          ],
          "@babel/preset-react"
        ],
        // plugins: [["styled-components", { ssr: true, displayName: true }]]
      }
    }
  ]
};

const node = {
  dns: "mock",
  fs: "empty",
  path: true,
  url: false,
  net: "empty"
};

const config = {
  entry: {
    client: "./src/client/index.js"
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [javascripts]
  }
};

const serverConfig = {
  target: "node",
  entry: {
    server: "./src/server.js"
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js"
  },
  node: node,
  module: {
    rules: [javascripts]
  }
};

module.exports = [config, serverConfig];
