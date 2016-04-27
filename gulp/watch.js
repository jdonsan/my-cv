var gulp = require('gulp');

var path = {
    js: [
        './front/src/**/*.js'
    ],
    sass: [
        './front/src/**/*.scss',
        './front/scss/**/*.scss'
    ],
    html: [
        './front/src/**/*.html',
        './front/index.html'
    ]
};

module.exports = function () {
    gulp.watch(path.js, ['compile']);
    gulp.watch(path.sass, ['sass']);
    gulp.watch(path.html, ['html']);
};
