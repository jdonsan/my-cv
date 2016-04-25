var gulp = require('gulp')

var path = {
    js: [
        '/front/src/**/*.js'
    ],
    sass: [
        '/front/src/**/*.scss',
        '/scss/**/*.scss'
    ]
}

module.exports = function () {
    gulp.watch(path.js, ['compile']);
    gulp.watch(path.sass, ['sass']);
};
