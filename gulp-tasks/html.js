"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import include from "gulp-file-include";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import htmlValidator from "gulp-w3c-html-validator";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("html", () => {
    return gulp
        .src(paths.html.src)
        .pipe(
            include({
                prefix: "@@",
                basepath: "@file",
            }),
        )
        .pipe(gulpif(production, replace(".css", ".min.css")))
        .pipe(gulpif(production, replace(".js", ".min.js")))
        .pipe(htmlValidator())
        .pipe(gulp.dest(paths.html.dist))
        .pipe(browsersync.stream());
});
