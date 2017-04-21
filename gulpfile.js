/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass')
    cssnano = require('gulp-cssnano');

// Create a default task and add the watch task to it
gulp.task('default', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});

//////////////////////////////
// SASS Task
//////////////////////////////
gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('static/css/'));
});

// return gutil.log('Gulp is running!')
