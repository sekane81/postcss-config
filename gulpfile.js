var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var gulpStylelint = require('gulp-stylelint');

gulp.task('css', function() {
	 var processors = [
		  autoprefixer,
		  cssnext,
		  precss
	 ];
	 return gulp
		.src('./src/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'))
		.pipe(gulpStylelint({
			failAfterError: true,
      reportOutputDir: 'reports/lint',
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'json', save: 'report.json'},
		{formatter: 'string', console: true}
			]})
		);

});

gulp.task('watch', function() {
	 gulp.watch('src/**/*.css', ['css']);
});


gulp.task('default', ['css', 'watch']);