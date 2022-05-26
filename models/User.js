const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
 
    username: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true,
        default: "https://st4.depositphotos.com/1000507/24489/v/450/depositphotos_244890858-stock-illustration-user-profile-picture-isolate-background.jpg"
    },
    password: {
        type: String,
        required: true
    },
    following: {
        type: [
            {
                userId: {
                    type: String,
                    required: true
                }}],
        required: true,
        default: []
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User