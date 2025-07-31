
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  media: { type: String }, // URL to image/video for robotic project showcases
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }, // For comments (leaf nodes)
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);