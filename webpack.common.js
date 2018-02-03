/* eslint-disable */
const path = require("path");

const paths = {
  root: path.join(__dirname),
  src: path.join(__dirname, "src"),
  build: path.join(__dirname, "build")
};

const DYNATRACE = process.env.DYNATRACE || false;
const PUBLIC_PATH = process.env.PUBLIC_PATH || "/";

module.exports = {
  paths,

  entry: path.join(paths.src, "index"),

  output: {
    path: paths.build,
    filename: "[chunkhash].js",
    publicPath: PUBLIC_PATH
  },

  loaders: {
    babel: {
      test: /\.js?$/,
      use: "babel-loader",
      include: [paths.src, path.join(paths.root, "node_modules", "@entria")]
    },
  },

  plugins: {
    html: {
      template: "./src/index.html",
      dynatrace: DYNATRACE
    }
  }
};
