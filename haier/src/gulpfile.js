var gulp=require('gulp');//引入gulp插件
var html=require('gulp-minify-html');//引入html压缩插件
var sass=require('gulp-sass');//引入sass编译插件
var css=require('gulp-minify-css');//引入css压缩插件
var connect=require('gulp-connect');//配置自刷新文件
var jshint=require('gulp-jshint');//js错误检测
var concat=require('gulp-concat');//js代码合并
var uglify=require('gulp-uglify');//js代码压缩插件
var rename=require('gulp-rename');//重命名插件
var imagemin=require('gulp-imagemin');//图片压缩插件



//复制html(目录拷贝)
gulp.task('copyhtml',function(){
    gulp.src('html/*.html')
    .pipe(gulp.dest('../dist/html/'));
});
//压缩html
gulp.task('uglifyhtml',function(){
    gulp.src('html/*.html')
    .pipe(html())
    .pipe(gulp.dest('../dist/html/'));
});
//监听html压缩
gulp.task('watchhtml',function(){
    gulp.watch('html/*.html',function(){
        gulp.run('uglifyhtml');
    })
});


//编译sass
gulp.task('sass',function(){
    gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'));
});
//监听sass编译
gulp.task('watchsass',function(){
    gulp.watch('scss/*.scss',function(){
        gulp.run('sass');
    })
});

gulp.task('default',['watchhtml']);
//压缩sass
gulp.task('uglifysass',function(){
    gulp.src("./css/*.css")
    .pipe(css())
    .pipe(gulp.dest('../dist/css/'));
})
//监听压缩sass
gulp.task('watchcss',function(){
    gulp.watch('./css/*.css',function(){
        gulp.run('uglifysass');
    })
})

//压缩js
/* gulp.task('uglifyjs',function(){
    gulp.src('script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('../dist/script/'));
});
//监听js压缩
gulp.task('watchjs',function(){
    gulp.watch('script/*.js',function(){
        gulp.run('uglifyjs');
    })
}); */

//页面自刷新
/* gulp.task('connect',function(){
    connect.server({
        port:8888,
        livereload:true
    });
});
gulp.task('connecthtml',function(){
    gulp.src(['html/*.html','css/*.css'])
    .pipe(connect.reload());
});
gulp.task('connectwatch',function(){
    gulp.watch(['html/*.html','css/*.css'],['connecthtml']);
}); */

//压缩图片
gulp.task('imagemin',function(){
    gulp.src('img/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('../dist/img'));
})
gulp.task('default',['watchhtml','watchsass','watchcss']);
/* gulp.task('default',['watchhtml','watchsass','watchcss','connect','connectwatch']); */