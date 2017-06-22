// npm install gulp
// npm install --save-dev gulp-minify-html
// npm install --save-dev gulp-concat
// npm install --save-dev gulp-uglify
// npm install --save-dev gulp-cssmin

var gulp = require('gulp'),
    minifyhtml = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin');


//directory
var src = './src',
    dist = './dist';

//minify html
gulp.task('minhtml', function () {
    return gulp.src(src+'/*.html')
        .pipe(minifyhtml())
        .pipe(gulp.dest(dist));
});

//minify css
gulp.task('mincss', function () {
    return gulp.src(src+'/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest(dist+'/css'));
});

gulp.task('views-mincss', function () {
    return gulp.src(src+'/views/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest(dist+'/views/css'));
});

//minify js
gulp.task('minjs', function () {
    return gulp.src(src+'/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(dist+'/js'));
});
//views js
gulp.task('views-minjs', function () {
    return gulp.src(src+'/views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(dist+'/views/js'));
});




gulp.task('build', ['mincss','minjs','minhtml','views-mincss','views-minjs']);