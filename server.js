var mongoose = require('mongoose');
var express = require('express');

var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/Guardias');

var logonCtrl = require('./controladores/logonCtrler.js')

var app = express();

app.use(bodyParser.json());


//app.use('/', express.static(__dirname + "/"))
app.use('/views', express.static(__dirname + "/views"))
app.use('/templates', express.static(__dirname + "/templates"))
app.use('/controladores', express.static(__dirname + "/controladores"));
app.use('/css', express.static(__dirname + "/css"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));


app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html'); 
});

app.get('/admin', function(req, res) {
   res.sendFile(__dirname + '/admin.html'); 
});

app.post('/usuario/login', logonCtrl.logon);

app.listen('3030', function(){
   console.log('Ok!'); 
});