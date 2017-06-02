// Automate my builds

var gulp = require('gulp');
var prop = require('./package.json');
var minify = require('gulp-minify-css');
var $ = require('gulp-load-plugins')();
var head = '\/*\r\n* Cirrus ' + prop.version + '\r\n* Stanley Lim, Copyright 2017\r\n* https://spiderpig86.github.io/Cirrus\r\n*/\r\n';

gulp.task('compile', function() {
    return gulp.src([
        './src/animations.css',
        './src/button.css',
        './src/card.css',
        './src/code.css',
        './src/default.css',
        './src/font.css',
        './src/footer.css',
        './src/forms.css',
        './src/frames.css',
        './src/header.css',
        './src/layout.css',
        './src/links.css',
        './src/lists.css',
        './src/table.css',
        './src/util.css'
    ])
        .pipe($.concat('cirrus.css'))
        .pipe($.header(head))
        .pipe($.size())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', ['compile'], function() {
    return gulp.src(['./dist/cirrus.css'])
        .pipe(minify())
        .pipe($.header(head))
        .pipe($.size())
        .pipe($.concat('cirrus.min.css'))
        .pipe(gulp.dest('./dist/'));
});