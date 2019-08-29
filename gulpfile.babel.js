
import  gulp from 'gulp';
import watch from 'gulp-watch';
import concss from'gulp-concat-css';
import conjs from'gulp-concat';
import notify from'gulp-notify';
import css from'gulp-clean-css';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

gulp.task('concss', () =>{
    return gulp.src('assets/css/*.css')
    .pipe(concss("style.con.css"))
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(gulp.dest('dist/css/concat'));
});

gulp.task('mincss', () =>{
  return gulp.src('dist/css/concat/style.con.css')
  .pipe(rename('style.min.css'))
  .pipe(css({compatibilty: 'ie8'}))
  .on("error", notify.onError("Error: <%= error.message %>"))
  .pipe(gulp.dest('dist/css/minify'));
});

gulp.task('conjs', () => {
  return gulp.src(['assets/js/jquery.js' ,'assets/js/pooper.js','assets/js/bootstrap.js', 'assets/js/main.js'])
  .pipe(conjs("main.con.js"))
  .on("error", notify.onError("Error: <%= error.message %>"))
  .pipe(gulp.dest('dist/js/concat'));
});

gulp.task('minjs', () =>{
  return gulp.src('dist/js/concat/main.con.js')
  .pipe(rename('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/minify'))
});

gulp.task('default',['concss','mincss','conjs','minjs'], () => {
    gulp.watch('assets/css/*css', ['concss']);
    gulp.watch('dist/css/concat/style.con.css', ['mincss']);
    gulp.watch('assets/js/*js', ['conjs']);
    gulp.watch('dist/js/concat/main.con.js', ['minjs']);
});