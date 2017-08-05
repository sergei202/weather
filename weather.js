var express = require('express');
var zipcodes = require('zipcodes');
var Forecast = require('forecast');

var app = express();

app.listen(process.env.PORT || 3000, function(err) {
	console.log('Weather app: Listening at http://localhost:3000');
});

app.use('/', express.static('./public'));



// Create our forecast object
var forecast = new Forecast({
	service: 'darksky',
	key: '5b2a502a3e9cce8715fcebc3343372e0',
	units: 'f'
});


app.get('/weather/:zipcode', function(req,res) {
	// Convert a zipcode into a location object
	var location = zipcodes.lookup(req.params.zipcode);

	// Check and make sure location is valid
	if(!location) return res.status(400).json('Invalid zipcode');

	// Use the location lat/long as coordinates
	var coords = [location.latitude,location.longitude];
	forecast.get(coords, function(err,weather) {
		if(err) return res.status(400).json(err);

		// Send back an object with both location and weather
		res.json({
			location: location,
			weather: weather
		});
	});
});
