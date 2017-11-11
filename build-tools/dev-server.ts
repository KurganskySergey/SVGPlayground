
import * as gulp from 'gulp';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { config } from './webpack.config';
import './copy-statics';

gulp.task('dev', ['copy-statics'], () => {
    // @ts-ignore
    webpackDevServer.addDevServerEntrypoints(config, config.devServer);
    const compiler = webpack(config);
    const server = new webpackDevServer(compiler, config.devServer);

    server.listen(config.devServer.port, 'localhost', () => {
        console.log(`dev server listening on port ${config.devServer.port}`);
    });
});
