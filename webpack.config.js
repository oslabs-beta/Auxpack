const path = require('path');


module.exports = {
    entry: {
        app: path.join(__dirname, './src/client/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            { 
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                  // style-loader
                  { loader: 'style-loader' },
                  // css-loader
                  {loader: 'css-loader'},
                  // sass-loader
                  { loader: 'sass-loader' }
                ]
              },
              {
                  test: /\.css$/,
                  use: [
                    { loader: 'style-loader' },
                    // css-loader
                    {loader: 'css-loader'},
                  ]
              }
        ]
    }
    ,
    devServer: {
        publicPath: 'http://localhost:8080/build',
        historyApiFallback: true,
        // compress: true,
        // port: 8080,
        contentBase: path.join(__dirname, "./src/assets"),
        proxy: {
            '/':'http://localhost:3000'
        }
      },
      resolve: {
          extensions: ['.js','.jsx']
      },
      
}