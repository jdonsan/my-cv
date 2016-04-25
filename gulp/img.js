var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

module.exports = function () {
    var imageminOpt = {
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()]
    };

    return gulp.src('front/img/*')
        .pipe(imagemin(imageminOpt))
        .pipe(gulp.dest('statics/img'));
};
