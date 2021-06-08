const { series, src, dest, watch } = require( 'gulp' );
const sass = require( 'gulp-dart-sass' );
const imagemin = require( 'gulp-imagemin' );
const webp = require( 'gulp-webp' );
const concat = require( 'gulp-concat' );

//Utilidades CSS
const postcss = require( 'gulp-postcss' );
const cssnano = require( 'cssnano' );
const sourcemaps = require( 'gulp-sourcemaps' );

//Utilidades JS
const terser = require( 'gulp-terser-js' );


function css() {
    return src( './src/scss/app.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss( cssnano() ) )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( dest( './build/css' ) );
}

function javascript() {
    return src( './src/js/**/*.js' )
        .pipe( sourcemaps.init() )
        .pipe( concat( 'bundle.js' ) )
        .pipe( terser() )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( dest( './build/js' ) );
}

function minificarImagen() {
    return src( './src/img/**/*' )
        .pipe( imagemin() )
        .pipe( dest( './build/img' ) );
}

function versionWebp() {
    return src( './src/img/**/*' )
    .pipe( webp() )
    .pipe( dest( './build/img' ) );
}

function watchArchivos() {
    watch( './src/scss/**/*.scss', css );
    watch( './src/js/**/*.js', javascript );
}

exports.default = series( css, javascript, minificarImagen, versionWebp, watchArchivos );