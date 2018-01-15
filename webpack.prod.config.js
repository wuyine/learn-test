const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename : '[name].[chunkhash].bundle.css',
    allChunks : true,
    disable : false,
    ignoreOrder: true
})
const config = {
    entry: [
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
        rules: [
           {test: /\.jsx?$/,use:['babel-loader'],exclude:/node_modules/},
           {test:/\.scss$/,use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development 
                fallback: "style-loader"
            })},
           
            {test: /\.(png|jpg|jpeg|gif)$/, use:[{loader : 'url-loader', options : {limit : 30000}}]},
            {test: /\.(svg|ttf|eot|woff(\(?2\)?)?)(\?[a-zA-Z_0-9.=&]*)?(#[a-zA-Z_0-9.=&]*)?$/, loader : 'file-loader'}
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),

        new webpack.HotModuleReplacementPlugin(),
        extractSass,
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV : JSON.stringify('production'),
                DEV_ROUTES : false
            }
        }),
    ],
    
    // devtool : '#inline-source-map'
}

module.exports = config;