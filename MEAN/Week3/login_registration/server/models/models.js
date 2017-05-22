var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    FirstName:{type:String, required: true},
    LastName: {type:String, required: true},
    Email:{type:String, unique: true, required: true},
    Password:{type:String, required: true},
    Birthday: {type:Date, required: true}
},{timestamps:true})

var User = mongoose.model("User", UserSchema)