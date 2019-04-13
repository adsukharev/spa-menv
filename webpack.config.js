
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ["babel-polyfill", './client/main.js'],

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {compact: false}
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    performance: { hints: false },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ]

};
