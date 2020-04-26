'use strict';

var SerialPort = require('serialport');
var port = new SerialPort('COM3', {
  baudRate: 9600
});


exports.list_all_tasks = function(req, res) {
	
	port.on('readable', function () {
  console.log('Data:', port.read().toString());
});
	
  res.send("hhyy");
    //res.json(task);
  
};



