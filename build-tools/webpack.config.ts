import * as path from 'path';
import { Configuration } from 'webpack';
import * as webpack from 'webpack';

const port = 5000;
export const config: Configuration = {
    entry: [
        `webpack-dev-server/client?http://localhost:${port}/`,
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../', 'src/main.ts'),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../', 'dist'),
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port,
        contentBase: path.join(__dirname, '../', 'dist'),
        compress: true,
        host: 'localhost',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: { /* Loader options go here */ },
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
        ],
    },
};
