const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js)x?$/,
          exclude:
            /node_modules\/(?!(@pixi|@armathai\/pixi-tween|@armathai\/pixi-particles|@armathai\/pixi-sound)\/).*/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: { version: 3, proposals: true },
                  targets: {
                    browsers: ['safari >= 4'],
                  },
                  bugfixes: true,
                  // debug: true,
                },
              ],
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },

        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|mp3)$/,
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
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
      }),
      // new CopyWebpackPlugin([{ from: './css', to: './css' }]),
      new DefinePlugin({
        __PIXI_VERSION__: JSON.stringify(pixiCorePackageJson.version),
      }),
    ],
  };
};
