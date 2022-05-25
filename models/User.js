const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
 

    username: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: "https://st4.depositphotos.com/1000507/24489/v/450/depositphotos_244890858-stock-illustration-user-profile-picture-isolate-background.jpg"
    },
    password: {
        type: String,
        required: true
    },
    following: {
        type: [{id: {type: String}}],
        default: []
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User