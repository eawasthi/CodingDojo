var mongoose = require('mongoose');
var People = mongoose.model('People');


var peoples = require('../controllers/peoples.js');


module.exports = function(app){

app.get('/', function(req, res){
	peoples.dashboard(req,res);
});

app.get('/new/:name', function(req, res){
	peoples.addname(req, res);
});

app.get('/remove/:name', function(req,res){
	peoples.remove(req, res);
});

app.get('/:name', function(req, res){
	peoples.display(req, res);
});

}