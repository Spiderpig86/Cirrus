// Automate my builds

var gulp = require('gulp');
var prop = require('./package.json');
var minify = require('gulp-clean-css');
var $ = require('gulp-load-plugins')();
var head = '\/*\r\n* Cirrus ' + prop.version + '\r\n* Stanley Lim, Copyright 2017\r\n* https://spiderpig86.github.io/Cirrus\r\n*/\r\n';

gulp.task('compile', function() {
    return gulp.src('./src/*.css')
        .pipe($.concat('cirrus.css'))
        .pipe($.header(head))
        .pipe($.size())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', ['compile'], function() {
    return gulp.src(['./dist/cirrus.css'])
        .pipe(minify({
            level: {
                1: {
                    all: true,
                    normalizeUrls: false
                  },
                2: {
                    restructureRules: true
                }
              }
        }, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
          }))
        .pipe($.header(head))
        .pipe($.size())
        .pipe($.concat('cirrus.min.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/*.css', ['minify']);
});