const path = require('path');


module.exports = {
  entry: {
    app: path.join(__dirname, './src/client/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react'],
          plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          { loader: 'css-loader' },
          // sass-loader
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          // css-loader
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  devServer: {
    publicPath: 'http://localhost:8080/build',
    historyApiFallback: true,
    // compress: true,
    // port: 8080,
    contentBase: path.join(__dirname, './src/assets'),
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

};
