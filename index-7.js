let express = require('express');
let path = require('path');
let bodyparser = require('body-parser');

var app = express();

app.get('/search', function(req, res) {
  res.send(req.query);
});

app.listen(process.argv[2]);