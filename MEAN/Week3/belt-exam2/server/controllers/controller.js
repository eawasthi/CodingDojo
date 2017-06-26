    var mongoose = require("mongoose")
    var User = mongoose.model("User")
    var Bucket = mongoose.model("Bucket")


    module.exports = {
        get_all_users: function(req, res) {
            User.find({}, function(err, data) {
                if (err) {
                    console.log(err)
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

        createBucketlist: function(req, res) {
            var newBucket1 = new Bucket(req.body)
            newBucket1.Title = req.body.Title
            newBucket1.Status = false
            newBucket1.Description = req.body.Description
            newBucket1._User = req.session.user
            newBucket1.save(function(err, bucketinfo) {
                if (err) {
                    res.json(err)
                }
                User.findOne({
                    _id: req.session.user
                }, function(err, user) {
                    user.bucket.push(bucketinfo._id)
                    user.save()
                })
            })
            var newBucket2 = new Bucket(req.body)
            User.findOne({
                Name: req.body.Other
            }, function(err, user_tagged) {
                newBucket2._User = user_tagged._id
                newBucket2.Status = false
                newBucket2.save(function(err, bucketinfo2) {
                    user_tagged.bucket.push(bucketinfo2._id)
                    user_tagged.save()
                })
            })
        },

        getCurrentUserBucket: function(req, res) {
            Bucket.find({
                _User: req.session.user
            }, function(err, data) {
                if (err) {
                    console.log(err)
                    res.json(err)
                } else {
                    res.json(data)
                }
            })
        },

        getAnyUserBucket: function(req, res) {
            Bucket.find({
                _User: req.params.id
            }, function(err, data) {
                if (err) {
                    res.json(err)
                } else {
                    res.json(data)
                }
            })
        },

        updateStatus: function(req, res) {
            Bucket.findOne({
                _id: req.params.id
            }, function(err, buckets) {
                if (buckets.Status == false) {
                    buckets.Status = true
                } else {
                    buckets.Status = false
                }
                buckets.save(function(err) {
                    Bucket.find({}, function(err, data) {
                        res.json(data)
                    })
                })
            })
        }
    }