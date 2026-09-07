const { body } = require('express-validator');

const validateCreateEnquiry = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .escape(),
  body('businessName')
    .trim()
    .notEmpty()
    .withMessage('Business name is required')
    .escape(),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('district')
    .trim()
    .notEmpty()
    .withMessage('District is required')
    .escape(),
  body('businessCategory')
    .trim()
    .notEmpty()
    .withMessage('Business category is required')
    .escape(),
  body('currentDigitalPresence')
    .optional()
    .trim()
    .escape(),
  body('mainChallenge')
    .optional()
    .trim()
    .escape(),
  body('preferredContactTime')
    .optional()
    .trim()
    .escape(),
];

const validateUpdateEnquiryStatus = [
  body('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['New', 'Contacted', 'Qualified', 'Converted', 'Closed'])
    .withMessage('Invalid status value. Allowed: New, Contacted, Qualified, Converted, Closed'),
];

module.exports = {
  validateCreateEnquiry,
  validateUpdateEnquiryStatus,
};
