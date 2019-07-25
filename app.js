const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

//server setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routers setup
require('./routes')(app);

module.exports = app;
