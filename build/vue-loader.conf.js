var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: Object.assign({}, { ts: 'ts-loader' }, utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    })),
    esModule: true,
    transformToRequire: {
        video: 'src',
        source: 'src',
        LazyImage: 'data-src'
    }
}
