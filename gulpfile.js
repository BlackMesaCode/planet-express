// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('styles/*.scss') // to watch ALL: ./**/*.scss
        .pipe(sass().on('error', sass.logError)) // .on('error', sass.logError)  to swallow error
        .pipe(autoprefixer())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
        // use this function within gulp.dest() to place the output in the same directory:  function(f) { return f.base; }
});



gulp.task('default', ['sass'], function() {
    // dont use "./" in front of pathes, because otherwise gulp-watch isnt able to recognize newly or deleted files
    gulp.watch('styles/*.scss', ['sass']);
})



// AFTER MAKING CHANGES TO THE .GULPFILE RESTART THE GULP TASK !