import gulp from 'gulp';
import xo from 'gulp-xo';
import babel from 'gulp-babel';
import clean from 'gulp-clean';

const paths = {
    srcJs: 'src/**/*.js',
    buildDir: 'build',
    gulpFile: 'gulpfile.babel.js',
    cleanDir: 'build/'
};

gulp.task('lint', () =>
    gulp.src([
        paths.srcJs,
        paths.gulpFile
    ])
        .pipe(xo())
);

gulp.task('clean', () =>
    gulp.src(paths.cleanDir, { read: false })
        .pipe(clean())
);

gulp.task('build', ['lint'], () =>
    gulp.src(paths.srcJs)
        .pipe(babel())
        .pipe(gulp.dest(paths.buildDir))
);

gulp.task('default', ['build']);