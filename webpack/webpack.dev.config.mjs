import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: "development",
    entry: { "yasam.nedir.front-end.app": "./src/client/index.mjs" },
    //devtool: "eval-source-map",
    output: {
        //filename: "[name].[contenthash].js",
        filename: "[name].js",
        path: path.resolve(__dirname, "../build/client"),
    },
    module: {
        rules: [
            {
                test: /\.(?:js|jsx|mjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    watchOptions: {
        ignored: /node_modules/,
    },
};

export default config;
