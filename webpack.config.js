const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: './dist',
    path: path.join(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.(jpg|png)$/,
        include: path.join(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: 'file-loader',
            options: {
              name: '/assets/[name].[ext]'
            },
         },
        ],
      },
      {
        test: /\.svg$/,
        include: path.join(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: 'raw-loader',
            options: {
              name: '/assets/[name].[ext]'
            },
         },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'src')
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    mainFiles: ['index', 'main'],
    modules: [
      'src',
      'node_modules',
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      PropTypes: 'prop-types',
      React: 'react',
      ReactDOM: 'react-dom',
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/styles.css'),
  ],

  devtool: 'eval',

  devServer: {
    hot: true,
    open: true,
    publicPath: '/',
    inline: true,
    overlay: true,
    port: 9000,
    stats: {
      modules: false,
      colors: true,
      env: false,
      publicPath: true,
      timings: true,
      version: true,
      errors: true,
    },
  },

};
