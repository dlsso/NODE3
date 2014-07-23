var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1>');
});

var server = app.listen(8720, function() {
	console.log('Express server listening on port ' + server.address().port);
});
