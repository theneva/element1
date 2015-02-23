var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../angular'));

var users = [
    {username: 'Theneva'},
    {username: 'theknarf'}
];

app.get('/api/users', function(req, res) {
    res.json(users);
});

app.post('/api/users', function(req, res) {
    var newUser = req.body;
    users.push(newUser);
    res.json(newUser);
});

app.listen(9876);
console.log('Server listening on port 9876');
