var gulp = require('gulp');

gulp.task('a',function(done) {
	console.log('aaaaa');
	done();
})
gulp.task('b',function(done) {
	console.log('bbbbb');
	done();
})
gulp.task('c',function(done) {
	console.log('cccccc');
	done();
})

console.log("myself-index")
var buildDeps = ["a","b","c"];
if(gulp.parallel !== undefined){
	gulp.task('build', gulp.parallel(...buildDeps, function () {
	  return new Promise(function(resolve, reject) {
		    resolve();
		})
	}));	
}else{
	gulp.task('build', buildDeps);
}