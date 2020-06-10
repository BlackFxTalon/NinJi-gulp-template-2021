const gulp = require('gulp');
const plumber = require('gulp-plumber');
const htmlValidator = require('gulp-w3c-html-validator');

module.exports = function html (cb) {
  return gulp.src('src/pages/*.html')
    .pipe(plumber())
    .pipe(htmlValidator())
    .pipe(gulp.dest('build'));
};
