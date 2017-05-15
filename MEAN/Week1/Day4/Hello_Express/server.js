var express = require ("express");
var app = express();
app.get('/', function(request, response){
	responce.send("<h1>Hello World</h1>");
})

app.get('/users', function(request, response){
	var users_array = [
		{name: "Michael", email: "michael@condingdojo.com"},
		{name: "Jay", email: "jay@condingdojo.com"},
		{name: "Brendan", email: "brendan@condingdojo.com"},
		{name: "Andrew", email: "ndrew@condingdojo.com"},
		{name: "Michael", email: "michael@condingdojo.com"},

	];
	response.render('users', {users: users_array});
})

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function(){
	console.log("listening on port 8000");
})

