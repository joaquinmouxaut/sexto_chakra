const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-dart-sass");
const webp = require("gulp-webp");
const concat = require("gulp-concat");
const gulpIf = require("gulp-if");

//Utilidades CSS
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");

//Utilidades JS
const terser = require("gulp-terser-js");

//Utilidades HTML
var htmlmin = require("gulp-htmlmin");

function css() {
  return src("./src/scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(cssnano()))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./public/"));
}

function javascript() {
  return src("./src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("bundle.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("./public/"));
}

function versionWebp() {
  return src("./src/img/**/*").pipe(webp()).pipe(dest("./public/"));
}

function watchArchivos() {
  watch("./src/scss/**/*.scss", css);
  watch("./src/js/**/*.js", javascript);
}

function migrarHTML() {
  return src("./src/index.html").pipe(htmlmin()).pipe(dest("public/"));
}

exports.minify = series(migrarHTML);
exports.public = series(css, javascript, versionWebp);
exports.default = series(css, javascript, versionWebp, watchArchivos);
