var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../angular'));

app.get('/api', function(req, res) {
    res.json([
        {username: 'Theneva'},
        {username: 'theknarf'}
    ]);
});

app.listen(9876);
console.log('Server listening on port 9876');
