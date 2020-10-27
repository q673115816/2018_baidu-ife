const prod = require('./webpack.prod')
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(prod, {
    plugins: [
        new BundleAnalyzerPlugin(),

    ]
})