var mongoose = require('mongoose');


var MongooseSchema = new mongoose.Schema({
	name: String,
	weight: Number,
	color: String
});


var Mongoose = mongoose.model('Mongoose', MongooseSchema);