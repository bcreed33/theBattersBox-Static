var gulp = require('gulp');

//sass
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('working/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('working/css/'));
});



var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
gulp.task('mincss', function() {
  return gulp.src([
                  //'working/css/scrolling-nav.css',
                  'working/css/reset.css',
                  'working/css/style.css'])
  .pipe(concatCss("cssbundle.css"))
   .pipe(cleanCSS())
.pipe(gulp.dest('css/'));
});




//var imagemin = require('gulp-imagemin');

//gulp.task('minimg', () =>
//    gulp.src('working/img/*')
//        .pipe(imagemin())
//        .pipe(gulp.dest('img/'))
//);



var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
gulp.task('concatjs', function () {
  gulp.src([
            'working/js/scrolling-nav.js',
            'working/js/jquery.easing.min.js',
            'working/js/contactForm.js',
            'working/js/script.js',
            'working/js/jquery-ui.min.js',
            'working/js/menuscript.js'])
    .pipe(concat("allscript.js"))
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});

gulp.task('concatFoodjs', function () {
  gulp.src('working/menujs/*.js')
    .pipe(concat("allfood.js"))
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});



var watch = require('gulp-watch');
gulp.task('watch', function(){
    gulp.watch('working/sass/*.scss', ['sass']);
    gulp.watch('working/css/*.css', ['mincss']);
    //gulp.watch('working/img/*', ['minimg']);
     gulp.watch('working/js/*.js', ['concatjs']);
     gulp.watch('working/json/*.js', ['concatFoodjs']);


});

gulp.task('default', ['sass','mincss','concatjs','concatFoodjs', 'watch'])
