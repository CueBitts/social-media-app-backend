const mongoose = require('../db/connection')

const commentSchema = new mongoose.Schema({
    // username: Object,
    // user: Object,
    // text: String

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment