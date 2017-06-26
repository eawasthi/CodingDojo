var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    Name:{type:String, required: true, trim: true},
	QuestionId: [{type: Schema.Types.ObjectId, ref: 'Question'}]
},{timestamps:true})
var User = mongoose.model("User", UserSchema)

var QuestionSchema = new mongoose.Schema({
	_User: {type: Schema.Types.ObjectId, ref: 'User'},
	Question: {type: String, required: true },
	Opt1: {type: String, required: true },
	Opt2: {type: String, required: true },
	Opt3: {type: String, required: true },
	Opt4: {type: String, required: true },
	Vote1: {type: Number },
	Vote2: {type: Number },
	Vote3: {type: Number },
	Vote4: {type: Number },
},{timestamps:true});
var Question = mongoose.model('Question', QuestionSchema);

