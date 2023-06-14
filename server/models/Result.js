const mongoose = require('mongoose')

const ResultSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    // },
    result: {
        type: Array,
        default: []
    },
    attempts: {
        type: Number,
        default: 0
    },
    biases :{
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }


});



const ResultModel = mongoose.model("results", ResultSchema)
module.exports = ResultModel;
