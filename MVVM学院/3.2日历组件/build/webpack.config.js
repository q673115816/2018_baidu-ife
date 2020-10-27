const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const SanLoaderPlugin = require('san-loader/lib/plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.san$/,
                use: ['san-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new SanLoaderPlugin(),
        new htmlWebpackPlugin({
            template: 'index.html',
            title: 'hello san!'
        })
    ]
}

