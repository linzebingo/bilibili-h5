var path = require('path')

module.exports = {
    entry: {
        server: './server/index.ts'
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname, '..'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                    isolatedModules: true,
                    typeCheck: true // This is ok.
                }
            },
        ]
    }
}
