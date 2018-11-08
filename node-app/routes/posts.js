const {Post, validate} = require('../models/post'); 
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.find().sort('name');
  res.send(posts);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const post = new Post({ 
    title: req.body.title,
    content: req.body.content
  });
  await post.save();
  
  res.send(post);
});

module.exports = router