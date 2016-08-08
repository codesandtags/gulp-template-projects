'use strict';

import config       from '../config';
import gulp         from 'gulp';
import browserSync  from 'browser-sync';

gulp.task(config.production.watch.task, function () {
    gulp.watch(config.html.src, [config.production.html.task]);
    gulp.watch(config.html.src).on('change', browserSync.reload);
    gulp.watch(config.css.src, [config.production.styles.task]);
    gulp.watch(config.js.src, [config.production.scripts.task]);
    /*
     gulp.watch(config.js.src, ['eslint']);
     gulp.watch(config.images.src, ['images']);
     gulp.watch(config.fonts.src, ['fonts']);
     */
});