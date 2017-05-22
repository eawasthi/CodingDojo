var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path'),
	port = 8000;

var app = express();

app.use(bodyParser.json()); 

app.set('views', path.join(__dirname, './client/views'));


require('./server/config/mongoose.js');


var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function(){
	console.log("Running on", port)
});