const gulp = require('gulp');
const serve = require('./gulp/tasks/serve');
const styles = require('./gulp/tasks/styles');
const script = require('./gulp/tasks/script');
const fonts = require('./gulp/tasks/fonts');
const imageMin = require('./gulp/tasks/imageMin');
const svgSprite = require('./gulp/tasks/svgSprite');
const clean = require('./gulp/tasks/clean');
const html = require('./gulp/tasks/html');

const dev = gulp.parallel(html, styles, script, fonts, imageMin, svgSprite);

const build = gulp.series(clean, dev);

module.exports.start = gulp.series(build, serve);
module.exports.build = build;
module.exports.clean = clean;
