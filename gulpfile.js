/* file: gulpfile.js */

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass');


/* jshint task would be here */

gulp.task('build-css', function() {
  return gulp.src('assets/solo/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/solo/css'));
});

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('assets/solo/javascript/**/*.js')
    .pipe(jshint())
    .pipe(gulp.dest('assets/solo/js'));
});



/* updated watch task to include sass */

gulp.task('watch', function() {
  gulp.watch('assets/solo/javascript/**/*.js', ['jshint']);
  gulp.watch('assets/solo/scss/**/*.scss', ['build-css']);
});