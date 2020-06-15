require('dotenv').config({ path: './gulp.env' });
const {src, dest, series, watch} = require('gulp');
const browser = require('browser-sync').create();
const reload = browser.reload;

const path = process.env.THEME_PATH;

function browserSyncInit() {
  browser.init({
    port: 5500,
    proxy: 'localhost:8080'
  });
  watch(`${path}/theme.css`).on('change', reload);
  watch(`${path}/js/main.js`).on('change', reload);
  watch(`${path}/**/*.php`).on('change', reload);
}

exports.serve = series(browserSyncInit);
