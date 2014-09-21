var gulp = require("gulp");
var sass = require("gulp-ruby-sass");
var autoprefixer = require("gulp-autoprefixer");
var minify = require("gulp-minify-css");

gulp.task("styles", function () {
    return gulp.src('custom.scss')
            .pipe(sass())
            .on('error', function (err) { console.log(err.message); })
            .pipe(autoprefixer())
            .pipe(minify())
            .pipe(gulp.dest("build"));
});

gulp.task("default", ["styles"], function () {

});
