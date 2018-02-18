var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");


// User.create({
//     email: "abc@abc.com",
//     name: "ABC"
// });

// Post.create({
//     title: "Post3",
//     content: "Post3 content"
// }, function(err, post) {
//     if(err) {
//         console.log("Something went wrong!!!");
//         console.log(err);
//     }
//     else {
//         console.log("Successfully added new Post");
//         console.log(post);

//         User.findOne({email: "abc@abc.com"}).populate("posts").exec(function(err, user) {
//             if(err) {
//                 console.log("Could not find user!!!");
//                 console.log(err);
//             }
//             else {
//                 console.log("Found User!!!");
//                 console.log(user);

//                 user.posts.push(post._id);      

//                 user.save(function(err, data) {
//                     if(err) {
//                         console.log("Could not save post to user!!!");
//                         console.log(err);
//                     }
//                     else {
//                         console.log("Saved post to User!!!");
//                         console.log(data);
//                     }
//                 });


//             }
//         });

//     }
// });


// Find user
// Find all posts for that user

User.findOne({email: "abc@abc.com"}).populate("posts").exec(function(err, user){
    if(err) {
        console.log("Something went wrong!!!");
        console.log(err);
    }
    else {
        console.log("Successfully retrieved user data!!!");
        console.log(user);                
    }
});


