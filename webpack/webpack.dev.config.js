import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: 'development',
    devtool: 'cheap-source-map',
    entry: "./src/client/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "../build"),
    },
    module: {
        rules: [
            {
                test: /\.ejs/,
                use: 'raw-loader',
            },
            {
                test: /\.(?:js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/views/index.ejs",
            filename: "views/index.ejs",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true
            },
            inject: false
        }),
    ],
    devServer: {
        static: path.join(__dirname, "../public"),
        compress: true,
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
};

export default config;
