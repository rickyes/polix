const gulp = require('gulp');
const eslint = require('gulp-eslint');
gulp.task('eslint', function () {
  return gulp.src(['./controller/*.js','./service/*.js'])
    .pipe(eslint({ configFle: "./.eslintrc" }))
    .pipe(eslint.format())
});

gulp.task('default', ['eslint']);
