var gulp = require('gulp');

module.exports = function () {
    return gulp.src('./front/fonts/*').pipe(gulp.dest('./statics/fonts'));
};

