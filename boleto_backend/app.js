var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require("multer");
const fs = require('fs')
const cors = require('cors');
var indexRouter = require('./routes/index');
var imageSchema = require('./modals/Image')
var usersRouter = require('./routes/users');

var app = express();

app.use(bodyParser.urlencoded(
  { extended: true }
))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.post("/uploadphoto", upload.single('myImage'), (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_img = img.toString('base64');
  var final_img = {
    contentType: req.file.mimetype,
    image: new Buffer(encode_img, 'base64')
  };
  imageSchema.create(final_img, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result.img.Buffer);
      console.log("Saved To database");
      res.contentType(final_img.contentType);
      res.send(final_img.image);
    }
  })
})

module.exports = app;
