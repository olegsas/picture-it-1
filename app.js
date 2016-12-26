// IMPORTING PACKAGES
const http = require('http'),
      path = require('path');

const express = require('express'),
      session = require('express-session'),
      favicon = require('serve-favicon'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      mongoose = require('mongoose');
      passport = require('passport');

const config = require('./config');

// IMPORT DB
require('./models/db');
require('./config/passport');

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
require('./routes/home-routes.js')(app);
require('./routes/authentication-routes.js')(app);

// SERVER STATIC FOLDER
app.use(express.static(path.join(__dirname, '/client')));

app.get('/', function(req, res) {
    res.sendFile('./client/index.html');
});

// RUN SERVER
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


