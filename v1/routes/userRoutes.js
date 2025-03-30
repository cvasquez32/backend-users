const express = require('express');
const router = express.Router();
const userContoller = require('../../controllers/userController');

router.get('/', userContoller.getAllUsers);

router.get('/:id', userContoller.getMovieById);

module.exports = router;