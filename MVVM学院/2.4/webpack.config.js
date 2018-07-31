const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /.san$/,
                use: ['san-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
}

module.exports = config 