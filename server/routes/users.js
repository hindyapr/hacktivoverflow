const express = require('express');
const router = express.Router();
const userControl = require('../controllers/user');

router.get('/', userControl.read);
router.post('/', userControl.create);
router.post('/login', userControl.login);
router.get('/:id', userControl.readOne);
router.put('/:id', userControl.update);
router.delete('/:id', userControl.delete);



module.exports = router;