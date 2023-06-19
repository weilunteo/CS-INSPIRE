const express = require('express');
const {getUser, getUserFriends, addRemoveFriend} = require('../controllers/users.js');
const verifyToken = require('../middleware/auth.js');
const router = express.Router();

/* read */
router.get('/:id', getUser);
router.get('/:id/friends', getUserFriends);

/* update -- patch */
router.patch('/:id/:friendId', addRemoveFriend);

module.exports = router;
