'use strict';

import config   from '../config';
import gulp     from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task(config.development.images.task, function () {
    gulp.src(config.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.development.images.dest));
});