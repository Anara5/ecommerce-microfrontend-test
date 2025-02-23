const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        publicPath: 'auto',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
    devServer: {
        port: 3002,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
              test: /\.m?js/,
              type: 'javascript/auto',
              resolve: {
                fullySpecified: false,
              },
            },
            {
              test: /\.(css|s[ac]ss)$/i,
              use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
              test: /\.(ts|tsx|js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              },
            },
        ],
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'basketRemote',
            filename: 'remoteEntry.js',
            remotes: {
                host: 'host@http://localhost:3000/_next/static/chunks/remoteEntry.js',
            },
            exposes: {
                './Basket': './src/components/Basket',
            },            
            shared: {
                ...deps,
                react: { singleton: true, eager: false, requiredVersion: deps.react },
                'react-dom': { singleton: true, eager: false, requiredVersion: deps['react-dom'] },
                'react-redux': { singleton: true, requiredVersion: false },
                '@reduxjs/toolkit': { singleton: true, requiredVersion: false },
            }
        }),
    ]
}
