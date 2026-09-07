const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const { validateLogin } = require('../validators/authValidator');
const validate = require('../middleware/validate');
const { authLimiter } = require('../middleware/rateLimiter');

// @route   POST /api/auth/login
router.post('/login', authLimiter, validateLogin, validate, login);

module.exports = router;
