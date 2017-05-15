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
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//Create connection to database
var connection = mongoose.connect("mongodb://localhost/mongoose_db")

// Create Mongoose schema and attach it as a model to our database
var MongooseSchema = new mongoose.Schema({
	name: String,
	weight: Number,
	color: String
});

var Mongoose = mongoose.model('Mongoose', MongooseSchema);

app.get('/', function(req, res){
	Mongoose.find({}, function(err, results){
	res.render('index', {mongoose: results});
	});
});


app.post('/', function(req, res){
	Mongoose.create(req.body, function(err, results){
		if (err){console.log(err); }
		res.redirect('/')
	})
})


//New route to create mongoose in database, redirect to root route.


app.get('/new', function(req, res){
	res.render('new')
});

app.get('/:id/edit', function(req, res){
	Mongoose.find({_id: req.params.id}, function(err, response){
		if (err){console.log(err);}
		console.log("Mongoose: ", response)
		res.render('edit', {mongoose: response[0]})
	})
});

app.post('/:id', function(req, res){
	Mongoose.update({_id: req.params.id },req.body, function(err, result){
		if (err) {console.log(err); }
		res.redirect('/')
	})
}); 

app.get('/:id', function(req, res){
	Mongoose.find({_id: req.params.id}, function(err, response){
		if (err) {console.log(err); }
		console.log(response);
		res.render('show', {mongoose: response[0] });
	})
});


app.get('/:id/delete', function(req, res){
	Mongoose.remove({ _id: req.params.id }, function(err, results){
		if (err) {console.log(err); }
		res.redirect('/');
	})
})

//Routes go Here!
app.listen(port, function(){
	console.log("Runing on ", port);
})






