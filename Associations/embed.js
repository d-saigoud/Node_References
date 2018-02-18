var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);



// USER - email, name

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "cba@cba.com",
//     name: "CBA"
// });

// newUser.posts.push(new Post({
//     title: "Post1",
//     content: "Post1 content"
// }));

// newUser.posts.push(new Post({
//     title: "Post2",
//     content: "Post2 content"
// }));

// newUser.save(function(err, user) {
//     if(err) {
//         console.log("Something went wrong!!!");
//         console.log(err);
//     }
//     else {
//         console.log("Successfully inserted user!!!");
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Post Title",
//     content: "Sample Post Content"
// });

// newPost.save(function(err, post){
//     if(err) {
//         console.log("Something went wrong!!!");
//         console.log(err);
//     }
//     else {
//         console.log("Successfully inserted new Post!!!");
//         console.log(post);
//     }
// });


User.findOne({name: "CBA"}, function(err, user) {
    if(err) {
        console.log("Something went wrong!!!");
        console.log(err);
    }
    else {
        console.log("Successfully retrieved user data!!!");
        console.log(user);

        user.posts.push({
            title: "Post3",
            content: "Post3 content"
        });

        user.save(function(err, user) {
            if(err) {
                console.log("Something went wrong adding new post to retrieved user!!!");
                console.log(err);
            }
            else {
                console.log("Successfully added new post to retrieved user!!!");
                console.log(user);
            }
        });
    }
});