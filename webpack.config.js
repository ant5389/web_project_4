const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: { main: './scripts/index.js' },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { importLoaders: 1 } }, "postcss-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new MiniCssExtractPlugin()
    ],
}