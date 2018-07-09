
const path = require('path')


const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: {
            path: path.join(__dirname,'dist'),
            filename: 'bundle.js'
        }
    }
    
}

module.exports = config
