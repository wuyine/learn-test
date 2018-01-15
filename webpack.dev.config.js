const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const ExtractTextSass = new ExtractTextPlugin({
//     filename : '[name].[chunkhash].bundle.css',
//     allChunks : true,
//     disable : false,
//     ignoreOrder: true
// })
var ip = '0.0.0.0';
var port = 9000;
const config = {
    entry: [
        "react-hot-loader/patch", 
        "webpack-dev-server/client?http://" + ip + ":" + port, 
        "webpack/hot/only-dev-server",
        './src/index.js',
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
           {test:/\.scss$/,use: ['style-loader',"css-loader","sass-loader"]},
           
            {test: /\.(png|jpg|jpeg|gif)$/, use:[{loader : 'url-loader', options : {limit : 30000}}]},
            {test: /\.(svg|ttf|eot|woff(\(?2\)?)?)(\?[a-zA-Z_0-9.=&]*)?(#[a-zA-Z_0-9.=&]*)?$/, loader : 'file-loader'}
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV : JSON.stringify('development'),
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name : 'commons',
        //     filename :  '[name].bundle.js'
        // })
    ],
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        hot:true,
        open:true,
        proxy:{}
    },
    devtool : '#inline-source-map'
}

module.exports = config;