var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    FirstName:{type:String, required: true},
    LastName: {type:String, required: true},
    Birthday: {type:String, required: true}
},{timestamps:true})

var User = mongoose.model("User", UserSchema)


    
