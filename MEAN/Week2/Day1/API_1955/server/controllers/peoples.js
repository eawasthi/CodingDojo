var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports= {

	dashboard: function(req, res){
		People.find({}, function(err, results){
			res.json({something: results})
		});
	},

	addname: function(req, res){
		var person = new People({name: req.params.name});
      	person.save(function(err){
          if (!err){
              res.json({person: req.params.name})
          }
          else {
              console.log("Oops, an error occurred!");
          }
      })
	},


	remove: function(req, res){
		People.remove({name: req.params.name}, function(){
			if (err){console.log(err);}
			else{console.log(results);}
			 res.json('Removing Person')
		})
	},

	display: function(req, res){
		People.find({name: req.params.name}, function(err, results){
			if (err){console.log(err);}
			res.json({person: results})
		})
	}

}