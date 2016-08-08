'use strict';
/*
 // This is the entry point for all task used in this project with gulp.
 // You will find the task isolate in files in order to be specific.
 // Require all tasks in gulp/tasks, including sub-folders.
 */
import requireDir from 'require-dir';

requireDir('./gulp/tasks', {recurse: true});

