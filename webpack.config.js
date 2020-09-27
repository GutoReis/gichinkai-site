const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: ['./src/sass/main.scss', './src/js/app.js'],
  watch: true,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: '../css/'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/js')
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch",
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    }),

    new CopyWebpackPlugin([
      {
        from: "./src/webfonts/",
        to: path.resolve(__dirname, 'static/webfonts'),
        flatten: true
      }
    ])
  ]
};
