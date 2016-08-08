'use strict';

import config   from '../config';
import gulp     from 'gulp';
import eslint   from 'gulp-eslint';

gulp.task(config.common.lint.task, function () {
    gulp.src(config.js.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});