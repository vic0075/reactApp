const path = require("path");

var config = {
    entry: './src/index.js',
    output: {
        path:'/',
        filename: 'main.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 7878
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
module.exports = config;