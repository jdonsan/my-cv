var gulp = require('gulp');
var inject = require('gulp-inject');

var path = {
    origin: './front/index.html',
    dest: './statics'
};

module.exports = function (done) {
    var sources = gulp.src(['./statics/js/*.js', './statics/css/*.css'], { read: false });

    gulp.src(path.origin)
        .pipe(gulp.dest(path.dest))
        .on('end', function () {
            gulp.src(`${path.dest}/index.html`)
                .pipe(inject(sources, { relative: true }))
                .pipe(gulp.dest('./statics'))
                .on('end', done);
        });

}

module.exports.dependencies = ['compile', 'sass'];
