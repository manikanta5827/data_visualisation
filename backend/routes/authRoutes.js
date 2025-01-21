const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController.js')
const authMiddleware = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', authMiddleware, logoutUser);


module.exports = router;
