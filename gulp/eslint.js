var gulp = require('gulp');
var eslint = require('gulp-eslint');

var paths = [
    './front/src/**/*.js'
];

module.exports = function () {
    return gulp.src(paths)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};