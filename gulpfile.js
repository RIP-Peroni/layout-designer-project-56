const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

browserSyncJob = () => {
    browserSync.init({
        server: "src/"
    });

    watch('src/scss/*.scss', buildSass);
    watch('src/pages/*.pug', buildPug);
}
const buildSass = () => {
    console.log('Компиляция SASS');

    return src('src/scss/*.scss')
        .pipe(sass())
        .pipe(dest('src/css/'))
        .pipe(browserSync.stream());
};

const buildPug = () => {
    console.log('Компиляция Pug');

    return src('src/pages/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(dest('src/'))
        .pipe(browserSync.stream());
};

exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);
