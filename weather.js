var express = require('express');

var app = express();

app.listen(3000, function(err) {
	console.log('Weather app: Listening at http://localhost:3000');
});

app.use('/', express.static('./public'));
