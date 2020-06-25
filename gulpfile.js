require('dotenv').config({ path: './gulp.env' });
const {src, dest, series, watch} = require('gulp');
const browser = require('browser-sync').create();
const reload = browser.reload;

const themePath = process.env.THEME_PATH;
const pluginPath = process.env.PLUGIN_PATH;

function themeWatcher() {
  browser.init({
    port: 5500,
    proxy: 'localhost:8080'
  });
  watch(`${themePath}/theme.css`).on('change', reload);
  watch(`${themePath}/js/main.js`).on('change', reload);
  watch(`${themePath}/**/*.php`).on('change', reload);
}

function pluginWatcher() {
  browser.init({
    port: 5500,
    proxy: 'localhost:8080'
  });
  watch(`${pluginPath}/build/*.js`).on('change', reload);
  watch(`${pluginPath}/**/*.php`).on('change', reload);
}

exports.serveThemes = series(themeWatcher);
exports.servePlugins = series(pluginWatcher);
