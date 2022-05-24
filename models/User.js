const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    // username: { 
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    // profilePic: String,
    // following: Array

    username: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    following: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        required: true
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User