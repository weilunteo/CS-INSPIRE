const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
   lastName:{
        type: String,
        required: true
    },
    location: String,
    description: String,
    picturePath: String,
    likes:{
        type: Map,
        of: Boolean,
    },
    comments:{
        type: Array,
        default: []
    }

},
{ timestamps: true }
);

const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;