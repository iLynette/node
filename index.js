// const person = require('./person');

// console.log(person);

var http = require('http');
var dt = require('./person');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('The date and time are currently: ' + dt.myDateTime());
  res.end();
  // res.end('Hello there node!');
}).listen(3030);