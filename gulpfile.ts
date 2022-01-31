var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require("gulp-notify");
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var babel = require('gulp-babel');
// var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    var tsResult = tsProject.src() // or tsProject.src()
        .pipe(tsProject());
 
    return tsResult.js
                    .pipe(babel())
                    .pipe(uglify())
                    .pipe(gulp.dest('dist'));
});

// start our server and listen for changes
gulp.task('server', function() {
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'dist/app.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: "src/**/*.ts",
        tasks:['scripts'],
        ext: 'ts'
    }).on('restart', () => {
        // gulp.src("src/**/*.ts")
        // .pipe(notify("Chnage Deteted!"));
    });
});

// gulp.watch('src/**/*.ts', gulp.series('scripts', 'server'))

gulp.task('default', gulp.series('scripts', 'server')); 

