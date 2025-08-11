  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { experiments } = require('webpack');
  const { ModuleFederationPlugin } = require('webpack').container;
  const deps = require('./package.json').dependencies;
    module.exports = {
      mode: 'development',
      entry: './src/index.tsx',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'auto',
      },

      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: 'ts-loader',
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      target: 'web',
      // experiments: {
      //   outputModule: true,
      // },
      plugins: [
        new ModuleFederationPlugin({
          name: 'recipes',
          filename: 'remoteEntry.js',
          // library: { type: 'module'},
          exposes: {
            './Recipes': './src/components/Recipes.tsx',
          },
          shared: {
            react: { 
              singleton: true, 
              requiredVersion: deps.react, 
            },
            'react-dom': { 
              singleton: true, 
              requiredVersion: deps['react-dom'], 
            },
          },
        }),
        new HtmlWebpackPlugin({
          // template: './index.ejs',
          template: './public/index.html',
          filename: 'index.html',
          // inject: false,
        }),
      ],
      devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 5004,
        open: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type',
        },
      },
    };
