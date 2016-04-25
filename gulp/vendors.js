var gulp = require('gulp');
var vendor = require('gulp-concat-vendor');
var uglify = require('gulp-uglify');

var path = {
    vendors: [
        './front/vendors/*'
    ]
};

module.exports = function () {
    return gulp.src(path.vendors)
        .pipe(vendor('1.vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./statics/js'));
};