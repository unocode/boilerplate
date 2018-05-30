var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'unocode.js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0']
          }
        }
      },
      {
        test: /\.json$/,
        use: [
          "json-loader"
        ]
      },
      {
        test: /\.html$/,
        use: [
          "html-loader"
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: [
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      DEVICE_SIZE: JSON.stringify('large'),
      DEVICE_INPUT: JSON.stringify('no_touch')
    })
  ],
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  resolve: {
    extensions: ['*', '.js', '.webpack.js', '.web.js']
  }
}
