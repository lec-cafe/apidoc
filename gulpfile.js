var gulp = require('gulp');
var $ = require("gulp-load-plugins")();
var runSequence = require("run-sequence");

var path = {
    md: "docs/apis/*.md",
    indexFile: "index.apib",
    indexPath: "docs/",
    sitePath: "site/"
}

gulp.task('build-md', function () {
    gulp.src(path.md)
        .pipe($.concat(path.indexFile))
        .pipe(gulp.dest(path.indexPath));
});

gulp.task('build-aglio', function () {
    gulp.src(path.indexPath+path.indexFile)
        .pipe($.aglio({ template: 'default' }))
        .pipe(gulp.dest(path.sitePath));
});

gulp.task("build",function(cb){
    runSequence("build-md","build-aglio",cb);
})

gulp.task("watch",function(){
    gulp.watch(path.md,["build-md"])
    gulp.watch(path.md,["build-md"])
})

gulp.task("mock",function(){
    var mockServer;
    var ApiMock = require('api-mock')
    mockServer = new ApiMock({
        blueprintPath: path.indexPath+path.indexFile,
        options: {
            port: 5557
        }
    });
    return mockServer.run();
})