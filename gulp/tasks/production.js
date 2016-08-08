'use strict';

import config       from '../config';
import gulp         from 'gulp';
import runSequence  from 'run-sequence';

gulp.task(config.production.task, function () {
    runSequence([
            config.production.html.task,
            config.production.styles.task,
            config.production.images.task,
            config.production.scripts.task,
            config.common.lint.task,
            config.browserSync.task
        ],
        config.production.watch.task);
});