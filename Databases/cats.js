var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});


var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the database
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat) {

//     //This is a callback function

//     if(err) {
//         console.log("Something went wrong!!!");
//         console.log(err);
//     }
//     else {
//         console.log("Saved successfully");
//         console.log(cat);
//     }
// });



// Cat.create({
//     name: "Snow White",
//     age: 15,
//     temperament: "Bland"
// }, function(err, cat) {
//     if(err) {
//                 console.log("Something went wrong!!!");
//                 console.log(err);
//             }
//             else {
//                 console.log("Created successfully");
//                 console.log(cat);
//             }
// });


//retrieve all cats from db

Cat.find({}, function(err, cats) {
    if(err) {
        console.log("Something went wrong!!!");
        console.log(err);
    }
    else {
        console.log("Below are cats fetched from db");

        cats.forEach(function(cat) {
            console.log(cat)
        });
    }
});


// Cat.find({name: "Mrs. Norris"}, function(err, cats) {
//     if(err) {
//         console.log("Something went wrong!!!");
//         console.log(err);
//     }
//     else {
//         console.log("Below are cats fetched from db");

//         cats.forEach(function(cat) {
//             console.log(cat)
//         });
//     }
// });