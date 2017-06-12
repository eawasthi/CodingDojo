var mongoose = require("mongoose")
var User = mongoose.model("User")
var Message = mongoose.model("Message")
var Comment = mongoose.model("Comment")


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

    get_messages: function(req,res){
        Message.find({},function(err,data){
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

    logout: function(req,res){
        console.log("hitting logout controller")
        req.session.destroy(function(err){
            if(err){
                console.log(err)
                res.json(err)
            }
        })
    }, 


    createMessage: function(req, res){
        console.log("Hitting createmessage in controller", req.body)
        var messageCreate = new Message()
        if(!req.session.userfind){
                console.log(req.session.usercreate)
                messageCreate._user = req.session.usercreate
            }else{
                messageCreate._user = req.session.userfind
                console.log(req.session.userfind)
            }
        messageCreate.Message = req.body.Message
        messageCreate.save(function(err){
            Message.find({}).populate("_user").populate("Score").exec(function(err, data){
            if(err){
                console.log(err)
                res.json(err)
             }
            else{
                res.json(data)
            }
          })
          Message.findOne({_id: messageCreate._id},function(err, message){
            console.log("message id", message._id)
            if(err){
                console.log(err)
                res.json(err)
             }
             else{
                if(req.session.userfind){
                    User.findOne({_id: req.session.userfind },function(err, user){
                        console.log("find user find", user._id, message._id)
                        user.message.push(message._id)
                        user.save()
                    })
                }else{
                    User.findOne({_id:req.session.usercreate},function(err, user){
                        console.log("find user create", user._id,message._id)
                        user.message.push(message._id)
                        user.save()
                     })
                }  
                }    
            })
        })

    },
    
    createComment: function(req, res){
    
        console.log("Hitting createcomment in controller,id", req.body, req.params.id)
        var commentCreate = new Comment()
        if(!req.session.userfind){
                console.log(req.session.usercreate)
                commentCreate._user = req.session.usercreate
            }else{
                commentCreate._user = req.session.userfind
                console.log(req.session.userfind)
            }
        commentCreate.Comment = req.body.Comment
        commentCreate._message = req.params.id
        commentCreate.save(function(err){
            Comment.find({}).populate("_user").populate("_message").exec(function(err, data){
            if(err){
                console.log(err)
                res.json(err)
             }
            else{
                res.json(data)
            }
          })
          Comment.findOne({_id: commentCreate._id},function(err, comment){
            console.log("comment id", comment._id)
            if(err){
                console.log(err)
                res.json(err)
             }
             else{
                if(req.session.userfind){
                    User.findOne({_id: req.session.userfind },function(err, user){
                        console.log("find user find", user._id, comment._id)
                        user.comment.push(comment._id)
                        user.save()
                    })

                    Message.findOne({_id: req.params.id },function(err, message){
                        console.log("find message message.id, comment.id", message._id, comment._id)
                        message.comment.push(comment._id)
                        message.save()
                    })
                    
                    
                }else{
                    User.findOne({_id:req.session.usercreate},function(err, user){
                        console.log("find user create", user._id,comment._id)
                        user.comment.push(comment._id)
                        user.save()
                     })

                     Message.findOne({_id: req.params.id },function(err, message){
                        console.log("create message message.id, comment.id", message._id, comment._id)
                        message.comment.push(comment._id)
                        message.save()
                    })
                }  
                }    
            })
        })

    },
}