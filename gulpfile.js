var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel');

var inputSASS = ['scss/*.scss'],
    inputJSX  = ['components/*.jsx'],
    outputCSS = 'assets/css/',
    outputJS  = 'assets/js';

gulp.task('sass', function(){

    gulp.src(inputSASS)
        .pipe(sass())
        .pipe(gulp.dest(outputCSS));
});

gulp.task('jsx', function() {

    gulp.src(inputJSX)
        .pipe(babel({
            presets: ['es2015', "react"]
        }))
        .pipe(gulp.dest(outputJS));
});