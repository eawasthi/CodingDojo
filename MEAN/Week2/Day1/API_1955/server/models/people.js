var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
	name: {type: String, require: true, minlength: 4},
}, {timeStamps: true});

var People = mongoose.model('People', PeopleSchema);


