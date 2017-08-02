var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("scripts",
    function () {
        return gulp.src("./src/*/*.js")
            .pipe(concat("fn-angular.js"))
            .pipe(gulp.dest("./dist/"))
            .pipe(concat("fn-angular.min.js"))
            .pipe(uglify())
            .pipe(gulp.dest("./dist/"));
    });

gulp.task("docs",
    function () {
        var fileGlob = [
            "./src/module/docs/*.md",
            "./src/!(module)/docs/*.md"
        ];

        return gulp.src(fileGlob)
            .pipe(concat("README.md"))
            .pipe(gulp.dest("./"));
    });

gulp.task("default", ["scripts", "docs"]);