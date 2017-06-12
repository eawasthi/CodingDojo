var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    Name:{type:String, required: true, trim: true},
    message: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
},{timestamps:true})
var User = mongoose.model("User", UserSchema)

var MessageSchema = new mongoose.Schema({
 Message: {type: String},   
 _user: {type: Schema.Types.ObjectId, ref: 'User'},
 comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
},{timestamps:true})
var Message = mongoose.model('Message', MessageSchema);

var CommentSchema = new mongoose.Schema({
Comment: {type: String},
 _user: {type: Schema.Types.ObjectId, ref: 'User'},
 _message: {type: Schema.Types.ObjectId, ref: 'Message'}
},{timestamps:true})
var Comment = mongoose.model('Comment', CommentSchema);