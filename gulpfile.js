var gulp = require('gulp');
var $ = require("gulp-load-plugins")();

var path = {
    md: "docs/apis/*.md",
    indexFile: "index.md",
    indexPath: "docs/",
    sitePath: "site/"
}

gulp.task('build-md', function () {
    gulp.src(path.md)
        .pipe($.concat("index.md"))
        .pipe(gulp.dest(path.indexPath));
});

gulp.task('build-aglio', function () {
    gulp.src(path.indexPath+path.indexFile)
        .pipe($.aglio({ template: 'default' }))
        .pipe(gulp.dest(path.sitePath));
});

gulp.task("watch",function(){
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