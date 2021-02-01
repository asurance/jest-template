import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import base from './webpack.config.base'

const config: Configuration = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 10086,
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
}

export default merge(base, config)