var mongoose = require("mongoose")
var User = mongoose.model("User")



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
}