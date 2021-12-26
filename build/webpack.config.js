const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
debugger
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, '../dist/')
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }]
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'inline-source-map' : false,
  // devServer: {
  //   contentBase: './dist',
  //   stats: 'errors-only',
  //   compress: false,
  //   host: 'localhost',
  //   port: 8089
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ]
}
