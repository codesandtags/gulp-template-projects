'use strict';

import config   from '../config';
import gulp     from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task(config.production.images.task, function () {
    gulp.src(config.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.production.images.dest));
});