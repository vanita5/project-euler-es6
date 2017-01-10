import gulp from 'gulp';
import xo from 'gulp-xo';
import babel from 'gulp-babel';
import clean from 'gulp-clean';

const paths = {
    assets: ['src/**/*', '!src/**/*.js'],
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

gulp.task('copyFiles', () =>
    gulp.src(paths.assets)
        .pipe(gulp.dest(paths.buildDir))
);

gulp.task('build', ['lint', 'copyFiles'], () =>
    gulp.src(paths.srcJs)
        .pipe(babel())
        .pipe(gulp.dest(paths.buildDir))
);

gulp.task('default', ['build']);
