const base = require('./webpack.config')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(base, {
    externals: {
        san: 'san',
        tailwindcss: 'tailwindcss'
    },
    plugins: [
        new CleanWebpackPlugin(),

    ]
})