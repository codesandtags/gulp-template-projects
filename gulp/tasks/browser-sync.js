'use strict';

import config       from '../config';
import gulp         from 'gulp';
import browserSync  from 'browser-sync';

gulp.task(config.browserSync.task, function () {
    browserSync.init({
        server: config.production.baseDir
    });
});