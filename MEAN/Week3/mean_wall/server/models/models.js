var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    Name:{type:String, required: true, trim: true},
    Message: {type: String, required: true },
	Comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
},{timestamps:true})
var User = mongoose.model("User", UserSchema)

var CommentSchema = new mongoose.Schema({
	_User: {type: Schema.Types.ObjectId, ref: 'User'},
	Message1: {type: String, required: true },
	Name1: {type: String, required: true },
});
var Comment = mongoose.model('Comment', CommentSchema);

