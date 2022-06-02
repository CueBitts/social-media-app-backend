const express = require('express')
const User = require('../models/User')

const router = express.Router()

//create a user
router.post('/', async (req, res) => {
  console.log('post:', req.body)
  try {
    res.json(
      await User.create(req.body)
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

//show a user
router.get('/', async (req, res) => {
  try {
      res.json(
        await User.find({})
      )
  } catch (error) {
      res.status(400).json(error)
  }
})

//sign in 
router.post('/signin', async (req, res) => {
  try {
    res.json(
      await User.findOne({username: req.body.username, password: req.body.password})
    )
  } catch(error) {
      res.status(400).json(error)
  }
})

//update a user
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await User.findByIdAndUpdate(req.params.id, req.body)
    )
  } catch (error) {
    res.status(400).json(error)
  }
})
  
//delete user
router.delete("/:id", async (req, res) => {
  try {
    res.json(
      await User.findByIdAndRemove(req.params.id)
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router