'use strict';

import config       from '../config';
import gulp         from 'gulp';
import browserSync  from 'browser-sync';

gulp.task(config.development.watch.task, function () {
    gulp.watch(config.html.src, [config.development.html.task]);
    gulp.watch(config.html.src).on('change', browserSync.reload);
    gulp.watch(config.css.src, [config.development.styles.task]);
    gulp.watch(config.js.src, [config.development.scripts.task]);
    /*
    TODO: add new watchers here
     gulp.watch(config.js.src, ['eslint']);
     gulp.watch(config.images.src, ['images']);
     gulp.watch(config.fonts.src, ['fonts']);
     */
});