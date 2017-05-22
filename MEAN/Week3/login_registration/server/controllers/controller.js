var mongoose = require("mongoose")
var User = mongoose.model("User")



module.exports = {
    register_user: function(req,res){
        var newUser = new User()
        newUser.FirstName = req.body.FirstName
        newUser.LastName = req.body.LastName
        newUser.Email = req.body.Email
        newUser.Password = req.body.Password
        newUser.Birthday = req.body.Birthday
        newUser.save(function(err){
                User.find({},function(err,data){
                if(err){
                    console.log(err)
                    res.json(err)
                }else{
                    res.json(data)
                }
            })
        })
    },

    login_user: function(req,res){
        User.findOne({Email: req.body.Email, function(err, data){
          if(err){console.log(err)}
          else {}  
        })
    },
    

    edit_user: function(req,res){
        console.log("entering edit_user", req.body.FirstName)
        console.log("id", req.params.id)

        User.findOne({_id: req.params.id},function(err,data){
            console.log("find-user", data) 
                data.FirstName = req.body.FirstName;
                data.LastName = req.body.LastName;
                data.Birthday = req.body.Birthday;
                data.save(function(err){
                    User.find({},function(err,data){
                    if(err){
                        console.log(err)
                        res.json(err)
                    }else{
                        res.json(data)
                    }
                })
             })
        })
    },

    delete_user: function(req,res){
        console.log("entering delete_user",req.params.id)
        User.remove({_id: req.params.id},function(err,data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                User.find({},function(err,data){
                    if(err){
                        console.log(err)
                        res.json(err)
                    }else{
                        res.json(data)
                    }
                })
            }
        })
    },

    show_user: function(req,res){
        console.log("entering show_user", req.params.id)
        User.findOne({_id: req.params.id},function(err,data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                res.json(data)
            }
        })
    }
}