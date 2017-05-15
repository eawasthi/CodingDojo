// This steps are just to create a server.

//These are dependencies
var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path= require("path"),
	port=8000;

var app = express();

//User bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({extended: true }));
//Tell server where views are and what templatting engine I'm using
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//Create connection to database
var connection = mongoose.connect("mongodb://localhost/message_db")
var Schema = mongoose.Schema;
// Create Mongoose schema and attach it as a model to our database
var PostSchema = new mongoose.Schema({
	name: {type: String, required: true },
	text: {type: String, required: true },
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});
var Post = mongoose.model('Post', PostSchema);

var CommentSchema = new mongoose.Schema({
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	text1: {type: String, required: true },
	name1: {type: String, required: true },
});
var Comment = mongoose.model('Comment', CommentSchema);

//route for creating one comment with the parent post id
app.post('/posts/:id', function (req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
         var comment = new Comment(req.body);
         comment._post = post._id;
         post.comments.push(comment);
         comment.save(function(err){
                 post.save(function(err){
                       if(err) { console.log('Error'); } 
                       else { res.redirect('/'); }
                 });
         });
   });
 });

app.get('/', function (req, res){
 Post.find({})
 .populate('comments')
 .exec(function(err, results) {
 		console.log(results);
      res.render('index', {mongoose: results});
        });
});

app.post('/', function(req, res){
	console.log(req.body)
	Post.create(req.body, function(err, results){
		console.log(req.body)
		if (err){console.log(err); }
		res.redirect('/')
	})
})

//Routes go Here!
app.listen(port, function(){
	console.log("Runing on ", port);
})