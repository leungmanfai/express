var express = require('express');
var app = express();

app.get('/perimeter', function (req, res) {
  res.send('Answer is '+req.query.length * 4);
});

app.get('/area', function (req, res) {
  res.send('Answer is '+req.query.length * req.query.length);
});

var server = app.listen(process.env.PORT || 8099, function () {
  var port = server.address().port;
  console.log('Server listening at port %s', port);
});
