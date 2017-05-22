var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');


module.exports= {



first: function(req, res){
	Mongoose.find({}, function(err, results){
	res.render('index', {mongoose: results});
}); 
},

second: function(req, res){
		Mongoose.create(req.body, function(err, results){
		if (err){console.log(err); }
		res.redirect('/')
})
}, 
 
third: function(req, res){
	res.render('new')
},

fourth: function(req, res){
	Mongoose.find({_id: req.params.id}, function(err, response){
		if (err){console.log(err);}
		console.log("Mongoose: ", response)
		res.render('edit', {mongoose: response[0]})
	});
},

fifth: function(req, res){
	Mongoose.update({_id: req.params.id },req.body, function(err, result){
		if (err) {console.log(err); }
		res.redirect('/')
	});
},

sixth: function(req, res){
	Mongoose.find({_id: req.params.id}, function(err, response){
		if (err) {console.log(err); }
		console.log(response);
		res.render('show', {mongoose: response[0] });
	});
},

seventh: function(req, res){
	Mongoose.remove({ _id: req.params.id }, function(err, results){
		if (err) {console.log(err); }
		res.redirect('/');
	});
},
}