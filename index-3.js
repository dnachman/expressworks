let express = require('express');
let path = require('path');

var app = express();
app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()});
});

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.set('views', process.argv[3] || path.join(__dirname, 'templates'));

app.set('view engine', 'pug');

app.listen(process.argv[2]);