const mongoose = require('../db/connection')

const PostSchema = new mongoose.Schema({
    username: { 
        type: Object,
        required: true
    },
    time: String,
    text: String,
    image: String,
    likes: Number,
    following: Array[Object]
})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post