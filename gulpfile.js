"use strict";

const gulp = require("gulp");
const rollup = require('gulp-better-rollup')

const js = () => {
    return gulp.src("src/js/**/*.js")
        .pipe(rollup({
            input: 'src/js/index.js'
        }, 'umd'))
        .pipe(gulp.dest("build"));
}

exports.start = gulp.series(js);