var express = require("express");
var request = require("request");
// var bodyParser = require('body-parser');

var app = express();

// app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){

	var searchQuery = req.query.searchQuery;
	var url = 'http://omdbapi.com/?apikey=thewdb&s=' + searchQuery; 
	
	request(url, function (error, response, body) {
		//console.log('error:', error); // Print the error if one occurred
		//console.log('statusCode:', response && response.statusCode); // Print the console.log('body:', body); // Print the HTML for the Google homepage.
	
		var results = JSON.parse(body);

		//res.render("results");
		// console.log(results["Search"]);
		res.render("results", {"results": results["Search"]});
	})
});

app.listen(3000, function() {
	console.log("Server listening on port 3000...");
});