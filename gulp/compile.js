var browserify = require('browserify'),
    babelify = require('babelify'),
    gulp = require('gulp'),
    vinylBuffer = require('vinyl-buffer'),
    vinylSourceStream = require('vinyl-source-stream'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    environments = require('gulp-environments'),
    fs = require('fs'),
    exorcist = require('exorcist');

var config = {
    path: {
        entry: './front/js/app',
        dest: 'statics/js'
    },
    file: {
        js: 'app.min.js'
    }
};

module.exports = function () {
    var development = environments.development;
    var production = environments.production;
    var sources = browserify({
        entries: [`${config.path.entry}/app`],
        debug: true
    }).transform(babelify, {
        presets: ["es2015"],
        sourceMaps: false
    });

    return sources.bundle()
        .pipe(development(exorcist(`${config.path.dest}/${config.file.js}.map`)))
        .pipe(vinylSourceStream(config.file.js))
        .pipe(vinylBuffer())
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(config.path.dest));
};

//module.exports.dependencies = ['eslint', 'templates'];