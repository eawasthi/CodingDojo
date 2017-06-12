var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    Name:{type:String, required: true},
    topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
},{timestamps:true})
var User = mongoose.model("User", UserSchema)


var TopicSchema = new mongoose.Schema({
 Topic: {type: String},
 Description: {type: String},
 Category: {type: String},
 posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],     
 _user: {type: Schema.Types.ObjectId, ref: 'User'}
})
var Topic = mongoose.model('Topic', TopicSchema);



var PostSchema = new mongoose.Schema({
Post: {type: String},
topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}]
})
var Post = mongoose.model('Post', PostSchema);
