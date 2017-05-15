// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
 name: String,
 quotes: String,
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'





// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        res.render('index');
    })  
// Add User Request 
app.get('/quotes', function(req, res) {
      Quote.find({}, function(err, response){
        //console.log(response)
        console.log(err)
        if (err) {console.log(err);}
        res.render('quotes', {all_quotes: response})
      })
})

app.post('/process', function(req, res){
  console.log("POST DATA", req.body);

    var quote = new Quote({name: req.body.name, quotes: req.body.quotes});
    quote.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a quote!');
    res.redirect('/quotes')
    }
  })
})


// This is where we would add the user from req.body to the database.
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
