const express = require('express');
const {getFeedPosts, getUserPosts, likePost} = require('../controllers/posts.js');
const verifyToken = require('../middleware/auth.js');

const router = express.Router();

/* read */
router.get("/",  getFeedPosts);
router.get("/:userId/posts",getUserPosts);

/* update */
router.patch("/:id/like", likePost);

module.exports = router;