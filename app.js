var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var submission = {}

app.get('/', function(req, res) {
	res.send('<form method="post" action="/formsubmit"><input name="email" type="email"><input type="submit"></form>');
});

app.post('/formsubmit', function(req, res){
	var postedData = req.body;
	submission = postedData;
	res.redirect('/success')
})

app.get('/success', function(req, res){
	res.send('<h1>Success!</h1>')
})

var server = app.listen(8720, function() {
	console.log('Express server listening on port ' + server.address().port);
});