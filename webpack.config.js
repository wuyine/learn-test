const webpack = require('webpack');
const path = require('path');

const config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        './src/index.js'
    ],
    resolve: {
        extensions:['.js','.json','.jsx']
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
           {
            test: /\.js$/,loaders:['babel-loader'],exclude:/node_modules/
           }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),

        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = config;