/**
 * Plugins
 */
var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    less          = require('gulp-less'),
    sourcemaps    = require('gulp-sourcemaps'),
    _             = require('lodash'),
    fs            = require('fs'),
    merge         = require('merge-stream'),
    babel         = require('gulp-babel'),
    browserify    = require('gulp-browserify');


/**
 * Paths
 */
var resources     = './resources',
    public_css    = './public/stylesheets',
    public_js     = './public/javascripts',
    public_vendor = './public/vendor';

gulp.task('default', function () {
    gulp.watch(resources + '/less/**/*.less', ['less']);
});

/**
 * Tasks
 */
gulp.task('default',['public', 'less', 'js'], function () {
    gulp.watch(resources + '/less/**/*.less', ['less']);
    gulp.watch(resources + '/js/**/*.js', ['js']);
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

gulp.task('js', function() {
    return gulp.src(resources + '/js/**/*.js', {read: false})
        .pipe(plumber())
        .pipe(browserify({
            transform: ['babelify', 'reactify', 'envify'],
            debug: !gulp.env.production
        }))
        .pipe(gulp.dest(public_js));
});
