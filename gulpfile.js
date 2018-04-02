let gulp = require('gulp')

gulp.task('build', () => {
  gulp.src(['electron_process.js','package.json'])
    .pipe(gulp.dest('./build'));
})