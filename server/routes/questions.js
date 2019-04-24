const express = require('express');
const router = express.Router();
const questControl = require('../controllers/question');
const authentic = require('../middlewares/authentication');
const authorize = require('../middlewares/authorizationQuest')

router.get('/', questControl.read);
router.post('/', authentic, questControl.create);
router.get('/:id', questControl.readOne);
router.put('/:id', authentic, authorize, questControl.update);
router.patch('/upvote/:id', authentic, questControl.upVote);
router.patch('/downvote/:id', authentic, questControl.downVote);
router.patch('/comment/:id', authentic, questControl.comment)
router.delete('/:id', authentic, authorize, questControl.delete);

module.exports = router;