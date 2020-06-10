const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

module.exports = function script () {
  return gulp.src('src/js/scripts.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build/js'))
    .pipe(terser())
    .pipe(sourcemaps.write('maps'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'));
};
