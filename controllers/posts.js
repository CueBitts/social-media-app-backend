const express = require('express')
const Post = require('../models/Post')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    res.json(
      await Post.create(req.body)
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get('/', async (req, res) => {
  try {
    res.json(
      await Post.find({})
    )
  } catch (error) {
      res.status(400).json(error)
  }
})

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Post.findByIdAndUpdate(req.params.id, req.body)
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post('/like/:id', async (req, res) => {
  console.log('like firing!')

  try {
    res.json(
      await Post.findByIdAndUpdate(req.params.id, {$push: {likes: req.body}})
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post('/unlike/:id', async (req, res) => {
  console.log('unlike firing!')
  
  try {
    res.json(
      await Post.findByIdAndUpdate(req.params.id, {$pull: {likes: req.body}})
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post('/new-comment/:id', async (req, res) => {
  console.log('post firing!')
  
  try {
    res.json(
      await Post.findByIdAndUpdate(req.params.id, {$push: {comments: req.body}})
    )
  } catch (error) {
    res.status(400).json(error)
  }
})
  
router.delete("/:id", async (req, res) => {
  try {
    res.json(
      await Post.findByIdAndRemove(req.params.id)
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router