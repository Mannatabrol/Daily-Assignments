const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Routes for users
router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);

module.exports = router;
