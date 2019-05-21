const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { NODE_ENV, WEB_APP_PREFIX, paths } = require('../bin');

console.info(`Project environment = "${NODE_ENV}"`);

module.exports = {
  entry: {
    app: paths.appIndexJs
  },
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        WEB_APP_PREFIX: JSON.stringify(WEB_APP_PREFIX),
      },
    }),
    new ProgressBarPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'components': paths.resolveApp('src/components/'),
    },
  }
};
