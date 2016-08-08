# gulp-template-projects

> A project based on [gulp](http://gulpjs.com/) in order to use it as a template for every *front-end* project.

## Installation

1. *Clone* or *Download* the git project. 

2. [Use npm](https://docs.npmjs.com/cli/install) to install all dependencies.

```sh
npm install
```
3. Once you finish to install the dependencies you can start to use it.

## Usage



#### Run development tasks:
By default *gulp* command run the *development* task.

```
gulp
```

```
gulp development
```

```
gulp production
```

### Features / Gulp Dependencies

Features | Task| Tools Used
------ | ----- | -----
**CSS** | styles | [Sass](http://sass-lang.com/) 
**JavaScript** | scripts   | [Babel](http://babeljs.io/), [Webpack](http://webpack.github.io/)
**Images** | copy-images   | Compression with [imagemin](https://www.npmjs.com/package/gulp-imagemin)


## Notable changes from 1.0
- Support for [Babel.js](http://babeljs.io/) in the `gulpfile.babel.js`
- The `gulp tasks` were broken in separated files.
- update directory structure
- Added the next tasks
  - `clean` delete the files which were built either `development` or `production` task.
  - `copy-html` copy the *html assets* to the build directory.
  - `copy-images` apply [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) and after copy the images.
  - `lint` apply [gulp-eslint](https://www.npmjs.com/package/gulp-eslint) to *js files*
  - `scripts` apply babel, uglify and concat to *js files*
  - `styles` apply sass and autoprefixer to *scss files*
  - `watch` listen the changes in the above tasks.
- Added documentation for tasks.
- Added ignored entries for *IDEA*, *node_modules* and *build* files.

_Pending to publish a post_ : http://codesandtags.org

***