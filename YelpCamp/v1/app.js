var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: 'Campground1', image: "https://cdn.pixabay.com/photo/2017/08/06/02/32/camp-2587926_1280.jpg"},
    {name: 'Campground2', image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_2592,h_1458,r_0,c_crop,q_60,fl_progressive/w_960,f_auto,c_fit/youreka/Camp-Kambre_hcemsr"},
    {name: 'Campground3', image: "https://www.travelyosemite.com/media/610215/housekeeping-camp_camp-view_1000x667.jpg?anchor=center&mode=crop&width=1000&height=667&rnd=131287804450000000"},
    {name: 'Campground4', image: "https://cdn.pixabay.com/photo/2017/08/06/02/32/camp-2587926_1280.jpg"},
    {name: 'Campground5', image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_2592,h_1458,r_0,c_crop,q_60,fl_progressive/w_960,f_auto,c_fit/youreka/Camp-Kambre_hcemsr"},
    {name: 'Campground6', image: "https://www.travelyosemite.com/media/610215/housekeeping-camp_camp-view_1000x667.jpg?anchor=center&mode=crop&width=1000&height=667&rnd=131287804450000000"},
    {name: 'Campground1', image: "https://cdn.pixabay.com/photo/2017/08/06/02/32/camp-2587926_1280.jpg"},
    {name: 'Campground2', image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_2592,h_1458,r_0,c_crop,q_60,fl_progressive/w_960,f_auto,c_fit/youreka/Camp-Kambre_hcemsr"},
    {name: 'Campground3', image: "https://www.travelyosemite.com/media/610215/housekeeping-camp_camp-view_1000x667.jpg?anchor=center&mode=crop&width=1000&height=667&rnd=131287804450000000"}
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    console.log(req.body);
    campgrounds.push({name: req.body.name, image: req.body.image});
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(3000, function() {
    console.log("YelpCamp server has started. Listening on port 3000...");
});