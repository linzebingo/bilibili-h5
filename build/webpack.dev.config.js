var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    output: {
        path: config.dev.assetsRoot,
        publicPath: config.dev.assetsPublicPath
    },
    // eval-source-map is faster for development
    vue: {
        loaders: {
            ts: 'vue-ts-loader',
            css: 'style-loader!css-loader?sourceMap',
            sass: 'vue-style-loader!css-loader!sass-loader'
        },
        esModule: true
    },
    devtool: '#eval-source-map',
    devServer: {
        // webpack-dev-server options
        contentBase: '',
        hot: true,
        inline: true, // 实时刷新
        historyApiFallback: true,
        open: true, // 在浏览器窗口中打开
        port: 8089,
        // webpack-dev-middleware options
        quiet: true
    },
    plugins: [
        // 定义一些全局的变量,我们可以在模块当中直接使用这些变量，无需作任何声明
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrors()
    ]
})
