var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hi There");
});

app.get("/speak/:animal", function(req, res) {
	var animal = req.params.animal;
	var sound = "";
	
	if(animal === 'pig') {
		sound="OINK!";
	}
	else if(animal === 'cow') {
		sound="AAWWW!";
	}
	
	res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:times", function(req, res) {
	
	var word = req.params.word;
	var times = parseInt(req.params.times);
	
	var str = "";
	
	for(var i=0; i<times; i++) {
		str += word + " ";
	}
	
	res.send(str);
});

/*
app.get("/r/:subreddit", function(req, res) {
	res.send("Welcome to " + req.params.subreddit + " subreddit");
});



app.get("/r/:subreddit/comments/:id", function(req, res) {
	//console.log(req);
	res.send("Welcome to " + req.params.subreddit + " subreddit - Comment ID : "+ req.params.id);
});

*/

app.get("*", function(req, res) {
	res.send("Page not found!!!");
});

app.listen(3000, function() {
	console.log("Server started on Port 3000...");
});

//console.log(app);