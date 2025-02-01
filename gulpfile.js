const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const cleanCSS = require("gulp-clean-css") // For minifying CSS
const argv = require("yargs").argv // Import yargs to handle command-line arguments

// Define the source and destination directories
const paths = {
  scss: "src/styles/**/*.scss",
  css: "public/styles",
}

// Task to compile SCSS to CSS (and minify in production)
gulp.task("scss", function() {
  let stream = gulp.src(paths.scss)
    .pipe(sass().on("error", sass.logError)) // Compile SCSS to CSS

  // If not running with -dev flag, minify the CSS (production mode)
  if (!argv.dev) {
    stream = stream
      .pipe(cleanCSS()) // Minify the CSS in production
  }

  return stream.pipe(gulp.dest(paths.css))
})

// Task to watch for changes in SCSS files (only in development)
gulp.task("watch", function() {
  gulp.watch(paths.scss, gulp.series("scss"))
})

// Default task (run "scss" and "watch" tasks for dev, just "scss" for prod)
gulp.task("default", gulp.series("scss", function(done) {
  if (argv.dev) {
    gulp.series("watch")() // Directly call the watch task if -dev flag is present
  }
  done()
}))
