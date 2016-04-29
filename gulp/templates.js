var templateCache = require('gulp-angular-templatecache');
var gulp = require('gulp');

module.exports = function () {
    return gulp.src([
        './front/src/**/*.html'])
        .pipe(templateCache('index.js', { module: 'app', root: 'src/' }))
        .pipe(gulp.dest('./front/src/core/templates/'));
};