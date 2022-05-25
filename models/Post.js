const mongoose = require('../db/connection')

const postSchema = new mongoose.Schema({

    userId: {
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
        required: true,
        default: 0
    },
    comments: {
        type: [
            {
                userId: {
                    type: String,
                    required: true
                },
                text: {
                    type: String,
                    required: true
                }
            }],
        required: true,
        default: []
    }
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post