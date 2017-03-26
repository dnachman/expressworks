let express = require('express');
let path = require('path');
let bodyparser = require('body-parser');

var app = express();

app.use(require('stylus').middleware(process.argv[3] || path.join(__dirname, 'public')));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: false}));

app.set('views', process.argv[3] || path.join(__dirname, 'templates'));

app.set('view engine', 'pug');

app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()});
});

app.get('/form', function(req, res) {
    //res.end('<form><input name="str"/></form>');
    res.render('form', {});
});

app.post('/form', function(req, res) {
    console.log('post called');
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);