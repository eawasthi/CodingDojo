// This steps are just to create a server.

//These are dependencies
var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path= require("path"),
	port=3000;


//Create express app
var app = express();

//User bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({exteded: true }));
//Tell server where views are and what templatting engine I'm using
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//Create connection to database
// var connection = mongoose.connect("mongodb://localhost/mongoose_db")

// Create Mongoose schema and attach it as a model to our database

require('./server/config/mongoose.js');


var routes_setter = require('./server/config/routes.js')
routes_setter(app);

//Routes go Here!
app.listen(port, function(){
	console.log("Runing on ", port);
})






