'use strict';

const express = require('express');
const app = express();
const deployment_timestamp = process.env.DEPLOYMENT;

var path = require("path");
var favicon = require("serve-favicon");
var morgan = require("morgan");


app.set('view engine', 'pug');
app.use(express.static("./public"));
app.use(favicon(path.join(__dirname, "public", "ico", "favicon.ico")));
app.use(morgan("combined"));

app.use(function(req, res, next) {
  app.locals.pretty = true;
  next();
});

app.get('/', (req, res) => {
    res.status(200)
    res.render('index', {
  		deployment: deployment_timestamp
	}) 
});

app.get('/arch', (req, res) => {
    res.status(200)
    res.render('arch') 
});

app.get('/contact', (req, res) => {
    res.status(200)
    res.render('contact') 
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;

