var webpack = require('webpack');

var config = {
  entry: {
    scripts: "./assets/js/scripts.js",
    styleguide: "./assets/js/styleguide/styleguide.js"
  },
  output: {
    path: "dist/assets/js",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  },
  plugins: []
};

if (process.env.BUILD_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = config;
