import * as gulp from 'gulp';

gulp.task('copy-statics', () => {
    gulp.src([
        './index.html'
    ])
    .pipe(
        gulp.dest('./dist')
    );
})