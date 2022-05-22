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
        type: [User],
        required: true
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User