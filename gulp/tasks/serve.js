const gulp = require('gulp');
const imageMin = require('./imageMin');
const svgSprite = require('./svgSprite');
const styles = require('./styles');
const script = require('./script');
const html = require('./html');

const server = require('browser-sync').create();

module.exports = function serve (cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  });

  gulp.watch('src/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMin)).on('change', server.reload);
  gulp.watch('src/img/sprite/*.svg', gulp.series(svgSprite)).on('change', server.reload);
  gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)));
  gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('src/pages/*.html', gulp.series(html));
  gulp.watch('build/*.html').on('change', server.reload);

  return cb();
}
;
