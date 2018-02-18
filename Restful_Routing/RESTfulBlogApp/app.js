var bodyParser   = require("body-parser"),
methodOverride   = require("method-override"),
expressSanitizer = require("express-sanitizer"),
mongoose         = require("mongoose")
express          = require("express"),
app              = express();

mongoose.connect("mongodb://localhost/restful_blog_app");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
//below line should only be after above line
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://wallpaperbrowse.com/media/images/awesome-pictures-32-1.jpg",
//     body: "Hello. This is a blog post"
// }, function(err, blog) {
//     if(err) {
//         console.log("Something went wrong!!!");
//         console.log(err);
//     }
//     else {
//         console.log("Successfully saved Blog!!!");
//         console.log(blog);
//     }
// });

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

// RESTFul Routes

//index route
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err) {
                console.log("Something went wrong while retrieving blogs!!!");
                console.log(err);
            }
        else {
            console.log("Successfully retrieved Blogs!!!");
            console.log(blogs);
            res.render("index", {blogs: blogs});
        }
    });
});

//new route
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

//create route
app.post("/blogs", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, blog) {
        if(err) {
                console.log("Something went wrong while adding new blog!!!");
                console.log(err);
            }
        else {
            console.log("Successfully saved blog!!!");
            console.log(blog);
            res.redirect("/blogs");
        }
    });
});


//show route
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, blog) {
        if(err) {
                console.log("Something went wrong while retrieving a blog!!!");
                console.log(err);
                res.redirect("/blogs");
        }
        else {
            console.log("Successfully retrieved the blog!!!");
            console.log(blog);
            res.render("show", {blog: blog});
        }
    });
}); 

// edit route
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        if(err) {
                console.log("Something went wrong while retrieving a blog for editting!!!");
                console.log(err);
                res.redirect("/blogs");
        }
        else {
            console.log("Successfully retrieved the blog for editting!!!");
            console.log(blog);
            res.render("edit", {blog: blog});
        }
    });
});

// update route
app.put("/blogs/:id", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog) {
        if(err) {
                console.log("Something went wrong while updating the blog!!!");
                console.log(err);
                res.redirect("/blogs");
        }
        else {
            console.log("Successfully updated the blog!!!");
            console.log(blog);
            res.redirect("/blogs/"+req.params.id);
        }
    });
});

// delete route
app.delete("/blogs/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
                console.log("Something went wrong while deleting the blog with id: " + req.params.id + "!!!");
                console.log(err);
                res.redirect("/blogs");
        }
        else {
            console.log("Successfully deleted the blog with id: " + req.params.id + "!!!");
            res.redirect("/blogs");
        }
    });
});

app.listen(3000, function() {
    console.log("Restful blog app started on port 3000...");
});