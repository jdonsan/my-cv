var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

module.exports = function (done) {
    gulp.src(['./front/scss/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(minifyCss({ keepSpecialComments: 0 }))
        .pipe(concat('app.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./statics/css'))
        .on('end', done);
};

