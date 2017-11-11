import * as tslint from 'gulp-tslint';
import * as gulp from 'gulp';

// tslint config  https://github.com/progre/tslint-config-airbnb/blob/master/tslint.js
gulp.task('tslint', () => gulp.src(['./src/**/*'])
        .pipe(
        // @ts-ignore
        tslint({ formatter: 'verbose' }),
    )
        .pipe(
        // @ts-ignore
        tslint.report(),
    ),
);
