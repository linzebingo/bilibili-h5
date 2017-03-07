var config = require('../config')
var webpack = require('webpack')
var path = require('path')
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
    devtool: '#eval-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader',
                        css: 'vue-style-loader!css-loader',
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    },
                    postcss: [
                        require('autoprefixer')({
                            browsers: ['last 2 versions']
                        })
                    ],
                    esModule: true,
                }
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, ""),
        hot: true,
        inline: true, // 实时刷新
        historyApiFallback: true,
        open: true, // 在浏览器窗口中打开
        port: 8089,
        quiet: true,
        compress: true
    },
    plugins: [
        // 定义一些全局的变量,我们可以在模块当中直接使用这些变量，无需作任何声明
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrors()
    ]
})
