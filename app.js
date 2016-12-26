// IMPORTING PACKAGES
const http = require('http'),
      path = require('path');

const express = require('express'),
      session = require('express-session'),
      favicon = require('serve-favicon'),
      bodyParser = require('body-parser'),
      logger = require('morgan');
      multer = require('multer');

const config = require('./config');

// CREATING EXPRESS
const app = express();

// SETTING MIDDLEWARE
app.set('port', config.port || 3000)
app.use(session({ resave: true, saveUninitialized: true, secret: 'ais-novations' }));
app.use(favicon(__dirname + '/client/assets/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(logger('dev'));
// IMPORTING ROUTES
require('./routes/home-routes.js')(app, multer);

// SERVER STATIC FOLDER
app.use(express.static(path.join(__dirname, '/client')));

app.get('/', function(req, res) {
    res.sendFile('./client/index.html');
});

// RUN SERVER
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


