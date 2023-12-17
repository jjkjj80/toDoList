const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    filename: '[name][contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
    plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html',
    }),
    //new BundleAnalyzerPlugin()
  ],
};