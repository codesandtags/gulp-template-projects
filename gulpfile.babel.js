'use strict';
/*
  This is the entry point for all task used in this project with gulp.
  You will find every task isolate in files in order to be more specific.
 */
import requireDir from 'require-dir';

requireDir('./gulp/tasks', {recurse: true});

