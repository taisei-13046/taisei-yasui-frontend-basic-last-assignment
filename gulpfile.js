const gulp = require("gulp");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
sass.compiler = require("sass");

gulp.task("default", () =>
  gulp
    .src("./src/components/**/*.scss")
    .pipe(sass())
    .pipe(concat("style.css"))
    .pipe(replace("../../../img", "../img"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./src/page"))
);
