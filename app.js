var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyPraser = require('body-parser');
const mongoose = require('mongoose');
let dev_db_url = 'http://172.21.3.29:27017';

const banner = require('./routes/banner.route');

var app = express();

mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.log("error while connecting db"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyPraser.json())
app.use(bodyPraser.urlencoded ({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/branner', banner);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
