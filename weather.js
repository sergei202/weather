var express = require('express');
var zipcodes = require('zipcodes');

var app = express();

app.listen(3000, function(err) {
	console.log('Weather app: Listening at http://localhost:3000');
});

app.use('/', express.static('./public'));


// Route to get zipcode location information
app.get('/zipcode/:zip', function(req,res) {
	res.json(zipcodes.lookup(req.params.zip));
});
