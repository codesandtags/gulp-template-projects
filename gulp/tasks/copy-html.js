'use strict';

import config   from '../config';
import gulp     from 'gulp';

gulp.task(config.development.html.task, function () {
    gulp.src(config.html.src)
        .pipe(gulp.dest(config.production.html.dest));
});