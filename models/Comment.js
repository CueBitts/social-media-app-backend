const mongoose = require('../db/connection')

const CommentSchema = new mongoose.Schema({
    username: Object,
    user: Object,
    text: String
})

const Comment = mongoose.model("Comment", CommentSchema)

module.exports = Comment