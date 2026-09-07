const { body } = require('express-validator');

const validateCreateContactMessage = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .escape(),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('phone')
    .optional()
    .trim(),
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .escape(),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .escape(),
];

const validateUpdateMessageStatus = [
  body('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['New', 'Read', 'Replied', 'Archived'])
    .withMessage('Invalid status value. Allowed: New, Read, Replied, Archived'),
];

module.exports = {
  validateCreateContactMessage,
  validateUpdateMessageStatus,
};
