const express = require('express');
const router = express.Router();
const answerControl = require('../controllers/answer');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorizationAnsw')

router.get('/', answerControl.read);
router.post('/', auth, answerControl.create);
router.get('/:id', answerControl.readOne);
router.put('/:id', auth, authorize, answerControl.update);
router.patch('/upvote/:id', auth, answerControl.upVote);
router.patch('/downvote/:id', auth, answerControl.downVote);
router.patch('/comment/:id', auth, answerControl.comment)
router.delete('/:id', auth, authorize, answerControl.delete);

module.exports = router;