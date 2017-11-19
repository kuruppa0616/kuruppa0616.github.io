const gulp = require('gulp');
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const prefix = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

const cssFiles=[
    './lib/normalize/normalize.css',
    './lib/mdl/material.css',
    './style.css'
]


gulp.task('styles', function(){
    return gulp.src(cssFiles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/'))
});


gulp.task('default', function() {
    gulp.run('styles')
    gulp.watch(cssFiles, function () {
        gulp.run('styles')
    })
});
