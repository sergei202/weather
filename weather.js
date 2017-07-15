var express = require('express');
var zipcodes = require('zipcodes');
var Forecast = require('forecast');

var app = express();

app.listen(3000, function(err) {
	console.log('Weather app: Listening at http://localhost:3000');
});

app.use('/', express.static('./public'));

// Route to get zipcode location information
app.get('/zipcode/:zip', function(req,res) {
	res.json(zipcodes.lookup(req.params.zip));
});

// Create our forecast object
var forecast = new Forecast({
	service: 'darksky',
	key: '5b2a502a3e9cce8715fcebc3343372e0',
	units: 'f'
});

app.get('/weather/:lat/:long', function(req,res) {
	var coords = [req.params.lat,req.params.long];
	forecast.get(coords, function(err,weather) {
		if(err) return res.json(err);
		res.json(weather);
	});
});
