var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/want/:thing", function(req, res) {
	res.render("want", {thingVar: req.params.thing});
});

app.get("/posts", function(req, res) {
	var posts = [
		{title: 'Post 1', author: 'Sai'},
		{title: 'Post 2', author: 'John'},
		{title: 'Post 3', author: 'Moni'}
	];
	res.render("posts", {posts: posts});
});

app.listen(3000, function() {
	console.log("Server started on port 3000...");
});