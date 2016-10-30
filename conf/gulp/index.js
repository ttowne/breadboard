var gulp = require('gulp'),
    karma = require('karma'),
    serve = require('gulp-serve'),
    eslint = require('gulp-eslint');

gulp.task('serve', serve([
   'src',
   'examples'
]));

gulp.task('eslint', function () {
    return gulp.src([
        'src/**/*.js',
        'examples/**/*.js'
    ]).pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError());
});

gulp.task('test', function (done) {
    return new karma.Server({
        configFile: __dirname + '/karma.js'
    }, done).start();
});