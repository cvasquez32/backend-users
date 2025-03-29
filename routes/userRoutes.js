const express = require('express');
const router = express.Router();
const userContoller = require('../../controllers/userController');

router.get('/', userContoller.getAllUsers);

module.exports = router;