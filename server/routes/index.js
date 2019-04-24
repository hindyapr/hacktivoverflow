const express = require('express');
const router = express.Router();
const users = require('./users');
const questions = require('./questions');
const answers = require('./answers');

router.use('/users', users);
router.use('/questions', questions);
router.use('/answers', answers);
router.get('/', (req, res) => {
    res.json({ message: "masuk" })
})



module.exports = router;