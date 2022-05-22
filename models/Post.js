const mongoose = require('../db/connection')
const User = require('./User')

const postSchema = new mongoose.Schema({
    // username: { 
    //     type: Object,
    //     required: true
    // },
    // time: String,
    // text: String,
    // image: String,
    // likes: Number,
    // following: Array[Object]

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        required: true
    },
    comments: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
        required: true
    }

})

const Post = mongoose.model("Post", postSchema)

module.exports = Post