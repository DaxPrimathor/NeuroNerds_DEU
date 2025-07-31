
const express = require('express');
const Post = require('../models/Post');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Create a post or comment
router.post('/', authMiddleware, async (req, res) => {
  const { content, media, parentId } = req.body;
  try {
    const post = new Post({
      userId: req.user.userId,
      content,
      media,
      parentId
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all posts (including comments)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('userId', 'username').lean();
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;