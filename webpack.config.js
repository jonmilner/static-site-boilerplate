var webpack = require('webpack');

module.exports = {
  entry: "./src/js/scripts.js",
  output: {
    path: "dist",
    filename: "scripts.js"
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: "babel"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
