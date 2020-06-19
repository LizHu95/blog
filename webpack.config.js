const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, 'src/index.tsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundles.js'
    },
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '8*1024',
                            name: '[name].[ext]',
                            outputPath: path.join(__dirname, './src/static/images')
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.ts(x?)$/,
                loader: ['ts-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@component': path.join(__dirname, './src/components')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello',
            template: path.resolve(__dirname, 'src/template/index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
