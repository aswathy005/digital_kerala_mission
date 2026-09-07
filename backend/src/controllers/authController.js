const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { sendSuccess, sendError } = require('../utils/apiResponse');

/**
 * Generate JWT token for Admin
 * @param {String} id 
 * @returns {String} token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

/**
 * @desc    Admin Login
 * @route   POST /api/auth/login
 * @access  Public
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find admin by email and explicitly select password
    const admin = await Admin.findOne({ email: email.toLowerCase() }).select('+password');

    if (!admin) {
      return sendError(res, 401, 'Invalid email or password');
    }

    // Compare password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return sendError(res, 401, 'Invalid email or password');
    }

    // Generate token
    const token = generateToken(admin._id);

    return sendSuccess(res, 200, 'Login successful', {
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
