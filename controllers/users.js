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
  console.log('get:',req.body)
  try {
    const {username, password} =req.body;
    if (!username || !password){
      return res.status(400).json({error: 'Please try again'})
    }
    const theLogin = await User.findOne({username: username, password:password})
    console.log(theLogin)
    if (!theLogin){
      res.status(400).json({error: "user sign in error"});
    } else {

      res.json({message: 'Sign in successful'});
      // await (res.redirect('/'))
    }
      // res.json(
      //   await User.find({usename:req.body.username, password:req.body.password})
      //   )
      //   console.log('hello')
  } catch (error) {
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