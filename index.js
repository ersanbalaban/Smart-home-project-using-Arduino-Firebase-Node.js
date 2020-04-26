   var express = require('express');// express.js//kütaphane dahil edildi 
    var app = express();//kütaphane değişkeni
    var path = require('path');//standart path kütüphanesi
/*
var SerialPort = require('serialport');
var port = new SerialPort('COM3', {
  baudRate: 9600
});
port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});
 
// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
});
port.on('readable', function () {
  console.log('Data:', port.read());
});*/
   app.use('/app', express.static(__dirname + '/app')); //arayüzün başlatılması için gerekli  
   app.get('/', function (req, res) {

        res.sendFile(path.join(__dirname + '/app/index.html')); //dosya yolu
  
    });

    var routes = require('./scripts/router');  //RESTful APIs,//
    routes(app); 

    app.listen(8080);//dinlenmeye başlayan port

    console.log('-> Port : 8080');