const mix = require('laravel-mix');

mix.options({
    terser: {
        extractComments: false,
    }
});

mix
    .sass('source/sass/fuploader.scss', 'dist/css')
    .js('source/demo.js', 'dist/js')
    .js('source/js/Fuploader.js', 'dist/js')
;
