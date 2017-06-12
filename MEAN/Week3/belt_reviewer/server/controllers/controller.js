var mongoose = require("mongoose")
var User = mongoose.model("User")
var Topic = mongoose.model("Topic")

module.exports = {
    get_all_users: function(req,res){
        User.find({},function(err,data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                res.json(data)
            }
        })
    },

    get_topics: function(req,res){
        console.log("get topics ")
       // Topic.find({},function(err,data){
        Topic.find({}).populate("_user").populate("posts").exec(function(err, data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                res.json(data)
            }
        })
    },

    create: function(req, res){
		var newUser = new User(req.body)
		newUser.save(function(err,userinfo){
            if(err){
				console.log("User create error", err)
				res.json({added: false, error: err})
			} else {
                req.session.usercreate = userinfo._id
                console.log("in sessions",req.session.usercreate)
				res.json(userinfo)
			}
		})
	},

    find: function(req,res){ 
        User.findOne({Name:req.body.Name},function(err,data2){
            if(err){
                console.log("User find error",err)
                res.json(err)
            }else{
                if(data2){
                    req.session.userfind = data2._id
                    console.log("session find:", req.session.userfind)
                    res.json(data2)
                }else{
                    res.json(data2)
                } 
            }
        })
    },

    loggedin: function(req,res){
        console.log("inside logged")
        console.log("session user", req.session.userfind, req.session.usercreate)

        if(req.session.userfind || req.session.usercreate){
            console.log(true)
            if(req.session.userfind){
                User.findOne({_id:req.session.userfind},function(err,user){
                    console.log("inside find user", user.id)
                    res.json(user)
                })
            }
            if(req.session.usercreate){
                User.findOne({_id:req.session.usercreate},function(err,user){
                    console.log("inside create user find", user._id )
                    res.json(user)
                })
            }   
        }
            else{
                console.log(false)
                res.json(false)
            }
        
    },

    createInfo: function(req,res){
        console.log("inside createInfo",req.body)
        console.log("found user", req.session.userfind)
        var infocreate = new Topic()
        if(!req.session.userfind){
                infocreate._user = req.session.usercreate
                console.log(req.session.usercreate)
            }else{
                infocreate._user = req.session.userfind
                console.log(req.session.userfind)
            }
        infocreate.Topic = req.body.Topic
        infocreate.Description = req.body.Description
        infocreate.Category = req.body.Category
        infocreate.save(function(err){
            Topic.find({}).populate("_user").populate("posts").exec(function(err, data){
            if(err){
                console.log(err)
                res.json(err)
             }
            else{
                res.json(data)
            }
          })
          Topic.findOne({_id: infocreate._id},function(err, topic){
            console.log("topic id", topic._id)
            if(err){
                console.log(err)
                res.json(err)
             }
            else{
                if(req.session.userfind){
                    User.findOne({_id: req.session.userfind },function(err, user){
                        console.log("find user find", user._id, topic._id)
                        user.topics.push(topic._id)
                        user.save()
                    })
                }else{
                    User.findOne({_id:req.session.usercreate},function(err, user){
                        console.log("find user create", user._id,topic._id)
                        user.topics.push(topic._id)
                        user.save()
                    })
                }  
                }    
            })
        })

    },

    logout: function(req,res){
        console.log("hitting logout controller")
        req.session.destroy(function(err){
            if(err){
                console.log(err)
                res.json(err)
            }
        })
    }, 


     show_user: function(req,res){
        console.log("entering show_user", req.params.id)
        User.findOne({_id: req.params.id},function(err,data){
            console.log("data in userfind", data)
            console.log(req.params.id)
            if(err){
                console.log(err)
                res.json(err)
            }else{
                res.json(data)
            }
        })
    }
}
