/*
    This file contains the main configuration for the gulp tasks. Please feel free
    to modify it according your needs.
 */
export default {
    "common": {
        "lint": {
            "task": "eslint"
        }
    },

    "development": {
        "task": "dev",
        "baseDir": "build/",
        "html": {
            "task": "copy-html-dev",
            "dest": "build/"
        },
        "styles": {
            "task": "styles-dev",
            "dest": "build/css/"
        },
        "images": {
            "task": "images-dev",
            "dest": "build/img/"
        },
        "scripts": {
            "task": "scripts-dev",
            "dest": "build/js/"
        },
        "watch": {
            "task": "watch-dev"
        }
    },

    "production": {
        "task": "prd",
        "baseDir": "build/",
        "html": {
            "task": "copy-html-prd",
            "dest": "build/"
        },
        "styles": {
            "task": "styles-prd",
            "dest": "build/css/"
        },
        "images": {
            "task": "images-prd",
            "dest": "build/img/"
        },
        "scripts": {
            "task": "scripts-prd",
            "dest": "build/js/"
        },
        "watch": {
            "task": "watch-prd"
        }
    },

    "html": {
        "src": "app/**/*.html"
    },

    "browserSync": {
        "task": "browserSync",
    },

    "images": {
        "src": "app/img/**/*",
        "des": "images",
        "extensions": ["jpg", "png", "svg", "gif"]
    },

    "js": {
        "src": ["app/js/**/*.js", "!node_module/**"],
        "extensions": ["js", "json"],
        "babel": {
            "presets": ["es2015", "stage-1"],
            "plugins": []
        },
        "concat": "all.js"
    },

    "css": {
        "src": "app/sass/**/*.scss",
        "prodSourcemap": false,
        "autoprefixer": {
            "browsers": ["last 3 version"]
        },
        "extensions": ["sass", "scss", "css"]
    },

    "fonts": {
        "src": "fonts",
        "dest": "fonts",
        "extensions": ["woff2", "woff", "eot", "ttf", "svg"]
    },

    "watch": {
        "task": "watch"
    }
}