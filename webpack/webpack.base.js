const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const pixiCorePackageJson = require(path.join(process.cwd(), 'node_modules', '@pixi/core/package.json'));

module.exports = (loader = 'file') => {
  return {
    entry: {
      app: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif|mp3)$/,
          use: [
            {
              loader: `${loader}-loader`,
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
      }),
      new CopyWebpackPlugin([
        { from: './assets', to: './assets' },
        { from: './css', to: './css' },
      ]),
      new DefinePlugin({
        __PIXI_VERSION__: JSON.stringify(pixiCorePackageJson.version),
      }),
    ],
  };
};
