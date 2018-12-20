var path = require('path')
module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}