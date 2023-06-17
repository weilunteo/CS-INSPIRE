const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName:{
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password:{
        type: String,
        required: true,
        min: 5 
    },
    friends:{
        type: Array,
        default: []
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number
},
{ timestamps: true }
);

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});


const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;