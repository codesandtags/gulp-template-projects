'use strict';

import config       from '../config';
import gulp         from 'gulp';
import sass         from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import browserSync  from 'browser-sync';

gulp.task(config.production.styles.task, function () {
    gulp.src(config.css.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(config.css.autoprefixer))
        .pipe(gulp.dest(config.production.styles.dest))
        .pipe(browserSync.stream());
});