var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './src/main.ts',
        vendors: ['vue']
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.css$/, loader: 'css' },
            { test: /\.sass$/, loader: 'style!css!sass' },
            { test: /\.(png|jpg|gif|svg)$/, loader: 'file', options: { name: '[name].[ext]?[hash]' } }
        ],
    },

    vue: {
        loaders: {
            ts: 'vue-ts-loader',
            css: ExtractTextPlugin.extract(
                "style-loader",
                "css-loader?sourceMap"
            ),
            sass: ExtractTextPlugin.extract(
                'vue-style-loader',
                'css-loader!sass-loader'
            ),
        },
        esModule: true
    },

    resolve: {
        extensions: ['', '.ts', '.vue', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin("[name].css", { allChunks: true, resolve: ['modules'] })
    ]
}
