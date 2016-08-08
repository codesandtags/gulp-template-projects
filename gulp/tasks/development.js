'use strict';

import config       from '../config';
import gulp         from 'gulp';
import runSequence  from 'run-sequence';

gulp.task(config.development.task, function () {
    runSequence([
            config.development.html.task,
            config.development.styles.task,
            config.development.images.task,
            config.development.scripts.task,
            config.common.lint.task,
            config.browserSync.task
        ],
        config.development.watch.task);
});