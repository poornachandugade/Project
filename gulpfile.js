const gulp = require('gulp');
const concat = require('gulp-concat');
gulp.task('1', function() {
  return gulp.src(['./header.html','./nmf/about-us.html','./footer.html'])
    .pipe(concat('about-us.html'))
    .pipe(gulp.dest('./src/nmf/'));
});

gulp.task('2', function() {
  return gulp.src(['./header.html','./nmf/accredited-academies.html','./footer.html'])
    .pipe(concat('accredited-academies.html'))
    .pipe(gulp.dest('./src/nmf/'));
});
gulp.task('3', function() {
  return gulp.src(['./header.html','./nmf/affiliations.html','./footer.html'])
    .pipe(concat('affiliations.html'))
    .pipe(gulp.dest('./src/nmf/'));
});
gulp.task('4', function() {
  return gulp.src(['./header.html','./nmf/council-subcommittee.html','./footer.html'])
    .pipe(concat('council-subcommittee.html'))
    .pipe(gulp.dest('./src/nmf/'));
});
gulp.task('5', function() {
  return gulp.src(['./header.html','./nmf/history.html','./footer.html'])
    .pipe(concat('history.html'))
    .pipe(gulp.dest('./src/nmf/'));
});
gulp.task('6', function() {
  return gulp.src(['./header.html','./nmf/memberclubs.html','./footer.html'])
    .pipe(concat('memberclubs.html'))
    .pipe(gulp.dest('./src/nmf/'));
});
gulp.task('7', function() {
  return gulp.src(['./header.html','./nmf/roll-of-honour.html','./footer.html'])
    .pipe(concat('roll-of-honour.html'))
    .pipe(gulp.dest('./src/nmf/'));
});
gulp.task('8', function() {
  return gulp.src(['./header.html','./nmf/secretariat.html','./footer.html'])
    .pipe(concat('secretariat.html'))
    .pipe(gulp.dest('./src/nmf/'));
});
gulp.task('9', function() {
  return gulp.src(['./header.html','./events/2w-racing.html','./footer.html'])
    .pipe(concat('2w-racing.html'))
    .pipe(gulp.dest('./src/events/'));
});
gulp.task('10', function() {
  return gulp.src(['./header.html','./events/2w-rally.html','./footer.html'])
    .pipe(concat('2w-rally.html'))
    .pipe(gulp.dest('./src/events/'));
});
gulp.task('11', function() {
  return gulp.src(['./header.html','./events/4w-racing.html','./footer.html'])
    .pipe(concat('4w-racing.html'))
    .pipe(gulp.dest('./src/events/'));
});
gulp.task('12', function() {
  return gulp.src(['./header.html','./events/4w-rally.html','./footer.html'])
    .pipe(concat('4w-rally.html'))
    .pipe(gulp.dest('./src/events/'));
});
gulp.task('13', function() {
  return gulp.src(['./header.html','./events/event-info.html','./footer.html'])
    .pipe(concat('event-info.html'))
    .pipe(gulp.dest('./src/events/'));
});
gulp.task('14', function() {
  return gulp.src(['./header.html','./events/events-2w.html','./footer.html'])
    .pipe(concat('events-2w.html'))
    .pipe(gulp.dest('./src/events/'));
});
gulp.task('15', function() {
  return gulp.src(['./header.html','./events/events-4w.html','./footer.html'])
    .pipe(concat('events-4w.html'))
    .pipe(gulp.dest('./src/events/'));
});
gulp.task('16', function() {
  return gulp.src(['./header.html','./events/karting.html','./footer.html'])
    .pipe(concat('karting.html'))
    .pipe(gulp.dest('./src/events/'));
});
let arr = [];
let num;
for(let i =0;i < 16;i++){
  num = i+1;
  arr.push(num.toString());
}
gulp.task('concat',arr);