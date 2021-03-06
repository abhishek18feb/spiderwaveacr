var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors') 
mongoose.connect('mongodb://localhost/apiderwaveacr', { useNewUrlParser: true }).then(()=>console.log('Mongoose up'));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admins');
var cmsRouter = require('./routes/cms');
var serviceRouter = require('./routes/service');
var siteSettingRouter = require('./routes/sitesetting');
var contactRouter = require('./routes/contact');
var addServiceRequestRouter = require('./routes/servicerequest');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admins', adminRouter);
app.use('/site-setting', siteSettingRouter);
app.use('/cms', cmsRouter);
app.use('/service', serviceRouter);
app.use('/contact', contactRouter);
app.use('/service_request', addServiceRequestRouter);

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
