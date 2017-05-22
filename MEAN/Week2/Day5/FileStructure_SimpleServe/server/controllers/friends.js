console.log('friends controller');

let mongoose = require('mongoose');
let Friend = mongoose.model("Friend")

module.exports = {
  // get_all_friends: function(req,res){
  //  Friend.find({}, function(err, results){
  //   res.json(results)
  //  });
  // },

  // create: function(req,res){
  //   let friend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday});
  //   friend.save(function(err){
  //     if(!err){res.render('friends-new-component')}
  //     else {console.log("something went wrong")}
  //   });
  // },

  // update: function(req,res){
  //     Friend.findOne({_id: req.params.id}, function(err, friend){
  //     if(err){
  //       console.log(err);
  //     }else{
  //       friend.first_name = req.body.first_name;
  //       friend.last_name = req.body.last_name;
  //       friend.birthday = req.body.birthday;
  //       friend.save(function(err, updatedFriend){
  //         if (err){
  //           console.log(err);
  //         }else{
  //           res.json(updatedFriend);
  //         }
  //       })
  //     }
  //   });
  // },

  // delete: function(req,res){
  //     Friend.remove({_id: req.params.id}, function(err){
  //     if(err){
  //       console.log(err);
  //     }else{
  //       res.json({message: "Friend deleted!"});
  //     }
  //   })
  // },

  // show: function(req,res){
  //   Friend.findOne({_id: req.params.id}, function(err, result){

  //     res.json(result);
  //   })
  // }
}
