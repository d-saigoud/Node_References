var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["ABC", "DEF", "GHI"];

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/friends", function(req, res) {
	res.render("friends", {friends: friends});
});

app.post("/addFriend", function(req, res) {
	//console.log(req.body);
	friends.push(req.body.newFriend);
	//res.send("Friend Added successfully");
	res.redirect("/friends");
});

app.listen(3000, function() {
	console.log("Server listening on 3000...");
});