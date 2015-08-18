var gulp            = require('gulp'),
    plumber         = require('gulp-plumber'),
    less            = require('gulp-less'),
    sourcemaps      = require('gulp-sourcemaps'),
    _               = require('lodash'),
    fs              = require('fs'),
    merge           = require('merge-stream'),
    browserify      = require('browserify'),
    watchify        = require('watchify'),
    source          = require('vinyl-source-stream'),
    buffer          = require('vinyl-buffer'),
    gutil           = require('gulp-util'),
    notify          = require('gulp-notify'),
    browserSync     = require('browser-sync');


var resources     = './resources',
    public_css    = './public/stylesheets',
    public_js     = './public/javascripts',
    public_vendor = './public/vendor';

var browserifyOptions = _.assign({}, watchify.args, { entries: ['./resources/js/index.js'],debug: true, transform: ['babelify', 'reactify', 'envify']});

gulp.task('default',['public', 'less', 'js'], function () {
    browserSync({
        port: 8080,
        proxy: 'localhost:3000',
        //tunnel: true,
        ui: {
            port: 8081
        }
    });
    gulp.watch(resources + '/less/**/*.less', ['less', browserSync.reload]);
    gulp.watch('./views/**/*', [browserSync.reload]);
});

gulp.task('less', function () {
    return gulp.src(resources + '/less/react-test.less')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less({compress: true, sourceMap: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(public_css));
});

gulp.task('public', function () {
    var config = require('./bower.json')
        , bowerrc = JSON.parse(fs.readFileSync('./.bowerrc'));

    var tasks = _.flatten(_.map(config.public, function (includes, name) {
        return _.map(includes, function (path) {
            return gulp.src('./' + bowerrc.directory + '/' + name + '/' + path)
                .pipe(gulp.dest(public_vendor + '/' + name));
        });
    }));

    return merge(tasks);
});


gulp.task('js', function(){

    var bundleStream = watchify(browserify(browserifyOptions));
    bundleStream.on('update', bundle); // on any dep update, runs the bundler
    bundleStream.on('log', gutil.log); // output build logs to terminal

    function bundle(){
        return bundleStream.bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('./index.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(public_js))
            .pipe(browserSync.reload({stream: true}))
            .pipe(notify({message: 'browsers reloaded after watchify', onLast: true}));
    }

    return bundle();
});
