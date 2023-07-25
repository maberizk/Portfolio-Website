const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: "development",
    devtool: "source-map",
    context: __dirname,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                            publicPath: 'images',
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [htmlPlugin]
};
