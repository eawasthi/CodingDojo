var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    Name:{type:String, required: true, trim: true},
	bucket: [{type: Schema.Types.ObjectId, ref: 'Bucket'}]
},{timestamps:true})
var User = mongoose.model("User", UserSchema)

var BucketSchema = new mongoose.Schema({
	_User: {type: Schema.Types.ObjectId, ref: 'User'},
	Title: {type: String, required: true },
	Description: {type: String, required: true },
	Status:{type:Boolean},
},{timestamps:true});
var  Bucket = mongoose.model('Bucket', BucketSchema);
