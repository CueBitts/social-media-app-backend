const express = require('express')
const Post = require('../models/Post')

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const posts = (await Post.find({}))
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/', async (req, res) => {
    try {
      res.json(await Post.create(req.body));
    } catch (error) {
      res.status(400).json(error);
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      res.json(
        await Post.findByIdAndUpdate(req.params.id, req.body)
      );
    } catch (error) {
      res.status(400).json(error);
    }
  });
  

  router.delete("/:id", async (req, res) => {
    try {
      res.json(await Post.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  });

module.exports = router