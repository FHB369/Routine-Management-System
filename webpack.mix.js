const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react("resources/js/app.js", "public/js")
    .react("resources/js/admin.js", "public/js")
    .react("resources/js/adminTeacherDash.js", "public/js")
    .react("resources/js/crDash.js", "public/js")
    .react("resources/js/teacherDash.js", "public/js")
    .react("resources/js/studentDash.js", "public/js")
    .sass("resources/sass/app.scss", "public/css");
