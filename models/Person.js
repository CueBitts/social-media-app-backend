const mongoose = require('../db/connection')

const PersonSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: String,
    following: Array
})

const Person = mongoose.model("Person", PersonSchema)

module.exports = Person