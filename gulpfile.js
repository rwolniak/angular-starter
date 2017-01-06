var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var liveserver = require('live-server');

gulp.task('clean', function() {
  del.sync(['dist/*', '!build/bower_components']);
});

gulp.task('clean:index', function() {
  del.sync(['dist/index.html']);
});

gulp.task('copy:images', function() {
  return gulp.src('src/images/*')
      .pipe(gulp.dest('dist/images'));
})

gulp.task('copy:index', ['clean:index'], function() {
  return gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('copy:templates', function() {
  return gulp.src('src/scripts/**/*.html')
      .pipe(gulp.dest('dist/scripts'));
});

gulp.task('copy:js', function() {
  return gulp.src('src/scripts/**/*.js')
      .pipe(gulp.dest('dist/scripts'));
});

gulp.task('copy:require', function() {
  return gulp.src('bower_components/requirejs/require.js')
      .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  return gulp.src('src/styles/main.scss')
      .pipe(sass.sync())
      .pipe(gulp.dest('dist/styles'));
});

gulp.task('build:dev', ['copy:index', 'copy:images', 'copy:templates', 'copy:js', 'copy:require', 'styles']);

gulp.task('default', ['build:dev']);

gulp.task('watch', ['build:dev'], function() {
  gulp.watch('src/scripts/**/*.html', ['copy:templates']);
  gulp.watch('src/scripts/**/*.js', ['copy:js']);
  gulp.watch('src/index.html', ['copy:index']);
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/images/*', ['copy:images']);

  liveserver.start({
    port: 8080,
    root: 'dist',
    open: true,
    mount: [['/bower_components', './bower_components']]
  });
});