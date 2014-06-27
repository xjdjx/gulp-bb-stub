'use strict';
// generated on 2014-06-20 using generator-gulp-webapp 0.1.0

var gulp = require('gulp');
var gulpBowerFiles = require('gulp-bower-files');

// load plugins
var $ = require('gulp-load-plugins')({camelize: true});

gulp.task('bower-files', function(){
    gulpBowerFiles()
        .pipe(gulp.dest("dist/bower-components"));
});

gulp.task('ejs', ['process-ejs'],function(){
    return gulp.src('.tmp/pages/index.html')
        .pipe($.clean())
        .pipe(gulp.dest('.tmp'));
});

gulp.task('process-ejs',function(){
    return gulp.src('app/**/*.ejs')
        .pipe($.ejs({}))
        .pipe(gulp.dest('.tmp'));
});

gulp.task('styles', function () {
    return gulp.src('app/global/css/main.scss')
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/global/css'))
        .pipe($.size());
});

gulp.task('scripts', function () {
    return gulp.src('app/global/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size())
        .pipe(gulp.dest('.tmp/global'));
});

gulp.task('html', ['ejs','styles', 'scripts','bower-files'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('.tmp/**/*')
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('app/global/img/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/global/img'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return $.bowerFiles()
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html'], { dot: true })
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('build', ['html', 'images', 'fonts', 'extras']);

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect', 'ejs', 'styles', 'scripts'], function () {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
    var server = $.livereload();

    // watch for changes

    gulp.watch([
        '.tmp/**/*.html',
        '.tmp/css/**/*.css',
        '.tmp/global/js/**/*.js',
        'app/global/img/**/*'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch('app/**/*.ejs', ['ejs']);
    gulp.watch('app/**/*.scss', ['styles']);
    gulp.watch('app/global/js/**/*.js', ['scripts']);
    gulp.watch('app/global/img/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});
