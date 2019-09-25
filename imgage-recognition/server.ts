'use strict';

var multer = require('multer'); 
var bodyParser = require('body-parser'); 
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
app.use(bodyParser.json()); 

app.use(function(req, res, next) {
  app.locals.pretty = true;
  next();
});

//declare var Storage : { new (): Storage; prototype: Storage; };
var store = multer.diskStorage({ 
    destination: function (req, file, callback) { 
        callback(null, "./Images"); 
    }, 
    filename: function (req, file, callback) { 
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname); 
    } 
}); 
 
var upload = multer({ storage: store }).array("imgUploader", 3); //Field name and max count 

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

app.post("/api/Upload", function (req, res) { 
    upload(req, res, function (err) {
    	console.log(req.data)
        if (err) { 
            return res.end("Something went wrong!"); 
        } 
        return res.end("File uploaded sucessfully!."); 
    }); 
}); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;

