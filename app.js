var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// add cu
var helloRouter = require('./routes/hello');
// add cu
var notesRouter = require('./routes/notes');
//add cu
var catRouter = require('./routes/cat');
//add cu
var yesnoRouter = require('./routes/yesno');
//add cu
var notes_from_bRouter = require('./routes/notes_from_b');
//add cu
var cors = require('cors'); 

var app = express();

//add cu
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// add cu
app.use('/hello', helloRouter);
// add cu
app.use('/notes', notesRouter);
//add cu
app.use('/cat', catRouter);
//add cu
app.use('/yesno', yesnoRouter);
// add cu
app.use('/notes_from_b', notes_from_bRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
