import { resolve } from "path";
import { Configuration } from "webpack";

const config: Configuration = {
    entry: {
        index: resolve(__dirname, '../src/index.ts'),
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, '../dist'),
    },
}

export default config;