var gulp         = require('gulp'), 
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'), 
    uglify       = require('gulp-uglifyjs'),
    concat       = require('gulp-concat'),
    imagemin     = require('gulp-imagemin'), 
    pngquant     = require('imagemin-pngquant'),
    autoprefixer = require('gulp-autoprefixer'),
    gutil        = require('gutil'),
    cssnano      = require('gulp-cssnano');

gulp.task('sass', function(done) {
    var s = sass({});
    s.on('error', function(e){
gutil.log(e);
    s.end();
    });
    gulp.src("app/sass/main.scss")
        .pipe(s)
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
        .pipe(cssnano())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: "app/",
        notify: false
    });

    gulp.watch("app/sass/*.scss", gulp.parallel('sass'));
    gulp.watch("app/sass/*.sass", gulp.parallel('sass'));
    gulp.watch(["app/*.html", "app/js/*.js"]).on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('build',  function(done) {

    var buildCss = gulp.src('app/css/main.css')
    .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/*.js') // Переносим скрипты в продакшен
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

    var buildImg = gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(imagemin({ // Сжимаем
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен

    done();
});

gulp.task('default', gulp.parallel('sass',  'serve'));