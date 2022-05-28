const express = require('express')
const User = require('../models/User')

const router = express.Router()

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
router.get('/', async (req, res) => {
  try {
      res.json(
        await User.find({})
      )
  } catch (error) {
      res.status(400).json(error)
  }
})

// router.post('/signin', async (req, res) => {
//   console.log('get:',req.body)
//   try {
//       res.json(
//         await User.find({usename:req.body.username, password:req.body.password})
//         )
//         console.log('hello')
//   } catch (error) {
//       res.status(400).json(error)
//   }
// })

router.post('/signin', async (req, res) => {
  console.log('get:',req.body)
  try {
      res.json(
        await User.aggregate([{usename:req.body.username, password:req.body.password}])
        )
        console.log('hello')
  } catch (error) {
      res.status(400).json(error)
  }
})

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await User.findByIdAndUpdate(req.params.id, req.body)
    )
  } catch (error) {
    res.status(400).json(error)
  }
})
  

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