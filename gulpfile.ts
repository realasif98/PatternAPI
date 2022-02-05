var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require("gulp-notify");
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify'); 
var size = require('gulp-size');
var eslint = require('gulp-eslint');
var sourcemaps = require("gulp-sourcemaps");

gulp.task('liniting', () => {
    return gulp
    .src("src/**/*.ts")
    .pipe(eslint())
    .pipe(eslint.format());
    // .pipe(eslint.failAfterError());
})

gulp.task('transpiling', function() {
    var tsResult = tsProject.src() // or tsProject.src()
        .pipe(tsProject());
 
    return tsResult.js
                .pipe(babel())
                .pipe(uglify())
                .pipe(gulp.dest('dist'));
});

gulp.task('size-src', function() {
    console.log('Total file size in src folder:');
  return gulp.src('src/**/*')
    .pipe(size({showTotal: true, pretty: true}));
});


gulp.task('size-dest', function() {
    console.log('Total file size in dist folder:');
  return gulp.src('dist/**/*')
    .pipe(size({showTotal: true, pretty: true}));
});

// start our server and listen for changes
gulp.task('server', function() {
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'dist/app.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: "src/**/*.ts",
        tasks:['transpiling'],
        ext: 'ts'
    }).on('restart', ['size-src', 'size-dest'],() => {
        // gulp.src("src/**/*.ts")
        // .pipe(notify("Chnage Deteted!"));
    });
});

// gulp.watch('src/**/*.ts', gulp.series('transpiling', 'server'))

gulp.task('default', gulp.series('liniting', 'transpiling','size-src','size-dest')); 

