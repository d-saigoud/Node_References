var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data =[
    {
        name: "Camp Ground 1",
        image: "https://lakerooseveltadventures.com/wp-content/uploads/sites/5/2016/03/campground.jpg",
        description: "Camp Ground 1 Description"
    },
    {
        name: "Camp Ground 2",
        image: "http://www.dec.ny.gov/images/permits_ej_operations_images/kennethwilsonpav.jpg",
        description: "Camp Ground 2 Description"
    },
    {
        name: "Camp Ground 3",
        image: "https://lakerooseveltadventures.com/wp-content/uploads/sites/5/2016/03/campground.jpg",
        description: "Camp Ground 3 Description"
    }
]

function seedDB() {
    //Remove all CampGrounds
    Campground.remove({}, function(err){
        if(err) {
            console.log("Something went wrong while removing all existing campgrounds!!!");
            console.log(err);
        }
        else {
            console.log("Successfully removed all existing campgrounds!!!");

            Comment.remove({}, function(err){
                if(err) {
                    console.log("Something went wrong while removing all existing comments!!!");
                    console.log(err);
                }
                else {
                    console.log("Successfully removed all existing comments!!!");

                    // add a few CampGrounds
                    data.forEach(function(seed) {
                    Campground.create(seed, function(err, campground) {
                        if(err) {
                            console.log("Something went wrong while creating new Camp Ground!!!");
                            console.log(err);
                        }
                        else {
                            console.log("Successfully inserted new Camp Ground!!!");                
                            console.log(campground);   
                            
                            // create a new Comment
                            Comment.create(
                                {
                                    text: "Sample Comment Text",
                                    author: "Sai"
                                }, 
                                function(err, comment) {
                                    if(err) {
                                        console.log("Something went wrong while creating new Comment!!!");
                                        console.log(err);
                                    }
                                    else {

                                        console.log("Successfully inserted new Comment!!!");                
                                        console.log(comment); 
                                        
                                        Campground.findById(campground._id).populate("comments").exec(function(err, campground) {


                                            if(err) {
                                                console.log("Something went wrong while retrieving Campground by Id!!!");
                                                console.log(err);
                                            }
                                            else {

                                                console.log("Successfullyy retrieved Campground by Id!!!");
                                                console.log(campground);

                                                campground.comments.push(comment._id);
                                                campground.save(function(err){
                                                    if(err) {
                                                        console.log("Something went wrong while adding comment to campground!!!");
                                                        console.log(err);
                                                    }
                                                    else {
                                                        console.log("Successfully added new Comment to campground!!!");

                                                        Campground.find({}).populate("comments").exec(function(err, data) {
                                                            if(err) {
                                                                console.log("Something went wrong while retrieving campground data after associating comments!!!");
                                                                console.log(err);
                                                            }
                                                            else {
                                                                console.log("Successfully retrieved campground data after associating comments!!!");
                                                                // console.log(data);
                                                                data.forEach(function(campground) {
                                                                    console.log(campground)
                                                                });
                                                            }
                                                        });

                                                    }

                                                });
                                            }

                                            
                                        });
                                    }

                                        });

                                        
                                    }
                            });
                    });

                }
            });

            
                }
            });

        

    

    // add a few Comments
}

module.exports = seedDB;

