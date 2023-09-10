import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: "development",
    entry: { "yasam.nedir.back-end.app": "./src/server/index.mjs" },
    target: "node",
    //devtool: "eval-source-map",
    externalsPresets: { node: true },
    output: {
        //filename: "[name].[contenthash].js",
        filename: "[name].js",
        path: path.resolve(__dirname, "../build/server"),
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: "asset"
            },
            {
                test: /\.ejs/,
                use: "raw-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/views/index.ejs",
            filename: "../views/index.ejs",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
            },
            inject: false,
        }),
    ],
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
                views: {
                    test: /[\\/]public[\\/]/,
                    name: "views",
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
};

export default config;
