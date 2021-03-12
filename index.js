var express = require('express');
var app = express();
var path = require('path')
 
var executor = require('./executor.js')

app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// define routes here..

var server = app.listen(8080, function () {
  console.log('Node server is running..');
});

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.post('/submit-student-data', function (req, res) {
  var name = req.body.firstName + ' ' + req.body.lastName; 
  res.send(name + ' Submitted Successfully!');
});


app.post('/click', function (req, res) {
  console.log(`Kullanıcıdan microservice namespace isteği geldi: "${req.body.namespace}"`)
  const namespace = req.body.namespace;
  executor.executeBinFile(namespace)
  
  //res.status(200).send(`Kullanıcıdan microservice namespace isteği geldi: ${req.body.namespace}`)
  res.status(200)
  res.status(204).send();
  
});

 

 