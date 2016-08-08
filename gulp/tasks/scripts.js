'use strict';

import config       from '../config';
import gulp         from 'gulp';
import babel        from 'gulp-babel';
import uglify       from 'gulp-uglify';
import concat       from 'gulp-concat';
import browserSync  from 'browser-sync';

gulp.task(config.production.scripts.task, function () {
    gulp.src(config.js.src)
        .pipe(babel(config.js.babel))
        .pipe(concat(config.js.concat))
        .pipe(gulp.dest(config.production.scripts.dest))
        .pipe(browserSync.stream());
});

gulp.task(config.production.scripts.task, function () {
    gulp.src(config.js.src)
        .pipe(babel(config.js.babel))
        .pipe(concat(config.js.concat))
        .pipe(uglify())
        .pipe(gulp.dest(config.production.scripts.dest))
});