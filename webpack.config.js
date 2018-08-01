const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // new CleanWebpackPlugin(['dist', 'src/views']),
        // new HtmlWebpackPlugin({
        //     title: '前端构建系统',
        //     filename: '../src/views/index.html',
        //     root: '<%- root %>',
        //     template: './app/template/index.html'
        // })
    ],
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'app'),
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
               'file-loader'
            ]
        }]
    }
};