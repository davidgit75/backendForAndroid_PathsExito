var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');

var app = express();
var server = http.Server(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var router = express.Router();
var modelPath = require('./modelPath');

mongoose.connect('mongodb://localhost/pathsExito');

router.get('/paths', function(req, res){
  modelPath.find({}, function(err, paths){
    if(err){
      res.send({status: 'error', message: err.message});
    }else{
      res.send({status: 'success', data: paths});
    }
  });
});

app.use('/apiExito', router);

server.listen(process.env.PORT || 3000);

module.exports = app;
