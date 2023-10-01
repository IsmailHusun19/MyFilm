const path = require('path');
const config = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext]',
        clean: true,
    },
    optimization: {
        minimizer: [
            `...`, new CssMinimizerPlugin(),
        ],
      },
    plugins: [new MiniCssExtractPlugin({
        filename: 'main.[contenthash].css'
    })]
});