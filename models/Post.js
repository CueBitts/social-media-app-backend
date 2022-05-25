const mongoose = require('../db/connection')
const User = require('./User')

const postSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true
    },
    time: {
        type: String,
        default: Date
    },
    text: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: [
            {
                text: {
                    type: String,
                    required: true
                },
    
                comment_id: {
                    type: String,
                    required: true
                }
            }],
        default: []
    }


})

const Post = mongoose.model("Post", postSchema)

module.exports = Post