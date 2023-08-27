const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'production',
    entry : './src/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "main.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: 'babel-loader',
              },
            {
                test: /\.txt$/,
                use: 'raw-loader',
              },
              {
                test: /\.css$/,
                use: [ 
                    MiniCssExtractPlugin.loader,
                'css-loader'
                ]
              }
        ]

    }
}
