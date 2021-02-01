import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import base from './webpack.config.base'

const config: Configuration = {
    mode: 'production',
    devtool: 'source-map',
}

export default merge(base, config)