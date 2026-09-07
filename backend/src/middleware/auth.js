const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { sendError } = require('../utils/apiResponse');

/**
 * Middleware to protect admin routes via JWT authentication
 */
const protectAdmin = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return sendError(res, 401, 'Unauthorized access: No token provided');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id).select('-password');

    if (!admin) {
      return sendError(res, 401, 'Unauthorized access: Admin account no longer exists');
    }

    req.admin = admin;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return sendError(res, 401, 'Unauthorized access: Token has expired');
    }
    return sendError(res, 401, 'Unauthorized access: Invalid token');
  }
};

module.exports = { protectAdmin };
