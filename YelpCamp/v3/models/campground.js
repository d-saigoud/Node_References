//Schema Setup
var mongoose = require("mongoose");

var campgroundSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

var CampGround = mongoose.model("CampGround", campgroundSchema);

module.exports = CampGround;