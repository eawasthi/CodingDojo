var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');

var animal = require('../controllers/quote.js')

module.exports= function(app){

app.get('/', function(req, res){
	animal.first(req, res);
});
app.post('/', function(req, res){
	animal.second(req, res);
});
app.get('/new', function(req, res){
	animal.third(req, res);
});
app.get('/:id/edit', function(req, res){
	animal.fourth(req, res);
});
app.post('/:id', function(req, res){
	animal.fifth(req, res);
}); 
app.get('/:id', function(req, res){
	animal.sixth(req, res);
});
app.get('/:id/delete', function(req, res){
	animal.seventh(req, res);
});
}
