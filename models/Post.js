const mongoose = require('../db/connection')

const postSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
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
        type: [{
            userId: {
                type: String,
                required: true
            }
        }],
        required: true,
        default: []
    },
    comments: {
        type: [{
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
   
},  {
    timestamps: true
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post