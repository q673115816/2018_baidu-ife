const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.san$/,
                use: ['san-loader']
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Hello World',
            template:'./index.html'
        })
    ]
}

module.exports = config