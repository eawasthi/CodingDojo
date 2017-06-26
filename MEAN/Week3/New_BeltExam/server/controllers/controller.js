var mongoose = require("mongoose")
var User = mongoose.model("User")
var Question = mongoose.model("Question")


module.exports = {
        get_all_users: function(req, res) {
            User.find({}, function(err, data) {
                if (err) {
                    res.json(err)
                } else {
                    res.json(data)
                }
            })
        },

        create: function(req, res) {
            var newUser = new User(req.body)
            newUser.save(function(err, userinfo) {
                if (err) {
                    res.json({
                        added: false,
                        error: err
                    })
                } else {
                    req.session.user = userinfo._id
                    res.json(userinfo)
                }
            })
        },

        find: function(req, res) {
            User.findOne({
                Name: req.body.Name
            }, function(err, data2) {
                if (err) {
                    res.json(err)
                } else {
                    if (data2) {
                        req.session.user = data2._id
                        res.json(data2)
                    } else {
                        res.json(data2)
                    }
                }
            })
        },

             loggedin: function(req, res) {
            if (req.session.user) {
                User.findOne({
                    _id: req.session.user
                }, function(err, user) {
                    res.json(user)
                })
            } else {
                res.json(false)
            }

        },

    logout: function(req, res) {
            req.session.destroy(function(err) {
                if (err) {
                    res.json(err)
                }
            })
        },

    questioncreate: function(req, res){
        console.log("Hitting questioncreate in controller", req.body)
        var questioncreate = new Question()
        questioncreate.Question = req.body.Question
        questioncreate.Opt1 = req.body.option1
        questioncreate.Opt2 = req.body.option2
        questioncreate.Opt3 = req.body.option3
        questioncreate.Opt4 = req.body.option4
        questioncreate.Vote1 = 0
       questioncreate.Vote2 = 0
       questioncreate.Vote3 = 0
       questioncreate.Vote4 = 0
       questioncreate._User = req.session.user
        questioncreate.save(function(err, data){
            if(err){
                console.log(err)
                res.json(err)
             }
                 User.findOne({
                    _id: req.session.user
                }, function(err, user) {
                    user.QuestionId.push(data._id)
                    user.save()
                })
            })
    },

    getAll_Questions: function(req, res){
        console.log("hitting getallQuestions in controller")
         Question.find({}).populate("_User").exec(function(err, data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                res.json(data)
                console.log("********************************", data)
            }
        })
    },

    getAnyUserQuestion: function(req, res) {
        console.log("hitting getanyuserQuestion", req.params.id)
            Question.find({
                _id: req.params.id
            }, function(err, data) {
                if (err) {
                    res.json(err)
                } else {
                    res.json(data)
                    console.log("hitting getanyuserQuestion data is ", data)
                }
            })
        },




      delete_question: function(req,res){
        Question.remove({_id: req.params.id},function(err,data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                Question.find({},function(err,data){
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

    addVotes1: function(req,res){
        console.log("in controller add vote 1")
        Question.findOne({_id:req.params.id},function(err,data){
            data.Vote1 = data.Vote1 + 1
            data.save(function(err){
                Question.find({},function(err,polls){
                    console.log("this is in addvotes1", polls)
                    res.json(polls)
                })
            })
        })
    },

    addVotes2: function(req,res){
        console.log("Hitting votes 2 ")
        Question.findOne({_id:req.params.id},function(err,data){
            console.log(data)
            data.Vote2 = data.Vote2 + 1
            data.save(function(err){
                Question.find({},function(err,polls){
                    res.json(polls)
                    console.log(polls)
                })
            })
        })
    },

    addVotes3: function(req,res){
        console.log("Hitting votes 3")
        Question.findOne({_id:req.params.id},function(err,data){
            data.Vote3 = data.Vote3 + 1
            data.save(function(err){
               Question.find({},function(err,polls){
                    res.json(polls)
                })
            })
        })
    },

    addVotes4: function(req,res){
        console.log("Hitting votes 4 ")
        Question.findOne({_id:req.params.id},function(err,data){
            data.Vote4 = data.Vote4 + 1
            data.save(function(err){
                Question.find({},function(err,polls){
                    res.json(polls)
                })
            })
        })
    },


}